import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { gymData } from '../data/gymData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const membershipPlans = ['Monthly', 'Quarterly', 'Half-Yearly', 'Yearly'];
const trainingServices = ['Personal Training', 'Group Training'];

export default function Memberships() {
  return (
    <section
      id="memberships"
      className="section-padding px-4 bg-brand-dark"
      aria-label="Membership plans"
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
            Membership Plans
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight"
          >
            Choose Your
            <br />
            <span className="text-brand-red">Commitment.</span>
          </motion.h2>
        </motion.div>

        {/* Plans & Services Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {[...membershipPlans, ...trainingServices].map((name) => (
            <motion.div
              key={name}
              variants={fadeUp}
              className="bg-brand-charcoal border border-white/5 p-6 text-center hover:border-brand-red/30 transition-colors duration-300"
            >
              <h3 className="font-heading text-sm md:text-base uppercase tracking-wider text-white">
                {name}
              </h3>
            </motion.div>
          ))}
        </motion.div>

        {/* Inquiry CTA */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={stagger}
          className="text-center max-w-2xl mx-auto"
        >
          <motion.h3
            variants={fadeUp}
            className="font-heading text-2xl md:text-3xl uppercase tracking-wider mb-4"
          >
            Interested in Joining?
          </motion.h3>
          <motion.p
            variants={fadeUp}
            className="text-brand-muted text-lg leading-relaxed mb-8"
          >
            Contact our admin to learn more about membership plans, training
            packages, and pricing.
          </motion.p>
          <motion.div variants={fadeUp}>
            <a
              href={gymData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-brand-red text-white px-10 py-4 font-heading uppercase tracking-wider text-sm hover:bg-brand-red-light transition-colors duration-200"
            >
              <MessageCircle size={20} />
              Enquire Now
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
