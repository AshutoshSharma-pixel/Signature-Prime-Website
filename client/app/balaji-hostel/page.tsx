import { Metadata } from "next";
import BalajiHostelContent from "@/components/BalajiHostelContent";

export const metadata: Metadata = {
    title: "Balaji Hostel - Garden View Residency | Signature Prime",
    description: "Experience the serenity of Balaji Hostel. Our newest addition featuring garden views, modern amenities, and a peaceful environment for students.",
};

export default function BalajiHostelPage() {
    return <BalajiHostelContent />;
}
