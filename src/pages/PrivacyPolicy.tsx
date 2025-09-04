import { Link } from "react-router-dom";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container py-16">
        <div className="max-w-4xl mx-auto">
          <Link to="/" className="inline-flex items-center text-primary hover:text-secondary transition-colors mb-8">
            ← Back to Home
          </Link>
          
          <div className="bg-card rounded-2xl p-8 shadow-[var(--shadow-card)]">
            <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground mb-6">
                <strong>Effective Date:</strong> [Current Date]
              </p>
              
              <p className="mb-6">
                Nekko ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and purchase our products. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Information We Collect</h2>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Personal Information</h3>
              <p className="mb-4">
                We may collect personally identifiable information, such as your name, shipping address, email address, telephone number, and credit card information when you place an order or register on our site.
              </p>
              
              <h3 className="text-xl font-medium mt-6 mb-3">Usage Data</h3>
              <p className="mb-4">
                We may also collect information that your browser sends whenever you visit our site ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address, browser type, browser version, the pages of our site that you visit, the time and date of your visit, the time spent on those pages, and other diagnostic data.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Use of Your Information</h2>
              <p className="mb-4">
                We use the collected data for various purposes:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features of our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent, and address technical issues</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Disclosure of Your Information</h2>
              <p className="mb-4">
                We may disclose personal information in the following situations:
              </p>
              <ul className="list-disc pl-8 mb-6 space-y-2">
                <li><strong>With Service Providers:</strong> We may share your personal information with service providers to monitor and analyze the use of our service.</li>
                <li><strong>For Business Transfers:</strong> We may share or transfer your personal information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business.</li>
                <li><strong>With Affiliates:</strong> We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Policy.</li>
                <li><strong>With Business Partners:</strong> We may share your information with our business partners to offer you certain products, services or promotions.</li>
                <li><strong>With Your Consent:</strong> We may disclose your personal information for any other purpose with your consent.</li>
              </ul>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Security of Your Information</h2>
              <p className="mb-6">
                The security of your personal information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Children's Privacy</h2>
              <p className="mb-6">
                Our service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under the age of 13. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Changes to This Privacy Policy</h2>
              <p className="mb-6">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p className="mb-6">
                If you have any questions about this Privacy Policy, please contact us at:
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