import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const transformations = [
  { id: 1, src: '/images/transformations/transform-01.webp', alt: 'Rebuild Fitness Studio client transformation' },
  { id: 2, src: '/images/transformations/transform-02.webp', alt: 'Rebuild Fitness Studio client transformation' },
  { id: 3, src: '/images/transformations/transform-03.webp', alt: 'Rebuild Fitness Studio client transformation' },
  { id: 4, src: '/images/transformations/transform-04.webp', alt: 'Rebuild Fitness Studio client transformation' },
  { id: 5, src: '/images/transformations/transform-05.webp', alt: 'Rebuild Fitness Studio client transformation' },
  { id: 6, src: '/images/transformations/transform-06.webp', alt: 'Rebuild Fitness Studio client transformation' },
  { id: 7, src: '/images/transformations/transform-07.webp', alt: 'Rebuild Fitness Studio client transformation' },
  { id: 8, src: '/images/transformations/transform-08.webp', alt: 'Rebuild Fitness Studio client transformation' },
  {
    id: 9,
    src: '/images/transformations/transform-09.jpg',
    alt: 'Rebuild Fitness Studio client transformation - Before and after comparison',
    heading: 'Client Transformation',
    caption: 'Every transformation begins with a commitment. Consistency, dedication and expert guidance make the difference.',
  },
];

export default function Transformations() {
  const [lightbox, setLightbox] = useState(null);

  const closeLightbox = useCallback(() => setLightbox(null), []);

  useEffect(() => {
    if (lightbox === null) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') closeLightbox();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [lightbox, closeLightbox]);

  return (
    <>
      <section
        id="transformations"
        className="section-padding px-4 bg-brand-charcoal"
        aria-label="Client transformations"
      >
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
            className="text-center mb-16"
          >
            <motion.span
              variants={fadeUp}
              className="text-brand-red uppercase tracking-[0.2em] text-sm font-heading block mb-4"
            >
              Client Transformations
            </motion.span>
            <motion.h2
              variants={fadeUp}
              className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase leading-tight mb-6"
            >
              Real People. Real Consistency.{' '}
              <span className="text-brand-red">Real Results.</span>
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-brand-muted text-lg max-w-2xl mx-auto leading-relaxed"
            >
              Every transformation starts with a decision. See how our clients
              have worked consistently to build stronger, healthier versions of
              themselves.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={stagger}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start"
          >
            {transformations.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="relative overflow-hidden rounded-sm cursor-pointer group bg-brand-charcoal border border-white/5 hover:border-brand-red/30 transition-colors duration-300"
                onClick={() => setLightbox(item)}
                role="button"
                tabIndex={0}
                aria-label={item.heading ? `${item.heading} - ${item.alt}` : `View transformation ${item.id}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightbox(item);
                  }
                }}
              >
                <div className="relative overflow-hidden">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-auto block transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  {/* Desktop hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 hidden md:flex items-center justify-center">
                    <span className="font-heading text-xs uppercase tracking-[0.2em] text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-brand-red/90 px-4 py-2">
                      View Transformation
                    </span>
                  </div>
                </div>

                {/* Card Heading & Caption */}
                {(item.heading || item.caption) && (
                  <div className="p-5 bg-brand-charcoal border-t border-white/5">
                    {item.heading && (
                      <h3 className="font-heading text-lg uppercase tracking-wider text-white mb-1.5 flex items-center justify-between">
                        <span>{item.heading}</span>
                        <span className="text-[10px] font-heading uppercase tracking-wider text-brand-red bg-brand-red/10 border border-brand-red/20 px-2 py-0.5 rounded-xs">
                          Before &amp; After
                        </span>
                      </h3>
                    )}
                    {item.caption && (
                      <p className="text-brand-muted text-xs sm:text-sm leading-relaxed">
                        {item.caption}
                      </p>
                    )}
                  </div>
                )}

                {/* Subtle bottom border accent */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-red/0 group-hover:bg-brand-red transition-colors duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-4"
            onClick={closeLightbox}
            role="dialog"
            aria-modal="true"
            aria-label="Transformation image lightbox"
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 text-white/70 hover:text-white transition-colors p-2"
              aria-label="Close lightbox"
            >
              <X size={32} />
            </button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="flex flex-col items-center max-w-3xl w-full max-h-[95vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightbox.src}
                alt={lightbox.alt}
                className="max-w-full max-h-[75vh] object-contain rounded-sm"
              />
              {(lightbox.heading || lightbox.caption) && (
                <div className="mt-4 text-center max-w-xl px-4">
                  {lightbox.heading && (
                    <h3 className="font-heading text-lg md:text-xl uppercase tracking-wider text-white mb-1">
                      {lightbox.heading}
                    </h3>
                  )}
                  {lightbox.caption && (
                    <p className="text-brand-muted text-xs md:text-sm leading-relaxed">
                      {lightbox.caption}
                    </p>
                  )}
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
