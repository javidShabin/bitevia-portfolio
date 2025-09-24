"use client"
import React from 'react'
import { motion } from 'framer-motion';
import CardSwap, { Card } from '../../components/ui/CardSwap'

export default function Page() {
  return (
    <>
      <div className="overflow-hidden min-h-screen flex flex-col md:flex-row items-center justify-between px-6 md:px-12 py-12 gap-12 bg-black">
        
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
              <Card>
                <h3 className="text-xl font-semibold text-white">Card 1</h3>
                <p className="text-gray-300">Your content here</p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold text-white">Card 2</h3>
                <p className="text-gray-300">Your content here</p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold text-white">Card 3</h3>
                <p className="text-gray-300">Your content here</p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold text-white">Card 4</h3>
                <p className="text-gray-300">Your content here</p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold text-white">Card 5</h3>
                <p className="text-gray-300">Your content here</p>
              </Card>
              <Card>
                <h3 className="text-xl font-semibold text-white">Card 6</h3>
                <p className="text-gray-300">Your content here</p>
              </Card>
            </CardSwap>
          </div>
        </motion.div>
      </div>
    </>
  )
}
