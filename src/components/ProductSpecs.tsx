import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";

const features = [
  "6 rotating massage balls; 360° smooth rolling",
  "Ergonomic swan-shaped design with \"ears\" for grip; dual balls removable/washable",
  "Adjustable via squeeze handles",
  "Deep tissue relief, mimics physical therapist's hands",
  "Improves skin circulation, reduces puffiness, facial/neck/body use",
  "Lightweight, compact—great for home, travel, office",
  "Removable & washable components",
  "Unisex design for all age groups"
];

const packageIncludes = [
  "Cervical spine massager ×1",
  "Natural powder crystal scraping board ×1"
];

export default function ProductSpecs() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Product 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Specifications
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Every detail is carefully designed for your comfort, safety, and therapeutic effectiveness.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Key Features */}
          <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✨</span>
                </div>
                <span>Key Features</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="h-4 w-4 text-secondary mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Package Contents */}
          <Card className="shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-primary rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">📦</span>
                </div>
                <span>What's Included</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {packageIncludes.map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Badge variant="secondary" className="mt-0.5 flex-shrink-0 text-xs">
                    {index + 1}
                  </Badge>
                  <span className="text-sm">{item}</span>
                </div>
              ))}
              
              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Total Value:</span>
                  <span className="text-lg font-bold text-primary">$49.99</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">
                  Includes premium gift box packaging perfect for gifting
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-secondary/10 to-accent/10 px-6 py-3 rounded-full border border-secondary/20">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-secondary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Made with natural, eco-friendly materials</span>
            </div>
            <div className="w-px h-4 bg-border"></div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Tested by wellness professionals</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}