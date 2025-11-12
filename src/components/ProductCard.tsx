"use client";

import Button from "@/components/Button";
import { motion } from "framer-motion";

interface ProductCardProps {
  name: string;
  description: string;
  stack: string[];
  logo: string; 
  docLink: string;
  githubLink: string;
}

export default function ProductCard({ name, description, stack, logo, docLink, githubLink }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(0, 255, 255, 0.5)" }}
      transition={{ duration: 0.3 }}
      className="p-6 bg-neutral/70 rounded-xl glow text-white flex flex-col items-center"
    >
      <span className="text-6xl mb-4">{logo}</span>
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-center mb-4">{description}</p>
      <ul className="list-disc pl-5 mb-4 text-sm">
        {stack.map((tech, i) => (
          <li key={i}>{tech}</li>
        ))}
      </ul>
      <div className="flex gap-4">
        <Button variant="outline" asChild>
          <a href={docLink} target="_blank" rel="noopener noreferrer">Documentation</a>
        </Button>
        <Button variant="outline" asChild>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">Dépôt GitHub</a>
        </Button>
      </div>
    </motion.div>
  );
}