import React from "react";
import { motion } from "framer-motion";
import pic from "../data/me.jpg";
import resume from "../data/SaumyaSinghResume.pdf"; // Add your resume file in the /data folder

const Profile = () => {
  return (
    <div className="min-h-screen flex font-lobster font-bold italic flex-col items-center justify-center px-4 py-5 bg-gradient-to-br from-[#9c9c9c] to-[#000] text-white">
      
      {/* Animated Text */}
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-lobster font-bold italic tracking-wide text-white text-center sm:text-left z-10 m-1"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        WEB DESIGN &<span className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl"> DEVELOPMENT</span>
      </motion.h1>

      {/* Profile Image */}
      <motion.div
        className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 mt-2 overflow-hidden rounded-lg border border-white shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={pic}
          alt="Profile"
          className="w-full h-full object-cover grayscale"
        />
      </motion.div>

      {/* Summary */}
      <motion.p
        className="text-sm sm:text-md md:text-lg text-white italic mt-6 text-center max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Turning design concepts into responsive, high-performance web experiences
      </motion.p>

      {/* Download Resume Button */}
      <motion.a
        href={resume}
        download="Saumya_Singh_Resume.pdf"
        className="mt-6 px-4 py-2 bg-white text-black text-lg font-bold rounded-lg shadow-lg hover:bg-gray-200 transition duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Download Resume
      </motion.a>

    </div>
  );
};

export default Profile;
