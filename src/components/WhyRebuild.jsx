import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const features = [
  'Modern Training Environment',
  'Quality Fitness Equipment',
  'Personal Training',
  'Group Training',
  'Flexible Membership Options',
  'Supportive Fitness Community',
  'Convenient Location in Chromepet',
];

export default function WhyRebuild() {
  return (
    <section
      className="section-padding px-4 bg-brand-charcoal"
      aria-label="Why choose Rebuild Fitness Studio"
    >
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase text-center mb-16"
        >
          Why <span className="text-brand-red">Rebuild</span>?
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 max-w-5xl mx-auto"
        >
          {features.map((feature) => (
            <motion.div
              key={feature}
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <CheckCircle size={24} className="text-brand-red flex-shrink-0" />
              <span className="font-heading text-lg uppercase tracking-wider">
                {feature}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
