'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: '🎬',
    title: 'Producción Audiovisual',
    description: 'Creamos contenido audiovisual de alta calidad para tu marca o proyecto.',
    image: '/media/fotos/retratos/DSC08271 (1).jpg'
  },
  {
    icon: '📸',
    title: 'Fotografía Profesional',
    description: 'Capturamos momentos únicos con un enfoque artístico y profesional.',
    image: '/media/fotos/eventos/DSC04289.jpg'
  },
  {
    icon: '💻',
    title: 'Diseño Web y Portafolios',
    description: 'Desarrollamos sitios web modernos y atractivos que destacan tu marca.',
    image: '/media/fotos/retratos/DSC08298.jpg'
  },
  {
    icon: '📱',
    title: 'Manejo de Redes Sociales',
    description: 'Gestionamos tu presencia digital con contenido estratégico y creativo.',
    image: '/media/fotos/eventos/DSC08326.jpg'
  },
  {
    icon: '🛍️',
    title: 'Publicidad para Marcas',
    description: 'Creamos campañas publicitarias efectivas que conectan con tu audiencia.',
    image: '/media/fotos/retratos/DSC08335.jpg'
  },
  {
    icon: '🎥',
    title: 'Videos Promocionales',
    description: 'Producimos videos promocionales y documentales que cuentan tu historia.',
    image: '/media/fotos/retratos/DSC08336.jpg'
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="services" className="section-padding bg-luxury-black py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-playfair font-bold text-luxury-gold mb-6">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-luxury-cream font-montserrat max-w-2xl mx-auto">
            Soluciones creativas para todas tus necesidades audiovisuales
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="service-card group hover:transform hover:scale-105 transition-all duration-500 cursor-pointer"
              role="article"
              aria-label={`Servicio: ${service.title}`}
            >
              <div className="relative overflow-hidden aspect-w-16 aspect-h-9 rounded-t-xl">
                <img
                  src={service.image}
                  alt={`Imagen de ${service.title}`}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-70 group-hover:opacity-50 transition-all duration-500"></div>
                <div className="absolute top-4 left-4 text-4xl bg-white/20 p-3 rounded-xl backdrop-blur-md shadow-lg transform group-hover:scale-110 transition-all duration-500">{service.icon}</div>
              </div>
              <div className="p-8 bg-white rounded-b-xl transform transition-all duration-500 group-hover:shadow-2xl">
                <h3 className="text-2xl font-playfair font-bold text-luxury-black mb-4 group-hover:text-luxury-gold transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 font-montserrat text-lg leading-relaxed">{service.description}</p>
                <button 
                  className="mt-6 text-luxury-gold font-montserrat font-medium text-lg group-hover:text-luxury-black transition-colors duration-300 flex items-center"
                  aria-label={`Saber más sobre ${service.title}`}
                >
                  Saber más
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}