import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Shield, Sparkles, Menu, X, ArrowRight } from 'lucide-react';

import { NAV_ITEMS, NAV_TEXT } from './navData';
import { DesktopNavEnglish, ActionsEnglish } from './navbarEnglish';
import { DesktopNavNepali, ActionsNepali } from './navbarNepali';

export interface NavbarProps {
  currentLang?: 'en' | 'np';
  onLanguageChange?: (lang: 'en' | 'np') => void;
  activeHref?: string;
  onNavigate?: (href: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentLang = 'en',
  onLanguageChange,
  activeHref = '#home',
  onNavigate,
}) => {
  const [lang, setLang] = useState<'en' | 'np'>(currentLang);
  const [active, setActive] = useState<string>(activeHref);
  const [hovered, setHovered] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false);
  const [isLangDropdownOpen, setIsLangDropdownOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => setLang(currentLang), [currentLang]);
  useEffect(() => setActive(activeHref), [activeHref]);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 15);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLangToggle = (newLang: 'en' | 'np') => {
    setLang(newLang);
    setIsLangDropdownOpen(false);
    onLanguageChange?.(newLang);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setActive(href);
    setIsMobileOpen(false);
    if (onNavigate) {
      onNavigate(href);
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/80 py-3'
          : 'bg-white/70 backdrop-blur-sm border-b border-slate-100 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo Section */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="group flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 rounded-xl p-1 transition-transform active:scale-95"
            aria-label="SewaSathi Home"
          >
            <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 text-emerald-400 shadow-md group-hover:bg-slate-800 transition-colors">
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
                <span className="font-bold text-lg tracking-tight text-slate-900 group-hover:text-slate-800">
                  SewaSathi
                </span>
                <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200/60">
                  AI
                </span>
              </div>
              <span className="text-[11px] font-medium text-slate-500 leading-none">
                {NAV_TEXT[lang].tagline}
              </span>
            </div>
          </a>

          {/* Conditional Language Links Component */}
          {lang === 'en' ? (
            <DesktopNavEnglish
              active={active}
              hovered={hovered}
              onHover={setHovered}
              onNavClick={handleNavClick}
            />
          ) : (
            <DesktopNavNepali
              active={active}
              hovered={hovered}
              onHover={setHovered}
              onNavClick={handleNavClick}
            />
          )}

          {/* Conditional Actions Component */}
          {lang === 'en' ? (
            <ActionsEnglish
              active={active}
              hovered={hovered}
              onHover={setHovered}
              onNavClick={handleNavClick}
              isLangDropdownOpen={isLangDropdownOpen}
              onToggleLangDropdown={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              onLangChange={handleLangToggle}
            />
          ) : (
            <ActionsNepali
              active={active}
              hovered={hovered}
              onHover={setHovered}
              onNavClick={handleNavClick}
              isLangDropdownOpen={isLangDropdownOpen}
              onToggleLangDropdown={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
              onLangChange={handleLangToggle}
            />
          )}

          {/* Mobile Hamburger Menu Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
              aria-label="Toggle navigation menu"
            >
              {isMobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-white border-b border-slate-200 shadow-xl"
          >
            <div className="px-4 py-5 space-y-4">
              <nav className="flex flex-col space-y-1">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                      active === item.href
                        ? 'bg-slate-900 text-white font-semibold'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {lang === 'en' ? item.labelEn : item.labelNp}
                  </a>
                ))}
              </nav>

              <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
                <div className="flex items-center justify-between px-2">
                  <span className="text-sm font-medium text-slate-500">
                    {NAV_TEXT[lang].mobileLangTitle}
                  </span>
                  <div className="flex bg-slate-100 p-1 rounded-lg border border-slate-200">
                    <button
                      type="button"
                      onClick={() => handleLangToggle('en')}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                        lang === 'en' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                      }`}
                    >
                      English
                    </button>
                    <button
                      type="button"
                      onClick={() => handleLangToggle('np')}
                      className={`px-3 py-1 text-xs font-semibold rounded-md transition-colors ${
                        lang === 'np' ? 'bg-white text-slate-900 shadow-2xs' : 'text-slate-600'
                      }`}
                    >
                      नेपाली
                    </button>
                  </div>
                </div>

                <a href="#signin" className="w-full text-center py-2.5 text-sm font-semibold text-slate-700 hover:bg-slate-50 rounded-xl">
                  {NAV_TEXT[lang].signIn}
                </a>

                <a href="#get-started" className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-500">
                  <span>{NAV_TEXT[lang].getStarted}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;