"use client";
import React from "react";
import { Globe, Smartphone, Layers, PenTool, Zap, Shield } from "lucide-react";
import SpotlightCard from "@/components/ui/Sportlight";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

export default function ServicesPage() {
  return (
    <div className="min-h-[100vh] bg-[#0a0a0a] text-white flex flex-col items-center px-6 py-20">
      {/* Heading Section */}
      <motion.h1
        className="text-5xl md:text-2xl font-extrabold text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
      >
        Our Services
      </motion.h1>

      <motion.p
        className="mt-4 max-w-2xl text-center text-gray-400 text-lg"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        We deliver innovative, scalable, and performance-driven digital
        solutions that empower businesses to succeed in today’s fast-changing
        world.
      </motion.p>

      {/* Services Grid - 3D Floating Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mt-16 w-full max-w-7xl">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: 0.15 * i, duration: 0.8, type: "spring", stiffness: 120 }}
          >
            <Tilt
              glareEnable={true}
              glareMaxOpacity={0.2}
              tiltMaxAngleX={15}
              tiltMaxAngleY={15}
              scale={1.05}
              transitionSpeed={400}
            >
              <SpotlightCard
                className="h-full p-8 rounded-3xl bg-gradient-to-br from-purple-800/20 to-purple-900/10 backdrop-blur-md border border-purple-600/20 hover:shadow-2xl transition-shadow duration-300"
                spotlightColor="rgba(126, 74, 197, 0.4)"
              >
                <motion.div
                  className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-600/20 text-white mb-6 mx-auto"
                  whileHover={{ scale: 1.3, rotate: 15 }}
                  transition={{ type: "spring", stiffness: 200 }}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-center">{service.title}</h3>
                <p className="text-gray-300 text-sm mt-3 text-center">{service.description}</p>
              </SpotlightCard>
            </Tilt>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites and web apps built with modern frameworks like Next.js, React, and Node.js.",
    icon: <Globe size={28} />,
  },
  {
    title: "Mobile Development",
    description:
      "Cross-platform mobile apps that deliver seamless user experiences on iOS and Android.",
    icon: <Smartphone size={28} />,
  },
  {
    title: "Full-Stack Solutions",
    description:
      "End-to-end development from frontend to backend, ensuring scalability and performance.",
    icon: <Layers size={28} />,
  },
  {
    title: "UI/UX Design",
    description:
      "Human-centered design for interfaces that are intuitive, engaging, and visually stunning.",
    icon: <PenTool size={28} />,
  },
  {
    title: "Performance Optimization",
    description:
      "Lightning-fast performance, SEO-friendly code, and smooth user journeys across all devices.",
    icon: <Zap size={28} />,
  },
  {
    title: "Security & Maintenance",
    description:
      "Robust protection and long-term support to keep your digital assets safe and reliable.",
    icon: <Shield size={28} />,
  },
];
