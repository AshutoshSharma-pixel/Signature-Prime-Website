"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";

export default function LifestylePreview() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <SectionTitle title="Life at Signature" subtitle="Moments & Memories" className="text-prime-dark" />

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] mt-16">
                    {/* Grid Items - varied spans for masonry feel */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="col-span-2 row-span-2 relative overflow-hidden group"
                    >
                        <Image
                            src="/community-event.webp"
                            alt="Community Events"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Community & Events</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="col-span-1 row-span-1 relative overflow-hidden group"
                    >
                        <Image
                            src="/meals.webp"
                            alt="Gourmet Dining"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Dining</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="col-span-1 row-span-1 relative overflow-hidden group"
                    >
                        <Image
                            src="/gym.webp"
                            alt="Fitness Center"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Happy Students</div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 }}
                        className="col-span-2 row-span-1 relative overflow-hidden group"
                    >
                        <Image
                            src="/study-area.webp"
                            alt="Quiet Study Zones"
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />
                        <div className="absolute inset-0 flex items-center justify-center text-white font-serif text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">Study Zones</div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
