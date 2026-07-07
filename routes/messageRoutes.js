const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, subject, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "Name, email, and message are required",
      });
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // must be false for port 587 (STARTTLS)
      family: 4,     // force IPv4 to avoid ETIMEDOUT on broken IPv6 routes
      auth: {
        user: process.env.sendermail,
        pass: process.env.pass, // Gmail App Password, not regular password
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.sendermail}>`,
      replyTo: email,
      to: process.env.recievermail,
      subject: `New Contact: ${subject || "No Subject"}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone || "Not provided"}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    };

    await transporter.verify();
    console.log("SMTP Connected");

    await transporter.sendMail(mailOptions);
    console.log("📧 Email sent successfully!");

    res.json({
      success: true,
      message: "Message sent to Gmail successfully",
    });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({
      success: false,
      message: "Email not sent",
    });
  }
});

module.exports = router;
