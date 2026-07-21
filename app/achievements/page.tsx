import type { Metadata } from "next";
import Achievements from "@/components/Achievements";
import Alumni from "@/components/Alumni";

export const metadata: Metadata = {
  title: "Achievements & Recognition",
  description: "Celebrate our Smart India Hackathon trophies, elite ACM ICPC regionals rank, and success placements of our graduates.",
};

export default function AchievementsPage() {
  return (
    <>
      <Achievements />
      <Alumni />
    </>
  );
}
