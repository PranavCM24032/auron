import type { Metadata } from "next";
import Timeline from "@/components/Timeline";

export const metadata: Metadata = {
  title: "Forum Journey | AURON Forum",
  description: "Walk through the foundational milestones and chronological evolution of the AURON Forum.",
};

export default function TimelinePage() {
  return <Timeline />;
}
