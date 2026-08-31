import { motion } from 'framer-motion';
import { MapPin, Navigation, Phone } from 'lucide-react';
import { gymData } from '../data/gymData';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

export default function Location() {
  return (
    <section
      id="location"
      className="section-padding px-4 bg-brand-dark"
      aria-label="Location"
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
            Find Us
          </motion.span>
          <motion.h2
            variants={fadeUp}
            className="font-heading text-4xl md:text-5xl lg:text-6xl uppercase"
          >
            Find Your Way to <span className="text-brand-red">Rebuild</span>.
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
        >
          {/* Address Card */}
          <motion.div
            variants={fadeUp}
            className="bg-brand-charcoal border border-white/5 p-8"
          >
            <MapPin size={32} className="text-brand-red mb-4" />
            <div className="space-y-1 mb-8">
              <p className="text-brand-muted text-lg">{gymData.address.line1}</p>
              <p className="text-brand-muted text-lg">{gymData.address.line2}</p>
              <p className="text-brand-muted text-lg">{gymData.address.area}</p>
              <p className="text-brand-muted text-lg">
                {gymData.address.city} – {gymData.address.pincode}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={gymData.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-brand-red text-white px-6 py-3 font-heading uppercase tracking-wider text-sm hover:bg-brand-red-light transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <Navigation size={16} />
                Get Directions
              </a>
              <a
                href={`tel:${gymData.phoneRaw}`}
                className="border border-white/20 text-white px-6 py-3 font-heading uppercase tracking-wider text-sm hover:border-brand-red hover:text-brand-red transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </motion.div>

          {/* Map Card */}
          <motion.a
            variants={fadeUp}
            href={gymData.googleMaps}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-gray h-full min-h-[300px] lg:min-h-[400px] flex flex-col items-center justify-center rounded-sm border border-white/5 hover:border-brand-red/30 transition-colors duration-300"
          >
            <MapPin size={48} className="text-brand-red/30 mb-4" />
            <span className="font-heading text-lg uppercase tracking-wider text-brand-muted">
              View on Google Maps
            </span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
