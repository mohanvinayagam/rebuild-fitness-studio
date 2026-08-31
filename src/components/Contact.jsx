import { motion } from 'framer-motion';
import { Phone, MessageCircle, MapPin } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { gymData } from '../data/gymData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-padding px-4 bg-brand-charcoal"
      aria-label="Contact information"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="text-center"
        >
          <motion.h2
            variants={fadeUp}
            className="font-heading text-3xl md:text-4xl uppercase tracking-wider mb-4"
          >
            Get in Touch
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="font-display text-5xl md:text-6xl mb-12"
          >
            <span className="text-brand-red">Rebuild</span> Fitness Studio
          </motion.p>

          {/* Contact Info */}
          <motion.div variants={fadeUp} className="max-w-2xl mx-auto space-y-4 mb-10">
            <a
              href={`tel:+${gymData.phoneRaw}`}
              className="flex items-center justify-center gap-3 text-brand-muted hover:text-brand-red transition-colors"
            >
              <Phone size={20} className="text-brand-red" />
              <span className="font-heading text-xl">{gymData.phone}</span>
            </a>

            <a
              href={gymData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-brand-muted hover:text-brand-red transition-colors"
            >
              <MessageCircle size={20} className="text-brand-red" />
              <span className="font-heading text-xl">{gymData.phone}</span>
            </a>

            <div className="flex items-center justify-center gap-3 text-brand-muted">
              <MapPin size={20} className="text-brand-red flex-shrink-0" />
              <span className="text-center max-w-sm">{gymData.address.full}</span>
            </div>

            <a
              href={gymData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 text-brand-muted hover:text-brand-red transition-colors"
            >
              <InstagramIcon size={20} className="text-brand-red" />
              <span className="font-heading text-xl">{gymData.instagramHandle}</span>
            </a>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          >
            <a
              href={`tel:+${gymData.phoneRaw}`}
              className="bg-brand-red text-white py-3 font-heading uppercase tracking-wider text-sm hover:bg-brand-red-light transition-colors duration-200 text-center"
            >
              Call Now
            </a>
            <a
              href={gymData.whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white py-3 font-heading uppercase tracking-wider text-sm hover:border-brand-red hover:text-brand-red transition-colors duration-200 text-center"
            >
              WhatsApp
            </a>
            <a
              href={gymData.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white py-3 font-heading uppercase tracking-wider text-sm hover:border-brand-red hover:text-brand-red transition-colors duration-200 text-center"
            >
              Instagram
            </a>
            <a
              href={gymData.googleMaps}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/20 text-white py-3 font-heading uppercase tracking-wider text-sm hover:border-brand-red hover:text-brand-red transition-colors duration-200 text-center"
            >
              Directions
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
