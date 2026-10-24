import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, FileText, Compass, Clock } from 'lucide-react';

interface HeroAIProps {
  lang?: 'en' | 'np';
  onSearchSubmit?: (query: string) => void;
}

export const HeroAI: React.FC<HeroAIProps> = ({ lang = 'en', onSearchSubmit }) => {
  const [query, setQuery] = useState('');

  const suggestions = [
    {
      en: 'How to apply for Citizenship card?',
      np: 'नागरिकता प्रमाण पत्र कसरी बनाउने?',
      icon: FileText,
    },
    {
      en: 'Required documents for National ID',
      np: 'राष्ट्रिय परिचयपत्रका लागि चाहिने कागजात',
      icon: ShieldCheck,
    },
    {
      en: 'Passport renewal process in Kathmandu',
      np: 'काठमाडौँमा राहदानी नवीकरण प्रक्रिया',
      icon: Clock,
    },
    {
      en: 'Find local Ward office services',
      np: 'वडा कार्यालयबाट प्राप्त हुने सेवाहरू',
      icon: Compass,
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    if (onSearchSubmit) {
      onSearchSubmit(query);
    } else {
      console.log('Submitted query:', query);
    }
  };

  const handleChipClick = (suggestionText: string) => {
    setQuery(suggestionText);
  };

  return (
    <section className="relative min-h-[calc(100vh-80px)] flex items-center justify-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 bg-slate-50 overflow-hidden">
      {/* Background Decorative Gradient Blobs */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-300/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 w-[300px] h-[300px] bg-slate-300/30 rounded-full blur-2xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-3xl mx-auto text-center space-y-8">
        
        {/* Animated AI Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/80 shadow-xs backdrop-blur-md"
        >
          <div className="p-1 rounded-full bg-emerald-500/10 text-emerald-600">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
          </div>
          <span className="text-xs font-semibold text-slate-700 tracking-wide">
            {lang === 'en' ? 'SewaSathi AI Public Assistant' : 'सेवासाथी AI नागरिक सहायता'}
          </span>
        </motion.div>

        {/* Main Heading & Subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          className="space-y-3"
        >
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            {lang === 'en' ? (
              <>
                How can I <span className="text-emerald-600">help you</span> today?
              </>
            ) : (
              <>
                आज म तपाईंलाई <span className="text-emerald-600">कसरी सहयोग</span> गर्न सक्छु?
              </>
            )}
          </h1>
          <p className="text-sm sm:text-base text-slate-600 max-w-xl mx-auto font-normal">
            {lang === 'en'
              ? 'Ask any question about Nepalese government procedures, documents, fees, and ward services.'
              : 'सरकारी प्रक्रिया, आवश्यक कागजात, दस्तुर तथा वडा सेवाहरूबारे प्रश्न सोध्नुहोस्।'}
          </p>
        </motion.div>

        {/* Centered AI Prompt Input Bar */}
        <motion.form
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          onSubmit={handleSubmit}
          className="relative max-w-2xl mx-auto group"
        >
          {/* Subtle Outer Glow Effect on Hover/Focus */}
          <div className="absolute -inset-0.5 bg-gradient-to-r from-emerald-500/20 to-slate-900/10 rounded-2xl blur-md opacity-75 group-hover:opacity-100 transition duration-300 pointer-events-none" />

          <div className="relative flex items-center bg-white rounded-2xl border border-slate-200 shadow-md focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all p-2">
            <div className="pl-3 text-slate-400">
              <Sparkles className="w-5 h-5 text-emerald-500" />
            </div>

            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder={
                lang === 'en'
                  ? 'Ask about Citizenship, Passport, Driving License, Taxes...'
                  : 'नागरिकता, राहदानी, सवारी चालक अनुमतिपत्र, करबारे सोध्नुहोस्...'
              }
              className="w-full py-3 px-3 text-slate-900 placeholder:text-slate-400 bg-transparent text-sm sm:text-base focus:outline-none"
            />

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-emerald-600 text-white font-medium text-sm transition-colors shadow-sm shrink-0"
            >
              <span>{lang === 'en' ? 'Ask AI' : 'सोध्नुहोस्'}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
          </div>
        </motion.form>

        {/* Quick Suggestion Chips */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          className="space-y-3 pt-2"
        >
          <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
            {lang === 'en' ? 'Frequently Asked Questions' : 'प्रायः सोधिने प्रश्नहरू'}
          </p>

          <div className="flex flex-wrap justify-center gap-2.5 max-w-2xl mx-auto">
            {suggestions.map((item, idx) => {
              const Icon = item.icon;
              const text = lang === 'en' ? item.en : item.np;

              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => handleChipClick(text)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/80 text-slate-700 hover:border-emerald-500 hover:text-emerald-700 hover:bg-emerald-50/40 text-xs sm:text-sm font-medium transition-all shadow-2xs hover:shadow-xs active:scale-98"
                >
                  <Icon className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-600" />
                  <span>{text}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroAI;