import React from "react";
import { motion } from "framer-motion";

function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind",
    "Bootstrap",
    "Git",
    "Redux",
    "Canva",
    "Figma",
    "Responsive Web Design",
  ];

  return (
    <div className="min-h-screen font-lobster font-bold italic  flex flex-col items-center justify-center px-4 py-10 bg-gradient-to-br from-[#9c9c9c] to-[#000] text-white w-full overflow-y-auto">
      {/* Title */}
      <motion.h1
        className="text-4xl sm:text-5xl font-bold tracking-wide mb-8 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Skills
      </motion.h1>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 text-center w-full px-4">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="bg-[#222] text-white px-4 py-3 min-w-min overflow-hidden rounded-lg shadow-lg text-sm sm:text-lg font-bold uppercase tracking-wide transform transition-all duration-300 hover:scale-110 hover:rotate-3 hover:shadow-[#9c9c9c]/50 whitespace-nowrap"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
