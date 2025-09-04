import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Office Manager",
    rating: 5,
    comment: "This neck massager has been a game changer for my daily routine. After 8 hours at a desk, 10 minutes with this tool completely relieves my tension. The quality is outstanding!",
    avatar: "SJ"
  },
  {
    name: "Michael Chen",
    role: "Physical Therapist",
    rating: 5,
    comment: "As a PT, I recommend this to all my patients. The 6-roller design provides excellent deep tissue massage that rivals professional equipment. Great value for the price.",
    avatar: "MC"
  },
  {
    name: "Emily Rodriguez",
    role: "Yoga Instructor",
    rating: 5,
    comment: "I love how portable this is! I take it everywhere - to classes, travel, even use it during meditation. The swan design is not only beautiful but incredibly functional.",
    avatar: "ER"
  },
  {
    name: "David Thompson",
    role: "Construction Worker",
    rating: 5,
    comment: "Working construction puts a lot of strain on my neck and shoulders. This massager helps me unwind after tough days. The pressure is just right and it's built to last.",
    avatar: "DT"
  },
  {
    name: "Lisa Park",
    role: "Nurse",
    rating: 5,
    comment: "12-hour shifts left me with constant neck pain. This little device provides better relief than expensive massage appointments. The jade scraping board is a nice bonus!",
    avatar: "LP"
  },
  {
    name: "Robert Kim",
    role: "Retired Teacher", 
    rating: 5,
    comment: "At 68, I was skeptical, but this massager is gentle yet effective. My wife and I both use it daily. Easy to handle and the results speak for themselves.",
    avatar: "RK"
  }
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-muted/30 to-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            What Our 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Customers Say
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Join thousands of satisfied customers who have transformed their daily wellness routine 
            with our professional-grade neck massager.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="relative overflow-hidden border-0 bg-gradient-to-br from-card to-card/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white font-semibold text-sm">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <h3 className="font-semibold">{testimonial.name}</h3>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                  <Quote className="h-6 w-6 text-primary/30" />
                </div>

                <div className="flex items-center space-x-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  "{testimonial.comment}"
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-wrap justify-center items-center gap-6 bg-gradient-to-r from-primary/5 to-secondary/5 px-6 py-4 rounded-2xl border border-primary/10">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">4.9/5</div>
              <div className="text-sm text-muted-foreground">Average Rating</div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">200+</div>
              <div className="text-sm text-muted-foreground">Happy Customers</div>
            </div>
            <div className="w-px h-12 bg-border hidden md:block"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-accent">98%</div>
              <div className="text-sm text-muted-foreground">Would Recommend</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}