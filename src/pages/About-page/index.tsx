'use client';

import { motion } from 'framer-motion';


type EducationItem = {
  institution: string;
  degree: string;
  period: string;
};

// Data skills dan pendidikan
const skills: string[] = [
  'Solidworks',
  'AI Prompting LLM',
  'Python',
  'Data Analysis',
  'Product Management',
  'Canva',
  'Adobe Premiere Pro',
  'Office Apps'
];

const education: EducationItem[] = [
  {
    institution: 'Universitas Katolik Parahyangan',
    degree: 'S.T. (Teknik Industri)',
    period: '2019-2024'
  },
  {
    institution: 'Myskill',
    degree: 'Bootcamp Data Analysis',
    period: '2023'
  }
];


const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

export default function About() {
  return (

    <section id="about" className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-3 gap-10"
        >
          {/* Kolom Kiri - Tentang Saya & Pendidikan */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Kartu "Tentang Saya" */}
            <div className="bg-white p-8 rounded-xl border-4 border-slate-900 shadow-[8px_8px_0_0_#F97316]">
              <h2 className="text-3xl font-extrabold text-slate-800 mb-4">
                Tentang Saya
              </h2>
              <p className="text-slate-600 leading-relaxed">
                Saya Yosua Abednego, lulusan Teknik Industri dari Universitas Katolik Parahyangan. Memiliki ketertarikan mendalam di bidang data, konfigurasi AI, product management, dan web development. Saya menyukai tantangan, hal baru, dan selalu berusaha berdampak bagi sesama.
              </p>
            </div>

            {/* Kartu "Pendidikan" */}
            <div className="bg-white p-8 rounded-xl border-4 border-slate-900 shadow-[8px_8px_0_0_#FDE047]">
              <h3 className="text-2xl font-extrabold text-slate-800 mb-6">
                Latar Pendidikan
              </h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <div key={index} className="bg-slate-100 p-4 rounded-lg border-2 border-slate-300">
                    <h4 className="font-bold text-slate-800">{item.institution}</h4>
                    <p className="text-slate-600">{item.degree}</p>
                    <p className="text-sm text-slate-500 mt-1">{item.period}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Kolom Kanan - Skills & Nilai Tambah */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="space-y-8"
          >
            {/* Kartu "Skills" */}
            <div className="bg-white p-8 rounded-xl border-4 border-slate-900 shadow-[8px_8px_0_0_#0EA5E9]">
              <h3 className="text-2xl font-extrabold text-slate-800 mb-6">
                Teknologi & Skills
              </h3>
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={itemVariants}
                    className="font-semibold px-4 py-2 bg-yellow-400 text-slate-900 rounded-full border-2 border-slate-900 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </div>
            
             {/* Kartu "Nilai Tambah" */}
            <div className="bg-white p-8 rounded-xl border-4 border-slate-900">
                <h3 className="text-2xl font-extrabold text-slate-800 mb-6">
                    Nilai Tambah
                </h3>
                <div className="space-y-4">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-orange-500 rounded-lg border-2 border-slate-900">
                          ⚡️
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800">Fokus pada Performa</h4>
                            <p className="text-slate-600 text-sm">Optimasi dan efisiensi</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-sky-500 rounded-lg border-2 border-slate-900">
                          🏆
                        </div>
                        <div>
                            <h4 className="font-bold text-slate-800">Hasil Berkualitas</h4>
                            <p className="text-slate-600 text-sm">Mengutamakan kualitas pengerjaan</p>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}