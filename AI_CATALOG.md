# 📖 AI Catalog — AURON Technical Forum

Welcome to the AI Architecture Catalog for the AURON Technical Forum web application. This file lists system designs, conventions, layouts, and configurations to facilitate rapid onboarding for developers and AI agents.

---

## 🏗️ Project Architecture

The application is built using **Next.js 16 (App Router)** and **TypeScript**, configured with static pre-rendering where appropriate to leverage the Vercel Edge Network. 

### 1. Key Framework Patterns
* **App Router Layouts:** Standard nested layouts with dynamic metadata extraction.
* **Derived State Synchronization:** State synchronizations (e.g. in [Lightbox.tsx](file:///c:/Project/Auron/Auron_Website/auron/components/Lightbox.tsx)) are resolved in-render rather than triggering cascade effects during hydration.
* **Conditional Mounting:** Modal forms are conditionally mounted on `isOpen` state to avoid manual resets of form states inside lifecycle effects.

### 2. Design System & Styling
* **Vanilla CSS Layouts:** Pure CSS variables defined in [globals.css](file:///c:/Project/Auron/Auron_Website/auron/app/globals.css) for maximum rendering performance.
* **Liquid Glassmorphism:** Theme tokens configured for custom glass containers, overlays, backdrop blurs, and pointer-tracking spotlights.
* **Custom Scroll Dynamics:** Custom smooth scrolling managed site-wide by [Lenis](https://lenis.darkroom.engineering/) and integrated with GreenSock (GSAP) animations.

---

## 📁 Folder Structure

```
auron/
├── app/                        # Next.js App Router folders
│   ├── achievements/           # Achievements page
│   ├── committee/              # Committee page
│   ├── contact/                # Contact Us page
│   ├── events/                 # Events directory
│   ├── faqs/                   # FAQs accordion list
│   ├── gallery/                # Image gallery routes
│   ├── timeline/               # Retro timeline path
│   ├── vision/                 # Forum's core values
│   ├── layout.tsx              # Root Layout with Font & Meta setups
│   └── globals.css             # Vanilla CSS design tokens & layouts
├── components/                 # Isolated UI components
│   ├── CustomCursor.tsx        # GSAP cursor snapping
│   ├── Contact.tsx             # Contact form integrated with EmailJS
│   ├── Lightbox.tsx            # Zoomable full-screen slider
│   ├── GlobalScrollManager.tsx # Smooth-scrolling coordinator
│   └── ...
├── data/                       # Local structured data catalogs
│   ├── committee.ts            # Member profiles list
│   ├── events.ts               # Timeline events data
│   └── faqs.ts                 # FAQs list
├── public/                     # Static media assets & vector icons
├── .env.example                # Template for environment settings
├── package.json                # Dependencies configuration
└── start.bat                   # Automated windows developer environment launcher
```

---

## 🔌 Dependencies & Packages

Core packages utilized in the project:
* `next` (16.2.10) - React framework
* `react` / `react-dom` (19.2.4) - Client UI rendering engine
* `typescript` (5.x) - Strict type safety compiler
* `gsap` (3.15.0) - High-performance custom micro-animations & ScrollTrigger
* `lenis` (1.3.25) - Smooth scroll implementation
* `@emailjs/browser` (4.4.1) - Client-side direct email dispatch service
* `lucide-react` (1.25.0) - Design vector icon package

---

## 🔐 Environment Variables

The project uses client-exposed environment variables for EmailJS service connection configuration:

| Name | Type | Purpose |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_EMAILJS_SERVICE_ID` | String | EmailJS Mail Service Identifier |
| `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID` | String | EmailJS Mail Template Identifier |
| `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY` | String | EmailJS Account Public API Key |

*Note: In local development, these variables are loaded from `.env.local`. When deploying on Vercel, configure them in the Vercel Dashboard under **Environment Variables**.*

---

## 🚀 Deployment Process

### Local Development
Double-click [start.bat](file:///c:/Project/Auron/Auron_Website/auron/start.bat) in the project folder to start the environment automatically.

### Production / Vercel Deploy
This project is configured for **zero-config direct deployment** on Vercel:
1. Import this repository in the Vercel dashboard.
2. Add the Environment Variables (if customized).
3. Click **Deploy**. Vercel will automatically run `npm run build` and launch static page prerendering.

---

## 📝 Coding Conventions

1. **Client-Side Components:** Must use `"use client";` at the top of the file if importing hooks (`useState`, `useEffect`, etc.).
2. **Ref-safe Callbacks:** Any handler function triggered by window event listeners must be wrapped in `useCallback` to prevent memory leaks and redundant listener re-registration.
3. **No Hardcoded Secrets:** All external API endpoints or credentials must be read from `process.env` with sensible local fallbacks.
4. **Semantic HTML:** All visual divisions must rely on standard semantic boundaries (`<main>`, `<header>`, `<footer>`, `<section>`).

---

## 🔮 Future Roadmap
* **Dynamic Event API Integration:** Fetch event schedules from a database/CMS instead of localized TypeScript arrays.
* **User Authentication:** Allow council heads to upload images to the Gallery section directly from a secure admin dashboard page.
* **Enhanced Offline Service Worker:** Support progressive web app caching for offline viewing of event guides.
