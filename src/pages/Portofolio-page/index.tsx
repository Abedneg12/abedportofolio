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
  {
    title: "Rekomitra Droppoint Project Development",
    technologies: ["FIgma", "PRD"],
    image: "/Rkm.png",
    situation: "Saya mengikuti Program magang Merdeka 2022, dan mengerjakan project dummy untuk on-going project bernama Rekomitra Droppoin",
    task: "Melakukan developing produk digital dummy untuk Rekomitra droppoint",
    action: "Mempelajari aplikasi figma, mempelajari dan melakukan riset terhadap produk yang sudah berjalan (rekomitra droppoint), dan juga mempelajari Product Management Tools",
    result: "Menghasilkan PRD produk digital, Dokumen pendukung (syarat dan ketentuan untuk kemitraan), dan juga Wireframe UI/UX aplikasi rekomitra droppoint",
    demo: "https://www.figma.com/design/bL6l4G8r8TrCfHB7VwIbR6/REKOMITRA-DROPPOINT?node-id=0-1&t=70RVUGPuCwb7doFU-1",
    code: "https://drive.google.com/drive/folders/1P8_Wmeuyd_UKPD-88tzrchEFgN-AeJRi?usp=sharing"
  },
  {
    title: "Aftermovie Infinite 2019",
    technologies: ["Adobe Premiere Pro", "Adobe AFter Effect"],
    image: "/infinite.png",
    situation: "Saya mengikuti program kepanitiaan acara HMPSTI yaitu INFINITE, Sebuah acara pergantian kepala Himpunan Teknik Industri yang disertai acara lainnya",
    task: "Melakukan editing video untuk aftermovie acara",
    action: "Melakukan take recap video selama acara, editing footage serta berdiskusi untuk konsep video yang akan dibuat",
    result: "Menghasilkan video aftermovie yang berkonsep Retro dan sangat memorable",
    demo: "https://www.youtube.com/watch?v=U3CqQsRNP9g",
    code: "https://drive.google.com/drive/folders/1P8_Wmeuyd_UKPD-88tzrchEFgN-AeJRi?usp=sharing"
  }, 
  {
    title: "Website Freshmarket with irga & akbar",
    technologies: ["Next.Js", "Typescript", "React-Hook", "Tailwind CSS"],
    image: "/image.png",
    situation: "Project harus dikerjakan oleh 3 orang, dimana membuat online groceries web yang bernama freshmarket.",
    task: "Membuat feature 3 dari freshmarket.",
    action: "Mengerjakan feature 3 untuk fitur cart, checkout, store admin dashboard dan pembayaran menggunakan manual ataupun midtrans.",
    result: "Menghasilkan website freshmarket dimana website ini merupakan online groceries web .",
    demo: "https://freshmarketfrontend.vercel.app/",
    code: "https://github.com/Abedneg12/freshmarketfrontend"
  }
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
                      Sumber
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