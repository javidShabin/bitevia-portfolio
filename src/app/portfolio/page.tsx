"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Code2, Globe, Cpu, Layers, Database } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tech: string[];
  category: string;
  link?: string;
  github?: string;
}

const projects: Project[] = [
  {
    title: "E-commerce Web App",
    desc: "Full-stack MERN e-commerce platform with Stripe integration and admin dashboard.",
    tech: ["React", "Node.js", "MongoDB", "TailwindCSS"],
    category: "Full-stack",
    link: "#",
    github: "#",
  },
  {
    title: "Portfolio Website",
    desc: "Responsive portfolio website with dark theme, animations, and SEO optimization.",
    tech: ["Next.js", "TypeScript", "Framer Motion", "TailwindCSS"],
    category: "Frontend",
    link: "#",
  },
  {
    title: "Blog CMS",
    desc: "Dynamic blog platform with markdown support and role-based authentication.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    category: "Backend",
    github: "#",
  },
  // Add more projects
];

const categories = ["All", "Frontend", "Backend", "Full-stack"];

const Portfolio = () => {
  const [activeCat, setActiveCat] = useState("All");

  const filteredProjects = activeCat === "All" ? projects : projects.filter(p => p.category === activeCat);

  return (
    <section className="relative py-28 px-6 bg-black text-white overflow-hidden">
      {/* Background gradient blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-80px] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulseSlow"></div>
        <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulseSlow delay-2000"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            My Projects
          </h2>
          <p className="mt-4 text-gray-300 max-w-2xl mx-auto text-lg md:text-xl">
            Showcase of my freelance and personal projects using modern technologies.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex justify-center gap-6 mb-16">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCat(cat)}
              className={`px-4 py-2 rounded-full font-medium text-sm md:text-base transition-all duration-300 ${
                activeCat === cat
                  ? "bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-black"
                  : "bg-white/10 hover:bg-white/20 text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 120 }}
              className="group relative p-6 rounded-3xl backdrop-blur-xl border border-white/10 shadow-xl bg-black/30 hover:scale-105 transition-transform duration-300"
            >
              <h3 className="text-2xl font-semibold mb-2 text-white">{proj.title}</h3>
              <p className="text-gray-300 mb-4">{proj.desc}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {proj.tech.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-xs md:text-sm px-3 py-1 rounded-full bg-white/10 text-white backdrop-blur-sm"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 mt-auto">
                {proj.link && (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-400 hover:text-purple-200 transition-colors"
                  >
                    Live
                  </a>
                )}
                {proj.github && (
                  <a
                    href={proj.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:text-indigo-200 transition-colors"
                  >
                    Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
