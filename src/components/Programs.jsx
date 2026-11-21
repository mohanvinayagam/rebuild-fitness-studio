import { motion } from 'framer-motion';
import { CheckCircle2, MessageCircle } from 'lucide-react';
import { programs } from '../data/programs';
import { gymData } from '../data/gymData';

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
            className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase"
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

            if (program.isOnline) {
              return (
                <motion.div
                  key={program.id}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  className="col-span-1 md:col-span-2 lg:col-span-3 relative bg-gradient-to-br from-brand-gray/80 via-brand-dark/95 to-brand-charcoal border-2 border-brand-red/30 hover:border-brand-red/60 p-8 md:p-10 transition-all duration-300 group overflow-hidden rounded-sm"
                >
                  <span className="absolute top-4 right-6 md:top-6 md:right-8 font-display text-7xl md:text-8xl text-brand-red/10 leading-none select-none">
                    {program.number}
                  </span>

                  <div className="relative z-10 max-w-4xl">
                    <div className="inline-flex items-center gap-2 bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-heading uppercase tracking-widest px-3 py-1 mb-4">
                      <Icon size={14} />
                      {program.badge}
                    </div>

                    <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl uppercase tracking-wider mb-4 text-white">
                      {program.title}
                    </h3>

                    <p className="text-brand-muted text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                      {program.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 mb-8">
                      {program.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-white/85 text-sm">
                          <CheckCircle2 size={16} className="text-brand-red flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={`https://wa.me/${gymData.phoneRaw}?text=${encodeURIComponent(program.whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-brand-red text-white px-8 py-4 font-heading uppercase tracking-wider text-sm md:text-base hover:bg-brand-red-light transition-all duration-200 shadow-lg shadow-brand-red/20 w-full sm:w-auto"
                    >
                      <MessageCircle size={20} />
                      Enquire on WhatsApp
                    </a>
                  </div>
                </motion.div>
              );
            }

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
