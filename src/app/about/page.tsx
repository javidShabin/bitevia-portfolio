"use client";
import React from "react";
import { Code2, Monitor, Rocket, Users } from "lucide-react";
import SpotlightCard from "@/components/ui/Sportlight";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 py-20">
      {/* Heading Section */}
      <motion.h1
        className="text-5xl md:text-2xl font-extrabold text-center text-white"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        About Us
      </motion.h1>

      <motion.p
        className="mt-6 max-w-2xl text-center text-gray-400 text-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        We are a creative team of developers, designers, and strategists dedicated to building modern, high-performance web experiences.
      </motion.p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 w-full max-w-7xl">
        {features.map((feature, i) => (
          <motion.div
            key={feature.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.2 * i, duration: 0.8 }}
          >
            <SpotlightCard
              className="custom-spotlight-card"
              spotlightColor="rgba(126, 74, 197, 1)"
            >
              <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-600/20 text-gray-100 mb-6 mx-auto">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
              <p className="text-gray-400 text-sm mt-3 text-center">
                {feature.description}
              </p>
            </SpotlightCard>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        className="mt-20 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold">
          Let’s Build Something Amazing Together 🚀
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto">
          Whether you’re a startup or an enterprise, we craft digital solutions that scale with your ambitions.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105 active:scale-95">
          Get in Touch
        </button>
      </motion.div>
    </div>
  );
}

const features = [
  {
    title: "Modern Development",
    description: "Cutting-edge technologies for scalable and reliable solutions.",
    icon: <Code2 size={28} />,
  },
  {
    title: "Responsive Design",
    description: "Websites that look stunning on every device.",
    icon: <Monitor size={28} />,
  },
  {
    title: "Fast Performance",
    description: "Optimized experiences for speed and efficiency.",
    icon: <Rocket size={28} />,
  },
  {
    title: "Collaboration",
    description: "We partner with you to turn ideas into reality.",
    icon: <Users size={28} />,
  },
];
