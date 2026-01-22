import { Metadata } from "next";
import AboutContent from "@/components/AboutContent";

export const metadata: Metadata = {
    title: "About Us - Signature Prime | Our Story & Vision",
    description: "Learn about the vision behind Signature Prime. A legacy of hospitality bringing luxury student living to Manipal University Jaipur.",
};

export default function AboutPage() {
    return <AboutContent />;
}
