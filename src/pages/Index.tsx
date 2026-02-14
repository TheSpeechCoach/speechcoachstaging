import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CredentialsSection from "@/components/CredentialsSection";
import PainPoints from "@/components/PainPoints";
import Services from "@/components/Services";
import MethodologySection from "@/components/MethodologySection";
import CPDSection from "@/components/CPDSection";
import Testimonials from "@/components/Testimonials";
import CoachSection from "@/components/CoachSection";
import FitSection from "@/components/FitSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <CredentialsSection />
      <PainPoints />
      <Services />
      <MethodologySection />
      <CPDSection />
      <Testimonials />
      <CoachSection />
      <FitSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
