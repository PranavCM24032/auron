"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { UPCOMING_EVENTS_DATA } from "@/data/events";
import { Calendar, MapPin } from "lucide-react";

export default function Events() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  const featuredEvent = UPCOMING_EVENTS_DATA[0];
  const otherEvents = UPCOMING_EVENTS_DATA.slice(1);

  useEffect(() => {
    const targetDate = new Date("July 25, 2026 00:00:00").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

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
    e.currentTarget.style.transform = "rotateX(0deg) rotateY(0deg) translateY(0px)";
  };

  return (
    <section className="section-padding events-showcase-section" id="events-showcase">
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-subtitle">Showcase & Nexus</span>
          <h2 className="section-title">Forum Events</h2>
        </div>

        {/* Featured Showcase */}
        <div className="featured-event-container reveal-element">
          <div className="featured-event-card glass-card">
            <div className="spotlight" />
            <div className="card-border-glow" />

            <div className="featured-event-img" style={{ background: "var(--bg-secondary)" }}>
              <Image
                src={featuredEvent.image}
                alt={featuredEvent.title}
                fill
                className="object-contain p-8 transition-transform duration-700"
                sizes="(max-width: 992px) 100vw, 50vw"
                priority
              />
              <span className="featured-tag">FEATURED EVENT</span>
            </div>

            <div className="featured-event-details">
              <span className={`featured-wing-label ${featuredEvent.wing}`}>
                {featuredEvent.wing === "technical" ? "TECHNICAL WING" : "NON-TECHNICAL WING"}
              </span>
              <h3 className="featured-title-text">{featuredEvent.title}</h3>
              <p className="featured-desc-text">{featuredEvent.description}</p>

              <div className="countdown-container">
                <div className="countdown-box">
                  <span className="countdown-num">{timeLeft.days}</span>
                  <span className="countdown-lbl">Days</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-num">{timeLeft.hours}</span>
                  <span className="countdown-lbl">Hrs</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-num">{timeLeft.minutes}</span>
                  <span className="countdown-lbl">Mins</span>
                </div>
                <div className="countdown-box">
                  <span className="countdown-num">{timeLeft.seconds}</span>
                  <span className="countdown-lbl">Secs</span>
                </div>
              </div>

              <div className="featured-footer">
                <div className="featured-meta">
                  <div className="featured-meta-item">
                    <Calendar size={16} />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="featured-meta-item">
                    <MapPin size={16} />
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Other Upcoming Events */}
        <div className="upcoming-events-slider reveal-element">
          <h4 className="upcoming-subtitle">Upcoming Events</h4>

          <div className="events-slider-container">
            <div className="events-grid">
              {otherEvents.map((event) => (
                <div
                  key={event.id}
                  className="event-card glass-card"
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="spotlight" />
                  <div className="card-border-glow" />

                  <div className="event-img-box">
                    <Image
                      src={event.image}
                      alt={event.title}
                      fill
                      className="object-cover transition-transform duration-700"
                      sizes="(max-width: 576px) 100vw, (max-width: 992px) 50vw, 33vw"
                    />
                    <span className="event-overlay-badge">{event.category}</span>
                    <span className={`event-wing-badge ${event.wing}`}>
                      {event.wing === "technical" ? "TECH" : "OPS"}
                    </span>
                  </div>

                  <div className="event-info">
                    <div className="event-meta">
                      <div className="event-meta-item">
                        <Calendar size={14} />
                        <span>{event.date}</span>
                      </div>
                      <div className="event-meta-item">
                        <MapPin size={14} />
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <h5 className="event-card-title">{event.title}</h5>
                    <p className="event-card-desc">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
