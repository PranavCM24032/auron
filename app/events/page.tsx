import type { Metadata } from "next";
import EventsPageClient from "@/components/EventsPageClient";

export const metadata: Metadata = {
  title: "Forum Events | AURON Forum",
  description: "Browse the upcoming events, competitive programming speed runs, hackathons, and past gallery from the AURON Forum.",
};

export default function EventsPage() {
  return <EventsPageClient />;
}
