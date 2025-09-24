"use client";
import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  return (
    <section className="relative py-28 px-6 bg-black text-white overflow-hidden">
      {/* Background Gradient / Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-[-120px] left-[-80px] w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulseSlow"></div>
        <div className="absolute bottom-[-100px] right-[-60px] w-80 h-80 bg-indigo-500/20 rounded-full blur-3xl animate-pulseSlow delay-2000"></div>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-300 text-lg md:text-xl max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Reach out to us and let’s build something amazing.
          </p>
        </div>

        {/* Contact Form */}
        <motion.form
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl p-8 md:p-12 shadow-xl flex flex-col gap-6"
        >
          <div className="relative">
            <input
              type="text"
              name="name"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-500 text-white py-2 px-1 outline-none placeholder-transparent focus:border-purple-400 transition-colors"
            />
            <label className="absolute left-1 top-2 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-purple-400 peer-focus:text-sm transition-all">
              Your Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              name="email"
              required
              placeholder=" "
              className="peer w-full bg-transparent border-b border-gray-500 text-white py-2 px-1 outline-none placeholder-transparent focus:border-purple-400 transition-colors"
            />
            <label className="absolute left-1 top-2 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-purple-400 peer-focus:text-sm transition-all">
              Your Email
            </label>
          </div>

          <div className="relative">
            <textarea
              name="message"
              required
              placeholder=" "
              rows={5}
              className="peer w-full bg-transparent border-b border-gray-500 text-white py-2 px-1 outline-none placeholder-transparent focus:border-purple-400 transition-colors resize-none"
            />
            <label className="absolute left-1 top-2 text-gray-400 text-sm peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-500 peer-placeholder-shown:text-base peer-focus:top-[-10px] peer-focus:text-purple-400 peer-focus:text-sm transition-all">
              Your Message
            </label>
          </div>

          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(168,85,247,0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="mt-4 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 text-black font-semibold shadow-lg transition-all duration-300"
          >
            Send Message
          </motion.button>
        </motion.form>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mt-12">
          <a
            href="#"
            className="text-gray-300 hover:text-purple-400 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-blue-400 transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="#"
            className="text-gray-300 hover:text-indigo-400 transition-colors"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
