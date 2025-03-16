'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const projects = [
  {
    title: "Website Portofolio",
    technologies: ["Next.Js", "Typescript", "React-Hook", "Tailwind CSS"],
    image: "/test.png",
    situation: "Dalam mengikuti bootcamp fullstack developer, saya harus memiliki sebuah website portofolio saya untuk memulai kisah ini.",
    task: "Membuat website portofolio yang menggunakan Next.Js dan Typescript.",
    action: "Mengembangkan Website Portofolio yang memiliki desain menarik dan Eye-Catchy.",
    result: "Menghasilkan website yang colorful dan tentunya membekas dipikiran viewer.",
    demo: "https://abedportofolio.vercel.app/",
    code: "https://github.com/Abedneg12/abedportofolio.git"
  },
  // Tambahkan proyek lainnya dengan format yang sama
];

export default function Portofolio() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">
          <span className='text-black'>Portofolio</span> <span className="text-blue-700">Proyek</span>
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(index)}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-black">{project.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-2 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal Detail */}
        {selectedProject !== null && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-2xl font-bold text-black">
                    {projects[selectedProject].title}
                  </h3>
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid gap-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">SITUASI</h4>
                    <p className="text-gray-600">
                      {projects[selectedProject].situation}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">TUGAS</h4>
                    <p className="text-gray-600">
                      {projects[selectedProject].task}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">AKSI</h4>
                    <p className="text-gray-600">
                      {projects[selectedProject].action}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">HASIL</h4>
                    <p className="text-gray-600">
                      {projects[selectedProject].result}
                    </p>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <a
                      href={projects[selectedProject].demo}
                      className="flex-1 text-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Lihat Demo
                    </a>
                    <a
                      href={projects[selectedProject].code}
                      className="flex-1 text-center border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Kode Sumber
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}