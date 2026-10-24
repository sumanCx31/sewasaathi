import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe, ChevronDown, Check } from 'lucide-react';
import { NAV_ITEMS, NAV_TEXT } from './navData';

interface NavSectionProps {
  active: string;
  hovered: string | null;
  onHover: (href: string | null) => void;
  onNavClick: (e: React.MouseEvent<HTMLAnchorElement>, href: string) => void;
}

interface ActionProps extends NavSectionProps {
  isLangDropdownOpen: boolean;
  onToggleLangDropdown: () => void;
  onLangChange: (lang: 'en' | 'np') => void;
}

// Nepali Desktop Nav Links
export const DesktopNavNepali: React.FC<NavSectionProps> = ({
  active,
  hovered,
  onHover,
  onNavClick,
}) => (
  <nav className="hidden md:flex items-center gap-1 bg-slate-100/80 p-1 rounded-full border border-slate-200/60" aria-label="मुख्य नेभिगेसन">
    {NAV_ITEMS.map((item) => {
      const isActive = active === item.href;
      const isHovered = hovered === item.href;

      return (
        <a
          key={item.href}
          href={item.href}
          onClick={(e) => onNavClick(e, item.href)}
          onMouseEnter={() => onHover(item.href)}
          onMouseLeave={() => onHover(null)}
          className={`relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 ${
            isActive ? 'text-slate-900 font-semibold' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          {isHovered && !isActive && (
            <motion.div
              layoutId="hover-pill"
              className="absolute inset-0 bg-white/70 rounded-full shadow-xs"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}

          {isActive && (
            <motion.div
              layoutId="active-pill"
              className="absolute inset-0 bg-white rounded-full shadow-sm border border-slate-200/80"
              transition={{ type: 'spring', stiffness: 380, damping: 30 }}
            />
          )}

          <span className="relative z-10">{item.labelNp}</span>
        </a>
      );
    })}
  </nav>
);

// Nepali Actions (Dropdown + CTA)
export const ActionsNepali: React.FC<ActionProps> = ({
  isLangDropdownOpen,
  onToggleLangDropdown,
  onLangChange,
}) => (
  <div className="hidden md:flex items-center gap-3">
    <div className="relative">
      <button
        type="button"
        onClick={onToggleLangDropdown}
        className="flex items-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200 rounded-lg shadow-2xs transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
      >
        <Globe className="w-3.5 h-3.5 text-slate-500" />
        <span>{NAV_TEXT.np.langLabel}</span>
        <ChevronDown className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${isLangDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

      {isLangDropdownOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 8, scale: 0.95 }}
          transition={{ duration: 0.15 }}
          className="absolute right-0 mt-2 w-36 bg-white border border-slate-200 rounded-xl shadow-lg py-1 z-50"
        >
          <button
            type="button"
            onClick={() => onLangChange('en')}
            className="w-full flex items-center justify-between px-3 py-2 text-xs text-left font-medium text-slate-700 hover:bg-slate-50"
          >
            <span>English</span>
          </button>
          <button
            type="button"
            onClick={() => onLangChange('np')}
            className="w-full flex items-center justify-between px-3 py-2 text-xs text-left font-medium text-slate-700 hover:bg-slate-50"
          >
            <span>नेपाली</span>
            <Check className="w-3.5 h-3.5 text-emerald-600" />
          </button>
        </motion.div>
      )}
    </div>

    <a href="#signin" className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">
      {NAV_TEXT.np.signIn}
    </a>

    <motion.a
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      href="#get-started"
      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 shadow-sm shadow-emerald-600/20"
    >
      <span>{NAV_TEXT.np.getStarted}</span>
      <ArrowRight className="w-4 h-4" />
    </motion.a>
  </div>
);