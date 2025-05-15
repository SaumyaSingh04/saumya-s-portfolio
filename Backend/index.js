require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL,
  credentials: true, 
}));

app.use(express.json());

// Log requests for debugging
app.use((req, res, next) => {
  console.log(`Received ${req.method} request at ${req.url}`);
  next();
});

// Nodemailer transporter setup
const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465, // Try 587 if 465 fails
  secure: true, 
  auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
  }
});


// API route to handle form submission
app.post("/send-email", async (req, res) => {
  console.log("Received request:", req.body); // Debugging log

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ success: false, message: "Missing fields" });
  }

  try {
    await transporter.sendMail({
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Contact Form Submission from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    });

    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
