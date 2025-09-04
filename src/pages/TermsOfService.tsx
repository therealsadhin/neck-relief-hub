import { Link } from "react-router-dom";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
            ← Back to Home
          </Link>
          
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
            <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Effective Date:</strong> [Current Date]
              </p>
              
              <p className="mb-6">
                These Terms of Service ("Terms") govern your access to and use of the Nekko website and services. By accessing or using our website, you agree to be bound by these Terms and all applicable laws and regulations.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Our Service</h2>
              <p className="mb-4">
                You must be at least 18 years old to use our services. You agree to use our services only for lawful purposes and in accordance with these Terms.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Intellectual Property</h2>
              <p className="mb-6">
                The service and its original content, features, and functionality are and will remain the exclusive property of Nekko and its licensors. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of Nekko.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Products</h2>
              <p className="mb-4">
                All products are subject to availability. We reserve the right to discontinue any product at any time. We make every effort to display as accurately as possible the colors, features, specifications, and details of the products available on our site. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Pricing</h2>
              <p className="mb-6">
                We reserve the right to change our prices for products displayed on our website at any time. We also reserve the right to correct pricing errors even after an order has been placed.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Shipping and Delivery</h2>
              <p className="mb-6">
                We offer free shipping on orders over $50. Delivery times may vary based on your location. We are not responsible for delays caused by shipping carriers or customs.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Returns and Refunds</h2>
              <p className="mb-4">
                We offer a 15-day return policy for all products. Items must be returned in their original condition and packaging. Customers are responsible for return shipping costs. Refunds will be processed within 7-14 business days after we receive the returned item.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Limitation of Liability</h2>
              <p className="mb-6">
                In no event shall Nekko, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the service.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Governing Law</h2>
              <p className="mb-6">
                These Terms shall be governed and construed in accordance with the laws of Bangladesh, without regard to its conflict of law provisions.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to These Terms</h2>
              <p className="mb-6">
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days' notice prior to any new terms taking effect.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p className="mb-6">
                If you have any questions about these Terms, please contact us at:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>Email: support@nekko.com</li>
                <li>Phone: +8801540318111</li>
                <li>Address: Rangpur, Bangladesh</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}