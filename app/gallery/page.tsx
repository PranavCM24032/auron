import type { Metadata } from "next";
import GalleryPageClient from "@/components/GalleryPageClient";

export const metadata: Metadata = {
  title: "Media Gallery | AURON Forum",
  description: "Browse photographs and highlights from past hackathons, ideathons, and seminars organized by the AURON Forum.",
};

export default function GalleryPage() {
  return <GalleryPageClient />;
}
