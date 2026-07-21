"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Flag, Lightbulb, Code, Trophy } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const TIMELINE_DATA = [
  {
    date: "Dec 2024",
    heading: "Nexus Foundation",
    text: "Department forum initialized with 15 core committee members, establishing isolated Technical and Non-Technical operational wings.",
    icon: Flag,
  },
  {
    date: "Feb 2025",
    heading: "Ideathon Conclave",
    text: "Launched first campus-wide challenge, generating 40+ prototype blueprints targeting clean energy and civic tech.",
    icon: Lightbulb,
  },
  {
    date: "May 2025",
    heading: "AI & Design Workshops",
    text: "Conducted masterclasses on Next.js structures, Figma UI designs, and REST API systems for department students.",
    icon: Code,
  },
  {
    date: "Sept 2025",
    heading: "National Hackfest",
    text: "Hosted the national level hackathon conclave, welcoming external mentors, judges, and corporate sponsorships.",
    icon: Trophy,
  },
  {
    date: "Jul 25, 2026",
    heading: "Forum Installation Ceremony",
    text: "Official installation of Auron's new forum body — marking the start of a fresh leadership term and renewed community vision.",
    icon: Flag,
  },
  {
    date: "Aug 29, 2026",
    heading: "Intra-College Hackathon",
    text: "An internal hackathon challenging teams within the college to build innovative projects under time constraints.",
    icon: Code,
  },
  {
    date: "Sept 1, 2026",
    heading: "Career Guidance Seminar",
    text: "Industry professionals share insights on career pathways, resume building, interview strategies, and emerging job markets.",
    icon: Lightbulb,
  },
  {
    date: "Oct 7, 2026",
    heading: "Inter-College Hackathon",
    text: "A competitive inter-college hackathon bringing together teams from multiple institutions to innovate and compete.",
    icon: Trophy,
  },
];

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
