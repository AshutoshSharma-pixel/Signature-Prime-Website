"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import LifestylePreview from "@/components/LifestylePreview";

export default function GalleryPage() {
    return (
        <main className="pt-32 pb-24 bg-white min-h-screen">
            <div className="container mx-auto px-6 mb-12">
                <SectionTitle title="Visual Tour" subtitle="Gallery" />
            </div>
            <LifestylePreview />
            {/* Additional gallery grids would go here */}
        </main>
    );
}
