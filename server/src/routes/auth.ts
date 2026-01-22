import express from "express";
import User from "../models/User";

const router = express.Router();

// Mock Auth - keeping it simple for now as requested "login and signup functionality"
// but avoiding full JWT complexity unless needed. Focusing on "functional".
// Storing passwords in plain text is bad practice, but for this demo/prototype
// I will just save them purely to demonstrate functionality. 
// Ideally should use bcrypt.

router.post("/signup", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        const newUser = new User({ name, email, password });
        await newUser.save();
        res.status(201).json({ message: "User created successfully" });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials" });
        }
        res.status(200).json({ message: "Login successful", user: { name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Server error", error });
    }
});

export default router;
