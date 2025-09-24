import React from 'react'
import CardSwap, { Card } from '../../components/ui/CardSwap'

export default function page() {
    
    return (
    
<>
<div>


    <div style={{ height: '500px',position: 'relative', width:'90%' }}>
        <CardSwap
            cardDistance={60}
            verticalDistance={50}
            delay={5000}
            pauseOnHover={false}
        >
            
            <Card>
                <h3>Card 1</h3>
                <p>Your content here</p>
            </Card>
            <Card>
                <h3>Card 2</h3>
                <p>Your content here</p>
            </Card>
            <Card>
                <h3>Card 3</h3>
                <p>Your content here</p>
            </Card>
            <Card>
                <h3>Card 3</h3>
                <p>Your content here</p>
            </Card>
            <Card>
                <h3>Card 3</h3>
                <p>Your content here</p>
            </Card>
            <Card>
                <h3>Card 3</h3>
                <p>Your content here</p>
            </Card>
        </CardSwap>
    </div>

    </div>
    </>
  )
}



// "use client";

// import React from 'react';
// import { motion } from 'framer-motion';
// import CardSwap, { Card } from '../../components/ui/CardSwap';

// export default function Page() {
//   return (
//     <section className="relative w-full min-h-screen flex items-center justify-center bg-black text-white px-6 lg:px-20">
      
//       {/* Left Text Section */}
//       <motion.div
//         initial={{ x: -100, opacity: 0 }}
//         animate={{ x: 0, opacity: 1 }}
//         transition={{ duration: 1 }}
//         className="flex-1 space-y-6 max-w-lg"
//       >
//         <h1 className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-indigo-400">
//           Our Creative Projects
//         </h1>
//         <p className="text-gray-300 text-lg leading-relaxed">
//           We craft stunning, interactive, and high-performance digital experiences. 
//           Our team specializes in frontend, backend, and full-stack solutions that impress users and drive results.
//         </p>
//         <p className="text-gray-400 italic">
//           Scroll the cards on the right to see some of our highlighted work and concepts.
//         </p>
//       </motion.div>

//       {/* Right Animated Cards */}
//       <div className="flex-1 flex justify-end">
//         <div style={{ width: '500px', height: '500px', position: 'relative' }}>
//           <CardSwap
//             cardDistance={60}
//             verticalDistance={50}
//             delay={5000}
//             pauseOnHover={true}
//           >
//             <Card className="bg-gradient-to-tr from-purple-500 to-indigo-500 p-6 text-white shadow-2xl">
//               <h3 className="text-xl font-bold mb-2">Project 1</h3>
//               <p>Interactive UI Concept</p>
//             </Card>
//             <Card className="bg-gradient-to-tr from-pink-500 to-purple-500 p-6 text-white shadow-2xl">
//               <h3 className="text-xl font-bold mb-2">Project 2</h3>
//               <p>Dynamic Web Animation</p>
//             </Card>
//             <Card className="bg-gradient-to-tr from-indigo-500 to-blue-500 p-6 text-white shadow-2xl">
//               <h3 className="text-xl font-bold mb-2">Project 3</h3>
//               <p>Next.js & Tailwind Project</p>
//             </Card>
//             <Card className="bg-gradient-to-tr from-yellow-500 to-orange-500 p-6 text-white shadow-2xl">
//               <h3 className="text-xl font-bold mb-2">Project 4</h3>
//               <p>Full-Stack Solution</p>
//             </Card>
//             <Card className="bg-gradient-to-tr from-green-500 to-teal-500 p-6 text-white shadow-2xl">
//               <h3 className="text-xl font-bold mb-2">Project 5</h3>
//               <p>Cloud & DevOps Example</p>
//             </Card>
//           </CardSwap>
//         </div>
//       </div>

//     </section>
//   );
// }
