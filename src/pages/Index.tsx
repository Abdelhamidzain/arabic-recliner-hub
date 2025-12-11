import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import FeaturesSection from "@/components/FeaturesSection";
import LifestyleSection from "@/components/LifestyleSection";
import SocialProofSection from "@/components/SocialProofSection";
import FaqSection from "@/components/FaqSection";
import ShippingPaymentSection from "@/components/ShippingPaymentSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import StickyMobileCta from "@/components/StickyMobileCta";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <main>
        <HeroSection />
        <BenefitsSection />
        <FeaturesSection />
        <LifestyleSection />
        <SocialProofSection />
        <FaqSection />
        <ShippingPaymentSection />
        <FinalCtaSection />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
};

export default Index;
