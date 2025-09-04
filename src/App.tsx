import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Index from "./pages/Index";
import Product from "./pages/Product";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import TermsOfService from "@/pages/TermsOfService";
import ReturnPolicy from "@/pages/ReturnPolicy";

const queryClient = new QueryClient();

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  color: string;
  image: string;
}

const App = () => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const addToCart = (color: string = "Ocean Blue") => {
    // Map the display color names to folder names
    const colorFolderMap: Record<string, string> = {
      "Ocean Blue": "sky blue",
      "Pink": "pink"
    };
    
    const folderName = colorFolderMap[color] || "sky blue";
    
    const newItem: CartItem = {
      id: `massager-${color.toLowerCase().replace(' ', '-')}`,
      name: "6-Roller Cervical Massager",
      price: 49.99,
      quantity: 1,
      color: color,
      image: `/assests/images/${folderName}/neko-6-roller-massage-therapy-${folderName.replace(' ', '')}-main.jpg`
    };

    setCartItems(prev => {
      const existingItem = prev.find(item => item.id === newItem.id);
      if (existingItem) {
        return prev.map(item => 
          item.id === newItem.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, newItem];
    });
    
    setIsCartOpen(true);
  };

  const updateCartQuantity = (id: string, quantity: number) => {
    if (quantity === 0) {
      setCartItems(prev => prev.filter(item => item.id !== id));
    } else {
      setCartItems(prev => 
        prev.map(item => 
          item.id === id ? { ...item, quantity } : item
        )
      );
    }
  };

  const removeCartItem = (id: string) => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const handleCheckout = () => {
    // For now, just show an alert. In a real app, this would integrate with Stripe
    alert("Checkout functionality would be implemented with Supabase + Stripe integration!");
    setIsCartOpen(false);
  };

  const cartItemsCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <div className="min-h-screen flex flex-col">
              <Header 
                cartItemsCount={cartItemsCount}
                onCartClick={() => setIsCartOpen(true)}
              />
              <main className="flex-1">
                <Routes>
                  <Route path="/" element={<Index onAddToCart={addToCart} />} />
                  <Route path="/product" element={<Product onAddToCart={addToCart} />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                  <Route path="/return-policy" element={<ReturnPolicy />} />
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
              <Footer />
              <Cart
                isOpen={isCartOpen}
                onClose={() => setIsCartOpen(false)}
                items={cartItems}
                onUpdateQuantity={updateCartQuantity}
                onRemoveItem={removeCartItem}
                onCheckout={handleCheckout}
              />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;