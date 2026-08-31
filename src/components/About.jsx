import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const values = [
  { number: '01', title: 'Train with Purpose' },
  { number: '02', title: 'Build Real Strength' },
  { number: '03', title: 'Stay Consistent' },
  { number: '04', title: 'Become Your Best' },
];

export default function About() {
  return (
    <section id="about" className="section-padding px-4" aria-label="About Rebuild Fitness Studio">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="relative"
          >
            <div className="relative">
              <div className="absolute -left-3 top-4 bottom-4 w-1 bg-brand-red" />
              <img
                src="/images/about.jpg"
                alt="Training floor at Rebuild Fitness Studio Chromepet"
                className="w-full h-[400px] lg:h-[550px] object-cover"
                loading="lazy"
              />
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.span
              variants={fadeUp}
              className="text-brand-red uppercase tracking-[0.2em] text-sm font-heading block mb-4"
            >
              Who We Are
            </motion.span>

            <motion.h2
              variants={fadeUp}
              className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase leading-tight mb-6"
            >
              More Than a Gym.
              <br />
              <span className="text-brand-red">It's a Rebuild.</span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="text-brand-muted text-lg leading-relaxed mb-10"
            >
              Rebuild Fitness Studio is a modern fitness destination in Chromepet,
              Chennai, focused on helping people build strength, confidence and
              consistency. We believe fitness is not just about how you look — it's
              about how you live.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {values.map((v) => (
                <motion.div
                  key={v.number}
                  variants={fadeUp}
                  className="border-l-2 border-brand-red pl-4"
                >
                  <span className="font-display text-3xl text-brand-red">
                    {v.number}
                  </span>
                  <h3 className="font-heading text-lg uppercase tracking-wider mt-1">
                    {v.title}
                  </h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
