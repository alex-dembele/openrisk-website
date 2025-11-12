"use client";

import { motion } from "framer-motion";

const NetworkBackground = () => {
  return (
    <motion.svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2 }}
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#00FFFF" />
          <stop offset="100%" stopColor="#0A1F44" />
        </linearGradient>
      </defs>
     
      {Array.from({ length: 10 }).map((_, i) => (
        <g key={i}>
          <motion.line
            x1="0" y1={`${i * 10}%`} x2="100%" y2={`${i * 10}%`}
            stroke="url(#lineGradient)" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.line
            x1={`${i * 10}%`} y1="0" x2={`${i * 10}%`} y2="100%"
            stroke="url(#lineGradient)" strokeWidth="1"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
          />
        </g>
      ))}
    </motion.svg>
  );
};

export default NetworkBackground;