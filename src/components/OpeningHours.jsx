import { motion } from 'framer-motion';
import { Clock } from 'lucide-react';
import { gymData } from '../data/gymData';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function OpeningHours() {
  return (
    <section
      className="py-16 px-4 bg-brand-charcoal"
      aria-label="Opening hours"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
        className="max-w-4xl mx-auto text-center"
      >
        <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wider mb-10">
          Opening Hours
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16">
          {/* Morning */}
          <div className="text-center">
            <Clock size={24} className="text-brand-red mx-auto mb-2" />
            <p className="font-heading text-lg uppercase tracking-wider text-brand-muted mb-1">
              {gymData.openingHours.morning.label}
            </p>
            <p className="font-display text-3xl md:text-4xl text-white">
              {gymData.openingHours.morning.time}
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:block w-px h-16 bg-white/10" />

          {/* Evening */}
          <div className="text-center">
            <Clock size={24} className="text-brand-red mx-auto mb-2" />
            <p className="font-heading text-lg uppercase tracking-wider text-brand-muted mb-1">
              {gymData.openingHours.evening.label}
            </p>
            <p className="font-display text-3xl md:text-4xl text-white">
              {gymData.openingHours.evening.time}
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
