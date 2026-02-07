"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Inquiry_1 = __importDefault(require("../models/Inquiry"));
const EmailService_1 = require("../services/EmailService");
const router = express_1.default.Router();
// Get a Call Back
router.post("/callback", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, phone, email } = req.body;
        const inquiry = new Inquiry_1.default({
            type: "callback",
            name,
            phone,
            email,
        });
        yield inquiry.save();
        res.status(201).json({ message: "Callback request received" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}));
router.post("/visit", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, phone, email, date, message } = req.body; // Added message
        const inquiry = new Inquiry_1.default({
            type: "visit",
            name,
            phone,
            email,
            date,
            message, // Save message too if added to schema, otherwise it might be ignored strictly but good to pass
        });
        yield inquiry.save();
        // Send Email Notification
        yield (0, EmailService_1.sendVisitNotification)({ name, phone, email, date, message });
        res.status(201).json({ message: "Visit scheduled successfully" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}));
// Contact Form
router.post("/contact", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { name, phone, email, message } = req.body;
        const inquiry = new Inquiry_1.default({
            type: "contact",
            name,
            phone,
            email,
            message,
        });
        yield inquiry.save();
        res.status(201).json({ message: "Message received" });
    }
    catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
}));
exports.default = router;
