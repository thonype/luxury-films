'use client';

import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section 
      className="hero-section relative flex items-center justify-center min-h-screen overflow-hidden"
      role="banner"
      aria-label="Bienvenida a Luxury Films"
    >
      <div 
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: 'url(/media/fotos/retratos/DSC08231.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          transform: 'scale(1.1)', // Para el efecto parallax suave
          transition: 'transform 0.5s ease-out'
        }}
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]"></div>
      
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-6xl md:text-7xl lg:text-8xl font-playfair text-white mb-8 font-bold leading-tight tracking-tight"
          >
            Transformamos ideas en
            <span className="block mt-2 bg-gradient-to-r from-luxury-gold to-yellow-200 bg-clip-text text-transparent">
              emociones visuales
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="text-2xl md:text-3xl text-luxury-cream mb-12 font-montserrat font-light tracking-wider"
          >
            Bienvenido a Luxury Films
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "easeOut" }}
            className="transform hover:scale-105 transition-all duration-300"
          >
            <a
              href="#portfolio"
              className="group relative inline-flex items-center gap-4 px-8 py-4 bg-luxury-gold text-white rounded-full overflow-hidden transition-all duration-300 hover:bg-opacity-90 hover:shadow-lg"
              role="button"
              aria-label="Ver nuestro portafolio"
            >
              <span className="relative z-10 text-xl font-montserrat font-medium">
                Explorar Portafolio
              </span>
              <motion.span
                className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300"
                whileHover={{ x: 5 }}
              >
                →
              </motion.span>
              <div className="absolute inset-0 bg-white/20 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll mejorado */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="p-2 bg-white/10 rounded-full backdrop-blur-sm hover:bg-white/20 transition-colors duration-300 cursor-pointer"
          onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          role="button"
          aria-label="Desplazarse hacia abajo"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}