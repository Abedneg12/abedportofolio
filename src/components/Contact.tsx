// components/Contact.tsx
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

// Konfigurasi JSONBin.io
const JSONBIN_ENDPOINT = `https://api.jsonbin.io/v3/b/${process.env.NEXT_PUBLIC_JSONBIN_BIN_ID}`;
const JSONBIN_HEADERS = {
  'Content-Type': 'application/json',
  'X-Access-Key': process.env.NEXT_PUBLIC_JSONBIN_ACCESS_KEY!,
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
      // 1. Ambil data yang sudah ada
      const { data: existingData } = await axios.get(JSONBIN_ENDPOINT, {
        headers: JSONBIN_HEADERS
      });
      
      const contacts = existingData.record?.contacts || [];

      // 2. Validasi duplikat email (case insensitive)
      const normalizedEmail = data.email.toLowerCase();
      if (contacts.some((contact: FormData) => 
        contact.email.toLowerCase() === normalizedEmail
      )) {
        throw new Error('Anda sudah mengirim pesan menggunakan email ini');
      }

      // 3. Tambahkan data baru
      const newContact = {
        ...data,
        createdAt: new Date().toISOString()
      };

      // 4. Update data di JSONBin.io
      const { status } = await axios.put(
        JSONBIN_ENDPOINT,
        { contacts: [...contacts, newContact] },
        { headers: JSONBIN_HEADERS }
      );

      if (status !== 200) throw new Error('Gagal menyimpan data');
      
      alert('Pesan terkirim! 🎉');
      reset();
    } catch (error) {
      const errorMessage = error instanceof Error 
        ? error.message 
        : 'Terjadi kesalahan. Silakan coba lagi.';
      alert(`Gagal mengirim pesan: ${errorMessage}`);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Contact Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600">
              Mari Bekerja Sama
            </h2>
            
            <p className="text-gray-300 text-lg">
              Tertarik untuk berkolaborasi atau memiliki pertanyaan? 
              Silakan hubungi saya melalui form atau kontak di bawah ini.
            </p>

            <div className="space-y-4">
              <ContactInfoItem
                icon={<FiMail className="w-6 h-6 text-blue-400" />}
                label="Email"
                value="bhablabia@gmail.com"
                href="mailto:bhablabia@gmail.com"
              />

              <ContactInfoItem
                icon={<FiGithub className="w-6 h-6 text-blue-400" />}
                label="GitHub"
                value="github.com/Abedneg21"
                href="https://github.com/Abedneg21"
              />

              <ContactInfoItem
                icon={<FiLinkedin className="w-6 h-6 text-blue-400" />}
                label="LinkedIn"
                value="linkedin.com/in/yourprofile"
                href="https://linkedin.com/in/yourprofile"
              />
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              label="Nama Lengkap"
              id="name"
              error={errors.name}
            >
              <input
                {...register('name', { required: 'Nama wajib diisi' })}
                className={`form-input ${errors.name ? 'error' : ''}`}
                placeholder="John Doe"
              />
            </FormField>

            <FormField
              label="Email"
              id="email"
              error={errors.email}
            >
              <input
                type="email"
                {...register('email', { 
                  required: 'Email wajib diisi',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Format email tidak valid'
                  }
                })}
                className={`form-input ${errors.email ? 'error' : ''}`}
                placeholder="johndoe@example.com"
              />
            </FormField>

            <FormField
              label="Pesan"
              id="message"
              error={errors.message}
            >
              <textarea
                {...register('message', { 
                  required: 'Pesan wajib diisi',
                  minLength: {
                    value: 20,
                    message: 'Minimal 20 karakter'
                  }
                })}
                rows={5}
                className={`form-input ${errors.message ? 'error' : ''}`}
                placeholder="Tulis pesan Anda di sini..."
              />
            </FormField>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"/>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"/>
                  </svg>
                  Mengirim...
                </span>
              ) : (
                'Kirim Pesan'
              )}
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}

// Komponen Bantuan
const ContactInfoItem = ({ icon, label, value, href }: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) => (
  <div className="flex items-center gap-4 hover:bg-gray-800 p-3 rounded-lg transition-colors">
    {icon}
    <div>
      <p className="font-medium text-gray-300">{label}</p>
      {href ? (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-white transition-colors"
        >
          {value}
        </a>
      ) : (
        <p className="text-gray-400">{value}</p>
      )}
    </div>
  </div>
);

// Komponen Form Field
const FormField = ({ label, id, error, children }: {
  label: string;
  id: string;
  error?: any;
  children: React.ReactNode;
}) => (
  <div>
    <label className="block text-sm font-medium mb-2 text-gray-300" htmlFor={id}>
      {label}
    </label>
    {children}
    {error && (
      <p className="text-red-400 text-sm mt-1">{error.message}</p>
    )}
  </div>
);