import { motion } from 'framer-motion';
import { ChevronDown, Clock } from 'lucide-react';
import { gymData } from '../data/gymData';

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.3 },
  },
};

const item = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.1, 0.25, 1] } },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
        role="img"
        aria-label="Rebuild Fitness Studio gym interior"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

      {/* Content */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        className="relative z-10 text-center px-4 max-w-5xl mx-auto"
      >
        {/* Label */}
        <motion.div variants={item} className="flex items-center justify-center gap-3 mb-8">
          <span className="w-8 h-px bg-brand-red" />
          <span className="text-brand-red uppercase tracking-[0.3em] text-sm font-heading">
            Rebuild Fitness Studio
          </span>
          <span className="w-8 h-px bg-brand-red" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1 variants={item} className="font-display leading-[0.9] mb-8">
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
            REBUILD
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-white">
            YOUR
          </span>
          <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-brand-red">
            STRONGER SELF.
          </span>
        </motion.h1>

        {/* Supporting Text */}
        <motion.p
          variants={item}
          className="text-lg md:text-xl text-white/60 max-w-xl mx-auto mb-10 font-body"
        >
          A premium fitness studio in Chromepet, Chennai, built for strength,
          transformation and a stronger lifestyle.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <a
            href={gymData.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-red text-white px-8 py-4 font-heading uppercase tracking-wider text-sm hover:bg-brand-red-light transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Join Now
          </a>
          <a
            href="#memberships"
            className="border-2 border-white/30 text-white px-8 py-4 font-heading uppercase tracking-wider text-sm hover:border-brand-red hover:text-brand-red transition-colors duration-200 w-full sm:w-auto text-center"
          >
            Explore Memberships
          </a>
        </motion.div>

        {/* Opening Hours Badge */}
        <motion.div
          variants={item}
          className="inline-flex items-center gap-3 text-white/40 text-sm"
        >
          <Clock size={16} className="text-brand-red" />
          <span className="font-heading uppercase tracking-wider">
            Open Daily
          </span>
          <span className="w-px h-4 bg-white/20" />
          <span>{gymData.openingHours.morning.time}</span>
          <span className="w-px h-4 bg-white/20" />
          <span>{gymData.openingHours.evening.time}</span>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" aria-label="Scroll to content">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown size={28} className="text-white/30" />
          </motion.div>
        </a>
      </motion.div>
    </section>
  );
}
