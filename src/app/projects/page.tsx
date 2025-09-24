"use client"
import React from 'react'
import { motion } from 'framer-motion';
import CardSwap, { Card } from '../../components/ui/CardSwap'
import { Vortex } from '@/components/ui/vortex';

export default function Page() {

    const cardDatas = [
        {
            id: 1,
            image: "/images/project1.jpeg",
            projectName: "Project Beta",
            decscription: "E-commerce platform with seamless payment integration.",
            techStack: ["Next.js", "MongoDB", "Stripe"]
        },
        {
            id: 2,
            image: "/images/project1.jpeg",
            projectName: "Project Beta",
            decscription: "E-commerce platform with seamless payment integration.",
            techStack: ["Next.js", "MongoDB", "Stripe"]
        },
        {
            id: 3,
            image: "/images/project1.jpeg",
            projectName: "Project Beta",
            decscription: "E-commerce platform with seamless payment integration.",
            techStack: ["Next.js", "MongoDB", "Stripe"]
        },
        {
            id: 4,
            image: "/images/project1.jpeg",
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
                <div className="overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 gap-12">

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
                                pauseOnHover={false}
                            >

                                {
                                    cardDatas.map((project) => (
                                        <Card key={project.id}>
                                            <img src={project.image} alt="Project 5" className="w-full h-32 object-cover rounded-md mb-4" />
                                            <h3 className="text-xl font-semibold text-white">{project.projectName}</h3>
                                            <p className="text-gray-300 mb-2">{project.decscription}</p>
                                            <p className="text-purple-400 text-sm">Tech: {project.techStack}</p>
                                        </Card>
                                    ))
                                }



                            </CardSwap>

                        </div>
                    </motion.div>
                </div>
            </Vortex>
        </>
    )
}
