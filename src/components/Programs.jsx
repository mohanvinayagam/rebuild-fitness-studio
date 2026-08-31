import { motion } from 'framer-motion';
import { programs } from '../data/programs';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Programs() {
  return (
    <section
      id="programs"
      className="section-padding px-4 bg-brand-charcoal"
      aria-label="Training programs"
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
            What We Offer
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase"
          >
            Train Your Way.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {programs.map((program) => {
            const Icon = program.Icon;
            return (
              <motion.div
                key={program.id}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="relative bg-brand-gray/50 border border-white/5 p-8 hover:border-brand-red/30 transition-colors duration-300 group overflow-hidden"
              >
                <span className="absolute top-4 right-6 font-display text-6xl text-brand-red/10 leading-none select-none">
                  {program.number}
                </span>
                <Icon size={28} className="text-brand-red mb-4 relative z-10" />
                <h3 className="font-heading text-xl uppercase tracking-wider mb-3 relative z-10">
                  {program.title}
                </h3>
                <p className="text-brand-muted text-sm leading-relaxed relative z-10">
                  {program.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
