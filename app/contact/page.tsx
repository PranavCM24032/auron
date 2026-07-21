import type { Metadata } from "next";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Send us a message, suggest student-led workshops, get office coordinator details, or reach our campus department offices.",
};

export default function ContactPage() {
  return <Contact />;
}
