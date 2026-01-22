"use client";

import { motion } from "framer-motion";
import SectionTitle from "./ui/SectionTitle";
import { Button } from "./ui/Button";
import Link from "next/link";
import Image from "next/image";

const rooms = [
    {
        title: "Ram Niwas Residency",
        desc: "Where Signature Prime's legacy began - Our first home.",
        price: "Starts from ₹1,60,000/year",
        imageSrc: "/ram-niwas-residency.png",
        link: "/ram-niwas"
    },
    {
        title: "Balaji Hostel",
        desc: "Our newest addition - A serene retreat with garden views.",
        price: "Starts from ₹1,60,000/year",
        imageSrc: "/balaji-hostel.webp",
        link: "/balaji-hostel"
    },
];

export default function RoomPreview() {
    return (
        <section className="py-24 bg-black text-white">
            <div className="container mx-auto px-6">
                <SectionTitle title="Accommodations" subtitle="Your Private Sanctuary" light />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
                    {rooms.map((room, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: index * 0.2 }}
                            className="group relative overflow-hidden"
                        >
                            <div className="h-[400px] w-full relative">
                                <Image
                                    src={room.imageSrc}
                                    alt={room.title}
                                    fill
                                    quality={100}
                                    unoptimized
                                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500" />
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-8">
                                <h3 className="text-3xl font-serif mb-2 text-white group-hover:text-prime-gold transition-colors">{room.title}</h3>
                                <p className="text-gray-300 font-light mb-4">{room.desc}</p>
                                <div className="flex items-center justify-between">
                                    <span className="text-prime-gold text-lg">{room.price}</span>
                                    <Link href={room.link}>
                                        <Button
                                            variant="outline"
                                            className="border-2 border-white text-white hover:bg-white hover:!text-black transition-all duration-300 font-medium"
                                        >
                                            View Details
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
