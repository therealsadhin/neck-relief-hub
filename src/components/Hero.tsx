import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { CheckCircle, Star } from "lucide-react";
import ColorVariantSelector from "@/components/ColorVariantSelector";
import { useTheme } from "@/contexts/ThemeContext";

interface HeroProps {
  onAddToCart: (color: string) => void;
}

export default function Hero({ onAddToCart }: HeroProps) {
  const { colorVariant } = useTheme();
  const [mainImage, setMainImage] = useState("/assests/images/sky blue/neko-6-roller-massage-therapy-skyblue-main.jpg");

  useEffect(() => {
    // Update the main image based on the selected color variant
    if (colorVariant === 'pink') {
      setMainImage("/assests/images/pink/neko-6-roller-massage-therapy-pink-main.jpg");
    } else {
      // Default to Ocean Blue (blue) or any other default color
      setMainImage("/assests/images/sky blue/neko-6-roller-massage-therapy-skyblue-main.jpg");
    }
  }, [colorVariant]);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      <div className="container py-16 md:py-24">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="flex flex-col justify-center space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center rounded-full border px-3 py-1 text-sm bg-secondary/10 text-black border-secondary/20">
                <CheckCircle className="h-4 w-4 mr-2 text-secondary" />
                Professional Grade Massage Tool
              </div>
              
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                Experience 
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {" "}Natural Relief
                </span>
              </h1>
              
              <p className="max-w-[600px] text-lg text-muted-foreground md:text-xl">
                Your portable, power-free neck therapist.
                The Nekko™ 6-Roller Neck Massager is ergonomically designed to target stiffness, tension, and fatigue. Six smooth rolling balls—fully removable and washable—deliver deep, customizable neck and shoulder relief.
                Just squeeze. Roll. Relax
              </p>
            </div>

            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                ))}
                <span className="text-sm text-muted-foreground ml-2">
                  4.9/5 from 200+ reviews
                </span>
              </div>
            </div>

            <div className="space-y-6">
              <ColorVariantSelector />
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  variant="hero" 
                  size="lg"
                  onClick={() => onAddToCart(colorVariant === 'pink' ? 'Pink' : 'Ocean Blue')}
                  className="text-lg px-8 py-6"
                >
                  Add to Cart - $19.99
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#benefits" className="text-lg px-8 py-6">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 pt-8 border-t border-border/50">
              <div className="text-center">
                <div className="text-2xl font-bold text-secondary">Free</div>
                <div className="text-sm text-muted-foreground">Shipping</div>
              </div>
            </div>
          </div>

          <div className="relative lg:order-last">
            <div className="relative">
              <img
                src={mainImage}
                alt="Professional neck massager with 6 rotating balls"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-wellness)] transform hover:scale-[1.02] transition-transform duration-500"
              />
              <div className="absolute -top-4 -right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                Free Shipping
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}