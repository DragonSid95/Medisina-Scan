import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { HowItWorks } from "@/components/how-it-works";
import { Features } from "@/components/features";
import { InstallationGuide } from "@/components/installation-guide";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <HowItWorks />
      <Features />
      <InstallationGuide />
      <Footer />
    </main>
  );
}
