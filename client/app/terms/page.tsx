"use client";

import React from 'react';
import SectionTitle from '@/components/ui/SectionTitle';

export default function TermsOfService() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <SectionTitle title="Terms & Conditions" subtitle="Rules & Regulations" className="mb-12" />

                <div className="prose prose-lg max-w-none text-gray-600 font-light">
                    <p className="mb-6">
                        Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>

                    <p className="mb-8">
                        Welcome to <strong>Signature Prime</strong>. By accessing our website and using our services (Ram Niwas Residency and Balaji Hostel), you agree to comply with and be bound by the following terms and conditions. Please review them carefully.
                    </p>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">1. Acceptance of Terms</h3>
                    <p className="mb-4">
                        By accessing or using our services, you acknowledge that you have read, understood, and agree to be bound by these Terms. If you do not agree with any part of these terms, you must not use our services.
                    </p>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">2. Use of Services</h3>
                    <p className="mb-4">
                        Signature Prime provides student accommodation services. You agree to use our website and services only for lawful purposes and in accordance with these Terms. You adhere to the rules and regulations of the specific hostel property (Ram Niwas or Balaji) you reside in.
                    </p>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">3. Booking and Payments</h3>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>All room bookings are subject to availability.</li>
                        <li>A security deposit and advance rent may be required to confirm your booking.</li>
                        <li>Payments must be made via accepted methods as communicated by our administration.</li>
                        <li>Refund policies are subject to the specific agreement signed at the time of admission.</li>
                    </ul>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">4. Resident Code of Conduct</h3>
                    <p className="mb-4">
                        To maintain a safe and conducive environment for all students, residents must:
                    </p>
                    <ul className="list-disc pl-6 mb-6 space-y-2">
                        <li>Respect the privacy and rights of other residents and staff.</li>
                        <li>Refrain from illegal activities, drug use, or possession of prohibited items on the premises.</li>
                        <li>Adhere to curfew timings and visitor policies enforced by the hostel administration.</li>
                        <li>Maintain cleanliness and prevent damage to hostel property.</li>
                    </ul>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">5. Limitation of Liability</h3>
                    <p className="mb-6">
                        Signature Prime shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the specific service features on the website. While we strive to keep our premises secure, residents are responsible for their personal belongings.
                    </p>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">6. Changes to Terms</h3>
                    <p className="mb-6">
                        We reserve the right to modify these terms at any time. We will notify users of any significant changes by posting the new Terms on this page. Your continued use of the service after such changes constitutes your acceptance of the new Terms.
                    </p>

                    <h3 className="text-2xl font-serif text-black mb-4 mt-8">7. Contact Information</h3>
                    <p className="mb-6">
                        Queries regarding these Terms and Conditions should be sent to:
                    </p>
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-100">
                        <p className="font-medium text-black">Signature Prime Office</p>
                        <p className="mt-2 text-prime-gold">Email: info@signatureprime.com</p>
                        <p>Phone: +91 98765 43210</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
