import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare, HeadphonesIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get detailed help via email",
    contact: "healthyway1990@gmail.com",
    availability: "Response within 24 hours"
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Speak directly with our team",
    contact: "+8801540318111",
    availability: "Mon-Fri, 9AM-6PM (GMT+6)"
  },
  {
    icon: MapPin,
    title: "Our Location",
    description: "Visit our office",
    contact: "Rangpur, Bangladesh",
    availability: "By appointment only"
  }
];

const faqCategories = [
  {
    icon: HeadphonesIcon,
    title: "Product Questions",
    description: "How to use, maintenance, features of Nekko 6-Roller Massager"
  },
  {
    icon: MapPin,
    title: "Shipping & Returns",
    description: "Delivery, tracking, return process for your order"
  },
  {
    icon: Clock,
    title: "Order Support",
    description: "Order status, modifications, billing inquiries"
  }
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    // Show a message that the form is being submitted
    toast({
      title: "Sending your message...",
      description: "Please wait while we process your request.",
    });
    
    // Don't prevent default - let the form submit to FormSubmit
    // The form will redirect after submission
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = {
    email: "healthyway1990@gmail.com",
    phone: "+8801540318111",
    address: {
      street: "Rangpur",
      city: "Bangladesh"
    },
    hours: "Monday-Friday: 9AM-6PM EST",
    contact: "healthyway1990@gmail.com",
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              Get in 
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about our Nekko 6-Roller Neck Massager? Need support with your order? We're here to help you on your wellness journey.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3 mb-16">
            {contactMethods.map((method, index) => (
              <Card key={index} className="border-0 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto">
                    <method.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">{method.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{method.description}</p>
                    <p className="font-medium text-primary">{method.contact}</p>
                    <p className="text-xs text-muted-foreground mt-1">{method.availability}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
            {/* Contact Form */}
            <Card className="shadow-[var(--shadow-wellness)]">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Us</CardTitle>
                <p className="text-muted-foreground">
                  Have questions about our Nekko 6-Roller Neck Massager or need help with your order? Send us a message and we'll get back to you as soon as possible.
                </p>
              </CardHeader>
              <CardContent>
                <form 
                  onSubmit={handleSubmit} 
                  className="space-y-6"
                  action="https://formsubmit.co/healthyway1990@gmail.com" 
                  method="POST"
                >
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Full Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email Address *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="text-sm font-medium mb-2 block">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell us more about your question or concern..."
                      rows={5}
                      required
                    />
                  </div>
                  
                  {/* FormSubmit hidden fields */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="New Contact Form Submission from Nekko" />
                  <input type="hidden" name="_next" value="http://localhost:8080/contact" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="text" name="_honey" style={{ display: "none" }} />
                  
                  <Button type="submit" variant="wellness" size="lg" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Company Info & FAQ Categories */}
            <div className="space-y-8">
              {/* Company Info */}
              <Card className="shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Visit Our Office</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Nekko Headquarters</h4>
                    <p className="text-muted-foreground">
                      Rangpur<br />
                      Bangladesh
                    </p>
                  </div>
                  
                  <div className="flex items-center space-x-3 text-sm">
                    <Clock className="h-4 w-4 text-secondary" />
                    <span className="text-muted-foreground">
                      Monday - Friday: 9:00 AM - 6:00 PM EST
                    </span>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ Categories */}
              <Card className="shadow-[var(--shadow-card)]">
                <CardHeader>
                  <CardTitle>Quick Help Categories</CardTitle>
                  <p className="text-muted-foreground text-sm">
                    Find answers to common questions in these areas:
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  {faqCategories.map((category, index) => (
                    <div key={index} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                      <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                        <category.icon className="h-4 w-4 text-white" />
                      </div>
                      <div>
                        <h4 className="font-medium">{category.title}</h4>
                        <p className="text-sm text-muted-foreground">{category.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Response Time Promise */}
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-6 border border-primary/10">
                <h3 className="font-semibold mb-2 flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <span>Our Response Promise</span>
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  We're committed to responding to all inquiries about our Nekko 6-Roller Neck Massager within 24 hours during business days. 
                  For urgent matters regarding your order, please call our support line for immediate assistance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}