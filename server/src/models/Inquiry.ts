import mongoose from "mongoose";

const InquirySchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["callback", "visit", "contact"],
        required: true,
    },
    name: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    message: { type: String }, // Optional for callback/visit
    date: { type: Date }, // For scheduled visits
    createdAt: { type: Date, default: Date.now },
    status: {
        type: String,
        enum: ["new", "contacted", "resolved"],
        default: "new",
    },
});

export default mongoose.model("Inquiry", InquirySchema);
