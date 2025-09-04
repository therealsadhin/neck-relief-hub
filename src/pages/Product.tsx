import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { CheckCircle, Star, Shield, Truck, RotateCcw } from "lucide-react";
import ProductImageGallery from "@/components/ProductImageGallery";
import { useTheme } from "@/contexts/ThemeContext";

interface ProductProps {
  onAddToCart: (color: string) => void;
}

export default function Product({ onAddToCart }: ProductProps) {
  const { colorVariant } = useTheme();
  const [selectedColor, setSelectedColor] = useState("Ocean Blue");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    // Update the selected color based on the theme context
    if (colorVariant === 'pink') {
      setSelectedColor("Pink");
    } else {
      setSelectedColor("Ocean Blue");
    }
  }, [colorVariant]);

  const colors = [
    { name: "Ocean Blue", value: "blue", class: "bg-blue-500" },
    { name: "Pink", value: "pink", class: "bg-pink-400" }
  ];

  const features = [
    "6 rotating massage balls; 360° smooth rolling",
    "Ergonomic swan-shaped design with \"ears\" for grip; dual balls removable/washable",
    "Adjustable via squeeze handles",
    "Deep tissue relief, mimics physical therapist's hands",
    "Improves skin circulation, reduces puffiness, facial/neck/body use",
    "Lightweight, compact—great for home, travel, office",
    "High-quality PP (plastic) body",
    "Natural powder crystal jade scraping board"
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container py-8">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Product Images */}
          <ProductImageGallery selectedColor={selectedColor} />

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                6-Roller Cervical Massager
              </h1>
              <p className="text-lg text-muted-foreground mt-2">
                Multifunctional Manual Six-wheel Neck Massager Massage Relieve Roller Massage Tool
              </p>
            </div>

            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                4.9/5 from 200+ reviews
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">$19.99</div>
              <p className="text-sm text-muted-foreground">
                <span className="line-through">$49.99</span> Save $30 (60% off)
              </p>
            </div>

            <Separator />

            {/* Color Selection */}
            <div className="space-y-3">
              <h3 className="font-semibold">Color: {selectedColor}</h3>
              <div className="flex space-x-3">
                {colors.map((color) => (
                  <button
                    key={color.value}
                    onClick={() => setSelectedColor(color.name)}
                    className={`w-10 h-10 rounded-full border-2 ${color.class} ${
                      selectedColor === color.name 
                        ? 'border-primary shadow-lg' 
                        : 'border-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="space-y-3">
              <h3 className="font-semibold">Quantity</h3>
              <div className="flex items-center space-x-3">
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  -
                </Button>
                <span className="text-xl font-semibold w-12 text-center">{quantity}</span>
                <Button
                  variant="outline"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  +
                </Button>
              </div>
            </div>

            <Separator />

            {/* Add to Cart */}
            <div className="space-y-4">
              <Button 
                variant="wellness" 
                size="lg" 
                className="w-full text-lg py-6"
                onClick={() => onAddToCart(selectedColor)}
              >
                Add to Cart - ${(19.99 * quantity).toFixed(2)}
              </Button>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center space-y-2">
                  <Shield className="h-6 w-6 text-primary" />
                  <span className="text-xs text-muted-foreground">30-Day Guarantee</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <Truck className="h-6 w-6 text-secondary" />
                  <span className="text-xs text-muted-foreground">Free Shipping</span>
                </div>
                <div className="flex flex-col items-center space-y-2">
                  <RotateCcw className="h-6 w-6 text-accent" />
                  <span className="text-xs text-muted-foreground">Easy Returns</span>
                </div>
              </div>
            </div>

            <Separator />

            {/* Key Features */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Key Features</h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-16 space-y-8">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold">Premium Quality</h3>
              <p className="text-sm text-muted-foreground">
                Made with high-quality PP plastic and natural crystal jade for durability and effectiveness.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-accent rounded-2xl flex items-center justify-center mx-auto">
                <CheckCircle className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold">Proven Results</h3>
              <p className="text-sm text-muted-foreground">
                Clinically tested design that provides measurable relief from neck tension and muscle stiffness.
              </p>
            </div>
            
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto">
                <Star className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold">Customer Loved</h3>
              <p className="text-sm text-muted-foreground">
                Thousands of satisfied customers with 98% reporting noticeable improvement within one week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}