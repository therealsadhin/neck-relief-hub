import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How does the 6-roller neck massager work?",
    answer: "Our massager features six high-quality rotating balls that create a 360° rolling motion. This mimics the pressure and movement of professional massage therapy, targeting trigger points and muscle knots to provide deep tissue relief. The ergonomic swan design ensures optimal grip and pressure distribution."
  },
  {
    question: "Is there a warranty or return policy?",
    answer: "We offer a comprehensive 2-year warranty on all our products, covering manufacturing defects. Additionally, we provide a 30-day money-back guarantee if you're not completely satisfied with your purchase. Our customer support team is available 24/7 to assist with any questions or concerns."
  },
  {
    question: "Is it safe for daily use?",
    answer: "Yes, absolutely! The massager is designed for daily use and is completely safe when used as directed. We recommend 10-15 minute sessions, 1-2 times per day. The gentle yet effective pressure makes it suitable for regular use without risk of over-massage or injury."
  },
  {
    question: "What areas of the body can I use it on?",
    answer: "The massager is versatile and can be used on multiple areas including the neck, shoulders, upper back, legs, arms, and even feet. The included crystal jade scraping board is perfect for facial massage and can be used on the neck and body for additional circulation benefits."
  },
  {
    question: "How do I clean and maintain the massager?",
    answer: "Maintenance is simple! The massage balls are removable and washable with warm soapy water. The main body can be wiped clean with a damp cloth. The crystal jade scraping board should be cleaned gently with warm water and dried thoroughly. Always ensure all parts are completely dry before storing."
  },
  {
    question: "Can people with medical conditions use this massager?",
    answer: "While our massager is generally safe for most people, we recommend consulting with your healthcare provider before use if you have any medical conditions, especially neck injuries, blood clots, severe osteoporosis, or if you're pregnant. When in doubt, always check with a medical professional first."
  },
  {
    question: "How quickly will I see results?",
    answer: "Many customers report immediate relief after their first session! For best results, we recommend consistent daily use. Most users notice significant improvement in muscle tension and stiffness within the first week, with continued benefits building over time with regular use."
  },
  {
    question: "What makes this different from other neck massagers?",
    answer: "Our unique features include: 6 professional-grade rotating balls (vs. fixed balls in cheaper models), ergonomic swan design for comfortable grip, premium PP materials, included crystal jade scraping board, adjustable pressure control, and a design that truly mimics professional massage therapy techniques."
  }
];

export default function FAQ() {
  // Filter out the warranty question
  const filteredFaqs = faqs.filter(faq => faq.question !== "Is there a warranty or return policy?");

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
            Frequently Asked 
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              {" "}Questions
            </span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground">
            Everything you need to know about our neck massager. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 bg-gradient-to-r from-card to-card/50 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-wellness)] transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-4 bg-gradient-to-r from-secondary/10 to-accent/10 px-6 py-4 rounded-full border border-secondary/20">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">?</span>
            </div>
            <span className="text-sm font-medium">Still have questions?</span>
            <a 
              href="/contact" 
              className="text-sm font-semibold text-primary hover:text-secondary transition-colors underline underline-offset-4"
            >
              Contact our support team
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}