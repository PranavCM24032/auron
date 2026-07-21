"use client";

import PastEvents from "@/components/PastEvents";

export default function GalleryPageClient() {
  const handleImageClick = (index: number, imagesArray: { src: string; title: string }[]) => {
    window.dispatchEvent(
      new CustomEvent("open-lightbox", {
        detail: { index, images: imagesArray },
      })
    );
  };

  return <PastEvents onImageClick={handleImageClick} />;
}
