import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function PrivacyPolicy() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionTitle title="Privacy Policy" subtitle="Your Data & Trust" className="mb-12" />

                <div className="prose prose-lg max-w-none text-gray-600 font-light">
                    <p className="mb-6">
                        Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <p className="mb-8">
                        At <strong>Signature Prime</strong> ("we," "our," or "us"), we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy outlines how we collect, use, disclose, and safeguard your data when you visit our website or use our services (Ram Niwas Residency and Balaji Hostel).
                    </p>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">1. Information We Collect</h3>
                    <p className="mb-4">
                        We may collect personal information that you voluntarily provide to us when you:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Register on our website or fill out forms (e.g., "Schedule a Visit", "Contact Us").</li>
                        <li>Inquire about our hostel services.</li>
                        <li>Subscribe to our newsletters or updates.</li>
                    </ul>
                    <p className="mb-4">
                        The types of information we may collect include:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li><strong>Personal Details:</strong> Name, email address, phone number, and student ID (if applicable).</li>
                        <li><strong>Usage Data:</strong> Information about how you use our website, including IP address, browser type, and pages visited.</li>
                    </ul>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">2. How We Use Your Information</h3>
                    <p className="mb-4">
                        We use the information we collect for the following purposes:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>To provide and manage our hostel accommodation services.</li>
                        <li>To schedule visits and respond to your inquiries.</li>
                        <li>To send you administrative information, such as updates to our terms or policies.</li>
                        <li>To improve our website functionality and user experience.</li>
                        <li>To ensure the security of our residents and our platform.</li>
                    </ul>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">3. Data Security</h3>
                    <p className="mb-6">
                        We implement appropriate technical and organizational security measures to protect your personal information from unauthorized access, accidental loss, disclosure, or destruction. However, please be aware that no method of transmission over the internet is 100% secure.
                    </p>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">4. Sharing Your Information</h3>
                    <p className="mb-6">
                        We do not sell, trade, or rent your personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding visitors and users with our business partners and trusted affiliates.
                    </p>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">5. Cookies and Tracking Technologies</h3>
                    <p className="mb-6">
                        Our social and website platform may use "cookies" to enhance your experience. You can choose to set your web browser to refuse cookies or to alert you when cookies are being sent. If you do so, note that some parts of the site may not function properly.
                    </p>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">6. Your Rights</h3>
                    <p className="mb-6">
                        You have the right to request access to the personal data we hold about you, to request corrections to any errors, or to request the deletion of your data, subject to certain legal obligations.
                    </p>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">7. Contact Us</h3>
                    <p className="mb-6">
                        If you have any questions about this Privacy Policy, please contact us at:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <p className="font-medium text-black">Signature Prime Office</p>
                        <p>Opposite Manipal University Jaipur</p>
                        <p>Jaipur, Rajasthan</p>
                        <p className="mt-2 text-prime-gold">Email: support@hostelsignatureprime.com</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
