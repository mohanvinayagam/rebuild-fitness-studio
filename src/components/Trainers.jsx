import { motion } from 'framer-motion';
import { User, Award } from 'lucide-react';
import { trainers } from '../data/trainers';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.12 } },
};

/**
 * Avatar placeholder shown when no trainer photo is available.
 * Replace with an <img> tag when real photos are provided via trainer.photo.
 */
function TrainerAvatar({ name }) {
  const initials = name
    .split(' ')
    .map((n) => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  return (
    <div
      className="w-full aspect-square bg-brand-gray border-2 border-dashed border-white/10 flex flex-col items-center justify-center gap-3 relative overflow-hidden"
      aria-label={`Placeholder avatar for ${name}`}
    >
      {/* Background pattern for visual interest */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-brand-red via-transparent to-transparent" />
      </div>

      {/* Silhouette icon */}
      <User
        size={64}
        className="text-white/20 relative z-10"
        strokeWidth={1}
      />

      {/* Initials badge */}
      <span className="font-display text-3xl text-white/30 tracking-wider relative z-10">
        {initials}
      </span>

      {/* Placeholder label */}
      <span className="text-xs text-white/20 uppercase tracking-widest relative z-10 font-heading">
        Photo Coming Soon
      </span>
    </div>
  );
}

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="section-padding px-4 bg-brand-charcoal"
      aria-label="Our trainers"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
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
            Meet the Team
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase"
          >
            Our <span className="text-brand-red">Trainers</span>.
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="text-brand-muted mt-4 max-w-xl mx-auto text-base leading-relaxed"
          >
            Dedicated professionals committed to guiding your fitness journey
            every step of the way.
          </motion.p>
        </motion.div>

        {/* Trainer Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {trainers.map((trainer) => (
            <motion.div
              key={trainer.id}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="relative bg-brand-gray/50 border border-white/5 hover:border-brand-red/30 transition-colors duration-300 overflow-hidden group"
            >
              {/* Photo or placeholder */}
              {trainer.photo ? (
                <div className="w-full aspect-square overflow-hidden">
                  <motion.img
                    src={trainer.photo}
                    alt={`${trainer.name} — Trainer at Rebuild Fitness Studio`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              ) : (
                <TrainerAvatar name={trainer.name} />
              )}

              {/* Red accent bar on hover */}
              <div className="absolute top-0 left-0 w-full h-0.5 bg-brand-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              {/* Info */}
              <div className="p-6">
                <h3 className="font-heading text-2xl uppercase tracking-wider mb-2">
                  {trainer.name}
                </h3>
                <div className="flex items-center gap-2">
                  <Award size={14} className="text-brand-red flex-shrink-0" />
                  <span className="text-brand-muted text-sm font-heading uppercase tracking-wider">
                    {trainer.experience} Experience
                  </span>
                </div>
              </div>

              {/* Decorative number watermark */}
              <span className="absolute bottom-4 right-4 font-display text-7xl text-brand-red/5 leading-none select-none pointer-events-none">
                {String(trainer.id).padStart(2, '0')}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
