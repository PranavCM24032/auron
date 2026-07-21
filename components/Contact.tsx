"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_evkz5x8";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_2cu08jp";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "aB8r5qyVP7paTnBCe";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(null);

    if (!name || !email || !message) {
      setStatus({ type: "error", text: "All fields are mandatory." });
      return;
    }

    if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setStatus({ type: "error", text: "Please submit a valid email address." });
      return;
    }

    setLoading(true);
    try {
      await emailjs.sendForm(
        SERVICE_ID,
        TEMPLATE_ID,
        formRef.current!,
        PUBLIC_KEY
      );
      setStatus({ type: "success", text: "Message sent successfully! We will get back to you soon." });
      setName("");
      setEmail("");
      setMessage("");
    } catch {
      setStatus({ type: "error", text: "Failed to send message. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section-padding" style={{ background: "var(--bg-secondary)" }}>
      <div className="container" style={{ maxWidth: "700px", margin: "0 auto" }}>
        <div className="section-header" style={{ marginBottom: "40px" }}>
          <span className="section-subtitle">Get In Touch</span>
          <h2 className="section-title">Contact Us</h2>
        </div>

        <div className="contact-card glass-card">
          <div className="spotlight" />
          <div className="card-border-glow" />

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form" id="contact-form">
            <input type="hidden" name="to_email" value="auron.sbjitmr@gmail.com" />

            <div className="form-group">
              <input 
                type="text" 
                name="from_name"
                id="contact-name" 
                className="form-input" 
                placeholder=" " 
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label htmlFor="contact-name" className="form-label">Full Name</label>
              <div className="form-line"></div>
            </div>

            <div className="form-group">
              <input 
                type="email" 
                name="from_email"
                id="contact-email" 
                className="form-input" 
                placeholder=" " 
                required 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="contact-email" className="form-label">Email Address</label>
              <div className="form-line"></div>
            </div>

            <div className="form-group">
              <textarea 
                name="message"
                id="contact-message" 
                className="form-textarea" 
                placeholder=" " 
                required 
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <label htmlFor="contact-message" className="form-label">Your Message</label>
              <div className="form-line"></div>
            </div>

            <button 
              type="submit" 
              className={`cta-button submit-btn magnetic-element ${loading ? "loading" : ""}`}
              id="contact-submit"
              disabled={loading}
            >
              <div className="spinner" />
              <span>{loading ? "Sending..." : "Send Message"}</span>
            </button>
          </form>

          {status && (
            <div className={`form-status ${status.type}`} id="contact-status">
              {status.text}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
