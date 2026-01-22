"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Wifi, Zap, Wind, UserCheck, ArrowLeft, Coffee, Dumbbell, Flower, Sun } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function BalajiHostelContent() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-prime-gold selection:text-black">
            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="/balaji-hostel.webp" // Assuming this is the image
                    alt="Balaji Hostel"
                    fill
                    className="object-cover"
                    priority
                    quality={100}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black" />

                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <p className="text-prime-gold font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
                            Our Newest Addition
                        </p>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                            Balaji <span className="text-prime-gold">Hostel</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            A serene retreat with garden views. Modern living meets natural tranquility.
                        </p>
                    </motion.div>
                </div>

                <div className="absolute inset-0 pointer-events-none z-20">
                    <div className="container mx-auto px-6 h-full relative">
                        <Link href="/" className="absolute top-32 pointer-events-auto">
                            <div className="p-3 bg-white/10 backdrop-blur-md rounded-full hover:bg-white hover:text-black transition-all duration-300 text-white border border-white/20">
                                <ArrowLeft size={24} />
                            </div>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-24 container mx-auto px-6">
                <div className="flex flex-col md:flex-row gap-16 items-start">
                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <SectionTitle title="The Residence" subtitle="Nature & Comfort" light className="mb-8" />

                        <div className="prose prose-lg prose-invert text-gray-300 font-light leading-relaxed">
                            <p className="text-2xl text-white font-serif mb-6">
                                Starts from <span className="text-prime-gold">₹1,60,000/year</span>
                            </p>
                            <p className="mb-6">
                                Balaji Hostel is our newest addition to the Signature Prime family. Designed for those who seek peace and quiet, it offers a refreshing environment surrounded by greenery.
                            </p>
                            <p className="mb-6">
                                Experience the perfect blend of modern amenities and natural serenity. The spacious rooms are complemented by beautiful garden views that provide a calming backdrop for your studies.
                            </p>
                            <p>
                                Facilities include high-speed Wi-Fi, 24/7 power backup, a dedicated study lounge, and of course, our signature housekeeping and security services.
                            </p>
                        </div>

                        <div className="mt-12">
                            <Link href="/schedule-visit">
                                <Button className="bg-prime-gold text-black hover:bg-white px-8 py-4 text-lg font-semibold uppercase tracking-widest">
                                    Schedule a Visit
                                </Button>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Features Grid */}
                    <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[
                            { icon: Flower, title: "Garden Views", desc: "Serene environment" },
                            { icon: Wind, title: "Air Conditioned", desc: "Climate controlled" },
                            { icon: Zap, title: "Power Backup", desc: "24/7 uninterrupted" },
                            { icon: Wifi, title: "High Speed Wifi", desc: "Digital connectivity" },
                            { icon: Coffee, title: "Lounge Area", desc: "Community space" },
                            { icon: Sun, title: "Natural Light", desc: "Airy & bright rooms" },
                        ].map((feature, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="bg-white/5 p-6 rounded-lg border border-white/10 hover:border-prime-gold/50 hover:bg-white/10 transition-all duration-300 group"
                            >
                                <feature.icon className="text-prime-gold w-8 h-8 mb-4 group-hover:scale-110 transition-transform" />
                                <h3 className="text-lg font-serif text-white mb-2">{feature.title}</h3>
                                <p className="text-sm text-gray-400 font-light">{feature.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Room Gallery Section */}
            <section className="py-24 bg-[#0A0A0A] border-t border-white/5">
                <div className="container mx-auto px-6">
                    <SectionTitle title="Visual Tour" subtitle="Inside Balaji" light className="mb-16 text-center" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { src: "/balaji-hostel.webp", label: "Garden View Room", alt: "Room with View" },
                            { src: "/hero-3d-bg-v2.png", label: "Common Lounge", alt: "Lounge Area" },
                            { src: "/ram-niwas-residency.png", label: "Exterior", alt: "Building Exterior" },
                        ].map((img, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2, duration: 0.6 }}
                                className="group relative h-[400px] overflow-hidden rounded-sm"
                            >
                                <Image
                                    src={img.src}
                                    alt={img.alt}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />

                                <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-white font-serif text-2xl mb-2">{img.label}</p>
                                    <div className="h-0.5 w-12 bg-prime-gold transition-all duration-500 group-hover:w-24" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}
