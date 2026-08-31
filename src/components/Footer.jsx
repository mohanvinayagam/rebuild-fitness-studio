import { Phone, MapPin } from 'lucide-react';
import InstagramIcon from './InstagramIcon';
import { gymData, navLinks } from '../data/gymData';

export default function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        {/* Main Footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <img
              src="/images/logo.png"
              alt="Rebuild Fitness Studio"
              className="h-12 w-auto mb-4"
            />
            <p className="font-heading text-lg uppercase tracking-wider text-brand-muted mb-4">
              {gymData.tagline}
            </p>
            <div className="flex gap-4">
              <a
                href={gymData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-red transition-colors"
                aria-label="Follow us on Instagram"
              >
                <InstagramIcon size={20} />
              </a>
              <a
                href={gymData.googleMaps}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-muted hover:text-brand-red transition-colors"
                aria-label="Find us on Google Maps"
              >
                <MapPin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-sm uppercase tracking-wider text-white mb-6">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-brand-muted hover:text-brand-red transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading text-sm uppercase tracking-wider text-white mb-6">
              Contact
            </h3>
            <div className="space-y-3">
              <a
                href={`tel:+${gymData.phoneRaw}`}
                className="flex items-center gap-2 text-brand-muted text-sm hover:text-brand-red transition-colors"
              >
                <Phone size={16} />
                {gymData.phone}
              </a>
              <div className="flex items-start gap-2 text-brand-muted text-sm">
                <MapPin size={16} className="flex-shrink-0 mt-0.5" />
                Chromepet, Chennai
              </div>
              <a
                href={gymData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-brand-muted text-sm hover:text-brand-red transition-colors"
              >
                <InstagramIcon size={16} />
                {gymData.instagramHandle}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 py-6 text-center">
          <p className="text-brand-muted/50 text-xs">{gymData.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
