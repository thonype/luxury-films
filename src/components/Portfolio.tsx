'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ReactPlayer from 'react-player';

type MediaType = 'all' | 'photo' | 'video';
type Category = 'all' | 'events' | 'music' | 'commercial' | 'blog' | 'retratos';

export default function Portfolio() {
  const [selectedMediaType, setSelectedMediaType] = useState<MediaType>('all');
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [selectedVideo, setSelectedVideo] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleVideoClick = (videoSrc: string) => {
    setIsLoading(true);
    setError(null);
    setSelectedVideo(videoSrc);
  };

  const handleVideoError = () => {
    setError('Error al cargar el video. Por favor, inténtalo de nuevo.');
    setIsLoading(false);
  };

  const handleVideoReady = () => {
    setIsLoading(false);
  };

  const photos = [
    // Fotos de retratos
    { src: '/media/fotos/retratos/DSC02027.JPG', category: 'retratos', thumbnail: '/media/fotos/retratos/DSC02027.JPG' },
    { src: '/media/fotos/retratos/DSC02028.JPG', category: 'retratos', thumbnail: '/media/fotos/retratos/DSC02028.JPG' },
    { src: '/media/fotos/retratos/DSC02035.JPG', category: 'retratos', thumbnail: '/media/fotos/retratos/DSC02035.JPG' },
    { src: '/media/fotos/retratos/DSC02042.JPG', category: 'retratos', thumbnail: '/media/fotos/retratos/DSC02042.JPG' },
    { src: '/media/fotos/retratos/DSC04181.jpg', category: 'retratos', thumbnail: '/media/fotos/retratos/DSC04181.jpg' },
    { src: '/media/fotos/retratos/DSC04220.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC04280 (1).jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC04289.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC04298.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC08041.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC08231.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC08253.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC08271 (1).jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC08298.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC08315.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC08326.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC08335.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/DSC08336.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/Del+odio+al+amor+solo+hay+un+paso.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/Gracias+por+confiar+en+mi+trabajo++felicidades+por+su+logro+++santacoarestaurante (1).jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/Gracias+por+confiar+en+mi+trabajo++felicidades+por+su+logro+++santacoarestaurante (2).jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/Gracias+por+confiar+en+mi+trabajo++felicidades+por+su+logro+++santacoarestaurante.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/Hoy+se+burlan,+mañana+yo+seré+yo+quien+lo+haga.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/IMG_20231111_092314.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/IMG_20231111_092341.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/IMG_20231111_092623.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/IMG_20231111_092716.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/IMG_20231111_093213.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/IMG_20231111_094644.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/lysf_04Mompox+Mágico++#fotos+#fotografia+#mompox+#magico+#photography+#producer (1).jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/lysf_04Mompox+Mágico++#fotos+#fotografia+#mompox+#magico+#photography+#producer (2).jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/lysf_04Mompox+Mágico++#fotos+#fotografia+#mompox+#magico+#photography+#producer.jpg', category: 'retratos' },
    { src: '/media/fotos/retratos/Épico.jpg', category: 'retratos' }
  ];

  const videos = [
    // Videos Musicales
    { 
      src: '/media/videos/musicales/2928268195353766482_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2928268195353766482_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2928275520168769532_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2928275520168769532_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2928283323025497640_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2928283323025497640_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930853921777936222_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930853921777936222_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930856259759046648_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930856259759046648_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930857519861561996_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930857519861561996_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930863957699266225_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930863957699266225_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930883723658377360_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930883723658377360_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930885525414419315_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930885525414419315_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930893977968797010_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930893977968797010_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930897330718851799_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930897330718851799_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930901072147024241_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930901072147024241_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930904807770423200_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930904807770423200_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930906570963978557_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930906570963978557_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930907774980812293_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930907774980812293_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2930922890975202545_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2930922890975202545_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/2997122168814359959_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/2997122168814359959_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/3004202046952954379_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/3004202046952954379_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/3012340532675533742_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/3012340532675533742_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/3012341740878810317_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/3012341740878810317_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/3022911003858956081_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/3022911003858956081_55479149689_mp4.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/3030309232498637008_55479149689_mp4.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/3030309232498637008_55479149689_mp4.jpg',
      category: 'music'
    },
    
    { 
      src: '/media/videos/musicales/cuando-te-vi-victor-la-nota.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/cuando_te_vi_victor_la_nota.jpg',
      category: 'music'
    },
    { 
      src: '/media/videos/musicales/loco-por-verte-kevin-ditta.mp4',
      thumbnail: '/media/videos/musicales/thumbnails/loco_por_verte_kevin_ditta.jpg',
      category: 'music'
    },

    // Videos Comerciales
    {
      src: '/media/videos/comerciales/publicidad-terminado-2.mp4',
      thumbnail: '/media/videos/comerciales/thumbnails/publicidad-terminado-2.jpg',
      category: 'commercial'
    },

    // Videos de Eventos
    {
      src: '/media/videos/eventos/15-anos.mp4',
      thumbnail: '/media/videos/eventos/thumbnails/15-anos.jpg',
      category: 'events'
    },
    {
      src: '/media/videos/eventos/boda.mp4',
      thumbnail: '/media/videos/eventos/thumbnails/boda.jpg',
      category: 'events'
    },
    {
      src: '/media/videos/eventos/Espero+que+le+guste+un+poco+de+mi+trabajo.mp4',
      thumbnail: '/media/videos/eventos/thumbnails/espero-que-le-guste.jpg',
      category: 'events'
    },

    // Videos de Blog
    {
      src: '/media/videos/blog/1.mp4',
      thumbnail: '/media/videos/blog/thumbnails/1.jpg',
      category: 'blog'
    },
    {
      src: '/media/videos/blog/2.mp4',
      thumbnail: '/media/videos/blog/thumbnails/2.jpg',
      category: 'blog'
    },
    {
      src: '/media/videos/blog/3.mp4',
      thumbnail: '/media/videos/blog/thumbnails/3.jpg',
      category: 'blog'
    },
    {
      src: '/media/videos/blog/4.mp4',
      thumbnail: '/media/videos/blog/thumbnails/4.jpg',
      category: 'blog'
    },
    {
      src: '/media/videos/blog/5.mp4',
      thumbnail: '/media/videos/blog/thumbnails/5.jpg',
      category: 'blog'
    },
    {
      src: '/media/videos/blog/6.mp4',
      thumbnail: '/media/videos/blog/thumbnails/6.jpg',
      category: 'blog'
    },
    {
      src: '/media/videos/blog/7.mp4',
      thumbnail: '/media/videos/blog/thumbnails/7.jpg',
      category: 'blog'
    },
    {
      src: '/media/videos/blog/8.mp4',
      thumbnail: '/media/videos/blog/thumbnails/8.jpg',
      category: 'blog'
    }
  ];

  const filteredMedia = () => {
    let media = [];
    if (selectedMediaType === 'all' || selectedMediaType === 'photo') {
      media = [...media, ...photos];
    }
    if (selectedMediaType === 'all' || selectedMediaType === 'video') {
      media = [...media, ...videos];
    }
    if (selectedCategory !== 'all') {
      media = media.filter(item => item.category === selectedCategory);
    }
    return media;
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Categorías como carpetas */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 mb-8">
        <button
          className={`flex flex-col items-center p-4 rounded-lg transition-all ${selectedCategory === 'all' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          onClick={() => setSelectedCategory('all')}
        >
          <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"/>
          </svg>
          <span>Todas</span>
        </button>
        <button
          className={`flex flex-col items-center p-4 rounded-lg transition-all ${selectedCategory === 'retratos' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          onClick={() => setSelectedCategory('retratos')}
        >
          <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"/>
          </svg>
          <span>Retratos</span>
        </button>
        <button
          className={`flex flex-col items-center p-4 rounded-lg transition-all ${selectedCategory === 'music' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          onClick={() => setSelectedCategory('music')}
        >
          <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"/>
          </svg>
          <span>Musicales</span>
        </button>
        <button
          className={`flex flex-col items-center p-4 rounded-lg transition-all ${selectedCategory === 'commercial' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          onClick={() => setSelectedCategory('commercial')}
        >
          <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"/>
          </svg>
          <span>Comerciales</span>
        </button>
        <button
          className={`flex flex-col items-center p-4 rounded-lg transition-all ${selectedCategory === 'events' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          onClick={() => setSelectedCategory('events')}
        >
          <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"/>
          </svg>
          <span>Eventos</span>
        </button>
        <button
          className={`flex flex-col items-center p-4 rounded-lg transition-all ${selectedCategory === 'blog' ? 'bg-blue-500 text-white' : 'bg-gray-100 hover:bg-gray-200'}`}
          onClick={() => setSelectedCategory('blog')}
        >
          <svg className="w-12 h-12 mb-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 5h-8.586L9.707 3.293A.997.997 0 0 0 9 3H4c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V7c0-1.103-.897-2-2-2zM4 19V7h16l.002 12H4z"/>
          </svg>
          <span>Blog</span>
        </button>
      </div>

      {/* Galería de medios */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMedia().map((item, index) => (
          <motion.div
            key={index}
            className="relative aspect-video cursor-pointer overflow-hidden rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={() => item.src.endsWith('.mp4') && handleVideoClick(item.src)}
          >
            <img
              src={item.thumbnail || item.src} // Usar thumbnail si existe, si no usar src
              alt={`Thumbnail ${index + 1}`}
              className="w-full h-full object-cover"
              onError={(e) => {
                // Si hay error al cargar el thumbnail, usar src como fallback
                const target = e.target as HTMLImageElement;
                if (target.src !== item.src) {
                  target.src = item.src;
                }
              }}
            />
            {item.src.endsWith('.mp4') && (
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                <svg
                  className="w-12 h-12 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            )}
          </motion.div>
        ))}
      </div>

      {/* Modal de video con botón de retorno mejorado para móviles */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            onClick={() => setSelectedVideo(null)}
          >
            <div className="relative w-full max-w-4xl mx-4">
              {/* Botón de cerrar mejorado para móviles */}
              <button
                className="absolute -top-12 right-0 text-white bg-red-500 rounded-full p-3 shadow-lg flex items-center justify-center transform transition-transform hover:scale-110 active:scale-95 focus:outline-none"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedVideo(null);
                }}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              )}
              {error && (
                <div className="text-red-500 text-center py-4">{error}</div>
              )}
              <ReactPlayer
                url={selectedVideo}
                width="100%"
                height="100%"
                controls
                playing
                onError={handleVideoError}
                onReady={handleVideoReady}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
