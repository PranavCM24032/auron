import type { Metadata } from "next";
import Committee from "@/components/Committee";

export const metadata: Metadata = {
  title: "Executive Committee | AURON Forum",
  description: "Meet the executive board, office-bearers, and faculty advisors directing the Technical and Non-Technical Wings of the AURON Forum.",
};

export default function CommitteePage() {
  return <Committee />;
}
