import { useState, useEffect } from "react";
import { Zap, Heart, Shield, Sparkles, Clock, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "@/contexts/ThemeContext";

export default function Benefits() {
  const { colorVariant } = useTheme();
  const [benefitImage, setBenefitImage] = useState("/assests/images/neko-6-roller-massage-therapy-product-6.jpg");

  useEffect(() => {
    // Update the benefit image based on the selected color variant
    if (colorVariant === 'pink') {
      setBenefitImage("/assests/images/pink/neko-6-roller-massage-therapy-pink-detail.jpg");
    } else {
      // Default to Ocean Blue (blue) or any other default color
      setBenefitImage("/assests/images/neko-6-roller-massage-therapy-product-6.jpg");
    }
  }, [colorVariant]);

  return (
    <section id="benefits" className="py-16 md:py-24 bg-gradient-to-b from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Why Choose Our 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Neck Massager?
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover the science-backed benefits of our professional-grade massage tool, 
            designed to provide therapeutic relief and improve your daily well-being.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center mb-16">
          <div className="relative">
            <img
              src={benefitImage}
              alt="Person using neck massager for relaxation and pain relief"
              className="w-full h-auto rounded-2xl shadow-[var(--shadow-card)]"
            />
            <div className="absolute top-4 left-4 bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
              Clinical Grade
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Professional Results at Home</h3>
              <p className="text-muted-foreground">
                Our 6-roller cervical neck massager combines ancient massage techniques with modern ergonomic design. 
                The unique swan shape provides optimal grip while the rotating balls deliver targeted deep tissue massage 
                that rivals professional therapy sessions.
              </p>
            </div>
            
            <div className="grid gap-4">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm">Reduces neck stiffness by up to 85%</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-secondary rounded-full"></div>
                <span className="text-sm">Improves sleep quality within 7 days</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0 w-2 h-2 bg-accent rounded-full"></div>
                <span className="text-sm">Saves $1000+ vs. professional massage therapy</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Instant Pain Relief",
              description: "360° rotating massage balls target pressure points for immediate tension release and muscle relaxation."
            },
            {
              icon: Heart,
              title: "Improved Circulation", 
              description: "Stimulates blood flow and lymphatic drainage to reduce inflammation and promote natural healing."
            },
            {
              icon: Shield,
              title: "Ergonomic Design",
              description: "Swan-shaped design with comfortable grip ensures proper posture and prevents hand fatigue during use."
            },
            {
              icon: Sparkles,
              title: "Natural Materials",
              description: "Includes premium crystal jade scraping board for additional skin benefits and holistic wellness."
            },
            {
              icon: Clock,
              title: "Quick 10-Min Sessions",
              description: "Experience noticeable relief in just 10 minutes a day. Perfect for busy lifestyles and daily routines."
            },
            {
              icon: Users,
              title: "Whole Family Use",
              description: "Safe and effective for all ages. Adjustable pressure makes it suitable for everyone in the family."
            }
          ].map((benefit, index) => (
            <Card key={index} className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                    <benefit.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}