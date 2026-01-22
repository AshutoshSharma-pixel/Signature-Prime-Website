"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionTitle from "./ui/SectionTitle";
import { Button } from "./ui/Button";
import { Stethoscope, Pill, UserRound, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function MedicalPreview() {
    return (
        <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    {/* Content */}
                    <div className="w-full md:w-1/2">
                        <SectionTitle title="Health & Wellness" subtitle="In-House Clinic" className="mb-8" />

                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                            We prioritize your health above all. Signature Prime is equipped with a dedicated
                            <span className="font-semibold text-black"> in-house clinic </span>
                            staffed with qualified doctors and stocked with essential medications.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                            {[
                                { icon: UserRound, text: "Qualified Doctors" },
                                { icon: Pill, text: "Stocked Pharmacy" },
                                { icon: Stethoscope, text: "Regular Checkups" },
                                { icon: ArrowRight, text: "Emergency Care" },
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-4"
                                >
                                    <div className="p-3 bg-white border border-gray-200 rounded-full text-prime-gold shadow-sm">
                                        <item.icon size={20} />
                                    </div>
                                    <span className="text-gray-700 font-medium">{item.text}</span>
                                </motion.div>
                            ))}
                        </div>

                        <Link href="https://medical.hostelsignatureprime.com/" target="_blank">
                            <Button className="bg-prime-gold text-black hover:bg-black hover:text-white transition-all duration-300 px-8 py-4 text-lg rounded-sm shadow-md">
                                Visit Medical Portal
                            </Button>
                        </Link>
                    </div>

                    {/* Visual / Icon Graphic */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2 flex justify-end relative"
                    >
                        <div className="relative w-full h-[400px] bg-white rounded-2xl shadow-xl border border-gray-100 flex items-center justify-center overflow-hidden group">
                            <Image
                                src="/pharmacy.png"
                                alt="Signature Prime Pharmacy"
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-black/20 to-transparent group-hover:bg-black/10 transition-colors duration-500" />

                            <div className="absolute bottom-8 left-8 right-8 p-6 bg-white/80 backdrop-blur-sm border border-gray-100 rounded-lg shadow-sm">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                                        <Pill size={24} />
                                    </div>
                                    <div>
                                        <h4 className="font-serif text-lg text-black">Pharmacy</h4>
                                        <p className="text-sm text-gray-500">Available on campus</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
