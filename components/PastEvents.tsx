"use client";

import { useState } from "react";
import { PAST_EVENTS_DATA } from "@/data/events";
import Image from "next/image";

interface PastEventsProps {
  onImageClick: (index: number, imagesArray: { src: string; title: string }[]) => void;
}

export default function PastEvents({ onImageClick }: PastEventsProps) {
  const [categoryFilter, setCategoryFilter] = useState<'all' | 'hackathons' | 'workshops' | 'seminars'>('all');
  const [wingFilter, setWingFilter] = useState<'all' | 'technical' | 'non-technical'>('all');

  // Filter logic
  const filteredEvents = PAST_EVENTS_DATA.filter((event) => {
    const matchesCategory = categoryFilter === 'all' || event.category === categoryFilter;
    const matchesWing = wingFilter === 'all' || event.wing === wingFilter;
    return matchesCategory && matchesWing;
  });

  // Prepare active filtered images array for lightbox indexing
  const activeImages = filteredEvents.map(event => ({
    src: event.image,
    title: event.title
  }));

  const handleCardClick = (index: number) => {
    onImageClick(index, activeImages);
  };

  // Card hover spotlight tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = -((y - rect.height / 2) / rect.height) * 8;
    const rotateY = ((x - rect.width / 2) / rect.width) * 8;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    card.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section className="section-padding past-events" id="past-events">
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-subtitle">Retrospective & Vault</span>
          <h2 className="section-title">Past Events Gallery</h2>
        </div>

        {/* Filters */}
        <div className="gallery-filters reveal-element">
          {/* Category Filters */}
          <button
            className={`filter-btn ${categoryFilter === 'all' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('all')}
          >
            All Categories
          </button>
          <button
            className={`filter-btn ${categoryFilter === 'hackathons' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('hackathons')}
          >
            Hackathons
          </button>
          <button
            className={`filter-btn ${categoryFilter === 'workshops' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('workshops')}
          >
            Workshops
          </button>
          <button
            className={`filter-btn ${categoryFilter === 'seminars' ? 'active' : ''}`}
            onClick={() => setCategoryFilter('seminars')}
          >
            Seminars
          </button>
        </div>

        <div className="gallery-filters reveal-element" style={{ marginTop: "-20px", marginBottom: "45px" }}>
          {/* Wing Filters */}
          <button
            className={`wing-filter-btn ${wingFilter === 'all' ? 'active' : ''}`}
            onClick={() => setWingFilter('all')}
          >
            All Wings
          </button>
          <button
            className={`wing-filter-btn ${wingFilter === 'technical' ? 'active' : ''}`}
            onClick={() => setWingFilter('technical')}
          >
            Technical
          </button>
          <button
            className={`wing-filter-btn ${wingFilter === 'non-technical' ? 'active' : ''}`}
            onClick={() => setWingFilter('non-technical')}
          >
            Non-Technical
          </button>
        </div>

        {/* Gallery Grid - Uses standard img tag to preserve natural masonry dynamic heights */}
        <div className="gallery-grid reveal-element" id="gallery-container">
          {filteredEvents.map((event, idx) => (
            <div
              key={event.id}
              className="event-card glass-card cursor-zoom-in"
              style={{ cursor: "zoom-in" }}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              onClick={() => handleCardClick(idx)}
            >
              <div className="spotlight" />
              <div className="card-border-glow" />

              <div className="event-img-box" style={{ height: "auto", minHeight: "180px", position: "relative" }}>
                <Image
                  src={event.image}
                  alt={event.title}
                  width={400}
                  height={300}
                  className="w-full object-cover transition-transform duration-700 block"
                  style={{ height: "auto" }}
                />
                <span className="event-overlay-badge">{event.tag}</span>
                <span className={`event-wing-badge ${event.wing}`}>
                  {event.wing === "technical" ? "TECH" : "OPS"}
                </span>
              </div>

              <div className="event-info">
                <span className="event-meta" style={{ fontSize: "0.75rem", marginBottom: "6px" }}>{event.date}</span>
                <h5 className="event-card-title" style={{ fontSize: "1.1rem", marginBottom: "6px" }}>{event.title}</h5>
                <p className="event-card-desc" style={{ fontSize: "0.85rem", marginBottom: "0" }}>{event.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
