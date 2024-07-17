import BusinessFeatures from "@/components/landing/business-features";
import Hero from "@/components/landing/hero";
import { TalentFeaturesSection } from "@/components/landing/talent-features";

export default function Home() {
  return (
    <main className="w-full max-w-7xl p-0 m-0  mx-auto">
      <Hero />
      <TalentFeaturesSection />
      <BusinessFeatures />
    </main>
  );
}
