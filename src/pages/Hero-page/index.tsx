'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

// Varian animasi untuk stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-4 items-center">
          
          {/* Bagian Teks */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-5 text-center lg:text-left"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight"
            >
              Ciao, Abednego here!
              <br />
              <span 
                className="text-yellow-400"
                style={{
                  textShadow: "3px 3px 0px #000, -3px 3px 0px #000, 3px -3px 0px #000, -3px -3px 0px #000"
                }}
              >
                My Portofolio
              </span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="flex justify-center lg:justify-start">
                <p className="text-lg bg-white text-slate-800 font-semibold p-3 rounded-lg inline-block shadow-md">
                  Manusia biasa yang berusaha berdampak.
                </p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4"
            >
              <a href="#portfolio">
                <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-orange-500 text-white font-bold px-8 py-4 rounded-full border-4 border-slate-900 shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] transition-all"
                >
                  Lihat Projek!
                </motion.button>
              </a>
              <a href="#contact">
                 <motion.button
                  whileHover={{ scale: 1.05, y: -4 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto bg-white text-slate-900 font-bold px-8 py-4 rounded-full border-4 border-slate-900 shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] transition-all"
                >
                  Kontak Saya
                </motion.button>
              </a>
            </motion.div>
          </motion.div>

          {/* Bagian Gambar */}
          <motion.div
            initial={{ opacity: 0, y: 50, rotate: -15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, rotate: 6, scale: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 12, delay: 0.5 }}
            className="flex justify-center items-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                <div className="absolute inset-0 bg-yellow-400 rounded-2xl transform -rotate-12"></div>
                <div className="absolute inset-0 bg-orange-500 rounded-2xl transform -rotate-3"></div>
                <div className="relative w-full h-full rounded-2xl overflow-hidden border-4 border-slate-900">
                    <Image
                      src="/ABED.jpg"
                      alt="Yosua Abednego"
                      fill
                      className="object-cover"
                      priority
                      sizes="(max-width: 1024px) 100vw, 40vw"
                    />
                </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}