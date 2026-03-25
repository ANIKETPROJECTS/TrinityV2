import { Router } from "express";
import nodemailer from "nodemailer";

const router = Router();

router.post("/contact", async (req, res) => {
  const { name, phone, email, message } = req.body;

  if (!name || !phone || !email || !message) {
    res.status(400).json({ error: "All fields are required." });
    return;
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPass = process.env.GMAIL_APP_PASSWORD;

  if (!gmailUser || !gmailPass) {
    res.status(500).json({ error: "Email configuration is missing." });
    return;
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: gmailUser,
      pass: gmailPass.replace(/\s/g, ""),
    },
  });

  const mailOptions = {
    from: `"Trinity Packaging Website" <${gmailUser}>`,
    to: gmailUser,
    replyTo: email,
    subject: `New Inquiry from ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #2d7d4f; border-bottom: 2px solid #2d7d4f; padding-bottom: 10px;">New Inquiry - Trinity Packaging</h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 16px;">
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #555; width: 140px; vertical-align: top;">Full Name:</td>
            <td style="padding: 10px; color: #222;">${name}</td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Phone Number:</td>
            <td style="padding: 10px; color: #222;">${phone}</td>
          </tr>
          <tr>
            <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Email Address:</td>
            <td style="padding: 10px; color: #222;"><a href="mailto:${email}" style="color: #2d7d4f;">${email}</a></td>
          </tr>
          <tr style="background: #f9f9f9;">
            <td style="padding: 10px; font-weight: bold; color: #555; vertical-align: top;">Requirements:</td>
            <td style="padding: 10px; color: #222; white-space: pre-wrap;">${message}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">This inquiry was submitted via the Trinity Packaging website contact form.</p>
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Inquiry sent successfully." });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

export default router;
