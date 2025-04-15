// components/Hero.tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


export default function Hero() {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center pt-25"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6 text-center lg:text-left"
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-white">
              Ciao, Abednego here <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-300">
                This is My Portofolio
              </span>
            </h1>
            
            <p className="text-lg text-white max-w-xl mx-auto lg:mx-0">
              Manusia biasa yang berusaha berdampak bagi manusia lain.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a href="#portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition-all"
              >
                Lihat Projek
              </motion.button>
            </a>
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="border-2 border-blue-600 text-white px-6 py-3 rounded-lg hover:bg-amber-200 transition-colors"
              >
                Kontak Saya
              </motion.button>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative aspect-square rounded-3xl overflow-hidden shadow-xl border-8 border-white"
          >
            <Image
              src="/woman.webp"
              alt="Yosua Abednego"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}