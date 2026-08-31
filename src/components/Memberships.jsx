import { motion } from 'framer-motion';
import { memberships, trainingPackages } from '../data/memberships';
import { gymData } from '../data/gymData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

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

        {/* Membership Cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {memberships.map((plan) => (
            <motion.div
              key={plan.id}
              variants={fadeUp}
              whileHover={{ y: -8 }}
              className={`relative bg-brand-charcoal p-8 text-center overflow-hidden transition-colors duration-300 ${
                plan.highlight
                  ? 'border-2 border-brand-red'
                  : 'border border-white/5 hover:border-white/10'
              }`}
            >
              {plan.highlight && plan.badge && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-brand-red text-white text-xs font-heading uppercase tracking-wider px-4 py-1">
                  {plan.badge}
                </div>
              )}

              <h3 className="font-heading text-lg uppercase tracking-wider text-brand-muted mb-6 mt-2">
                {plan.name}
              </h3>

              <div className="mb-2">
                <span className="text-2xl font-heading text-brand-muted align-top">₹</span>
                <span className="font-display text-5xl md:text-6xl text-white">
                  {plan.price}
                </span>
              </div>
              <p className="text-sm text-brand-muted mb-8">{plan.period}</p>

              <a
                href={`https://wa.me/${gymData.phoneRaw}?text=${encodeURIComponent(plan.whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-3 font-heading uppercase tracking-wider text-sm transition-colors duration-200 ${
                  plan.highlight
                    ? 'bg-brand-red text-white hover:bg-brand-red-light'
                    : 'border border-white/20 text-white hover:border-brand-red hover:text-brand-red'
                }`}
              >
                Join Now
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Training Packages */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
        >
          <motion.h3
            variants={fadeUp}
            className="font-heading text-2xl uppercase tracking-wider text-center mb-8"
          >
            Training Packages
          </motion.h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {trainingPackages.map((pkg) => (
              <motion.div
                key={pkg.id}
                variants={fadeUp}
                whileHover={{ y: -5 }}
                className="bg-brand-charcoal border border-white/5 p-8 text-center hover:border-white/10 transition-colors duration-300"
              >
                <h4 className="font-heading text-lg uppercase tracking-wider text-brand-muted mb-4">
                  {pkg.name}
                </h4>
                <div className="mb-6">
                  <span className="text-xl font-heading text-brand-muted align-top">₹</span>
                  <span className="font-display text-4xl text-white">{pkg.price}</span>
                </div>
                <a
                  href={`https://wa.me/${gymData.phoneRaw}?text=${encodeURIComponent(pkg.whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-brand-red text-brand-red px-6 py-2.5 font-heading uppercase tracking-wider text-sm hover:bg-brand-red hover:text-white transition-colors duration-200"
                >
                  Enquire Now
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
