import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

export const sendVisitNotification = async (data: { name: string; email: string; phone: string; date: string; message?: string }) => {
    const { name, email, phone, date, message } = data;

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.OWNER_EMAIL) {
        console.warn("Email credentials or Owner Email not set in .env. Skipping email notification.");
        return false;
    }

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: process.env.OWNER_EMAIL,
        subject: `New Visit Scheduled: ${name}`,
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #eee; border-radius: 5px;">
                <h2 style="color: #D4AF37;">New Visit Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Phone:</strong> ${phone}</p>
                <p><strong>Preferred Date:</strong> ${date}</p>
                ${message ? `<p><strong>Message:</strong> ${message}</p>` : ""}
                <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;" />
                <p style="font-size: 12px; color: #888;">Sent from Signature Prime Website</p>
            </div>
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log("Visit notification email sent.");
        return true;
    } catch (error) {
        console.error("Error sending email:", error);
        return false;
    }
};
