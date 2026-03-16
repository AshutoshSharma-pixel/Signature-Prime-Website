"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/Button";

const callbackNumbers = [
    { label: "+91 97722 56724", value: "+91 97722 56724" },
    { label: "+91 95870 00206", value: "+91 95870 00206" },
];

export default function Hero() {
    const [showCallbackForm, setShowCallbackForm] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        callbackNumber: callbackNumbers[0].value,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
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
                    Accept: "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    phone: formData.phone,
                    preferred_callback_number: formData.callbackNumber,
                    _subject: `New Callback Request from ${formData.name}`,
                    _template: "table",
                }),
            });

            if (response.ok) {
                alert("Callback request sent successfully.");
                setFormData({
                    name: "",
                    phone: "",
                    callbackNumber: callbackNumbers[0].value,
                });
                setShowCallbackForm(false);
            } else {
                alert("Something went wrong. Please try again.");
            }
        } catch (error) {
            console.error("Error submitting callback form:", error);
            alert("Failed to send callback request.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Background - Using a gradient placeholder for now, ideally replaced by video/image */}
            {/* Background */}
            <div className="absolute inset-0 bg-black z-0">
                <div className="absolute inset-0 opacity-60 bg-[url('/hero-3d-bg-v2.png')] bg-cover bg-center"></div>
                {/* Gradient Overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
            </div>

            <div className="container relative z-10 text-center px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-white/90 text-sm md:text-base tracking-[0.2em] uppercase mb-6"
                >
                    Premium Student Living Near Manipal University Jaipur
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif text-white mb-8 leading-tight"
                >
                    Where Comfort <br /> Meets Care
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col items-center gap-4"
                >
                    <Button
                        variant="outline"
                        className="text-lg px-8 py-4 text-white border-white hover:bg-prime-gold hover:border-prime-gold hover:text-white"
                        onClick={() => setShowCallbackForm((current) => !current)}
                    >
                        Get a Callback
                    </Button>
                    <div className="flex flex-col items-center gap-1 text-sm text-white/85 md:flex-row md:gap-4">
                        {callbackNumbers.map((item) => (
                            <a
                                key={item.value}
                                href={`tel:${item.value.replace(/\s+/g, "")}`}
                                className="hover:text-prime-gold transition-colors"
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                    {showCallbackForm ? (
                        <motion.form
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            onSubmit={handleSubmit}
                            className="w-full max-w-md space-y-4 rounded-2xl border border-white/15 bg-black/55 p-5 backdrop-blur-md"
                        >
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your name"
                                required
                                className="w-full rounded-md border border-white/20 bg-white/95 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-prime-gold"
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Your phone number"
                                required
                                className="w-full rounded-md border border-white/20 bg-white/95 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-prime-gold"
                            />
                            <div className="text-left">
                                <label htmlFor="callbackNumber" className="mb-2 block text-sm text-white/85">
                                    Which number should call you?
                                </label>
                                <select
                                    id="callbackNumber"
                                    name="callbackNumber"
                                    value={formData.callbackNumber}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-white/20 bg-white/95 px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-prime-gold"
                                >
                                    {callbackNumbers.map((item) => (
                                        <option key={item.value} value={item.value}>
                                            {item.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-prime-gold text-white hover:bg-prime-gold/90"
                                disabled={loading}
                            >
                                {loading ? "Sending..." : "Request Callback"}
                            </Button>
                        </motion.form>
                    ) : null}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/70"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
            >
                <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white to-transparent mx-auto"></div>
                <p className="text-[10px] uppercase tracking-widest mt-2">Scroll</p>
            </motion.div>
        </section>
    );
}
