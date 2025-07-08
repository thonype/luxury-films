'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const values = [
    { icon: '✨', title: 'Creatividad', description: 'Innovación en cada proyecto' },
    { icon: '🎯', title: 'Calidad', description: 'Excelencia en cada detalle' },
    { icon: '⏰', title: 'Puntualidad', description: 'Compromiso con los tiempos' },
    { icon: '💡', title: 'Innovación', description: 'Siempre a la vanguardia' },
  ];

  return (
    <section id="about" className="section-padding bg-luxury-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          {/* Imagen */}
          <div className="relative group">
            <div className="aspect-w-4 aspect-h-5 rounded-2xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-700">
              <img
                src="/media/fotos/retratos/IMG_20231111_092314.jpg"
                alt="Anthony Peñas Bermúdez - Fundador de Luxury Films"
                className="object-cover transform group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </div>

          {/* Contenido */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-luxury-black mb-6 leading-tight">
                Sobre Luxury Films
              </h2>
              <p className="text-lg md:text-xl text-gray-700 mb-6 font-montserrat leading-relaxed">
                Soy Anthony Peñas Bermúdez, fundador de Luxury Films. Mezclo mi formación en ingeniería de software 
                con mi pasión por el arte audiovisual para crear contenido visual memorable. Contamos historias 
                visuales con detalle, emoción y estética profesional.
              </p>
            </motion.div>

            {/* Valores */}
            <div className="grid grid-cols-2 gap-6 mt-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300"
                  role="article"
                  aria-label={`Valor: ${value.title}`}
                >
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                  <h3 className="font-playfair font-bold text-xl mb-2 text-luxury-black group-hover:text-luxury-gold transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 font-montserrat leading-relaxed group-hover:text-gray-800 transition-colors duration-300">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}