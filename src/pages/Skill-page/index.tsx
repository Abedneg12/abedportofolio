// components/Skills.tsx
'use client';

import { motion } from 'framer-motion';

const skillsData = {
  tools: [
    'Git', 'Docker', 'Postman', 'Figma', 'Adobe Premiere Pro',
    'Solidworks', 'AI Prompt'
  ]
};

export default function Skill() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12">
            <span className='text-white'>Technical</span> <span className="text-blue-500">Skills</span>
          </h2>
          <div className="flex justify-center">
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-lg w-full md:w-2/3 lg:w-1/2" 
            >
              <h3 className="text-xl font-semibold mb-4 text-pink-600">Tools</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skillsData.tools.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}