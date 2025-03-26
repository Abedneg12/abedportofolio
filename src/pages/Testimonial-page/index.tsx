'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

type TestimonialItem = {
  quote: string;
  clientName: string;
  clientPhoto?: string;
};

const testimonials: TestimonialItem[] = [
  {
    quote: "Abednego adalah developer yang luar biasa, selalu memberikan hasil yang memuaskan dan inovatif.",
    clientName: "Windah Basudara",
    clientPhoto: "/baracuda.jpg",
  },
  {
    quote: "Kualitas kerjanya sangat tinggi, dan ia selalu tepat waktu dalam menyelesaikan proyek.",
    clientName: "Reza Arap Oktovian",
    clientPhoto: "/clients/budi.jpg",
  },
  {
    quote: "Sangat profesional dan memiliki pemahaman mendalam tentang teknologi terbaru.",
    clientName: "Rina, CTO Company C",
    clientPhoto: "/clients/rina.jpg",
  },
];

export default function Testi() {
  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-black">
            Testimoni & Review (Dummy Page)
          </h2>
          <p className="text-gray-600 mt-4">
            Apa kata klien dan rekan kerja mengenai kualitas dan dampak dari pekerjaan saya.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg flex flex-col items-center text-center"
            >
              {item.clientPhoto && (
                <div className="w-20 h-20 rounded-full overflow-hidden mb-4">
                  <Image
                    src={item.clientPhoto}
                    alt={item.clientName}
                    width={80}
                    height={80}
                    className="object-cover"
                  />
                </div>
              )}
              <p className="text-gray-600 italic mb-4">"{item.quote}"</p>
              <h4 className="text-lg font-semibold text-blue-600">{item.clientName}</h4>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
