"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const TESTIMONIALS_DATA = [
  {
    speech: "The technical sprints hosted by Auron were key in helping me clear my startup placement tests. The focus on clean architectures, git pipelines, and unit tests is extremely high quality.",
    author: "Amit Deshmukh",
    role: "Associate Engineer at Cognizant (Batch '24)",
  },
  {
    speech: "BizQuest was my very first time pitching a business product. It taught me how to translate technical ideas into client-facing value, helping me secure operations management offers.",
    author: "Rohan Patel",
    role: "Marketing Lead at Razorpay (Batch '23)",
  },
  {
    speech: "Auron provides an unmatched campus ecosystem. The combination of code development alongside creative UI mockups prepares you to build and ship complete software projects.",
    author: "Shreya Joshi",
    role: "UX Researcher at Flipkart (Batch '24)",
  },
];

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding" id="testimonials">
      <div className="container">
        <div className="section-header reveal-element">
          <span className="section-subtitle">Feedback & Review</span>
          <h2 className="section-title">Forum Testimonials</h2>
        </div>

        <div className="testimonials-carousel-wrapper glass-card reveal-element">
          <div className="spotlight" />
          <div className="card-border-glow" />

          <div 
            className="testimonials-track"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {TESTIMONIALS_DATA.map((item, idx) => (
              <div key={idx} className="testimonial-slide">
                <div className="testimonial-rating">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={18} />
                  ))}
                </div>
                <blockquote className="testimonial-speech">
                  {item.speech}
                </blockquote>
                <div className="testimonial-speaker">
                  <h4>{item.author}</h4>
                  <p>{item.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <div className="testimonial-navigation">
            <button 
              onClick={handlePrev}
              className="test-nav-btn magnetic-element"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft size={18} />
            </button>
            <button 
              onClick={handleNext}
              className="test-nav-btn magnetic-element"
              aria-label="Next Testimonial"
            >
              <ChevronRight size={18} />
            </button>
          </div>

          {/* Dots indicators */}
          <div className="testimonial-indicators">
            {TESTIMONIALS_DATA.map((_, idx) => (
              <div 
                key={idx}
                className={`testimonial-indicator ${activeIndex === idx ? "active" : ""}`}
                onClick={() => setActiveIndex(idx)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
