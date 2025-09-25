"use client"
import React from 'react'
import { motion } from 'framer-motion';
import CardSwap, { Card } from '../../components/ui/CardSwap'
import { Vortex } from '@/components/ui/vortex';
import { ArrowDown } from 'lucide-react';

export default function Page() {

    const cardDatas = [
        {
            id: 1,
            image: "/images/project1.png",
            projectName: "Project Beta",
            decscription: "E-commerce platform with seamless payment integration.",
            techStack: ["Next.js", "MongoDB", "Stripe"]
        },
        {
            id: 2,
            image: "/images/project2.png",
            projectName: "Project Beta",
            decscription: "E-commerce platform with seamless payment integration.",
            techStack: ["Next.js", "MongoDB", "Stripe"]
        },
        {
            id: 3,
            image: "/images/project3.png",
            projectName: "Project Beta",
            decscription: "E-commerce platform with seamless payment integration.",
            techStack: ["Next.js", "MongoDB", "Stripe"]
        },
        {
            id: 4,
            image: "/images/project4.png",
            projectName: "Project Beta",
            decscription: "E-commerce platform with seamless payment integration.",
            techStack: ["Next.js", "MongoDB", "Stripe"]
        },
        {
            id: 5,
            image: "/images/project5.png",
            projectName: "Project Beta",
            decscription: "E-commerce platform with seamless payment integration.",
            techStack: ["Next.js", "MongoDB", "Stripe"]
        }
    ]

    return (
        <>
            <Vortex
                backgroundColor="black"
            >
                <div className="overflow-hidden relative min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 gap-12">

                    {/* Left side text */}
                    <motion.div
                        initial={{ x: -100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex-1 space-y-6 max-w-xl text-center md:text-left"
                    >
                        <h1 className="text-3xl md:text-5xl font-extrabold bg-clip-text text-white leading-tight">
                            Our Creative Projects
                        </h1>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            We craft <span className="text-purple-400 font-semibold">stunning</span>, interactive,
                            and high-performance digital experiences. Our team specializes in frontend, backend,
                            and full-stack solutions that impress users and drive results.
                        </p>
                        <p className="text-gray-400 italic">
                            Scroll the cards on the right to explore our highlighted work and creative concepts.
                        </p>
                    </motion.div>

                    {/* Right side cards */}
                    <motion.div
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ duration: 1 }}
                        className="flex-1 flex justify-center"
                    >
                        <div style={{ height: '500px', position: 'relative', width: '90%' }}>
                            <CardSwap
                                cardDistance={60}
                                verticalDistance={50}
                                delay={5000}
                                pauseOnHover={true}
                            >
                                {
                                    cardDatas.map((project) => (
                                        <Card
                                            key={project.id}
                                            className="overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
                                        >
                                            {/* Project Image */}
                                            <div className="relative w-[95%] mx-auto h-[50%] overflow-hidden rounded-xl mt-3">
                                                <img
                                                    src={project.image}
                                                    alt={project.projectName}
                                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                                                />
                                                {/* Overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                                            </div>
                                            {/* Card Content */}
                                            <div className="p-4">
                                                <h3 className="text-2xl font-bold text-white mb-2">{project.projectName}</h3>
                                                <p className="text-gray-300 mb-3 line-clamp-3">{project.decscription}</p>

                                                {/* Tech Stack */}
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techStack.map((tech, index) => (
                                                        <span
                                                            key={index}
                                                            className="bg-purple-800/50 text-purple-400 text-xs font-medium px-2 py-1 rounded"
                                                        >
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </Card>
                                    ))
                                }
                            </CardSwap>
                        </div>
                    </motion.div>

                    <motion.button
                        initial={{ y: 0, scale: 1, opacity: 0.85 }}
                        animate={{
                            y: [0, -14, 0],
                            scale: [1, 1.08, 1],
                            opacity: [0.85, 1, 0.85],
                        }}
                        transition={{
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 2.5,
                            ease: "easeInOut",
                        }}
                        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-lg border border-white/20 text-white font-semibold rounded-2xl shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:bg-white/20 hover:scale-105 transition-all duration-300"
                    >
                        <span>More products</span>
                        <motion.span
                            animate={{ y: [0, 6, 0] }}
                            transition={{ repeat: Infinity, repeatType: "loop", duration: 1.5, ease: "easeInOut" }}
                        >
                            <ArrowDown className="w-5 h-5" />
                        </motion.span>
                    </motion.button>
                </div>
            </Vortex>
        </>
    )
}

