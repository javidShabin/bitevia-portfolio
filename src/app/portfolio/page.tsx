"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, Smartphone, PenTool, Layers } from "lucide-react";

type Project = {
  title: string;
  category: "Web" | "Mobile" | "Design" | "Full-Stack";
  description: string;
  icon: React.ReactNode;
  image: any;
};

export default function PortfolioSection() {
  const [filter, setFilter] = useState<"All" | "Web" | "Mobile" | "Design" | "Full-Stack">("All");

  const projects: Project[] = [
    {
      title: "E-commerce Web App",
      category: "Web",
      description: "Custom online store built with React & Next.js.",
      icon: <Globe size={28} />,
      image: "https://stock.adobe.com/search?k=porsche+911",
    },
    {
      title: "Mobile Fitness App",
      category: "Mobile",
      description: "Cross-platform app for iOS & Android using React Native.",
      icon: <Smartphone size={28} />,
      image: "https://stock.adobe.com/search?k=porsche+911",
    },
    {
      title: "Landing Page Design",
      category: "Design",
      description: "Modern UI/UX design for a marketing campaign.",
      icon: <PenTool size={28} />,
      image: "https://stock.adobe.com/search?k=porsche+911",
    },
    {
      title: "Full-Stack SaaS Platform",
      category: "Full-Stack",
      description: "End-to-end SaaS product using Node.js, MongoDB, React.",
      icon: <Layers size={28} />,
      image: "https://stock.adobe.com/search?k=porsche+911",
    },
  ];

  const filteredProjects = projects.filter(
    (p) => filter === "All" || p.category === filter
  );

  const categories: Array<typeof filter> = ["All", "Web", "Mobile", "Design", "Full-Stack"];

  return (
    <div className="min-h-[100vh] bg-[#0a0a0a] text-white px-6 py-20 flex flex-col items-center relative overflow-hidden">
      {/* Heading */}
      <motion.h1
        className="text-5xl md:text-4xl font-extrabold text-center text-white"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Portfolio / Case Studies
      </motion.h1>

      <motion.p
        className="mt-4 max-w-2xl text-center text-gray-300 text-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        Explore our projects. Filter by category to see what we can create.
      </motion.p>

      {/* Filter Buttons */}
      <div className="flex gap-4 mt-8 flex-wrap justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-5 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-purple-600 border-purple-600 text-white"
                : "border-gray-500 text-gray-400 hover:border-purple-500 hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 w-full max-w-7xl">
        <AnimatePresence>
          {filteredProjects.map((project, i) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 30, scale: 0.95 }}
              transition={{ duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 120 }}
            >
              <div className="relative group rounded-3xl overflow-hidden shadow-lg bg-[#121212] border border-purple-600/20 hover:shadow-2xl transition-shadow duration-300">
                {/* Project Image */}
                <div className="h-44 w-full overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>

                {/* Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center gap-3 p-4">
                  <h3 className="text-xl font-bold text-white text-center">{project.title}</h3>
                  <p className="text-gray-300 text-sm text-center">{project.description}</p>
                  <div className="flex gap-4 mt-2">
                    <button className="px-4 py-2 bg-purple-600 rounded-md text-white hover:bg-purple-700 transition">
                      View Details
                    </button>
                    <button className="px-4 py-2 bg-gray-700 rounded-md text-white hover:bg-gray-800 transition">
                      Live Demo
                    </button>
                  </div>
                </div>

                {/* Icon */}
                <div className="absolute top-4 left-4 bg-purple-600/30 backdrop-blur-sm p-2 rounded-full text-white">
                  {project.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
