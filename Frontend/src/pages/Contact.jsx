import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
  
    try {
      const response = await fetch(`https://saumya-s-portfolio.onrender.com/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    
      const text = await response.text();
      const data = text ? JSON.parse(text) : {};
    
      setStatus(data.message || "Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message.");
    }    
  };
  

  return (
    <div className="min-h-screen flex flex-col font-lobster font-bold italic items-center justify-center px-4 py-10 bg-gradient-to-br from-[#9c9c9c] to-[#000] text-white">
      {/* Title */}
      <motion.h1
        className="text-5xl font-bold tracking-wide mb-6 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Contact Me
      </motion.h1>

      {/* Contact Details */}
      <motion.div
        className="w-full max-w-lg bg-white/10 backdrop-blur-lg p-3 border border-gray-500 rounded-xl shadow-md flex flex-col gap-4"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
      >
        {/* Contact Info */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <FaPhone className="text-xl text-blue-400" aria-label="Phone" />
            <p className="text-lg">+91 6388691336</p>
          </div>

          <div className="flex items-center gap-2">
            <FaEnvelope className="text-xl text-blue-400" aria-label="Email" />
            <a href="mailto:saumya0419@gmail.com" className="text-lg hover:text-blue-300 transition">
              saumya0419@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaLinkedin className="text-xl text-blue-400" aria-label="LinkedIn" />
            <a
              href="https://linkedin.com/in/saumya-singh-a21b05299"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-300 transition"
            >
              linkedin.com/in/SaumyaSingh
            </a>
          </div>

          <div className="flex items-center gap-2">
            <FaGithub className="text-xl text-blue-400" aria-label="GitHub" />
            <a
              href="https://github.com/SaumyaSingh04"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-blue-300 transition"
            >
              github.com/SaumyaSingh04
            </a>
          </div>
        </div>
      </motion.div>

      {/* Email Form */}
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-2 mt-2 bg-white/10 backdrop-blur-lg border border-gray-500 rounded-xl shadow-md flex flex-col gap-1"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
        whileHover={{ scale: 1.02 }}
      >
        <h2 className="text-xl font-semibold text-center mb-1">Send Me a Message</h2>

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className="w-full p-2 bg-gray-900 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full p-2 bg-gray-900 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className="w-full p-2 bg-gray-900 text-white rounded-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          rows="2"
        ></textarea>

        <button
          type="submit"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 rounded-md transition duration-300"
        >
          Send Message
        </button>

        {status && <p className="text-center text-green-400">{status}</p>}
      </motion.form>
    </div>
  );
};

export default Contact;
