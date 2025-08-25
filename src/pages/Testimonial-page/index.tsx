
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';


type TestimonialItem = {
  quote: string;
  clientName: string;
  clientPhoto?: string;
};

const testimonials: TestimonialItem[] = [
  {
    quote: "Abednego adalah developer yang luar biasa, selalu memberikan hasil yang memuaskan dan inovatif.",
    clientName: "Windah Basudara",
    clientPhoto: "/baracuda.jpg",
  },
  {
    quote: "Kualitas kerjanya sangat tinggi, dan ia selalu tepat waktu dalam menyelesaikan proyek.",
    clientName: "Reza Arap Oktovian",
    clientPhoto: "/clients/budi.jpg",
  },
  {
    quote: "Sangat profesional dan memiliki pemahaman mendalam tentang teknologi terbaru.",
    clientName: "Rina, CTO Company C",
    clientPhoto: "/clients/rina.jpg",
  },
];


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.8 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring', stiffness: 120 }
  },
};

export default function Testi() {
  return (
    <section id="testimonials" className="py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-extrabold">
            <span className='text-white'>Testimoni & </span>
            <span 
              className="text-yellow-400"
              style={{
                textShadow: "3px 3px 0px #000, -3px 3px 0px #000, 3px -3px 0px #000, -3px -3px 0px #000"
              }}
            >
              Review
            </span>
          </h2>
          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Apa kata klien dan rekan kerja mengenai kualitas dan dampak dari pekerjaan saya. (Halaman Dummy)
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-8"
        >
          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="flex flex-col items-center"
            >
              {/* Speech Bubble */}
              <div className="relative bg-white p-6 rounded-xl border-4 border-slate-900 shadow-[8px_8px_0_0_#F97316]">
                <p className="text-slate-700 italic text-center">"{item.quote}"</p>
                {/* Tail of the bubble */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 bg-white border-b-4 border-r-4 border-slate-900 transform rotate-45"></div>
              </div>
              
              {/* Client Info */}
              <div className="mt-8 flex flex-col items-center text-center">
                {item.clientPhoto && (
                  <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-slate-900 shadow-[5px_5px_0_0_#000]">
                    <Image
                      src={item.clientPhoto}
                      alt={item.clientName}
                      width={80}
                      height={80}
                      className="object-cover w-full h-full"
                    />
                  </div>
                )}
                <h4 className="mt-4 text-lg font-bold text-white bg-orange-500 px-4 py-1 rounded-md border-2 border-slate-900">
                  {item.clientName}
                </h4>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}