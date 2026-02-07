"use client";

import { Button } from "@/components/ui/Button";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ScheduleVisitForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        message: ""
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Using FormSubmit.co for simple email notifications without backend config
            const response = await fetch("https://formsubmit.co/ajax/hssignatureprime@gmail.com", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    _subject: `New Visit Request from ${formData.name}`,
                    _template: "table" // Optional: makes the email look nicer
                }),
            });

            if (response.ok) {
                alert("Visit Scheduled Successfully! You will receive a confirmation shortly.");
                setFormData({ name: "", email: "", phone: "", date: "", message: "" });
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to connect to the server.");
        } finally {
            setLoading(false);
        }
    }

    return (
        <main className="pt-32 pb-24 bg-prime-light min-h-screen">
            <div className="container mx-auto px-6">
                {/* Premium Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <p className="text-prime-gold text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4">
                        Schedule a Tour
                    </p>
                    <h1 className="text-4xl md:text-6xl font-serif mb-4" style={{ color: '#D4AF37' }}>
                        Visit <span className="italic text-red-600">Us</span>
                    </h1>
                    <div className="h-1.5 w-24 bg-gradient-to-r from-prime-gold to-transparent mx-auto" />
                </motion.div>

                {/* Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="max-w-2xl mx-auto bg-white p-10 md:p-12 shadow-2xl border-t-4 border-prime-gold"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-black mb-2 font-semibold text-sm tracking-wide">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-sm focus:outline-none focus:border-prime-gold focus:ring-2 focus:ring-prime-gold/20 transition-all !bg-white !text-black"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-2 font-semibold text-sm tracking-wide">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-sm focus:outline-none focus:border-prime-gold focus:ring-2 focus:ring-prime-gold/20 transition-all !bg-white !text-black"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-2 font-semibold text-sm tracking-wide">Phone Number</label>
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-sm focus:outline-none focus:border-prime-gold focus:ring-2 focus:ring-prime-gold/20 transition-all !bg-white !text-black"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-2 font-semibold text-sm tracking-wide">Preferred Date</label>
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                required
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-sm focus:outline-none focus:border-prime-gold focus:ring-2 focus:ring-prime-gold/20 transition-all !bg-white !text-black"
                                onChange={handleChange}
                            />
                        </div>
                        <div>
                            <label className="block text-black mb-2 font-semibold text-sm tracking-wide">Message (Optional)</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                rows={4}
                                className="w-full px-4 py-3 border-2 border-gray-300 rounded-sm focus:outline-none focus:border-prime-gold focus:ring-2 focus:ring-prime-gold/20 transition-all resize-none !bg-white !text-black"
                                onChange={handleChange}
                            />
                        </div>
                        <Button
                            type="submit"
                            style={{ backgroundColor: '#1A1A1A', color: '#FFFFFF' }}
                            className="w-full py-4 text-lg font-semibold uppercase tracking-widest hover:bg-prime-gold hover:!text-white border border-transparent hover:border-prime-gold transition-all duration-300 shadow-lg mt-8"
                            disabled={loading}
                        >
                            {loading ? "Scheduling..." : "Confirm Schedule"}
                        </Button>
                    </form>
                </motion.div>
            </div>
        </main>
    );
}
