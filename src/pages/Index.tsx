import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
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
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <CredentialsSection />
      <PainPoints />
      <MidCTA
        heading={
          <>
            Have a different conversation,{" "}
            <span className="italic text-gradient-gold">get a different outcome.</span>
          </>
        }
        body="We work directly with executives, founders, leaders, and professionals whose work depends on clear expression, confident delivery, and authentic presence."
      />
      <MethodologySection />
      <Services />
      <CPDSection />
      <Testimonials />
      <CoachSection />
      <FitSection />
      <MidCTA
        heading={<>Do you tick these boxes?</>}
        body="We work directly with executives, founders, leaders, and professionals whose work depends on clear expression, confident delivery, and authentic presence."
      />
      <FAQSection />
      <CTASection />
      <SeoKeywords />
      <Footer />
    </main>
  );
};

export default Index;
