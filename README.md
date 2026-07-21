# 🌌 AURON Forum - Technical & Non-Technical Community

A premium, interactive technical forum web application built with **Next.js 16 (App Router)**, **TypeScript**, and **Vanilla CSS**. This site features state-of-the-art interactive micro-animations, glassmorphism UI layouts, custom smooth scrolling, and dynamic magnetic cursors.

---

## 🛠️ Tech Stack & Libraries

[![Next.js](https://img.shields.io/badge/Next.js-16.2.10-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.2.4-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![GSAP](https://img.shields.io/badge/GSAP-3.15.0-88CE02?style=for-the-badge&logo=greensock&logoColor=white)](https://greensock.com/gsap/)
[![Lenis Scroll](https://img.shields.io/badge/Lenis%20Scroll-1.3.25-orange?style=for-the-badge)](https://lenis.darkroom.engineering/)
[![EmailJS](https://img.shields.io/badge/EmailJS-4.4.1-blueviolet?style=for-the-badge)](https://www.emailjs.com/)

---

## ✨ Features

### 1. 💫 Premium Interactive UI & Animations
* **Custom Magnetic Cursor:** A custom-made dual-layered cursor ([CustomCursor.tsx](file:///c:/Project/Auron/Auron_Website/auron/components/CustomCursor.tsx)) that magnetically snaps and pulls towards interactive elements (buttons, links, social icons) using GreenSock (GSAP).
* **Lenis Smooth Scroll:** Global inertial smooth scrolling ([GlobalScrollManager.tsx](file:///c:/Project/Auron/Auron_Website/auron/components/GlobalScrollManager.tsx)) which enhances site-wide navigation feel.
* **Liquid Glassmorphism:** Rich glass-like cards styled with radial spotlight hover glows that track user pointer movements.

### 2. 📅 Interactive Events & Registration Modals
* **Events Showcases:** Browse active and past events under separate lists ([Events.tsx](file:///c:/Project/Auron/Auron_Website/auron/components/Events.tsx)).
* **Single-Click Registration:** Click event cards to open an registration modal overlay ([EventModal.tsx](file:///c:/Project/Auron/Auron_Website/auron/components/EventModal.tsx)) with a built-in validation ticket flow.

### 3. ✉️ Fully Functional Contact Us Page
* **EmailJS Integration:** Submits inquiries ([Contact.tsx](file:///c:/Project/Auron/Auron_Website/auron/components/Contact.tsx)) directly to the forum's mailbox using `@emailjs/browser` without requiring a custom backend.
* **Client-Side Validation:** Standard email regex checking and real-time input fields floating label animations.

### 4. 👥 Dynamic Committee Filters
* **Wing Filtering:** Smooth filtering of student council members ([Committee.tsx](file:///c:/Project/Auron/Auron_Website/auron/components/Committee.tsx)) between *All*, *Technical*, and *Non-Technical* wings.

### 5. 🖼️ Gallery & Achievements Lightbox
* **Responsive Grid:** Dynamic grids showcasing forum achievements and memory timeline.
* **Full-Screen Lightbox:** Interactive slider overlay with transition effects to zoom in and swipe gallery assets ([Lightbox.tsx](file:///c:/Project/Auron/Auron_Website/auron/components/Lightbox.tsx)).

---

## 📁 Repository Structure

```
auron/
├── app/                      # Next.js App Router root
│   ├── layout.tsx            # Main layout importing global styles and wrappers
│   ├── page.tsx              # Landing homepage containing sections
│   ├── globals.css           # Vanilla CSS core design system & custom utilities
│   └── [subpages]/           # achievements, committee, contact, events, faqs, gallery, timeline, vision
├── components/               # Reusable React components (use client / server)
│   ├── Navbar.tsx            # Custom header with backdrop blurs
│   ├── CustomCursor.tsx      # GSAP custom cursor and magnetic listeners
│   ├── Contact.tsx           # Contact form integrated with EmailJS
│   ├── Lightbox.tsx          # Full-screen gallery slider
│   └── ...
├── data/                     # Local TypeScript datasets
│   ├── committee.ts          # Council wings profiles details
│   ├── events.ts             # Technical & Non-Technical events data
│   └── faqs.ts               # Frequently Asked Questions data
├── public/                   # Static assets (images, vectors, logos)
├── package.json              # Project metadata & npm dependencies configuration
└── start.bat                 # Direct windows launcher dev script
```

---

## 🚀 Getting Started

### 📋 Prerequisites
Ensure you have **Node.js (v18.x or above)** installed on your machine. You can verify it by running `node -v` in your terminal.

### 💻 Option A: Run via Launcher Script (Windows)
We have provided an automated interactive command file [start.bat](file:///c:/Project/Auron/Auron_Website/auron/start.bat) that:
1. Verifies your Node.js environment.
2. Restores and installs any missing `node_modules` packages automatically.
3. Launches the local Next.js development server at `http://localhost:3000`.

**Simply double-click the [start.bat](file:///c:/Project/Auron/Auron_Website/auron/start.bat) file in your root folder to start.**

---

### ⌨️ Option B: Manual Setup
If you are on macOS/Linux or prefer the command line, run the following commands:

1. **Install Dependencies:**
   ```bash
   npm install
   ```

2. **Run Development Server:**
   ```bash
   npm run dev
   ```

3. **Build for Production:**
   ```bash
   npm run build
   ```

4. **Start Production Server:**
   ```bash
   npm run start
   ```

---

## ✉️ EmailJS Configuration (Contact Form)

The contact form is configured to load EmailJS settings from environment variables in [components/Contact.tsx](file:///c:/Project/Auron/Auron_Website/auron/components/Contact.tsx):

```typescript
const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_evkz5x8";
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_2cu08jp";
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "aB8r5qyVP7paTnBCe";
```

### 🔧 Configuration Methods

#### Local Development
1. Create a `.env.local` file in the root directory (based on `.env.example`).
2. Add your custom credentials:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

#### Production (Vercel)
When deploying the repository to **Vercel**, add these three variables under **Settings > Environment Variables** in your Vercel project dashboard to override the default credentials securely.

You can register and manage these credentials on [EmailJS](https://www.emailjs.com/).
