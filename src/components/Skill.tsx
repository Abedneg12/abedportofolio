// components/Skills.tsx
'use client';

import { motion } from 'framer-motion';

const skillsData = {
  frontend: [
    'HTML5', 'CSS3', 'JavaScript', 
    'React.js', 'Next.js', 'Tailwind CSS'
  ],
  backend: [
    'Node.js', 'Express.js', 'MongoDB',
    'PostgreSQL', 'REST API', 'GraphQL'
  ],
  tools: [
    'Git', 'Docker', 'AWS',
    'Jest', 'Postman', 'Figma'
  ]
};

export default function Skill() {
  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Technical <span className="text-blue-700">Skills</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Frontend Skills */}
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-600">Frontend</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.frontend.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Backend Skills */}
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-purple-600">Backend</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.backend.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* Tools & DevOps */}
            <motion.div
              initial={{ y: 50 }}
              whileInView={{ y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-4 text-pink-600">Tools</h3>
              <div className="flex flex-wrap gap-2">
                {skillsData.tools.map((skill, index) => (
                  <motion.span
                    key={index}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
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