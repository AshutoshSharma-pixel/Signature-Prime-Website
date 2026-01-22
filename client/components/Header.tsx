"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/Button";
import { useAuth } from "@/contexts/AuthContext";

const navItems = [
    { name: "About Us", href: "/about" },
    { name: "Amenities", href: "/amenities" },
    { name: "Schedule a Visit", href: "/schedule-visit" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact Us", href: "/contact" },
];

export default function Header() {
    const { scrollY } = useScroll();
    const [isScrolled, setIsScrolled] = useState(false);
    const { user, signOut } = useAuth();
    const pathname = usePathname();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    // Pages that have a dark background where header should be white/transparent initially
    const darkPages = ["/", "/login", "/signup", "/ram-niwas", "/balaji-hostel"];
    const isDarkPage = darkPages.includes(pathname);

    useMotionValueEvent(scrollY, "change", (latest) => {
        setIsScrolled(latest > 50);
    });

    return (
        <motion.header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 backdrop-blur-md shadow-md py-2"
                    : (mobileMenuOpen ? "bg-black py-4" : "bg-transparent py-4")
            )}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container mx-auto px-6 flex items-center justify-between relative">
                <Link href="/" className="relative flex items-center z-10">
                    <div className="relative h-12 w-32 md:w-40">
                        <Image
                            src="/logo.png"
                            alt="Signature Prime"
                            fill
                            className={cn(
                                "object-contain object-left transition-all duration-300",
                                (!isScrolled && isDarkPage && !mobileMenuOpen) ? "invert" : ""
                            )}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "transition-colors font-bold text-sm tracking-wide whitespace-nowrap",
                                (isScrolled || !isDarkPage)
                                    ? "text-black hover:text-prime-gold"
                                    : "text-white hover:text-prime-gold"
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                <div className="flex items-center gap-4 md:gap-6 z-20">
                    {user ? (
                        // Logged in - show user profile
                        <div className="flex items-center gap-4">
                            <div className="hidden md:flex flex-col items-end">
                                <span className={cn(
                                    "text-sm font-semibold",
                                    (isScrolled || !isDarkPage) ? "text-black" : "text-white"
                                )}>
                                    {user.displayName || user.email}
                                </span>
                                <span className="text-xs text-[#D4AF37]">Member</span>
                            </div>
                            {user.photoURL ? (
                                <Image
                                    src={user.photoURL}
                                    alt={user.displayName || "User"}
                                    width={40}
                                    height={40}
                                    className="rounded-full border border-prime-gold object-cover"
                                />
                            ) : (
                                <div className="w-10 h-10 rounded-full bg-prime-gold/20 flex items-center justify-center border border-prime-gold text-prime-gold font-semibold uppercase">
                                    {(user.displayName || user.email || "U")[0]}
                                </div>
                            )}
                            <button
                                onClick={() => signOut()}
                                className={cn(
                                    "hidden md:block text-sm font-semibold uppercase tracking-widest px-4 py-2 rounded-md transition-all duration-300",
                                    (isScrolled || !isDarkPage)
                                        ? "text-black hover:bg-gray-100"
                                        : "text-white hover:bg-white/10"
                                )}
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        // Logged out - show Login/Signup buttons
                        <div className="hidden md:flex gap-4">
                            <Link href="/login">
                                <Button
                                    variant="ghost"
                                    className="text-sm font-semibold uppercase tracking-widest px-0 hover:bg-transparent transition-colors"
                                    style={{ color: '#D4AF37' }}
                                >
                                    Login
                                </Button>
                            </Link>
                            <Link href="/signup">
                                <button className="text-sm font-semibold uppercase tracking-widest px-6 py-2.5 bg-prime-gold !text-red-600 hover:bg-prime-accent hover:!text-red-600 transition-all duration-300 shadow-md rounded-md border-0">
                                    Sign Up
                                </button>
                            </Link>
                        </div>
                    )}

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn(
                            "md:hidden p-2",
                            (isScrolled || !isDarkPage || mobileMenuOpen) ? "text-black" : "text-white"
                        )}
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <X size={24} className="text-white" />
                        ) : (
                            <Menu size={24} className={isScrolled ? "text-black" : "text-white"} />
                        )}
                    </button>
                </div>
            </div >

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "100vh" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="fixed inset-0 bg-black z-40 pt-24 px-6 md:hidden overflow-hidden"
                    >
                        <div className="flex flex-col gap-8 items-center text-center">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-2xl font-serif text-white hover:text-prime-gold transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="h-px w-24 bg-white/20 my-4" />
                            {!user ? (
                                <div className="flex flex-col gap-4 w-full max-w-xs">
                                    <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                                        <Button className="w-full bg-white text-black hover:bg-gray-200">
                                            Login
                                        </Button>
                                    </Link>
                                    <Link href="/signup" onClick={() => setMobileMenuOpen(false)}>
                                        <Button className="w-full bg-prime-gold text-black hover:bg-yellow-600">
                                            Sign Up
                                        </Button>
                                    </Link>
                                </div>
                            ) : (
                                <button
                                    onClick={() => { signOut(); setMobileMenuOpen(false); }}
                                    className="text-lg text-white/70 hover:text-red-500 transition-colors uppercase tracking-widest"
                                >
                                    Logout
                                </button>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header >
    );
}
