import { motion } from 'framer-motion';
import { Star, MessageCircle } from 'lucide-react';
import { gymData } from '../data/gymData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

const testimonials = [
  {
    id: 1,
    name: 'Normal Norway',
    initials: 'NN',
    rating: 5,
    quote:
      "Very good ambience. The coach and trainers really guide individually and it's a feel good place to achieve your weight loss goals.. strengthen and tone your body without stress .It's a disciplined place for workout..I feel",
  },
  {
    id: 2,
    name: 'ananthu .s.s',
    initials: 'AS',
    rating: 5,
    quote:
      "This gym is a hidden gem in pammal. Very much affordable and equipped with the latest machinery.\n\nThe trainers are well knowledgeable and experienced. The gym is near to badminton court and a swimming pool for cardio workouts.",
  },
  {
    id: 3,
    name: 'Chamu Jayavelu',
    initials: 'CJ',
    rating: 5,
    quote:
      "Rebuild fitness gym is well equipped and Mr.Senthil is an excellent fitness trainer who has an outstanding knowledge of the subject matter..Every workout he gives me helps in my day to day activity..I'd really appreciate his dedication towards his profession.",
  },
  {
    id: 4,
    name: 'Team Myndz',
    initials: 'TM',
    rating: 5,
    quote:
      "One of the best Center in CHROMEPET... The Trainer SENTHIL (CENTER HEAD) exclusively has a great knowledge on handling from a New Comer to a Pro Sports Personality and guiding them to achieve their Fitness Goals. Very Dedicated 👍👍👍 You should definitely experience his coaching... It brings magic in ur body 😀😀😀",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
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
            Verified Client Reviews
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl md:text-4xl lg:text-5xl uppercase"
          >
            What Our Members Say.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-brand-charcoal border border-white/5 hover:border-brand-red/30 p-6 sm:p-7 flex flex-col justify-between transition-colors duration-300 relative group rounded-sm"
            >
              <div>
                <div className="flex items-center gap-3.5 mb-5">
                  <div className="w-10 h-10 rounded-full bg-brand-red/15 border border-brand-red/30 flex items-center justify-center text-brand-red font-heading text-sm uppercase tracking-wider flex-shrink-0">
                    {t.initials}
                  </div>
                  <div>
                    <h3 className="font-heading text-base uppercase tracking-wider text-white leading-tight">
                      {t.name}
                    </h3>
                    <div className="flex items-center gap-1 text-amber-400 mt-1" aria-label={`${t.rating} out of 5 stars`}>
                      {[...Array(t.rating)].map((_, idx) => (
                        <Star key={idx} size={14} className="fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>
                </div>

                <p className="text-brand-muted text-sm leading-relaxed whitespace-pre-line">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
          className="text-center mt-12 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={gymData.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 border border-white/20 text-white px-6 py-3 font-heading uppercase tracking-wider text-xs md:text-sm hover:border-brand-red hover:text-brand-red transition-colors duration-200 w-full sm:w-auto"
          >
            <span>View All Reviews on Google</span>
          </a>
          <a
            href={gymData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-brand-red text-white px-6 py-3 font-heading uppercase tracking-wider text-xs md:text-sm hover:bg-brand-red-light transition-colors duration-200 w-full sm:w-auto"
          >
            <MessageCircle size={16} />
            <span>Enquire on WhatsApp</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
