"use client";

import Button from "@/components/Button";
import ParticlesBackground from "@/components/ParticlesBackground";
import NetworkBackground from "@/components/NetworkBackground";
import { motion } from "framer-motion";
import { FaShieldAlt, FaChartBar, FaEye, FaSearch, FaLink } from "react-icons/fa";

export default function HomeClient() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden bg-gradient-to-b from-primary to-neutral">
      <ParticlesBackground />
      <NetworkBackground />
      <div className="z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold text-accent mb-4 shadow-lg glow"
        >
          OpenDefender — La défense cyber du futur, open-source et intelligente.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="text-xl md:text-2xl text-gray-300 mb-8"
        >
          Un écosystème complet pour sécuriser vos infrastructures, vos données et vos utilisateurs.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col md:flex-row justify-center gap-6 mb-12"
        >
          <Button size="lg" className="glow text-primary bg-accent hover:bg-accent/80" asChild>
            <a href="/produits">Découvrir les produits</a>
          </Button>
          <Button variant="outline" size="lg" className="glow border-accent text-accent hover:bg-accent/20" asChild>
            <a href="/communaute">Rejoindre la communauté</a>
          </Button>
        </motion.div>
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16 grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-8"
        >
          {[
            { icon: <FaShieldAlt className="text-4xl text-accent" />, name: "Protection réseau (OpenShield)" },
            { icon: <FaChartBar className="text-4xl text-accent" />, name: "Analyse de risque (OpenRisk)" },
            { icon: <FaEye className="text-4xl text-accent" />, name: "Surveillance intelligente (OpenEye)" },
            { icon: <FaSearch className="text-4xl text-accent" />, name: "Détection d’anomalies (OpenWatch)" },
            { icon: <FaLink className="text-4xl text-accent" />, name: "Traçabilité et audit (OpenTrace)" },
          ].map((pillar, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px #00FFFF" }}
              className="p-6 bg-neutral/70 rounded-xl text-center glow backdrop-blur-sm"
            >
              {pillar.icon}
              <p className="text-white mt-2">{pillar.name}</p>
            </motion.div>
          ))}
        </motion.section>
      </div>
    </main>
  );
}