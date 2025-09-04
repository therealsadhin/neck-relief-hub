import { useState, useEffect } from "react";
import { Heart, Zap, Shield, Clock } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function VisualBenefits() {
  const { colorVariant } = useTheme();
  const [closeupImage, setCloseupImage] = useState("/assests/images/sky blue/neko-6-roller-massage-therapy-skyblue-closeup.jpg");

  useEffect(() => {
    // Update the closeup image based on the selected color variant
    if (colorVariant === 'pink') {
      setCloseupImage("/assests/images/pink/neko-6-roller-massage-therapy-pink-closeup.jpg");
    } else {
      // Default to Ocean Blue (blue) or any other default color
      setCloseupImage("/assests/images/sky blue/neko-6-roller-massage-therapy-skyblue-closeup.jpg");
    }
  }, [colorVariant]);

  const benefits = [
    {
      icon: Heart,
      title: "Improved Circulation",
      description: "Stimulates blood flow to reduce muscle stiffness and promote healing",
      color: "text-red-500"
    },
    {
      icon: Zap,
      title: "Instant Relief",
      description: "Feel tension melt away within minutes of use",
      color: "text-yellow-500"
    },
    {
      icon: Shield,
      title: "Professional Quality",
      description: "Medical-grade materials built to last for years of daily use",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      title: "Time Efficient",
      description: "Just 10-15 minutes daily for noticeable stress and pain reduction",
      color: "text-green-500"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-card to-muted/20">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            Why Choose Our
            <span className="bg-[var(--gradient-accent)] bg-clip-text text-transparent">
              {" "}Massager?
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Experience the difference of professional-grade massage therapy at home
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2 items-center">
          <div className="relative">
            <img
              src={closeupImage}
              alt="Close-up view of neck massager showing quality construction"
              className="w-full h-[500px] object-contain rounded-2xl shadow-[var(--shadow-wellness)]" // Changed to object-contain
            />
            <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-semibold">
              Clinical Grade
            </div>
          </div>

          <div className="space-y-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4 p-6 rounded-xl bg-background border hover:shadow-lg transition-shadow">
                <div className={`p-3 rounded-lg bg-muted ${benefit.color}`}>
                  <benefit.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8">
          <div className="text-center p-4 sm:p-6 rounded-xl bg-background border">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">95%</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Customer Satisfaction</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl bg-background border">
            <div className="text-2xl sm:text-3xl font-bold text-secondary mb-1 sm:mb-2">10K+</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Happy Customers</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl bg-background border">
            <div className="text-2xl sm:text-3xl font-bold text-accent mb-1 sm:mb-2">2 Years</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Warranty</div>
          </div>
          <div className="text-center p-4 sm:p-6 rounded-xl bg-background border">
            <div className="text-2xl sm:text-3xl font-bold text-primary mb-1 sm:mb-2">30 Days</div>
            <div className="text-xs sm:text-sm text-muted-foreground">Money Back</div>
          </div>
        </div>
      </div>
    </section>
  );
}