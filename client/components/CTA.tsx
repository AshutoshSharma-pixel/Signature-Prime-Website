"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-32 relative bg-[#D4AF37] overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-10" />

            <div className="container relative z-10 px-6 text-center">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-serif text-white mb-8"
                >
                    Experience Student Living, Redefined.
                </motion.h2>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <Link href="/schedule-visit">
                        <Button className="bg-white !text-black hover:bg-white hover:!text-black hover:-translate-y-1 px-10 py-4 text-lg shadow-2xl transition-all duration-300 border-2 border-prime-gold">
                            Book a Personal Tour
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
