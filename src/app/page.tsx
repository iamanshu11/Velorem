import HomeHero from "@/components/ui/HomeHero";
import AcrossGlobe from "@/components/ui/AcrossGlobe"
import GetStartedSection from "@/components/ui/GetStartedSection";
import ModernizePayouts from "@/components/ui/ModernizePayouts";
import FeatureCards from "@/components/ui/FeatureCards";

export default function HomePage() {
  return (
    <>
      <HomeHero />
      <FeatureCards />
      <AcrossGlobe />
      <GetStartedSection />
      <ModernizePayouts />
    </>
  );
}
