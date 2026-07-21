"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function InitialLoaderWrapper() {
  const [showLoader, setShowLoader] = useState(false);

  useEffect(() => {
    const hasLoaded = sessionStorage.getItem("auron_session_loaded");
    if (!hasLoaded) {
      const timer = setTimeout(() => setShowLoader(true), 0);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleComplete = () => {
    sessionStorage.setItem("auron_session_loaded", "true");
    setShowLoader(false);
  };

  if (!showLoader) return null;

  return <Loader onComplete={handleComplete} />;
}
