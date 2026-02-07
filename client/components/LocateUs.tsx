"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import Link from "next/link";
import { MapPin } from "lucide-react";
import Image from "next/image";

export default function LocateUs() {
    return (
        <section className="relative h-[400px] flex items-center overflow-hidden my-24">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/stylized-map-bg.png"
                    alt="Map Background"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-black/80" />
            </div>

            <div className="container relative z-10 px-6 mx-auto flex flex-col md:flex-row items-center justify-between">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-white text-center md:text-left mb-8 md:mb-0"
                >
                    <h2 className="text-4xl md:text-6xl font-serif mb-2 tracking-wide text-prime-cream">MAKE A VISIT</h2>
                    <p className="text-white/90 text-lg md:text-xl font-light tracking-wider uppercase">
                        Find Your Way to <span className="text-[#EF4444] font-medium">Luxury</span>
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Link
                        href="https://www.google.com/maps/place/Hostel+Signature+prime+(+Near+Manipal+University)/@26.8468368,75.5697569,17z/data=!4m6!3m5!1s0x396c49b6f463f4d9:0x2f6de89572806bba!8m2!3d26.8465926!4d75.5697218!16s%2Fg%2F11vzbk1jl7?entry=ttu&g_ep=EgoyMDI2MDIwNC4wIKXMDSoASAFQAw%3D%3D"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Button
                            className="bg-[#0066FF] hover:bg-[#0052cc] text-white px-8 py-6 text-lg font-semibold flex items-center gap-2 rounded-lg shadow-lg"
                        >
                            LOCATE US <MapPin size={20} />
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
