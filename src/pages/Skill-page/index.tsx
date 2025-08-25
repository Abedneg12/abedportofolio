
'use client';

import { motion } from 'framer-motion';

// Mengelompokkan skills agar lebih terstruktur dan menarik
const skillsData = {
  'Data & AI': {
    skills: ['Python', 'Data Analysis', 'AI Prompting LLM'],
    color: 'bg-sky-400', // Biru untuk data
  },
  'Engineering & Design': {
    skills: ['Solidworks', 'Figma', 'Canva'],
    color: 'bg-orange-500', // Oranye untuk engineering
  },
  'Tools & Others': {
    skills: ['Git', 'Docker', 'Postman', 'Adobe Premiere Pro', 'Office Apps'],
    color: 'bg-yellow-400', // Kuning untuk tools
  },
};

// Varian animasi untuk stagger effect
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Judul Utama */}
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-12"
        >
          <span className='text-white'>My</span>
          <span 
            className="text-yellow-400"
            style={{
              textShadow: "3px 3px 0px #000, -3px 3px 0px #000, 3px -3px 0px #000, -3px -3px 0px #000"
            }}
          > Skillset
          </span>
        </motion.h2>

        {/* Kartu "Skill Inventory" */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-white p-8 sm:p-10 rounded-xl border-4 border-slate-900 shadow-[10px_10px_0_0_#F97316]"
        >
          {Object.entries(skillsData).map(([category, data]) => (
            <div key={category} className="mb-8 last:mb-0">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">
                {category}
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                {data.skills.map((skill) => (
                  <motion.div
                    key={skill}
                    variants={itemVariants}
                    whileHover={{ y: -4, scale: 1.05 }}
                    className={`font-bold px-5 py-3 ${data.color} text-slate-900 rounded-full border-4 border-slate-900 shadow-[5px_5px_0_0_#000] cursor-default`}
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}