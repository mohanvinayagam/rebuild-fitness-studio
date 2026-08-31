import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const facilities = [
  { title: 'Strength Zone', image: '/images/gym-01.jpg', alt: 'Strength training zone at Rebuild Fitness Studio' },
  { title: 'Cardio Area', image: '/images/gym-02.jpg', alt: 'Cardio area at Rebuild Fitness Studio' },
  { title: 'Training Floor', image: '/images/training-01.jpg', alt: 'Training floor at Rebuild Fitness Studio Chromepet' },
  { title: 'Functional Area', image: '/images/about.jpg', alt: 'Functional training area at Rebuild Fitness Studio' },
  { title: 'Group Training', image: '/images/gallery-01.jpg', alt: 'Group training space at Rebuild Fitness Studio' },
  { title: 'Recovery Space', image: '/images/gallery-02.jpg', alt: 'Recovery space at Rebuild Fitness Studio Chennai' },
];

export default function Facilities() {
  return (
    <section
      id="facilities"
      className="section-padding px-4 bg-brand-dark"
      aria-label="Gym facilities"
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
            Our Space
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase"
          >
            Where Strength Is Built.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {facilities.map((facility) => (
            <motion.div
              key={facility.title}
              variants={fadeUp}
              className="relative overflow-hidden group cursor-pointer aspect-[4/3]"
            >
              <motion.img
                src={facility.image}
                alt={facility.alt}
                loading="lazy"
                className="w-full h-full object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <h3 className="font-heading text-2xl uppercase tracking-wider mb-2">
                  {facility.title}
                </h3>
                <div className="w-12 h-0.5 bg-brand-red" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
