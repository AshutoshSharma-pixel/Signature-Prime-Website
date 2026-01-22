import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Providers from "@/components/Providers";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

const lato = Lato({
  weight: ["300", "400", "700"],
  subsets: ["latin"],
  variable: "--font-lato",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Signature Prime - Premium Student Housing | Manipal University Jaipur",
  description: "Experience luxury student living at Signature Prime (`Ram Niwas Residency` & `Balaji Hostel`) near Manipal University Jaipur. Premium amenities, secure environment, and a home away from home.",
  keywords: "student housing jaipur, manipal university jaipur hostel, ram niwas residency, balaji hostel, signature prime, luxury hostel jaipur",
  openGraph: {
    title: "Signature Prime - Premium Student Housing",
    description: "Experience luxury student living near Manipal University Jaipur.",
    type: "website",
    locale: "en_US",
    siteName: "Signature Prime",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lato.variable}`}>
      <body className="font-sans bg-prime-light text-prime-gray antialiased" suppressHydrationWarning={true}>
        <Providers>
          <Header />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
