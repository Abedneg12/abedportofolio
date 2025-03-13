'use client';

import { motion } from 'framer-motion';

// Define the structure for education items.
type EducationItem = {
  institution: string;
  degree: string;
  period: string;
};

const skills: string[] = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'Next.js',
  'Tailwind CSS',
  'Git & GitHub'
];

const education: EducationItem[] = [
  {
    institution: 'Universitas Katolik Parahyangan',
    degree: 'Teknik Industri',
    period: '2019-2023'
  },
  {
    institution: 'Bootcamp Web Development',
    degree: 'Full-Stack Developer',
    period: '2024'
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid lg:grid-cols-2 gap-12"
        >
          {/* Kolom Kiri - Tentang Saya */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Tentang <span className="text-blue-600">Saya</span>
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Saya seorang Full-Stack Developer dengan passion untuk menciptakan
              aplikasi web yang indah dan fungsional. Dengan latar belakang di bidang
              teknik industri dan pengalaman praktis melalui berbagai proyek, saya terus
              mengembangkan kemampuan teknis dan desain.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Latar Pendidikan
              </h3>
              <div className="space-y-4">
                {education.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ x: -20 }}
                    whileInView={{ x: 0 }}
                    className="bg-white p-6 rounded-lg shadow-sm"
                  >
                    <h4 className="font-medium text-gray-800">{item.institution}</h4>
                    <p className="text-gray-600">{item.degree}</p>
                    <p className="text-sm text-gray-500 mt-2">{item.period}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          {/* Kolom Kanan - Skill */}
          <div className="space-y-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              Teknologi yang Dikuasai
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={index}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  className="px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm hover:bg-blue-200 transition-colors cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </div>
            {/* Nilai Tambah */}
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Fokus pada Performa</h4>
                  <p className="text-gray-600 text-sm">Optimasi kecepatan dan efisiensi</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 bg-blue-100 rounded-full">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-800">Kode Berkualitas</h4>
                  <p className="text-gray-600 text-sm">Clean code & best practices</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}