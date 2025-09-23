"use client";
import React from "react";
import { Code2, Monitor, Rocket, Users } from "lucide-react";
import SpotlightCard from "@/components/ui/Sportlight";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white flex flex-col items-center justify-center px-6 py-20">
      {/* Heading Section */}
      <h1 className="text-5xl md:text-2xl font-extrabold text-center text-white">
        About Us
      </h1>

      <p className="mt-6 max-w-2xl text-center text-gray-400 text-lg">
        We are a creative team of developers, designers, and strategists dedicated to building modern, high-performance web experiences.
      </p>

      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-16 w-full max-w-7xl">
        {features.map((feature) => (
          <SpotlightCard key={feature.title} className="custom-spotlight-card" spotlightColor="rgba(126, 74, 197, 1)">
          <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-600/20 text-gray-100 mb-6 mx-auto">
             {feature.icon}
             </div>
          <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
             <p className="text-gray-400 text-sm mt-3 text-center">{feature.description}</p>
        </SpotlightCard>
          // <div
          //   key={feature.title}
          //   className="p-6 rounded-2xl bg-gradient-to-b from-zinc-900 to-zinc-800 border border-zinc-700 hover:border-purple-500 shadow-lg hover:shadow-purple-500/20 transition"
          // >
          //   <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-purple-600/20 text-purple-400 mb-6 mx-auto">
          //     {feature.icon}
          //   </div>
          //   <h3 className="text-xl font-semibold text-center">{feature.title}</h3>
          //   <p className="text-gray-400 text-sm mt-3 text-center">{feature.description}</p>
          // </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold">
          Let’s Build Something Amazing Together 🚀
        </h2>
        <p className="mt-3 text-gray-400 max-w-xl mx-auto">
          Whether you’re a startup or an enterprise, we craft digital solutions that scale with your ambitions.
        </p>
        <button className="mt-6 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-full shadow-lg transition transform hover:scale-105 active:scale-95">
          Get in Touch
        </button>
      </div>
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
