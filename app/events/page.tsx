import type { Metadata } from "next";
import Events from "@/components/Events";

export const metadata: Metadata = {
  title: "Forum Events",
  description: "Browse the upcoming events, competitive programming speed runs, hackathons, and past gallery from the AURON Forum.",
};

export default function EventsPage() {
  return <Events />;
}
