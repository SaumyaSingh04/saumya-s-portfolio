import React, { useState } from "react";
import projects from "../data/projects.js";
import { motion } from "framer-motion";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="h-screen font-lobster font-bold italic flex flex-col items-center pt-15 px-4 pb-10 bg-gradient-to-br from-[#9c9c9c] to-[#000] text-white overflow-y-auto">
      {/* Title */}
      <motion.h1
        className="text-5xl font-bold tracking-wide mb-10 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h1>

      {/* Project Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <motion.div
            key={project.id}
            className="bg-[#222] text-white rounded-xl shadow-lg overflow-hidden transition-transform transform hover:scale-105"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: project.id * 0.1 }}
          >
            {/* Project Image */}
            <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />

            {/* Project Details */}
            <div className="p-5 text-center">
              <h2 className="text-2xl font-semibold">{project.title}</h2>

              {/* Buttons */}
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-bl from-[#9c9c9c] to-[#000] px-4 py-2 rounded-lg text-white transition-all"
                >
                  Live Demo
                </a>
                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-bl from-[#9c9c9c] to-[#000] px-4 py-2 rounded-lg text-white transition-all"
                >
                  View Code
                </a>
                <button
                  onClick={() => setSelectedProject(project)}
                  className="bg-gradient-to-bl from-[#9c9c9c] to-[#000] px-4 py-2 rounded-lg text-white transition-all"
                >
                  About Project
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal for Project Description */}
      {selectedProject && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 p-4">
          <div className="bg-[#222] p-6 rounded-lg w-full max-w-md max-h-[80vh] overflow-y-auto text-center">
            <h2 className="text-2xl font-semibold">{selectedProject.title}</h2>
            <p className="mt-4 text-gray-300">{selectedProject.description}</p>
            <button
              onClick={() => setSelectedProject(null)}
              className="mt-5 bg-red-500 hover:bg-red-700 px-4 py-2 rounded-lg text-white"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
