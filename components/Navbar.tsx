"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    // Theme setup from localStorage (fallback to dark theme default)
    const savedTheme = localStorage.getItem("theme") || "dark";
    document.documentElement.setAttribute("data-theme", savedTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "Vision", href: "/vision" },
    { label: "Committee", href: "/committee" },
    { label: "Events", href: "/events" },
    { label: "Timeline", href: "/timeline" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`} id="navbar">
      <div className="container nav-container">
        {/* Left: Logo */}
        <Link href="/" className="logo" id="nav-brand">
          <div className="logo-icon">
            <Image src="/logo.jpg" alt="AURON Logo" width={36} height={36} priority />
          </div>
          <div className="logo-text">
            AURON
            <span>INNOVATION & INTELLIGENCE</span>
          </div>
        </Link>

        {/* Right of Logo: Navigation Links */}
        <nav className={`nav-links ${mobileMenuOpen ? "active" : ""}`} id="nav-links">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Controls containing Mobile Hamburger */}
        <div className="nav-controls">
          <button
            className={`hamburger ${mobileMenuOpen ? "active" : ""}`}
            id="hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Open Navigation Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </header>
  );
}
