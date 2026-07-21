"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flag, Lightbulb, Code, Trophy } from "lucide-react";

import { PAST_EVENTS_DATA, UPCOMING_EVENTS_DATA } from "@/data/events";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const getEventIcon = (category: string) => {
  const cat = category.toLowerCase();
  if (cat.includes("hackathon") || cat.includes("ideathon")) return Trophy;
  if (cat.includes("workshop") || cat.includes("bootcamp")) return Code;
  if (cat.includes("seminar")) return Lightbulb;
  return Flag;
};

const MONTHS: Record<string, number> = {
  jan: 0, january: 0, feb: 1, february: 1, mar: 2, march: 2,
  apr: 3, april: 3, may: 4, jun: 5, june: 5,
  jul: 6, july: 6, aug: 7, august: 7, sep: 8, sept: 8, september: 8,
  oct: 9, october: 9, nov: 10, november: 10, dec: 11, december: 11,
};

function parseEventDate(dateStr: string): number {
  const lower = dateStr.toLowerCase().trim();
  const yearMatch = lower.match(/\d{4}/);
  const year = yearMatch ? parseInt(yearMatch[0]) : 2026;
  for (const [key, monthIdx] of Object.entries(MONTHS)) {
    if (lower.includes(key)) return new Date(year, monthIdx).getTime();
  }
  const fallback = new Date(lower).getTime();
  return isNaN(fallback) ? 0 : fallback;
}

const TIMELINE_DATA = [
  ...PAST_EVENTS_DATA.map((e) => ({
    date: e.date,
    heading: e.title,
    text: e.description,
    icon: getEventIcon(e.tag || e.category),
  })),
  ...UPCOMING_EVENTS_DATA.map((e) => ({
    date: e.date,
    heading: e.title,
    text: e.description,
    icon: getEventIcon(e.category),
  })),
].sort((a, b) => parseEventDate(a.date) - parseEventDate(b.date));

export default function Timeline() {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const progressBar = progressBarRef.current;
      const container = containerRef.current;
      if (!progressBar || !container) return;

      gsap.fromTo(
        progressBar,
        { height: "0%" },
        {
          height: "100%",
          scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.3,
          },
        }
      );

      itemRefs.current.forEach((item) => {
        if (!item) return;

        gsap.fromTo(
          item,
          { opacity: 0, x: item.classList.contains("left") ? -40 : 40 },
          {
            opacity: 1,
            x: 0,
            duration: 0.6,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none none",
            },
            onComplete: () => item.classList.add("active"),
          }
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="section-padding timeline-section" id="timeline">
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-subtitle">Milestones & History</span>
          <h2 className="section-title">Evolution Journey</h2>
        </div>

        <div className="timeline-wrapper" ref={containerRef}>
          <div className="timeline-progress-track">
            <div ref={progressBarRef} className="timeline-progress-bar" id="timeline-scroll-progress" />
          </div>

          <div className="timeline-items">
            {TIMELINE_DATA.map((item, idx) => {
              const Icon = item.icon;
              const sideClass = idx % 2 === 0 ? "left" : "right";

              return (
                <div
                  key={idx}
                  ref={(el) => { itemRefs.current[idx] = el; }}
                  className={`timeline-item ${sideClass}`}
                >
                  <div className="timeline-circle">
                    <Icon size={18} />
                  </div>
                  <div className="timeline-box glass-card">
                    <div className="spotlight" />
                    <div className="card-border-glow" />
                    <span className="timeline-date">{item.date}</span>
                    <h4 className="timeline-heading">{item.heading}</h4>
                    <p className="timeline-text">{item.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
