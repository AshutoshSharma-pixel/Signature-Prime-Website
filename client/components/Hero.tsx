"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Link from "next/link";

export default function Hero() {
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
                    className="flex justify-center"
                >
                    <a href="tel:+919587000206">
                        <Button
                            variant="outline"
                            className="text-lg px-8 py-4 text-white border-white hover:bg-prime-gold hover:border-prime-gold hover:text-white"
                        >
                            Get a Callback
                        </Button>
                    </a>
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
