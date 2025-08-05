import React from "react";
import { motion } from "framer-motion";
import cert1 from "../assets/cert1.jpeg";
import cert2 from "../assets/cert2.jpeg";
import cert3 from "../assets/cert3.jpeg";
import cert4 from "../assets/cert4.jpeg";

const Education = () => {
  return (
    <div className="min-h-screen font-lobster font-bold italic flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-[#9c9c9c] to-[#000] text-white w-full">
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold tracking-wide mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Education
      </motion.h1>

      {/* College */}
      <motion.div
        className="w-full max-w-4xl p-2 border border-gray-600 rounded-lg mb-6 text-center sm:text-left"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold">Sunrise University – Alwar, India</h2>
        <p className="text-lg italic">BCA: Computer Application (June 2023 – Present)</p>
        <p className="text-md">GPA: 7.22</p>
        <p className="text-sm text-gray-400">
          Relevant Coursework: Website Development, Software Engineering, Javascript Theory
        </p>
      </motion.div>

      {/* Certifications */}
      <motion.div
        className="w-full max-w-4xl p-2 border border-gray-600 rounded-lg"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <h2 className="text-xl sm:text-2xl font-semibold text-center sm:text-left">
          Certifications & Training
        </h2>
        
        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
          {[
            { name: "JavaScript Fundamentals – Great Stack", link: cert1 },
            { name: "React Hook Crash Course – Great Stack", link: cert2 },
            { name: "HTML, CSS, JS Beginner’s Course – Udemy", link: cert3 },
            { name: "Full Stack Web Development Workshop – UpSkill Campus", link: cert4 },
          ].map((cert, index) => (
            <div key={index} className="bg-[#222] p-4 rounded-lg text-center">
              <p className="text-md">{cert.name}</p>
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline block mt-2"
              >
                (View Certificate)
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Education;
