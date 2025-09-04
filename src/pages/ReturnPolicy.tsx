import { Link } from "react-router-dom";

export default function ReturnPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
            ← Back to Home
          </Link>
          
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
            <h1 className="text-4xl font-bold mb-8">Return Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Effective Date:</strong> [Current Date]
              </p>
              
              <p className="mb-6">
                At Nekko, we want you to be completely satisfied with your purchase. If for any reason you are not satisfied with your Nekko 6-Roller Neck Massager, we offer a 15-day return policy from the date of delivery.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Eligibility for Returns</h2>
              <p className="mb-4">
                To be eligible for a return, your item must be:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>In its original condition and packaging</li>
                <li>Unused and in the same condition that you received it</li>
                <li>Returned within 15 days of delivery</li>
                <li>Accompanied by the original receipt or proof of purchase</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Non-Returnable Items</h2>
              <p className="mb-4">
                The following items cannot be returned:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>Items that have been used or damaged by the customer</li>
                <li>Items not in their original packaging</li>
                <li>Items returned after the 15-day window</li>
                <li>Items without proof of purchase</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Return Process</h2>
              <ol className="list-decimal pl-8 mb-6 space-y-2">
                <li>Contact our customer service team at support@nekko.com to initiate your return</li>
                <li>Provide your order number and reason for return</li>
                <li>Our team will provide you with a return authorization and shipping instructions</li>
                <li>Pack the item securely in its original packaging</li>
                <li>Ship the item to the address provided by our team</li>
              </ol>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Refunds</h2>
              <p className="mb-4">
                Once we receive your returned item and verify that it meets our return criteria, we will process your refund. Please note:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>Refunds will be processed to the original payment method</li>
                <li>It may take 7-14 business days for the refund to appear in your account</li>
                <li>Shipping costs are non-refundable</li>
                <li>Customers are responsible for return shipping costs</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Damaged or Defective Items</h2>
              <p className="mb-6">
                If you receive a damaged or defective item, please contact us immediately at support@nekko.com. We will arrange for a replacement or refund at no additional cost to you, including covering return shipping expenses.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">How to Contact Us</h2>
              <p className="mb-4">
                If you have any questions about our return policy, please contact us:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>Email: support@nekko.com</li>
                <li>Phone: +8801540318111</li>
                <li>Address: Rangpur, Bangladesh</li>
              </ul>
              
              <div className="bg-primary/5 border border-primary/10 rounded-lg p-6 mt-8">
                <h3 className="text-xl font-semibold mb-3">Important Note</h3>
                <p>
                  All returns must be initiated through our customer service team. Returns sent without authorization may not be accepted. 
                  We recommend using a trackable shipping service and purchasing shipping insurance for items of significant value.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}