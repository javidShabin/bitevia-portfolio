"use client";
import React, { useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder: implement email sending or form handling here
    alert("Message submitted! We will contact you soon.");
    formRef.current?.reset();
  };

  return (
    <section className="relative w-full min-h-screen bg-black overflow-hidden flex items-center justify-center">
      {/* Animated particle background */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-purple-900 via-indigo-900 to-black opacity-60 animate-pulse-slow"></div>
        <div className="absolute w-[200%] h-[200%] bg-[radial-gradient(circle,rgba(255,255,255,0.05),transparent)] animate-spin-slow"></div>
      </motion.div>

      <div className="relative z-10 max-w-4xl w-full px-6 py-16">
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 text-center mb-10"
        >
          Contact Our Team
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 flex flex-col gap-6 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl placeholder-gray-400 text-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl placeholder-gray-400 text-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              required
              className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl placeholder-gray-400 text-white focus:border-purple-400 focus:ring-1 focus:ring-purple-400 outline-none transition"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-xl text-white font-semibold shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              Send Message
            </motion.button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col gap-8 justify-center"
          >
            <div className="text-white space-y-4">
              <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400">
                Get in Touch
              </h2>
              <p className="text-gray-300 leading-relaxed">
                We&apos;re a freelance web development team. Reach out for projects, collaborations, or just to say hello!
              </p>
            </div>

            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <Mail className="w-6 h-6 text-purple-400" />
                <span className="text-gray-300">team@yourcompany.com</span>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="w-6 h-6 text-indigo-400" />
                <span className="text-gray-300">+91 98765 43210</span>
              </div>
              <div className="flex items-center gap-6 mt-4">
                <a href="#" className="hover:scale-110 transition-transform text-white">
                  <Github className="w-6 h-6" />
                </a>
                <a href="#" className="hover:scale-110 transition-transform text-white">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
