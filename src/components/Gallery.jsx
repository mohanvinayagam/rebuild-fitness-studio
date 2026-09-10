import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const galleryImages = [
  { src: '/images/hero-bg.webp', alt: 'Rebuild Fitness Studio training floor with modern equipment', category: 'Gym' },
  { src: '/images/cardio.webp', alt: 'Cardio and training area at Rebuild Fitness Studio', category: 'Equipment' },
  { src: '/images/training.webp', alt: 'Training area at Rebuild Fitness Studio Chromepet', category: 'Training' },
  { src: '/images/functional.webp', alt: 'Strength training zone at Rebuild Fitness Studio', category: 'Gym' },
  { src: '/images/recovery.webp', alt: 'Fitness equipment at Rebuild Fitness Studio Chennai', category: 'Equipment' },
  { src: '/images/training.webp', alt: 'Modern gym interior at Rebuild Fitness Studio', category: 'Gym' },
];

export default function Gallery() {
  return (
    <section
      id="gallery"
      className="section-padding px-4 bg-brand-charcoal"
      aria-label="Photo gallery"
    >
      <div className="max-w-7xl mx-auto">
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
            Gallery
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase"
          >
            Inside <span className="text-brand-red">Rebuild</span>.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="columns-1 sm:columns-2 lg:columns-3 gap-4"
        >
          {galleryImages.map((img, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="relative overflow-hidden group mb-4 break-inside-avoid"
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="w-full rounded-sm"
              />
              <div className="absolute inset-0 bg-brand-red/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="absolute bottom-4 left-4 font-heading text-sm uppercase tracking-wider bg-brand-dark/80 px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {img.category}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
