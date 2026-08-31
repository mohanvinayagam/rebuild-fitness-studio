import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const testimonials = [
  {
    quote: 'Great environment to stay consistent with training. The studio has a focused and motivating atmosphere.',
    author: 'Rebuild Member',
  },
  {
    quote: 'Clean, well-maintained space with quality equipment. Exactly what I was looking for in Chromepet.',
    author: 'Rebuild Member',
  },
  {
    quote: 'The personal training sessions are well-structured and really helped me build a solid routine.',
    author: 'Rebuild Member',
  },
];

export default function Testimonials() {
  return (
    <section
      className="section-padding px-4 bg-brand-dark"
      aria-label="Member testimonials"
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
            Testimonials
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase"
          >
            What Our Members Say.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="bg-brand-charcoal border border-white/5 p-8"
            >
              <span className="font-display text-6xl text-brand-red/30 leading-none block mb-4">
                &ldquo;
              </span>
              <p className="text-brand-muted text-base italic leading-relaxed mb-6">
                {t.quote}
              </p>
              <p className="font-heading text-sm uppercase tracking-wider text-white">
                &mdash; {t.author}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <p className="text-brand-muted/50 text-xs text-center mt-8 italic">
          Placeholder testimonials. Actual member reviews will be added soon.
        </p>
      </div>
    </section>
  );
}
