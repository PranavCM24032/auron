import type { Metadata } from "next";
import VisionMission from "@/components/VisionMission";

export const metadata: Metadata = {
  title: "Vision & Mission | AURON Forum",
  description: "Learn about the mission, values, and vision driving the Technical & Non-Technical Wings of the AURON Forum.",
};

export default function VisionPage() {
  return <VisionMission />;
}
