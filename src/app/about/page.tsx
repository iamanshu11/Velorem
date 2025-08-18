import AboutHero from "@/components/ui/AboutHero";
import AboutMissionVision from "@/components/ui/AboutMissionVision";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description: "Who we are and what we do.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutMissionVision />
    </>
  );
}