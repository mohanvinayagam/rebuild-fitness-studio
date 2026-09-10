import { motion } from 'framer-motion';
import { gymData } from '../data/gymData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function CTA() {
  return (
    <section
      className="relative min-h-[60vh] flex items-center justify-center"
      aria-label="Call to action"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/training.webp')" }}
      />
      <div className="absolute inset-0 bg-black/75" />

      {/* Content */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={stagger}
        className="relative z-10 text-center px-4 py-16"
      >
        <motion.h2
          variants={fadeUp}
          className="font-heading text-4xl md:text-5xl lg:text-7xl uppercase leading-tight mb-6"
        >
          Ready to
          <br />
          <span className="text-brand-red">Rebuild</span> Yourself?
        </motion.h2>

        <motion.p
          variants={fadeUp}
          className="text-white/70 text-lg md:text-xl max-w-xl mx-auto mb-10"
        >
          Your stronger version starts with one decision.
        </motion.p>

        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a
            href={gymData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-white px-10 py-4 font-heading uppercase tracking-wider text-lg hover:bg-brand-red-light transition-colors duration-200"
          >
            Join Now
          </a>
          <a
            href={gymData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="border-2 border-white/30 text-white px-10 py-4 font-heading uppercase tracking-wider text-lg hover:border-brand-red hover:text-brand-red transition-colors duration-200"
          >
            WhatsApp Us
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
