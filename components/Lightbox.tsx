"use client";

import { useEffect, useState, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import gsap from "gsap";
import Image from "next/image";

interface LightboxProps {
  isOpen: boolean;
  onClose: () => void;
  initialIndex: number;
  images: { src: string; title: string }[];
}

export default function Lightbox({ isOpen, onClose, initialIndex, images }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const animateImageTransition = () => {
    gsap.fromTo(
      "#lightbox-img",
      { opacity: 0.3, scale: 0.96 },
      { opacity: 1, scale: 1, duration: 0.3 }
    );
  };

  const handlePrev = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    animateImageTransition();
  }, [images.length]);

  const handleNext = useCallback((e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
    animateImageTransition();
  }, [images.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, handlePrev, handleNext]);

  if (!isOpen || images.length === 0) return null;

  const activeImage = images[currentIndex] || images[0];

  return (
    <div 
      className="lightbox-overlay active" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <button className="lightbox-close" onClick={onClose} aria-label="Close Lightbox">
        <X size={20} />
      </button>

      <button className="lightbox-arrow prev" onClick={handlePrev} aria-label="Previous Image">
        <ChevronLeft size={20} />
      </button>

      <button className="lightbox-arrow next" onClick={handleNext} aria-label="Next Image">
        <ChevronRight size={20} />
      </button>

      <div className="lightbox-content">
        <Image 
          id="lightbox-img"
          src={activeImage.src} 
          alt={activeImage.title}
          width={1200}
          height={800}
          className="max-w-full max-h-full object-contain"
          unoptimized
        />
        <div className="lightbox-caption">{activeImage.title}</div>
      </div>
    </div>
  );
}
