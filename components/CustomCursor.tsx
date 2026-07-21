"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const follower = followerRef.current;
    if (!cursor || !follower) return;

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursor.style.left = mouseX + 'px';
      cursor.style.top = mouseY + 'px';
    };

    window.addEventListener("mousemove", onMouseMove);

    // Follower smooth tracking (lerp)
    let frameId: number;
    const tickFollower = () => {
      followerX += (mouseX - followerX) * 0.15;
      followerY += (mouseY - followerY) * 0.15;
      follower.style.left = followerX + 'px';
      follower.style.top = followerY + 'px';
      frameId = requestAnimationFrame(tickFollower);
    };
    tickFollower();

    // Hover scale effects on interactive elements
    const onMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .filter-btn, .wing-filter-btn, .bearer-card, .event-card, .glass-card, .testimonial-indicator, .faq-question, .test-nav-btn, .lightbox-arrow, .lightbox-close')) {
        cursor.classList.add('cursor-hover');
        follower.classList.add('cursor-follower-hover');
      }
    };

    const onMouseOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('a, button, .filter-btn, .wing-filter-btn, .bearer-card, .event-card, .glass-card, .testimonial-indicator, .faq-question, .test-nav-btn, .lightbox-arrow, .lightbox-close')) {
        cursor.classList.remove('cursor-hover');
        follower.classList.remove('cursor-follower-hover');
      }
    };

    const onMouseDown = () => {
      cursor.classList.add('cursor-click');
      follower.classList.add('cursor-follower-click');
    };

    const onMouseUp = () => {
      cursor.classList.remove('cursor-click');
      follower.classList.remove('cursor-follower-click');
    };

    document.addEventListener("mouseover", onMouseOver);
    document.addEventListener("mouseout", onMouseOut);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);

    // Magnetic elements pull logic
    const magneticElements = document.querySelectorAll('.magnetic-element');
    const magneticCleanups: (() => void)[] = [];

    magneticElements.forEach((el) => {
      const htmlEl = el as HTMLElement;
      const onMove = (e: MouseEvent) => {
        const rect = htmlEl.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        gsap.to(htmlEl, { x: x * 0.35, y: y * 0.35, duration: 0.3, ease: "power2.out" });
      };

      const onLeave = () => {
        gsap.to(htmlEl, { x: 0, y: 0, duration: 0.5, ease: "elastic.out(1, 0.3)" });
      };

      htmlEl.addEventListener("mousemove", onMove);
      htmlEl.addEventListener("mouseleave", onLeave);
      
      magneticCleanups.push(() => {
        htmlEl.removeEventListener("mousemove", onMove);
        htmlEl.removeEventListener("mouseleave", onLeave);
      });
    });

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
      document.removeEventListener("mouseover", onMouseOver);
      document.removeEventListener("mouseout", onMouseOut);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      magneticCleanups.forEach(cleanup => cleanup());
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="custom-cursor" id="custom-cursor" />
      <div ref={followerRef} className="custom-cursor-follower" id="custom-cursor-follower" />
    </>
  );
}
