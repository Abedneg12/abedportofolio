// components/Contact.tsx
'use client';

import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';

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
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (!response.ok) {
      throw new Error('Gagal mengirim pesan')
    }

    alert('Pesan terkirim!')
    reset()
    
  } catch (error) {
    alert(
      error instanceof Error 
        ? error.message 
        : 'Terjadi kesalahan. Silakan coba lagi.'
    )
  }
}
  return (
    <section id="contact" className="py-20" /*bg-gradient-to-br from-gray-50 to-blue-50*/>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">
              <span className='text-white'>Mari</span> <span className="text-blue-500">Bekerja Sama</span>
            </h2>
            
            <p className="text-white">
              Tertarik untuk berkolaborasi atau memiliki pertanyaan? 
              Silakan hubungi saya melalui form atau kontak dibawah ini.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <FiMail className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium text-white">Email</p>
                  <a href="mailto:contoh@email.com" className="text-gray-400 hover:text-white">
                    blablabla@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FiGithub className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium text-white">GitHub</p>
                  <a 
                    href="https://github.com/username" 
                    target="_blank"
                    rel="noopener"
                    className="text-gray-400 hover:text-white"
                  >
                    github.com/Abedneg21
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <FiLinkedin className="w-6 h-6 text-blue-600" />
                <div>
                  <p className="font-medium text-white">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/username"
                    target="_blank"
                    rel="noopener"
                    className="text-gray-400 hover:text-white"
                  >
                    linkedin.com/in/
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">
                Nama Lengkap
              </label>
              <input
                {...register('name', { required: 'Nama wajib diisi' })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                {...register('email', { 
                  required: 'Email wajib diisi',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Email tidak valid'
                  }
                })}
                className={`w-full px-4 py-2 border rounded-lg ${
                  errors.email ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">
                Pesan
              </label>
              <textarea
                {...register('message', { 
                  required: 'Pesan wajib diisi',
                  minLength: {
                    value: 20,
                    message: 'Minimal 20 karakter'
                  }
                })}
                rows={5}
                className={`w-full px-4 py-2 border rounded-lg ${
                  errors.message ? 'border-red-500' : 'border-gray-300'
                }`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
              )}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:bg-blue-400"
            >
              {isSubmitting ? 'Mengirim...' : 'Kirim Pesan'}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}