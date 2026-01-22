import { Metadata } from "next";
import ScheduleVisitForm from "@/components/ScheduleVisitForm";

export const metadata: Metadata = {
    title: "Schedule a Visit - Signature Prime | Book a Tour",
    description: "Book a personal tour of Signature Prime. See our premium rooms, gym, and dining areas in person. Located near Manipal University Jaipur.",
};

export default function ScheduleVisitPage() {
    return <ScheduleVisitForm />;
}
