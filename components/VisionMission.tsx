"use client";

import { useRef, MouseEvent } from "react";
import { Eye, Target } from "lucide-react";

export default function VisionMission() {
  const visionRef = useRef<HTMLDivElement>(null);
  const missionRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>, ref: typeof visionRef) => {
    const card = ref.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -((y - rect.height / 2) / rect.height) * 12;
    const rotateY = ((x - rect.width / 2) / rect.width) * 12;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (ref: typeof visionRef) => {
    const card = ref.current;
    if (!card) return;
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section className="section-padding vision-section" id="about">
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-subtitle">Our Purpose</span>
          <h2 className="section-title">Vision & Mission</h2>
        </div>

        <div className="vision-mission-grid">
          {/* Vision Card */}
          <div
            ref={visionRef}
            className="vm-card glass-card tilt-card reveal-element delay-100"
            onMouseMove={(e) => handleMouseMove(e, visionRef)}
            onMouseLeave={() => handleMouseLeave(visionRef)}
          >
            <div className="spotlight" />
            <div className="card-border-glow" />
            <div className="vm-icon-box">
              <Eye size={30} />
            </div>
            <h3 className="vm-title">Our Vision</h3>
            <p className="vm-text">
              To establish a world-class technology and management ecosystem that cultivates leadership, stimulates
              lateral thinking, and bridges the gap between academic theories and state-of-the-art industry innovations.
            </p>
            <ul className="vm-list">
              <li>
                <strong>Technical:</strong> Nurturing next-generation software builders, researchers, and open-source
                contributors.
              </li>
              <li>
                <strong>Non-Technical:</strong> Shaping agile managers, corporate liaisons, event coordinators, and design
                artists.
              </li>
              <li>
                <strong>Synergy:</strong> Unifying code development with strategic marketing and execution to build viable
                models.
              </li>
            </ul>
          </div>

          {/* Mission Card */}
          <div
            ref={missionRef}
            className="vm-card glass-card tilt-card reveal-element delay-200"
            onMouseMove={(e) => handleMouseMove(e, missionRef)}
            onMouseLeave={() => handleMouseLeave(missionRef)}
          >
            <div className="spotlight" />
            <div className="card-border-glow" />
            <div className="vm-icon-box">
              <Target size={30} />
            </div>
            <h3 className="vm-title">Our Mission</h3>
            <p className="vm-text">
              Empowering students by providing a rich technical and operational framework filled with project-based
              learnings, national challenges, industrial interactions, and research-oriented bootcamps.
            </p>
            <ul className="vm-list">
              <li>
                <strong>Technical:</strong> Hosting monthly developer sprint cycles, competitive programming, and AI research panels.
              </li>
              <li>
                <strong>Non-Technical:</strong> Organizing business shark-tanks, public speaking debates, operations, and cultural management.
              </li>
              <li>
                <strong>Growth:</strong> Aligning department objectives directly with technology pioneers, business leaders, and alumni.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
