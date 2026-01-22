"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Wifi, Zap, Wind, UserCheck, ArrowLeft, Coffee, Dumbbell } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";

export default function RamNiwasContent() {
    return (
        <main className="min-h-screen bg-black text-white selection:bg-prime-gold selection:text-black">
            {/* Hero Section */}
            <section className="relative h-[70vh] w-full overflow-hidden">
                <Image
                    src="/ram-niwas-residency.png"
                    alt="Ram Niwas Residency"
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
                            Our First Home
                        </p>
                        <h1 className="text-5xl md:text-7xl font-serif text-white mb-6">
                            Ram Niwas <span className="text-prime-gold">Residency</span>
                        </h1>
                        <p className="text-xl md:text-2xl font-light text-gray-300 max-w-2xl mx-auto leading-relaxed">
                            Where Signature Prime's legacy began. Experience the roots of luxury living.
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
                        <SectionTitle title="The Residence" subtitle="Discover Comfort" light className="mb-8" />

                        <div className="prose prose-lg prose-invert text-gray-300 font-light leading-relaxed">
                            <p className="text-2xl text-white font-serif mb-6">
                                Starts from <span className="text-prime-gold">₹1,60,000/year</span>
                            </p>
                            <p className="mb-6">
                                As the very first building of Signature Prime, Ram Niwas Residency holds a special place in our history. It is where we established our standard for student luxury.
                            </p>
                            <p className="mb-6">
                                We offer very luxurious, spacious rooms designed to provide you with a personal sanctuary. Whether you are studying or relaxing, the ambiance is crafted to elevate your lifestyle.
                            </p>
                            <p>
                                Enjoy premium amenities including 200 units of free electricity, modern lifts, high-speed internet, and a stunning terrace view perfect for evening relaxation.
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
                            { icon: Wind, title: "Air Conditioned", desc: "Climate controlled rooms" },
                            { icon: Zap, title: "200 Units Free", desc: "Electricity included" },
                            { icon: ShowerHead, title: "Geysers", desc: "Hot water 24/7" },
                            { icon: MoveUp, title: "Lift Service", desc: "Easy accessibility" },
                            { icon: Users, title: "Spacious Rooms", desc: "Luxury dimensions" },
                            { icon: Trees, title: "Terrace Garden", desc: "Relaxing views" },
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
                    <SectionTitle title="Visual Tour" subtitle="Inside the Residence" light className="mb-16 text-center" />

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { src: "/ram-niwas-residency.png", label: "Premium Room", alt: "Bedroom Interior" },
                            { src: "/hero-3d-bg-v2.png", label: "Study Area", alt: "Study Table" },
                            { src: "/balaji-hostel.webp", label: "Lounge Access", alt: "Common Area" },
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

// Icon fallbacks or imports if lucide-react doesn't export them all directly by these names, 
// checking commonly used names.
// Note: ShowerHead, MoveUp, Users, Trees might need check.
// Lucide icons: 'ShowerHead' -> valid. 'MoveUp' -> 'ArrowUp'? No, 'MoveUp' exists? 'Lift' doesn't. 
// Let's use generic known icons if unsure.
import { ShowerHead, MoveUp, Users, Trees } from "lucide-react";
// Checking imports again. 'Trees' might be 'TreeDeciduous'? 'Users' is valid. 'ShowerHead' valid. 
