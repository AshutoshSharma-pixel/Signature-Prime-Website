import express from "express";
import Inquiry from "../models/Inquiry";
import { sendVisitNotification } from "../services/EmailService";

const router = express.Router();

// Get a Call Back
router.post("/callback", async (req, res) => {
    try {
        const { name, phone, email } = req.body;
        const inquiry = new Inquiry({
            type: "callback",
            name,
            phone,
            email,
        });
        await inquiry.save();
        res.status(201).json({ message: "Callback request received" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});
router.post("/visit", async (req, res) => {
    try {
        const { name, phone, email, date, message } = req.body; // Added message
        const inquiry = new Inquiry({
            type: "visit",
            name,
            phone,
            email,
            date,
            message, // Save message too if added to schema, otherwise it might be ignored strictly but good to pass
        });
        await inquiry.save();

        // Send Email Notification
        await sendVisitNotification({ name, phone, email, date, message });

        res.status(201).json({ message: "Visit scheduled successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

// Contact Form
router.post("/contact", async (req, res) => {
    try {
        const { name, phone, email, message } = req.body;
        const inquiry = new Inquiry({
            type: "contact",
            name,
            phone,
            email,
            message,
        });
        await inquiry.save();
        res.status(201).json({ message: "Message received" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

export default router;
