"use client";

import { useState } from "react";
import { FAQS_DATA } from "@/data/faqs";
import { ChevronDown } from "lucide-react";

export default function Faq() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setActiveIndex(activeIndex === idx ? null : idx);
  };

  return (
    <div className="faq-list">
      {FAQS_DATA.map((item, idx) => {
        const isActive = activeIndex === idx;
        return (
          <div 
            key={idx}
            className={`faq-item ${isActive ? "active" : ""}`}
          >
            <button 
              className="faq-question"
              onClick={() => toggleFaq(idx)}
              aria-expanded={isActive}
            >
              <span>{item.question}</span>
              <div className="faq-toggle-icon">
                <ChevronDown size={16} />
              </div>
            </button>
            <div 
              className="faq-answer"
              style={{ maxHeight: isActive ? "500px" : "0px" }}
            >
              <div className="faq-answer-inner">
                <p>{item.answer}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
