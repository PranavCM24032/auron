"use client";

import { useEffect, useState } from "react";
import CustomCursor from "./CustomCursor";
import EventModal from "./EventModal";
import Lightbox from "./Lightbox";

export default function GlobalModals() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeEventName, setActiveEventName] = useState("");

  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxImages, setLightboxImages] = useState<{ src: string; title: string }[]>([]);

  useEffect(() => {
    const handleOpenModal = (e: Event) => {
      const customEvent = e as CustomEvent<{ eventName: string }>;
      setActiveEventName(customEvent.detail?.eventName || "Nexus Registration");
      setModalOpen(true);
    };

    const handleOpenLightbox = (e: Event) => {
      const customEvent = e as CustomEvent<{ index: number; images: { src: string; title: string }[] }>;
      if (customEvent.detail) {
        setLightboxImages(customEvent.detail.images);
        setLightboxIndex(customEvent.detail.index);
        setLightboxOpen(true);
      }
    };

    window.addEventListener("open-register-modal", handleOpenModal);
    window.addEventListener("open-lightbox", handleOpenLightbox);

    return () => {
      window.removeEventListener("open-register-modal", handleOpenModal);
      window.removeEventListener("open-lightbox", handleOpenLightbox);
    };
  }, []);

  // Control scrolling with Lenis or standard overflow
  useEffect(() => {
    const win = window as unknown as { lenisInstance?: { stop: () => void; start: () => void } };
    const lenis = win.lenisInstance;
    if (modalOpen || lightboxOpen) {
      if (lenis) lenis.stop();
      document.body.style.overflow = "hidden";
    } else {
      if (lenis) lenis.start();
      document.body.style.overflow = "";
    }
  }, [modalOpen, lightboxOpen]);

  return (
    <>
      <CustomCursor />
      
      {modalOpen && (
        <EventModal 
          isOpen={modalOpen} 
          onClose={() => setModalOpen(false)} 
          eventName={activeEventName} 
        />
      )}

      <Lightbox 
        isOpen={lightboxOpen} 
        onClose={() => setLightboxOpen(false)} 
        initialIndex={lightboxIndex} 
        images={lightboxImages} 
      />
    </>
  );
}
