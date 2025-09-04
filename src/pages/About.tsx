import { Heart, Users, Award, Target, Zap, Clock, Shield } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const values = [
  {
    icon: Heart,
    title: "Wellness First",
    description: "We believe that everyone deserves access to effective, natural pain relief solutions that improve their daily quality of life."
  },
  {
    icon: Users,
    title: "Customer-Centric",
    description: "Our customers are at the heart of everything we do. We listen, learn, and continuously improve based on your feedback."
  },
  {
    icon: Award,
    title: "Quality Excellence",
    description: "We source only the highest quality materials and maintain rigorous testing standards to ensure product effectiveness."
  },
  {
    icon: Target,
    title: "Purposeful Innovation",
    description: "Every product is designed with a specific purpose: to provide natural, accessible wellness solutions for modern life."
  }
];

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              About Our 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}Neck Massager
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our 6-Roller Cervical Massager is designed to provide professional-grade neck and shoulder relief 
              through innovative engineering and thoughtful design.
            </p>
          </div>
        </div>
      </section>

      {/* Product Description */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Revolutionary Design</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our neck massager features six high-quality rotating balls that create a 360° rolling motion, 
                mimicking the pressure and movement of professional massage therapy. The ergonomic swan design 
                ensures optimal grip and pressure distribution for maximum effectiveness.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                The device is fully adjustable via squeeze handles, allowing you to control the pressure 
                according to your comfort level. The dual massage balls are removable and washable, ensuring 
                hygiene and longevity.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="flex items-center space-x-2">
                  <Zap className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Instant Relief</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-secondary" />
                  <span className="text-sm font-medium">Premium Quality</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-accent" />
                  <span className="text-sm font-medium">Time Efficient</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium">Improved Circulation</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="/assests/images/neko-6-roller-massage-therapy-product-6.jpg"
                alt="6-Roller Cervical Massager in use"
                className="w-full h-auto rounded-2xl shadow-[var(--shadow-wellness)]"
              />
              <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-primary to-secondary text-white px-6 py-3 rounded-full font-semibold">
                Professional Grade
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Key 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}Features
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              Designed with precision to deliver exceptional massage therapy experience
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-0 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">6 Rotating Massage Balls</h3>
                <p className="text-sm text-muted-foreground">
                  Professional-grade rotating balls that create a 360° rolling motion for deep tissue relief
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Ergonomic Swan Design</h3>
                <p className="text-sm text-muted-foreground">
                  Unique swan-shaped design with "ears" for optimal grip and pressure distribution
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Adjustable Pressure</h3>
                <p className="text-sm text-muted-foreground">
                  Squeeze handles allow you to control pressure according to your comfort level
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Removable & Washable</h3>
                <p className="text-sm text-muted-foreground">
                  Dual massage balls are removable and washable for hygiene and longevity
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-xl flex items-center justify-center">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Multi-Purpose Use</h3>
                <p className="text-sm text-muted-foreground">
                  Perfect for neck, shoulders, upper back, legs, arms, and even facial massage
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300">
              <CardContent className="p-6 space-y-4">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-xl flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold text-lg">Premium Materials</h3>
                <p className="text-sm text-muted-foreground">
                  High-quality PP plastic body with included crystal jade scraping board
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Our 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}Core Values
              </span>
            </h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
              These principles guide every decision we make and every product we create.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto">
                    <value.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Our Commitment to You
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're not just selling products – we're building a community of people who prioritize 
              their wellness and understand that small, consistent actions lead to transformative results. 
              Every product we create is tested by real people dealing with real pain, ensuring that 
              what we offer truly makes a difference in your daily life.
            </p>
            <div className="grid gap-4 md:grid-cols-3 mt-12">
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto">
                  <Heart className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">30-Day Guarantee</h3>
                <p className="text-sm text-muted-foreground">
                  If you're not completely satisfied, we'll make it right
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-full flex items-center justify-center mx-auto">
                  <Users className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Our wellness experts are here whenever you need guidance
                </p>
              </div>
              <div className="text-center space-y-2">
                <div className="w-12 h-12 bg-gradient-to-br from-accent to-primary rounded-full flex items-center justify-center mx-auto">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-semibold">Quality Promise</h3>
                <p className="text-sm text-muted-foreground">
                  Every product is rigorously tested for safety and effectiveness
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}