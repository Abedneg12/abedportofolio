
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// Menambahkan tipe data untuk proyek agar lebih aman
type Project = {
  title: string;
  technologies: string[];
  image: string;
  situation: string;
  task: string;
  action: string;
  result: string;
  demo: string;
  code: string;
};

const projects: Project[] = [
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
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="portfolio" className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ y: -50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ type: 'spring', stiffness: 100 }}
          className="text-5xl md:text-6xl font-extrabold text-center mb-16"
        >
          <span className='text-white'>Portofolio</span>
          <span
            className="text-orange-500"
            style={{
              textShadow: "3px 3px 0px #000, -3px 3px 0px #000, 3px -3px 0px #000, -3px -3px 0px #000"
            }}
          > Proyek
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ y: 50, opacity: 0, scale: 0.9 }}
              whileInView={{ y: 0, opacity: 1, scale: 1 }}
              whileHover={{ y: -8, transition: { type: 'spring', stiffness: 300 } }}
              viewport={{ once: true }}
              className="bg-white rounded-xl border-4 border-slate-900 shadow-[8px_8px_0_0_#0EA5E9] cursor-pointer flex flex-col"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48 border-b-4 border-slate-900 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-extrabold mb-3 text-slate-800 flex-grow">{project.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 bg-yellow-400 text-slate-900 rounded-full text-sm font-semibold border-2 border-slate-900"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', stiffness: 300, damping: 25 }}
              className="bg-white rounded-xl border-4 border-slate-900 shadow-[10px_10px_0_0_#FDE047] max-w-2xl w-full max-h-[90vh] flex flex-col"
            >
              <div className="p-6 border-b-4 border-slate-900 flex justify-between items-center">
                <h3 className="text-2xl font-extrabold text-slate-800">
                  {selectedProject.title}
                </h3>
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="text-2xl font-bold text-slate-800 hover:text-orange-500 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="p-6 space-y-4 overflow-y-auto">
                {['situation', 'task', 'action', 'result'].map(section => (
                  <div key={section}>
                    <h4 className="font-extrabold text-lg mb-1 text-orange-500 tracking-widest">
                      {section.toUpperCase()}
                    </h4>
                    <p className="text-slate-600 bg-slate-100 p-3 rounded-md border-2 border-slate-200">
                      {selectedProject[section as keyof Project]}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="p-6 mt-auto border-t-4 border-slate-900 flex flex-col sm:flex-row gap-4">
                <a
                  href={selectedProject.demo}
                  className="w-full text-center bg-orange-500 text-white font-bold px-6 py-3 rounded-full border-4 border-slate-900 shadow-[5px_5px_0_0_#000] hover:shadow-[7px_7px_0_0_#000] transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Lihat Demo
                </a>
                <a
                  href={selectedProject.code}
                  className="w-full text-center bg-white text-slate-900 font-bold px-6 py-3 rounded-full border-4 border-slate-900 shadow-[5px_5px_0_0_#000] hover:shadow-[7px_7px_0_0_#000] transition-all"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sumber Kode
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}