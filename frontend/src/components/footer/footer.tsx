import React from 'react';
import { motion } from 'framer-motion';
import {
  Shield,
  Sparkles,
  MapPin,
  Mail,
  ExternalLink,
  Heart,
} from 'lucide-react';
import { FOOTER_SECTIONS, FOOTER_TEXT } from './footerData';

interface FooterProps {
  lang?: 'en' | 'np';
}

export const Footer: React.FC<FooterProps> = ({ lang = 'en' }) => {
  const text = FOOTER_TEXT[lang];

  return (
    <footer className="relative bg-slate-900 text-slate-300 border-t border-slate-800 overflow-hidden">
      {/* Background Subtle Gradient Highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-800/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800">
          
          {/* Brand Info Column (Spans 2 columns on lg screens) */}
          <div className="lg:col-span-2 space-y-5">
            {/* Logo & Badge */}
            <a href="#home" className="inline-flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 border border-slate-700/80 group-hover:bg-slate-700 transition-colors">
                <Shield className="w-5 h-5 text-emerald-400 stroke-[2.2]" />
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                  className="absolute -top-1 -right-1 bg-emerald-500 text-slate-950 p-1 rounded-full shadow"
                >
                  <Sparkles className="w-2.5 h-2.5 fill-slate-950" />
                </motion.div>
              </div>

              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-xl tracking-tight text-white group-hover:text-emerald-400 transition-colors">
                    SewaSathi
                  </span>
                  <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    AI
                  </span>
                </div>
              </div>
            </a>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {text.tagline} {text.subTagline}
            </p>

            {/* Quick Contact Info */}
            <div className="space-y-2 text-xs text-slate-400 pt-1">
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>{text.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>support@sewasaathi.gov.np</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="#github"
                aria-label="GitHub Repository"
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700/60 transition-colors"
              >
                {/* <Github className="w-4 h-4" /> */}
              </a>
              <a
                href="#twitter"
                aria-label="Twitter Profile"
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700/60 transition-colors"
              >
                {/* <Twitter className="w-4 h-4" /> */}
              </a>
              <a
                href="#linkedin"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-lg bg-slate-800/80 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700/60 transition-colors"
              >
                {/* <Linkedin className="w-4 h-4" /> */}
              </a>
            </div>
          </div>

          {/* Dynamic Link Columns */}
          {FOOTER_SECTIONS.map((section, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="text-xs font-semibold text-white uppercase tracking-wider">
                {lang === 'en' ? section.titleEn : section.titleNp}
              </h3>
              <ul className="space-y-2.5 text-sm">
                {section.links.map((link, linkIdx) => {
                  const isExternal = link.href.startsWith('http');
                  const label = lang === 'en' ? link.labelEn : link.labelNp;

                  return (
                    <li key={linkIdx}>
                      <a
                        href={link.href}
                        target={isExternal ? '_blank' : '_self'}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 text-slate-400 hover:text-emerald-400 transition-colors"
                      >
                        <span>{label}</span>
                        {isExternal && <ExternalLink className="w-3 h-3 text-slate-500" />}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}

        </div>

        {/* Bottom Bar & Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center md:text-left leading-relaxed max-w-2xl">
            {text.disclaimer}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-2 shrink-0">
            <span>
              &copy; {new Date().getFullYear()} SewaSathi. {text.rights}
            </span>
            <span className="hidden sm:inline text-slate-700">•</span>
            <span className="flex items-center gap-1 text-slate-400">
              Made with <Heart className="w-3 h-3 text-emerald-500 fill-emerald-500" /> for Nepal
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;