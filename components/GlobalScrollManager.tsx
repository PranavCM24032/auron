"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function GlobalScrollManager() {
  const pathname = usePathname();

  useEffect(() => {
    // Reset scroll to top on route change
    window.scrollTo(0, 0);

    const lenis = new Lenis({
      duration: 0.8,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    const win = window as unknown as { lenisInstance: Lenis | null };
    win.lenisInstance = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const scrollFn = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(scrollFn);
    };
    requestAnimationFrame(scrollFn);

    const elements = gsap.utils.toArray(".reveal-element");
    const tweens: gsap.core.Tween[] = [];

    elements.forEach((el: unknown) => {
      const element = el as HTMLElement;
      gsap.set(element, { y: 20, opacity: 0 });

      const t = gsap.to(
        element,
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
      tweens.push(t);
    });

    // Parallax scrolling decorations
    const glows = gsap.utils.toArray(".gold-glow");
    glows.forEach((glow: unknown) => {
      const glowEl = glow as HTMLElement;
      const t = gsap.to(glowEl, {
        yPercent: -20,
        scrollTrigger: {
          trigger: glowEl,
          scrub: true,
        },
      });
      tweens.push(t);
    });

    return () => {
      lenis.destroy();
      win.lenisInstance = null;
      tweens.forEach((t) => {
        if (t.scrollTrigger) t.scrollTrigger.kill();
        t.kill();
      });
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [pathname]);

  return null;
}
