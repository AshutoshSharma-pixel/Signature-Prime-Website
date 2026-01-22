"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { Wifi, BookOpen, Coffee, Shield, Dumbbell, Truck } from "lucide-react";

const amenities = [
    { icon: Wifi, title: "High-Speed Wi-Fi", desc: "Seamless connectivity for your digital life." },
    { icon: BookOpen, title: "Study Lounge", desc: "Quiet zones designed for deep focus." },
    { icon: Coffee, title: "Gourmet Cafeteria", desc: "Nutritious and delicious meals daily." },
    { icon: Shield, title: "24/7 Security", desc: "Advanced surveillance for your peace of mind." },
    { icon: Dumbbell, title: "Fitness Center", desc: "State-of-the-art equipment for wellness." },
    { icon: Truck, title: "Shuttle Service", desc: "Comfortable commute to and from campus." },
];

export default function AmenitiesPreview() {
    return (
        <section className="py-24 bg-white">
            <div className="container mx-auto px-6">
                <SectionTitle title="World-Class Amenities" subtitle="Curated for You" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                    {amenities.map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group p-8 border-2 border-gray-300 bg-white hover:border-prime-gold hover:shadow-2xl transition-all duration-300 rounded-sm text-center"
                        >
                            <div className="w-16 h-16 mx-auto mb-6 bg-white border-2 border-prime-gold rounded-full flex items-center justify-center text-black group-hover:bg-prime-gold group-hover:text-black transition-colors duration-300 shadow-md">
                                <item.icon size={32} strokeWidth={2.5} />
                            </div>
                            <h3 className="text-xl font-serif text-black mb-4 group-hover:text-prime-gold transition-colors">{item.title}</h3>
                            <p className="text-gray-600 font-light leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
