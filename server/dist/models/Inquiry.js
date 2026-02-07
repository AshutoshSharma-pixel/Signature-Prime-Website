"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const InquirySchema = new mongoose_1.default.Schema({
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
exports.default = mongoose_1.default.model("Inquiry", InquirySchema);
