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

function GoogleIcon() {
  return (
    <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#EA4335"
        d="M12 5c1.6 0 3 .6 4.1 1.7l3.1-3.1C17.3 1.8 14.8 1 12 1 7.5 1 3.7 3.6 1.9 7.3l3.7 2.9C6.5 7.4 9 5 12 5z"
      />
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.6h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.9z"
      />
      <path
        fill="#FBBC05"
        d="M5.6 14.8c-.2-.7-.4-1.5-.4-2.3 0-.8.1-1.6.4-2.3L1.9 7.3C.7 9.7 0 12.3 0 15.2c0 2.8.7 5.5 1.9 7.8l3.7-2.9z"
      />
      <path
        fill="#34A853"
        d="M12 23.5c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3 0-5.5-2-6.4-4.8L1.9 16.9C3.7 20.6 7.5 23.5 12 23.5z"
      />
    </svg>
  );
}

const testimonials = [
  {
    id: 1,
    name: 'Latha (Age 52)',
    accountNote: 'Posted via Google account: jagadeesh.p',
    tag: 'Lost 10 kg • Transformation',
    quote:
      'I started my fitness journey here and I have lost 10 kg. I am so grateful to Senthil Master and Coach Vicky. Coach Vicky creates perfect meal plans for us and monitors my exercise daily. A huge thank you to both coaches for always standing by us.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Indu P',
    accountNote: null,
    tag: 'Pain Relief & Flexibility',
    quote:
      'I started here with severe right hand pain. Amazingly, the discomfort completely cleared up in two weeks. Senthil Master created a custom routine of movements and stretches for me. The dual team of Senthil Master and Coach Vicky is spectacular.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Durga Sreesakumar',
    accountNote: null,
    tag: 'Equipment & Cleanliness',
    quote:
      'The equipment is modern, well-maintained, and there is a good variety for strength training, cardio, or functional workouts. The trainers (Vicky and Senthil) are knowledgeable and approachable. Cleanliness is another strong point—a great place to stay consistent.',
    rating: 5,
  },
  {
    id: 4,
    name: 'Sanjay Kumar Y',
    accountNote: null,
    tag: 'Strength & Conditioning',
    quote:
      'This gym stands out for its focus on real training and consistent progress. Subin Coach has created a disciplined and motivating environment with quality equipment and enough weight for serious lifters. If you are looking to build strength the right way, this gym is a great choice.',
    rating: 5,
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              variants={fadeUp}
              whileHover={{ y: -4 }}
              className="bg-brand-charcoal border border-white/5 hover:border-brand-red/30 p-7 flex flex-col justify-between transition-colors duration-300 relative group rounded-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400" aria-label={`${t.rating} out of 5 stars`}>
                    {[...Array(t.rating)].map((_, idx) => (
                      <Star key={idx} size={15} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="flex items-center gap-1.5 text-xs text-white/40 font-heading uppercase tracking-wider">
                    <GoogleIcon /> Google
                  </span>
                </div>

                <p className="text-brand-muted text-sm leading-relaxed mb-6 italic">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              <div className="border-t border-white/5 pt-4">
                <h3 className="font-heading text-base uppercase tracking-wider text-white">
                  {t.name}
                </h3>
                {t.accountNote && (
                  <span className="text-white/40 text-[11px] font-sans block mt-0.5">
                    {t.accountNote}
                  </span>
                )}
                <span className="text-brand-red text-xs font-heading tracking-wide uppercase block mt-1">
                  {t.tag}
                </span>
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
            <GoogleIcon />
            <span>Read More Reviews on Google</span>
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
