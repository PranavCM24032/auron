"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";


export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let particlesArray: Particle[] = [];
    const mouse = { x: null as number | null, y: null as number | null, radius: 150 };

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      initParticles();
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = event.clientX - rect.left;
      mouse.y = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    const heroSection = document.getElementById("hero");
    if (heroSection) {
      heroSection.addEventListener("mousemove", handleMouseMove);
      heroSection.addEventListener("mouseleave", handleMouseLeave);
    }

    class Particle {
      x: number;
      y: number;
      directionX: number;
      directionY: number;
      size: number;
      color: string;

      constructor(x: number, y: number, dX: number, dY: number, size: number, color: string) {
        this.x = x;
        this.y = y;
        this.directionX = dX;
        this.directionY = dY;
        this.size = size;
        this.color = color;
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        if (!canvas) return;
        if (this.x > canvas.width || this.x < 0) this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0) this.directionY = -this.directionY;

        // Mouse repulsion physics
        if (mouse.x !== null && mouse.y !== null) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const force = (mouse.radius - distance) / mouse.radius;
            const forceX = (dx / distance) * force * 15;
            const forceY = (dy / distance) * force * 15;
            this.x -= forceX;
            this.y -= forceY;
          }
        }

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const initParticles = () => {
      particlesArray = [];
      const n = Math.min(Math.max(Math.floor((canvas.width * canvas.height) / 11000), 40), 130);
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      const color = isLight ? "rgba(7, 30, 67, 0.22)" : "rgba(13, 71, 161, 0.28)";

      for (let i = 0; i < n; i++) {
        const size = Math.random() * 2 + 1.2;
        particlesArray.push(
          new Particle(
            Math.random() * (canvas.width - size * 2) + size,
            Math.random() * (canvas.height - size * 2) + size,
            Math.random() * 0.4 - 0.2,
            Math.random() * 0.4 - 0.2,
            size,
            color
          )
        );
      }
    };

    const connectParticles = () => {
      const isLight = document.documentElement.getAttribute("data-theme") === "light";
      for (let a = 0; a < particlesArray.length; a++) {
        for (let b = a; b < particlesArray.length; b++) {
          const dx = particlesArray[a].x - particlesArray[b].x;
          const dy = particlesArray[a].y - particlesArray[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < 130) {
            const op = 1 - distance / 130;
            ctx.strokeStyle = isLight
              ? `rgba(7, 30, 67, ${op * 0.1})`
              : `rgba(13, 71, 161, ${op * 0.14})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
            ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
            ctx.stroke();
          }
        }
      }
    };

    let frameId: number;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesArray.forEach((p) => p.update());
      connectParticles();
      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();
    animate();

    // Theme toggle observer to refresh colors
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((m) => {
        if (m.attributeName === "data-theme") initParticles();
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frameId);
      observer.disconnect();
      if (heroSection) {
        heroSection.removeEventListener("mousemove", handleMouseMove);
        heroSection.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);

  return (
    <section className="hero" id="hero">
      <div className="hero-grid-overlay" />
      <div className="hero-beam beam-1" />
      <div className="hero-beam beam-2" />
      <canvas ref={canvasRef} id="hero-canvas" />

      {/* Floating decorative shapes */}
      <div className="floating-shape shape-1">✦</div>
      <div className="floating-shape shape-2">✦</div>
      <div className="floating-shape shape-3">◇</div>

      <div className="container hero-content">
        <div className="hero-logo-container reveal-element">
          <Image src="/logo.jpg" alt="AURON Logo" width={150} height={150} priority />
        </div>
        <span className="hero-subtitle reveal-element delay-100">Technical & Non-Technical Wings</span>
        <h1 className="hero-title reveal-element delay-200">
          AURON <span className="text-gold-gradient">FORUM</span>
        </h1>
        <p className="hero-desc reveal-element delay-300">
          Empowering student engineering minds, developers, managers, and creative operators through technical hackathons, coding contests, management challenges, and design sprints.
        </p>
        <div className="hero-ctas reveal-element delay-400">
          <Link href="/committee" className="cta-button magnetic-element">Meet the Committee</Link>
          <Link href="/events" className="secondary-button magnetic-element">Explore Events</Link>
        </div>
      </div>

    </section>
  );
}
