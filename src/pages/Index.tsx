import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ProductSpecs from "@/components/ProductSpecs";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import UsageGuide from "@/components/UsageGuide";
import VisualBenefits from "@/components/VisualBenefits";

interface IndexProps {
  onAddToCart: (color: string) => void;
}

const Index = ({ onAddToCart }: IndexProps) => {
  return (
    <div className="min-h-screen">
      <Hero onAddToCart={() => onAddToCart("Ocean Blue")} />
      <VisualBenefits />
      <UsageGuide />
      <Benefits />
      <ProductSpecs />
      <Testimonials />
      <FAQ />
    </div>
  );
};

export default Index;