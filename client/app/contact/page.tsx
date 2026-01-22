"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    return (
        <main className="pt-32 pb-24 bg-prime-light min-h-screen">
            <div className="container mx-auto px-6">
                <SectionTitle title="Get in Touch" subtitle="Contact Us" />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="flex items-start gap-4">
                            <div className="bg-prime-gold/10 p-3 rounded-full text-prime-gold">
                                <MapPin size={24} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-2">Visit Us</h3>
                                <p className="text-gray-600">Near Manipal University Jaipur,<br /> Dehmi Kalan, Jaipur, Rajasthan 303007</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-prime-gold/10 p-3 rounded-full text-prime-gold">
                                <Phone size={24} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-2">Call Us</h3>
                                <p className="text-gray-600">+91 98765 43210</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="bg-prime-gold/10 p-3 rounded-full text-prime-gold">
                                <Mail size={24} />
                            </div>
                            <div>
                                <h3 className="font-serif text-xl mb-2">Email Us</h3>
                                <p className="text-gray-600">info@signatureprime.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white p-8 rounded-sm shadow-lg">
                        <form className="space-y-6">
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-prime-gold"
                            />
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-prime-gold"
                            />
                            <textarea
                                rows={4}
                                placeholder="Your Message"
                                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-prime-gold"
                            />
                            <Button className="w-full">Send Message</Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
