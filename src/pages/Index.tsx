import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PainPoints from "@/components/PainPoints";
import Testimonials from "@/components/Testimonials";
import Services from "@/components/Services";
import FitSection from "@/components/FitSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <Navbar />
      <HeroSection />
      <PainPoints />
      <Services />
      <Testimonials />
      <FitSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
