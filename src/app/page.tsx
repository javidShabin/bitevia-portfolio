"use client";

import Plasma from "@/components/ui/Plasma";
import SplitText from "@/components/ui/SplitText";
import AboutPage from "./about/page";
import { Github, Linkedin, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";
import ServicesPage from "./service/page";

export default function Home() {
  return (
    <>
      <div style={{ width: "100%", height: "100vh", position: "relative" }}>
        <Plasma
          color="#ff6b35"
          speed={1}
          direction="forward"
          scale={1.1}
          opacity={0.8}
          mouseInteractive={true}
        />

        {/* Content Overlay */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-8 pt-20 space-y-6 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Animated Split Text */}
          <SplitText
            text="To Digital Reality"
            className="text-[70px] font-bold text-center"
            delay={100}
            duration={0.6}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />

          {/* Paragraph Animation */}
          <motion.p
            className="max-w-2xl text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            We help businesses and creators transform their ideas into stunning
            digital experiences. From design to development, we craft solutions
            that make an impact and engage audiences.
          </motion.p>

          {/* Buttons Animation */}
          <motion.div
            className="flex gap-4 mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.6 }}
          >
            <button className="bg-[#af1aea] text-white px-6 py-3 rounded-md font-semibold hover:bg-[#974EB5] transition">
              Get Started
            </button>
            <button className="bg-transparent border border-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-black transition">
              Learn More
            </button>
          </motion.div>

          {/* Social Icons Animation */}
          <motion.div
            className="flex gap-6 mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            {[
              { icon: Github, href: "https://github.com/" },
              { icon: Linkedin, href: "https://linkedin.com/" },
              { icon: Instagram, href: "https://instagram.com/" },
              { icon: Twitter, href: "https://twitter.com/" },
            ].map(({ icon: Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl backdrop-blur-md bg-white/10 border border-white/20 shadow-lg hover:bg-white/20 transition"
                whileHover={{ scale: 1.2, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Icon size={28} />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <AboutPage />

      <ServicesPage />

    </>
  );
}
