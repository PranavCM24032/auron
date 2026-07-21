import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlobalModals from "@/components/GlobalModals";
import GlobalScrollManager from "@/components/GlobalScrollManager";
import InitialLoaderWrapper from "@/components/InitialLoaderWrapper";

const cinzel = localFont({
  src: [
    { path: "../public/fonts/cinzel-medium.ttf", weight: "500" },
    { path: "../public/fonts/cinzel-bold.ttf", weight: "700" },
    { path: "../public/fonts/cinzel-extrabold.ttf", weight: "800" },
  ],
  variable: "--font-cinzel",
  display: "swap",
});

const plusJakartaSans = localFont({
  src: [
    { path: "../public/fonts/pjs-light.ttf", weight: "300" },
    { path: "../public/fonts/pjs-regular.ttf", weight: "400" },
    { path: "../public/fonts/pjs-medium.ttf", weight: "500" },
    { path: "../public/fonts/pjs-semibold.ttf", weight: "600" },
    { path: "../public/fonts/pjs-bold.ttf", weight: "700" },
    { path: "../public/fonts/pjs-extrabold.ttf", weight: "800" },
  ],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auronforum.com"),
  title: {
    default: "AURON Forum | Technical & Non-Technical Executive Committee, Events & Workshops",
    template: "%s | AURON Forum",
  },
  description: "Official website of AURON Forum at S.B. Jain Institute of Technology, Management and Research, Nagpur. Discover our vision, committee, hackathons, workshops, and student opportunities.",
  keywords: [
    "Auron Forum",
    "SBJITMR",
    "Department Forum Nagpur",
    "Technical Wing",
    "Non-Technical Wing",
    "Campus Hackathons",
    "Student Engineering Forum",
    "Computer Science Workshops",
    "Project Mentorship",
  ],
  authors: [{ name: "AURON Forum Committee" }],
  creator: "AURON Technical Forum",
  publisher: "AURON Technical Forum",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "AURON Forum | Technical & Non-Technical Community",
    description: "Official website of AURON Forum at S.B. Jain Institute of Technology. Explore our events, committee members, achievements, and technical workshops.",
    url: "https://auronforum.com",
    siteName: "AURON Forum",
    images: [
      {
        url: "/logo.jpg",
        width: 1200,
        height: 630,
        alt: "AURON Technical Forum Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURON Forum | Technical & Non-Technical Community",
    description: "Official website of AURON Forum at S.B. Jain Institute of Technology. Explore our events, committee members, achievements, and technical workshops.",
    images: ["/logo.jpg"],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "AURON Technical Forum",
  url: "https://auronforum.com",
  logo: "https://auronforum.com/logo.jpg",
  description: "Official student technical and non-technical forum of S.B. Jain Institute of Technology, Management and Research, Nagpur.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Nagpur",
    addressRegion: "Maharashtra",
    addressCountry: "India",
  },
  sameAs: [
    "https://linkedin.com",
    "https://github.com",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakartaSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.setAttribute('data-theme','light');}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div className="background-grain" />

        {/* Initial page loader (session-based) */}
        <InitialLoaderWrapper />

        {/* Global smooth scrolling & reveal triggers manager */}
        <GlobalScrollManager />

        {/* Global custom magnetic cursors and modal layers */}
        <GlobalModals />

        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
