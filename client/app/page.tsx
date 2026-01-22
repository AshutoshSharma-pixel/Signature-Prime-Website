

import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import AmenitiesPreview from "@/components/AmenitiesPreview";
import MedicalPreview from "@/components/MedicalPreview";
import RoomPreview from "@/components/RoomPreview";
import LifestylePreview from "@/components/LifestylePreview";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutPreview />
      <AmenitiesPreview />
      <MedicalPreview />
      <RoomPreview />
      <LifestylePreview />
      <CTA />
    </main>
  );
}
