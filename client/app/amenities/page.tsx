"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import AmenitiesPreview from "@/components/AmenitiesPreview";

export default function AmenitiesPage() {
    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-6 mb-12">
                <SectionTitle title="Experience Luxury" subtitle="All Amenities" />
                <p className="text-center text-gray-600 max-w-2xl mx-auto mb-12">
                    Discover a suite of world-class facilities designed to elevate your lifestyle and support your academic journey.
                </p>
            </div>
            {/* Reusing the preview component for now, could be expanded */}
            <AmenitiesPreview />
        </main>
    );
}
