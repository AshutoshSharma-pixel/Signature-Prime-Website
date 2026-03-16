import Link from "next/link";
import Image from "next/image";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-black text-white pt-16 pb-8">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    {/* Brand Column */}
                    <div className="space-y-6">
                        <div className="relative h-16 w-48">
                            <Image
                                src="/logo.png"
                                alt="Signature Prime"
                                fill
                                className="object-contain object-left"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Experience the epitome of student luxury living. Where comfort meets care near Manipal University Jaipur.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="hover:text-prime-gold transition-colors"><Facebook size={20} /></a>
                            <a href="https://www.instagram.com/hostelsignatureprime?igsh=NTZzMm9oNDVuNTli" target="_blank" rel="noopener noreferrer" className="hover:text-prime-gold transition-colors"><Instagram size={20} /></a>
                            <a href="https://maps.app.goo.gl/usRS3qJz8bYfaY8e8" target="_blank" rel="noopener noreferrer" className="hover:text-prime-gold transition-colors"><MapPin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-prime-gold font-serif text-lg mb-6">Quick Links</h3>
                        <ul className="space-y-3 text-gray-300 text-sm">
                            <li><Link href="/about" className="hover:text-prime-gold transition-colors">About Us</Link></li>
                            <li><Link href="/amenities" className="hover:text-prime-gold transition-colors">Amenities</Link></li>
                            <li><Link href="/gallery" className="hover:text-prime-gold transition-colors">Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-prime-gold transition-colors">Contact Us</Link></li>
                            <li><Link href="/schedule-visit" className="hover:text-prime-gold transition-colors">Schedule a Visit</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-prime-gold font-serif text-lg mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-gray-300 text-sm">
                            <li className="flex items-start gap-3">
                                <MapPin size={18} className="text-prime-gold shrink-0 mt-0.5" />
                                <span>Near Manipal University Jaipur,<br />Dehmi Kalan, Jaipur, Rajasthan 303007</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone size={18} className="text-prime-gold shrink-0" />
<span>+91 97722 56724</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail size={18} className="text-prime-gold shrink-0" />
                                <span>info@signatureprime.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Location QR Code */}
                    <div>
                        <h3 className="text-prime-gold font-serif text-lg mb-6">Our Location</h3>
                        <div className="bg-white p-4 rounded-lg inline-block">
                            <Image
                                src="/maps-qr.png"
                                alt="Location QR Code"
                                width={120}
                                height={120}
                                className="w-30 h-30"
                            />
                        </div>
                        <p className="text-white text-xl font-serif mt-4">Scan to Get Location</p>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
                    <p>&copy; {new Date().getFullYear()} Signature Prime. All rights reserved.</p>
                    <div className="flex gap-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
