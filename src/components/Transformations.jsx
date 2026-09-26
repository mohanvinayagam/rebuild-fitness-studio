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
              className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-6"
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
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {transformations.map((item) => (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="relative overflow-hidden rounded-sm cursor-pointer group"
                onClick={() => setLightbox(item)}
                role="button"
                tabIndex={0}
                aria-label={`View transformation ${item.id}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setLightbox(item);
                  }
                }}
              >
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

            {/* Image */}
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.2 }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[90vh] object-contain rounded-sm"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
