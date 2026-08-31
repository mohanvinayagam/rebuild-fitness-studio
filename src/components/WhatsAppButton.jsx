import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { gymData } from '../data/gymData';

export default function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      className="fixed bottom-6 right-6 z-50 group"
    >
      {/* Tooltip */}
      <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-brand-dark text-white text-xs font-heading uppercase tracking-wider px-3 py-2 rounded-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none border border-white/10">
        Chat with us
      </span>

      <a
        href={gymData.whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="relative whatsapp-pulse w-14 h-14 rounded-full bg-brand-red flex items-center justify-center shadow-lg shadow-brand-red/20 hover:bg-brand-red-light transition-colors duration-200"
      >
        <MessageCircle size={28} className="text-white" />
      </a>
    </motion.div>
  );
}
