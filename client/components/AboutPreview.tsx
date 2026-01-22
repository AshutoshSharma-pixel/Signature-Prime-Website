"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function AboutPreview() {
    return (
        <section className="py-24 bg-black relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-prime-gold/10 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="mb-10 text-left">
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="text-[#D4AF37] text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4"
                            >
                                About Signature Prime
                            </motion.p>
                            <motion.h2
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="text-4xl md:text-6xl font-serif text-white leading-tight"
                            >
                                A <span className="italic text-red-600">Legacy</span> of <span className="italic" style={{ color: '#D4AF37' }}>Hospitality</span>
                            </motion.h2>
                            <div className="h-1.5 w-24 bg-gradient-to-r from-prime-gold to-transparent mt-6" />
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed font-light text-lg">
                            Redefining student housing with the elegance and grace of a luxury retreat.
                            At Signature Prime, we believe that your living space shapes your thinking space.
                        </p>
                        <p className="text-gray-300 mb-8 leading-relaxed font-light text-lg">
                            Located just minutes from Manipal University Jaipur, we offer a sanctuary
                            where academic focus blends seamlessly with premium comfort.
                            Experience a standard of living that respects your ambition.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 relative h-[500px]"
                    >
                        <div className="absolute inset-0 bg-prime-dark/10 z-10" />
                        {/* Placeholder for About Image */}
                        <div className="w-full h-full bg-gray-300 relative overflow-hidden rounded-sm shadow-2xl">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                Image: Luxury Interior Shot
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
