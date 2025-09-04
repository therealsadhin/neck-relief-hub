import { useState, useEffect } from "react";
import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export default function UsageGuide() {
  const { colorVariant } = useTheme();
  const [usageImage, setUsageImage] = useState("/assests/images/neko-6-roller-massage-therapy-before-after-5.jpg");
  const [beforeAfterImages, setBeforeAfterImages] = useState([
    "/assests/images/neko-6-roller-massage-therapy-before-after-19.jpeg",
    "/assests/images/neko-6-roller-massage-therapy-before-after-5.jpg",
    "/assests/images/neko-6-roller-massage-therapy-before-after-7.jpg",
    "/assests/images/neko-6-roller-massage-therapy-before-after-8.jpg"
  ]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Update the usage images based on the selected color variant
    if (colorVariant === 'pink') {
      setUsageImage("/assests/images/pink/neko-6-roller-massage-therapy-pink-closeup.jpg");
      setBeforeAfterImages([
        "/assests/images/pink/neko-6-roller-massage-therapy-pink-detail.jpg",
        "/assests/images/neko-6-roller-massage-therapy-pink-and-skyblue.jpg",
        "/assests/images/neko-6-roller-massage-therapy-before-after-5.jpg",
        "/assests/images/neko-6-roller-massage-therapy-before-after-7.jpg"
      ]);
    } else {
      // Default to Ocean Blue (blue) or any other default color
      setUsageImage("/assests/images/neko-6-roller-massage-therapy-before-after-5.jpg");
      setBeforeAfterImages([
        "/assests/images/neko-6-roller-massage-therapy-before-after-19.jpeg",
        "/assests/images/neko-6-roller-massage-therapy-before-after-5.jpg",
        "/assests/images/neko-6-roller-massage-therapy-before-after-7.jpg",
        "/assests/images/neko-6-roller-massage-therapy-before-after-8.jpg"
      ]);
    }
  }, [colorVariant]);

  // Auto-play carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => 
        prevIndex === beforeAfterImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [beforeAfterImages.length]);

  const usageSteps = [
    {
      step: "1",
      title: "Position the Massager",
      description: "Place the massager around your neck, ensuring the 6 rollers are positioned on both sides of your cervical spine."
    },
    {
      step: "2",
      title: "Adjust Pressure",
      description: "Gently pull the handles to adjust the pressure according to your comfort level."
    },
    {
      step: "3",
      title: "Roll and Massage",
      description: "Move the massager up and down along your neck and shoulders in slow, controlled motions."
    },
    {
      step: "4",
      title: "Relax and Enjoy",
      description: "Continue for 10-15 minutes daily for optimal muscle relief and stress reduction."
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-background to-muted/30">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            See How It
            <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              {" "}Works
            </span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Discover the proper way to use your neck massager for maximum benefit and relief
          </p>
        </div>

        {/* Video Demo Section */}
        <div className="grid gap-8 lg:grid-cols-2 mb-16">
          <div className="relative group">
            <div className="relative rounded-2xl overflow-hidden shadow-[var(--shadow-wellness)] bg-black">
              <video
                src="/assests/videos/4.mp4"
                muted
                playsInline
                autoPlay
                loop
                className="w-full h-[300px] object-cover"
              />
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Professional Demonstration</h3>
            <p className="text-muted-foreground">
              Watch our wellness expert demonstrate the proper technique for using your 6-roller neck massager. 
              Learn the best positions and movements for targeting tension points and achieving maximum relief.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 rounded-lg bg-card border">
                <div className="text-2xl font-bold text-primary mb-1">10-15</div>
                <div className="text-sm text-muted-foreground">Minutes Daily</div>
              </div>
              <div className="text-center p-4 rounded-lg bg-card border">
                <div className="text-2xl font-bold text-secondary mb-1">6</div>
                <div className="text-sm text-muted-foreground">Massage Points</div>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Steps */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {usageSteps.map((step, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-4">
                <div className="w-16 h-16 mx-auto bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform">
                  {step.step}
                </div>
              </div>
              <h3 className="font-semibold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Before/After Carousel */}
        <div className="relative rounded-2xl overflow-hidden">
          <div className="relative h-[400px]">
            <img
              src={beforeAfterImages[currentImageIndex]}
              alt={`Before and after using neck massager - showing tension relief ${currentImageIndex + 1}`}
              className="w-full h-full object-contain" // Changed to object-contain to show full image
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent">
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Experience the Difference</h3>
                <p className="text-white/90">
                  Feel the transformation from tense, stressed muscles to complete relaxation and relief
                </p>
              </div>
            </div>
            
            {/* Image Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {beforeAfterImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}