"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

interface EventModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventName: string;
}

export default function EventModal({ isOpen, onClose, eventName }: EventModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [roll, setRoll] = useState("");
  const [semester, setSemester] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!name || !email || !roll || !semester) {
      setStatus({ type: "error", text: "Please complete all required fields." });
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setStatus({ type: "error", text: "Please enter a valid email address." });
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setStatus({ type: "success", text: `Registration Successful! Ticket sent to ${email}` });
      setTimeout(onClose, 2000);
    }, 1500);
  };

  return (
    <div 
      className="modal-overlay active" 
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card glass-card relative">
        <button className="modal-close" onClick={onClose} aria-label="Close Modal">
          <X size={16} />
        </button>

        <div className="section-header" style={{ textAlign: "left", marginBottom: "35px" }}>
          <span className="section-subtitle">Secure Your Spot</span>
          <h3 className="bearer-name" id="modal-title" style={{ fontSize: "1.6rem" }}>
            Register for {eventName}
          </h3>
        </div>

        <form onSubmit={handleSubmit} className="contact-form" id="modal-form">
          <input type="hidden" id="modal-event-name" value={eventName} />

          <div className="form-group">
            <input 
              type="text" 
              id="reg-name" 
              className="form-input" 
              placeholder=" " 
              required 
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="reg-name" className="form-label">Full Name</label>
            <div className="form-line"></div>
          </div>

          <div className="form-group">
            <input 
              type="email" 
              id="reg-email" 
              className="form-input" 
              placeholder=" " 
              required 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="reg-email" className="form-label">Email Address</label>
            <div className="form-line"></div>
          </div>

          <div className="form-group">
            <input 
              type="text" 
              id="reg-roll" 
              className="form-input" 
              placeholder=" " 
              required 
              value={roll}
              onChange={(e) => setRoll(e.target.value)}
            />
            <label htmlFor="reg-roll" className="form-label">Roll Number</label>
            <div className="form-line"></div>
          </div>

          <div className="form-group">
            <select 
              id="reg-semester" 
              className="form-input"
              style={{ background: "var(--bg-form)", color: "var(--text-primary)" }}
              required 
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
            >
              <option value="" disabled hidden></option>
              <option value="1">Semester 1</option>
              <option value="2">Semester 2</option>
              <option value="3">Semester 3</option>
              <option value="4">Semester 4</option>
              <option value="5">Semester 5</option>
              <option value="6">Semester 6</option>
              <option value="7">Semester 7</option>
              <option value="8">Semester 8</option>
            </select>
            <label htmlFor="reg-semester" className="form-label">Select Semester</label>
            <div className="form-line"></div>
          </div>

          <button 
            type="submit" 
            className={`cta-button submit-btn magnetic-element ${loading ? "loading" : ""}`}
            id="reg-submit"
            disabled={loading}
          >
            <div className="spinner" />
            <span>Submit Registration</span>
          </button>
        </form>

        {status && (
          <div className={`form-status ${status.type}`} id="reg-status">
            {status.text}
          </div>
        )}
      </div>
    </div>
  );
}
