import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StatsStrip from "@/components/StatsStrip";
import CredentialsSection from "@/components/CredentialsSection";
import PainPoints from "@/components/PainPoints";
import MidCTA from "@/components/MidCTA";
import Services from "@/components/Services";
import MethodologySection from "@/components/MethodologySection";
import CPDSection from "@/components/CPDSection";
import Testimonials from "@/components/Testimonials";
import CoachSection from "@/components/CoachSection";
import FitSection from "@/components/FitSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import SeoKeywords from "@/components/SeoKeywords";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <CredentialsSection />
      <PainPoints />
      <MidCTA
        body="We work directly with executives, founders, leaders, and professionals whose work depends on clear expression, confident delivery, and authentic presence."
      />
      <MethodologySection />
      <Services />
      <WhoWeWorkWith />
      <CPDSection />
      <Testimonials />
      <CoachSection />
      <FitSection />
      <FAQSection />
      <CTASection />
      <SeoKeywords />
      <Footer />
    </main>
  );
};

export default Index;
