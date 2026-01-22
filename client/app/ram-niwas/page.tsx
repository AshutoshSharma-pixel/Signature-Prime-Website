import { Metadata } from "next";
import RamNiwasContent from "@/components/RamNiwasContent";

export const metadata: Metadata = {
    title: "Ram Niwas Residency - Premium Student Housing | Signature Prime",
    description: "Discover Ram Niwas Residency, the first home of Signature Prime. Luxury rooms, AC, Geysers, and Lift service near Manipal University Jaipur.",
};

export default function RamNiwasPage() {
    return <RamNiwasContent />;
}
