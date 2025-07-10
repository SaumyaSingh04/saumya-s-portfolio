import React from "react";
import { motion } from "framer-motion";
import Experiences from "../data/experience"; 

const Experience = () => {
  return (
    <div className="min-h-screen font-lobster font-bold italic flex flex-col items-center justify-center px-4 py-16 bg-gradient-to-br from-[#9c9c9c] to-[#000] text-white w-full">
      {/* Title */}
      <motion.div
        className="flex items-center gap-4 mb-12"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1
          className="text-4xl sm:text-5xl font-bold tracking-wide text-center"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          Experience
        </motion.h1>
      </motion.div>

      {/* Experience List */}
      <motion.div
        className="w-full max-w-5xl space-y-10"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: {
              staggerChildren: 0.25,
            },
          },
        }}
      >
        {Experiences.map((exp, index) => (
          <motion.div
            key={exp.id}
            className="relative group p-6 sm:p-8 border border-gray-600 rounded-xl bg-[#1a1a1a] shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.015 }}
          >
            {/* Glow Line */}
            <motion.div
              className="absolute left-0 top-0 h-full w-1 bg-gray-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              layoutId={`highlight-${exp.id}`}
            />

            <h2 className="text-2xl sm:text-3xl font-semibold text-white drop-shadow">
              {exp.role}
            </h2>
            <p className="text-lg mt-1 text-white/80">
              {exp.company} – {exp.location}
            </p>
            <p className="italic text-sm mb-2 text-gray-400">{exp.duration}</p>
            <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
              {exp.description}
            </p>
            <div className="mt-3 text-sm sm:text-base text-blue-200">
              <span className="text-white">Technologies:</span>{" "}
              {exp.technologies.join(", ")}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Experience;
