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
  title: "AURON Forum | Technical & Non-Technical Executive Committee, Events & Workshops",
  description: "Official website of AURON, the premier Technical & Non-Technical Forum. Discover our vision, committee, events, workshops, and register to join our community.",
  keywords: ["Auron Forum", "Department Forum", "Technical Wing", "Non-Technical Wing", "Hackathons", "Management", "Creative Design"],
  authors: [{ name: "Auron Forum" }],
  openGraph: {
    title: "AURON Forum | Technical & Non-Technical Community",
    description: "Official website of AURON, the premier Technical & Non-Technical Forum. Discover our vision, committee, events, workshops, and register to join our community.",
    type: "website",
    locale: "en_US",
    siteName: "AURON Forum",
  },
  twitter: {
    card: "summary_large_image",
    title: "AURON Forum | Technical & Non-Technical Community",
    description: "Official website of AURON, the premier Technical & Non-Technical Forum. Discover our vision, committee, events, workshops, and register to join our community.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakartaSans.variable}`}>
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
