'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import axios from 'axios';

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:7001/contacts';

      await axios.post(API_URL, {
        ...data,
        createdAt: new Date().toISOString()
      });
      
      alert('Pesan terkirim! Terima kasih telah menghubungi.');
      reset();

    } catch (error: any) {
      const errorMessage = error.response?.data?.message || error.message || 'Terjadi kesalahan. Silakan coba lagi nanti.';
      alert(`Gagal mengirim pesan: ${errorMessage}`);
    }
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-center mb-16"
        >
            <h2 className="text-5xl md:text-6xl font-extrabold">
                <span className='text-white'>Hubungi</span>
                <span 
                className="text-yellow-400"
                style={{
                    textShadow: "3px 3px 0px #000, -3px 3px 0px #000, 3px -3px 0px #000, -3px -3px 0px #000"
                }}
                > Saya
                </span>
            </h2>
            <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
                Tertarik untuk berkolaborasi atau memiliki pertanyaan? Saya siap mendengarkan!
            </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Info */}
          <motion.div 
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.2 }}
            className="md:col-span-2 space-y-4"
          >
            <a href="mailto:yosua12.abednego@gmail.com" className="flex items-center gap-4 p-4 bg-white rounded-xl border-4 border-slate-900 shadow-[6px_6px_0_0_#F97316] hover:shadow-[8px_8px_0_0_#F97316] hover:-translate-y-1 transition-all">
              <FiMail className="w-8 h-8 text-orange-500" />
              <span className="font-bold text-slate-800">Email Me</span>
            </a>
            <a href="https://github.com/Abedneg12" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border-4 border-slate-900 shadow-[6px_6px_0_0_#0EA5E9] hover:shadow-[8px_8px_0_0_#0EA5E9] hover:-translate-y-1 transition-all">
              <FiGithub className="w-8 h-8 text-sky-500" />
              <span className="font-bold text-slate-800">GitHub</span>
            </a>
            <a href="https://linkedin.com/in/yosua-abednego/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-4 bg-white rounded-xl border-4 border-slate-900 shadow-[6px_6px_0_0_#FDE047] hover:shadow-[8px_8px_0_0_#FDE047] hover:-translate-y-1 transition-all">
              <FiLinkedin className="w-8 h-8 text-yellow-500" />
              <span className="font-bold text-slate-800">LinkedIn</span>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ type: 'spring', stiffness: 80, delay: 0.4 }}
            className="md:col-span-3 bg-white p-8 rounded-xl border-4 border-slate-900 shadow-[8px_8px_0_0_#000]"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-lg font-extrabold mb-2 text-slate-800" htmlFor="name">
                  Nama Lengkap
                </label>
                <input
                  {...register('name', { required: 'Nama wajib diisi' })}
                  className={`w-full px-4 py-3 bg-slate-100 text-slate-900 border-4 rounded-lg focus:ring-4 focus:ring-yellow-400 transition-all ${
                    errors.name ? 'border-red-500' : 'border-slate-900'
                  }`}
                />
                {errors.name && <p className="text-red-600 font-bold mt-1">{errors.name.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-extrabold mb-2 text-slate-800" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email', { 
                    required: 'Email wajib diisi',
                    pattern: { value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message: 'Email tidak valid' }
                  })}
                  className={`w-full px-4 py-3 bg-slate-100 text-slate-900 border-4 rounded-lg focus:ring-4 focus:ring-yellow-400 transition-all ${
                    errors.email ? 'border-red-500' : 'border-slate-900'
                  }`}
                />
                {errors.email && <p className="text-red-600 font-bold mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-lg font-extrabold mb-2 text-slate-800" htmlFor="message">
                  Pesan
                </label>
                <textarea
                  {...register('message', { required: 'Pesan wajib diisi', minLength: { value: 10, message: 'Minimal 10 karakter' } })}
                  rows={4}
                  className={`w-full px-4 py-3 bg-slate-100 text-slate-900 border-4 rounded-lg focus:ring-4 focus:ring-yellow-400 transition-all resize-none ${
                    errors.message ? 'border-red-500' : 'border-slate-900'
                  }`}
                />
                {errors.message && <p className="text-red-600 font-bold mt-1">{errors.message.message}</p>}
              </div>

              <motion.button
                whileHover={{ scale: 1.02, y: -3 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-orange-500 text-white font-bold text-lg px-6 py-4 rounded-full border-4 border-slate-900 shadow-[6px_6px_0_0_#000] hover:shadow-[8px_8px_0_0_#000] transition-all disabled:bg-orange-300 disabled:shadow-none"
              >
                {isSubmitting ? 'Mengirim...' : 'Kirim Pesan!'}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}