const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

router.post("/", async (req, res) => {
  try {
    const { fullName, email, phone, subject, message } = req.body;

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.sendermail,
        pass: process.env.pass,
      },
    });

    // Email content
    const mailOptions = {
      from: email,
      to: process.env.recievermail, // where you want to receive
      subject: `New Contact: ${subject}`,
      html: `
        <h3>New Contact Form Message</h3>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Message:</b> ${message}</p>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);

    console.log("📧 Email sent successfully!");

    res.json({
      success: true,
      message: "Message sent to Gmail successfully"
    });

  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({
      success: false,
      message: "Email not sent"
    });
  }
});

module.exports = router;
