"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionTitleProps {
    title: string;
    subtitle?: string;
    className?: string;
    centered?: boolean;
    light?: boolean;
}

export default function SectionTitle({
    title,
    subtitle,
    className,
    centered = true,
    light = false,
}: SectionTitleProps) {
    return (
        <div
            className={cn(
                "mb-12",
                centered ? "text-center" : "text-left",
                className
            )}
        >
            {subtitle && (
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className={cn(
                        "text-sm uppercase tracking-[0.2em] mb-3 font-semibold",
                        light ? "text-[#D4AF37]" : "text-[#B48E25]"
                    )}
                >
                    {subtitle}
                </motion.p>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className={cn(
                    "text-3xl md:text-4xl font-serif",
                    light ? "text-white" : "text-black"
                )}
            >
                {title}
            </motion.h2>
            <div className={cn("mt-4 h-1 w-20 bg-[#D4AF37] mx-auto", centered ? "" : "ml-0")} />
        </div>
    );
}
