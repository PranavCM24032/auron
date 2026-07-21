"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

interface LoaderProps {
  onComplete: () => void;
}

export default function Loader({ onComplete }: LoaderProps) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const progress = { val: 0 };
    const tween = gsap.to(progress, {
      val: 100,
      duration: 1.2,
      ease: "power2.out",
      onUpdate: () => {
        setPercent(Math.round(progress.val));
      },
      onComplete: () => {
        gsap.to("#loader", {
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut",
          onComplete: onComplete,
        });
      },
    });

    return () => {
      tween.kill();
    };
  }, [onComplete]);

  return (
    <div className="loader-wrapper" id="loader">
      <div className="loader-content">
        <div className="loader-logo">
          <svg viewBox="0 0 100 100" className="loader-svg">
            <circle 
              cx="50" 
              cy="50" 
              r="45" 
              fill="none" 
              stroke="url(#goldGradient)" 
              strokeWidth="4" 
              className="loader-circle" 
            />
            <path 
              d="M50 20 L25 75 H38 L50 50 L62 75 H75 Z" 
              fill="none" 
              stroke="url(#goldGradient)" 
              strokeWidth="3" 
              className="loader-path" 
            />
            <defs>
              <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#0d47a1" />
                <stop offset="25%" stopColor="#1565c0" />
                <stop offset="50%" stopColor="#1976d2" />
                <stop offset="75%" stopColor="#1e88e5" />
                <stop offset="100%" stopColor="#0d47a1" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="loader-brand">AURON</div>
        <div className="loader-subtitle">INNOVATION & INTELLIGENCE FORUM</div>
        <div className="loader-progress-container">
          <div 
            className="loader-progress-bar" 
            id="loader-progress" 
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="loader-percentage" id="loader-percent">{percent}%</div>
      </div>
    </div>
  );
}
