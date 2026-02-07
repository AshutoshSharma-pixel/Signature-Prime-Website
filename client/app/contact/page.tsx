"use client";

import { useState } from "react";
import SectionTitle from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("https://formsubmit.co/ajax/hssignatureprime@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Contact Inquiry from ${formData.name}`,
                    _template: "table"
                }),
            });

            if (response.ok) {
                alert("Message sent successfully! We will get back to you soon.");
                setFormData({ name: "", email: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to send message.");
        } finally {
            setLoading(false);
        }
    };

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
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Name"
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-prime-gold focus:ring-1 focus:ring-prime-gold text-black"
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Your Email"
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-prime-gold focus:ring-1 focus:ring-prime-gold text-black"
                            />
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                rows={4}
                                placeholder="Your Message"
                                required
                                className="w-full px-4 py-3 border border-gray-200 rounded focus:outline-none focus:border-prime-gold focus:ring-1 focus:ring-prime-gold resize-none text-black"
                            />
                            <Button className="w-full" disabled={loading}>
                                {loading ? "Sending..." : "Send Message"}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
}
