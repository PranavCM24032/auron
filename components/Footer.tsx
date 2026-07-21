"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Ambient background blur and glow */}
      <div className="footer-bg-glow" />

      <div className="container">
        
        {/* Premium Divider Separator */}
        <div className="footer-separator-container">
          <div className="footer-separator-line left" />
          <div className="footer-separator-ornament">✦</div>
          <div className="footer-separator-line right" />
        </div>

        <div className="footer-top">
          
          {/* Column 1: Brand */}
          <div className="footer-brand">
            <Link href="/" className="logo">
              <div className="logo-icon">
                <Image src="/logo.jpg" alt="AURON Logo" width={36} height={36} />
              </div>
              <div className="logo-text">
                AURON
                <span>INNOVATION & INTELLIGENCE</span>
              </div>
            </Link>
            <p className="footer-desc">
              Empowering future engineers through innovation, leadership and collaboration.
            </p>
            
            {/* Social Icons */}
            <div className="footer-socials">
              <a href="https://www.instagram.com/official_auronn?igsh=endvZHhqemRxM2Fm" target="_blank" rel="noopener noreferrer" className="social-icon-btn magnetic-element" aria-label="Instagram">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="social-icon-btn magnetic-element" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>

              <a href="mailto:auron.sbjitmr@gmail.com" className="social-icon-btn magnetic-element" aria-label="Email">
                <Mail size={14} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="footer-title">Quick Links</h4>
            <ul className="footer-links">
              <li><Link href="/" className="footer-link">Home</Link></li>
              <li><Link href="/vision" className="footer-link">Vision</Link></li>
              <li><Link href="/committee" className="footer-link">Committee</Link></li>
              <li><Link href="/events" className="footer-link">Events</Link></li>
              <li><Link href="/timeline" className="footer-link">Timeline</Link></li>
              <li><Link href="/faqs" className="footer-link">FAQs</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Get In Touch */}
          <div>
            <h4 className="footer-title">Get In Touch</h4>
            <div className="footer-info-details" style={{ marginBottom: "20px" }}>
              <div className="footer-info-item">
                <MapPin size={13} />
                <span>S.B. Jain Institute of Technology, Management and Research, Nagpur</span>
              </div>
              <div className="footer-info-item">
                <Phone size={13} />
                <span>+91 98765 43210</span>
              </div>
              <div className="footer-info-item">
                <Mail size={13} />
                <span>auron.sbjitmr@gmail.com</span>
              </div>
              <div className="footer-info-item">
                <Clock size={13} />
                <span>Mon - Sat: 9:00 AM - 5:00 PM</span>
              </div>
            </div>
            
            {/* Premium Contact Us CTA Button */}
            <Link href="/contact" className="cta-button magnetic-element" style={{ display: "inline-flex", alignItems: "center", gap: "8px" }}>
              <span>Contact Us</span>
              <span>&rarr;</span>
            </Link>
          </div>

        </div>

        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            © {new Date().getFullYear()} AURON Forum. All Rights Reserved.
          </div>
          
          <div className="footer-bottom-center">
            Built by Technical Forum
          </div>
          
          <div className="footer-bottom-right">
            <div className="footer-bottom-links">
              <a href="#" className="footer-link">Privacy Policy</a>
              <a href="#" className="footer-link">Terms & Conditions</a>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
