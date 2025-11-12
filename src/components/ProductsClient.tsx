"use client";

import ProductCard from "@/components/ProductCard";
import { motion } from "framer-motion";

export default function ProductsClient() {
  const products = [
    {
      name: "OpenShield",
      description: "IDS/IPS, pare-feu intelligent, filtrage adaptatif.",
      stack: ["Wazuh", "Zeek", "ELK"],
      logo: "🛡️",
      docLink: "https://github.com/OpenDefender/OpenShield/docs",
      githubLink: "https://github.com/OpenDefender/OpenShield",
    },
    {
      name: "OpenRisk",
      description: "Analyse et scoring de risques cyber.",
      stack: ["Python", "Go", "Kubernetes"],
      logo: "📊",
      docLink: "https://github.com/OpenDefender/OpenRisk/docs",
      githubLink: "https://github.com/OpenDefender/OpenRisk",
    },
    {
      name: "OpenEye",
      description: "Monitoring temps réel, corrélation d’événements.",
      stack: ["Wazuh", "Zeek", "ELK"],
      logo: "👁️",
      docLink: "https://github.com/OpenDefender/OpenEye/docs",
      githubLink: "https://github.com/OpenDefender/OpenEye",
    },
    {
      name: "OpenWatch",
      description: "IA de détection comportementale.",
      stack: ["Python", "Grafana"],
      logo: "🕵️",
      docLink: "https://github.com/OpenDefender/OpenWatch/docs",
      githubLink: "https://github.com/OpenDefender/OpenWatch",
    },
    {
      name: "OpenTrace",
      description: "Journalisation, traçabilité et forensic.",
      stack: ["ELK", "Kubernetes"],
      logo: "🔗",
      docLink: "https://github.com/OpenDefender/OpenTrace/docs",
      githubLink: "https://github.com/OpenDefender/OpenTrace",
    },
    {
      name: "OpenDefender Cloud",
      description: "Interface SaaS centralisée.",
      stack: ["Next.js", "Node.js", "Strapi"],
      logo: "☁️",
      docLink: "https://github.com/OpenDefender/Cloud/docs",
      githubLink: "https://github.com/OpenDefender/Cloud",
    },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="min-h-screen py-16 px-4"
    >
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-12 glow">Nos Solutions</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, i) => (
            <ProductCard key={i} {...product} />
          ))}
        </div>
      </div>
    </motion.main>
  );
}