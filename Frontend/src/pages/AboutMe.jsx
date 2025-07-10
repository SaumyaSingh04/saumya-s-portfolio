import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import pic from "../data/me.jpg";

const AboutMe = () => {
  const navigate = useNavigate(); // Hook for navigation

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-10 bg-gradient-to-br from-[#9c9c9c] to-[#000] text-white">
      {/* Animated Heading */}
      <motion.h1
        className="text-5xl font-bold italic tracking-wide mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        About Me
      </motion.h1>

      {/* Profile Image */}
      <motion.img
        src={pic} 
        alt="Profile"
        className="w-40 h-40 rounded-full shadow-lg mb-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />

      {/* Introduction */}
      <motion.p
        className="text-lg text-center max-w-2xl leading-relaxed"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        Hi! I’m <span className="text-[#9c9c9c] font-semibold">Saumya Singh</span>, a passionate{" "}
<span className="text-[#9c9c9c] font-semibold">Full Stack Web Developer</span>. I love building
beautiful and functional websites & web applications. With expertise in{" "}
<span className="text-[#9c9c9c] font-semibold">React, Node.js,Express.js and MongoDB</span>, I turn creative ideas into scalable, real-world solutions. 🚀

      </motion.p>

      {/* Skills */}
      <motion.div
  className="mt-6 flex flex-wrap justify-center gap-3"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.6 }}
>
  {["MongoDB", "Express", "React", "Node JS"].map((tech, index) => (
    <motion.span
      key={index}
      className="bg-gray-500 px-4 py-2 rounded-lg cursor-pointer"
      whileTap={{ scale: 0.9 }} // Adds a small shrink effect when clicked
    >
      {tech}
    </motion.span>
  ))}
</motion.div>

      {/* Navigation Buttons */}
      <motion.div
  className="mt-8 flex gap-4"
  initial={{ opacity: 0, scale: 0.8 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 1, delay: 0.8 }}
>
  {[
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Contact", path: "/contact" },
  ].map((btn, index) => (
    <motion.button
      key={index}
      onClick={() => navigate(btn.path)}
      className="bg-gradient-to-bl from-[#9c9c9c] to-[#000] px-6 py-3 rounded-lg text-white font-bold transition-all"
      whileHover={{ scale: 1.1 }} // Slightly enlarges on hover
      whileTap={{ scale: 0.9 }} // Shrinks slightly on click
    >
      {btn.name}
    </motion.button>
  ))}
</motion.div>

    </div>
  );
};

export default AboutMe;
