"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Users, Calendar, GraduationCap, Cpu, Award } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STATS_DATA = [
  { id: "members", label: "Active Members", target: 500, icon: Users },
  { id: "events", label: "Annual Events", target: 24, icon: Calendar },
  { id: "workshops", label: "Workshops & Bootcamps", target: 15, icon: GraduationCap },
  { id: "hackathons", label: "Hackathons Completed", target: 12, icon: Cpu },
  { id: "achievements", label: "Achievements & Wins", target: 30, icon: Award },
];

export default function Stats() {
  const numberRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const tweens: gsap.core.Tween[] = [];
    numberRefs.current.forEach((el) => {
      if (!el) return;
      const target = parseInt(el.getAttribute("data-target") || "0");
      const obj = { val: 0 };

      const tween = gsap.to(obj, {
        val: target,
        duration: 2.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        onUpdate: () => {
          if (el) el.innerText = String(Math.round(obj.val));
        },
      });
      tweens.push(tween);
    });

    return () => {
      tweens.forEach(t => {
        if (t.scrollTrigger) t.scrollTrigger.kill();
        t.kill();
      });
    };
  }, []);

  return (
    <section className="section-padding stats-section" id="stats">
      <div className="container">
        <div className="stats-grid">
          {STATS_DATA.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={stat.id} 
                className="stat-card glass-card reveal-element" 
                style={{ transitionDelay: `${idx * 0.1}s` }}
              >
                <div className="stat-icon">
                  <Icon size={22} />
                </div>
                <div className="stat-number-wrapper">
                  <span
                    ref={(el) => {
                      numberRefs.current[idx] = el;
                    }}
                    className="stat-number"
                    data-target={stat.target}
                  >
                    0
                  </span>
                  <span className="stat-suffix">+</span>
                </div>
                <div className="stat-label">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
