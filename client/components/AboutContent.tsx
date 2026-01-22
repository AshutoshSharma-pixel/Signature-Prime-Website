"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { motion } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";

export default function AboutContent() {
    return (
        <main className="pt-32 pb-24 bg-prime-light min-h-screen">
            <div className="container mx-auto px-6">
                <div className="max-w-4xl mx-auto relative">
                    <Link href="/" className="absolute top-0 right-0 p-2 bg-gray-200 rounded-full hover:bg-prime-gold hover:text-white transition-colors translate-x-12 lg:translate-x-0">
                        <X size={24} />
                    </Link>
                    <SectionTitle title="Our Story" subtitle="About Signature Prime" />
                </div>

                <div className="prose prose-lg max-w-4xl mx-auto text-gray-600 font-light leading-relaxed">
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6"
                    >
                        Signature Prime was born from a vision to redefine student living. We observed that most student accommodations were merely functional, lacking the warmth and care that fosters true growth. We asked ourselves: Why can't a hostel feel like a home? Why can't it have the elegance of a hotel and the safety of a sanctuary?
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6"
                    >
                        Located near Manipal University Jaipur, Signature Prime is more than just a place to sleep. It is a community designed for the ambitious, the creative, and the dedicated. Every corner of our residence is crafted to provide comfort, inspire focus, and ensure safety.
                    </motion.p>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        From our gourmet dining to our fitness centers, from our high-speed internet to our cozy study lounges, we have taken care of every detail so you can focus on what matters most: your future.
                    </motion.p>
                </div>
            </div>
        </main>
    );
}
