import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Search,
  Sparkles,
  FileText,
  Clock,
  Coins,
  ChevronRight,
  X,
  CheckCircle2,
  Building2,
} from 'lucide-react';
import { SERVICES_DATA, type ServiceItem } from '../components/services/serviceData';

interface ServicesPageProps {
  lang?: 'en' | 'np';
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ lang = 'en' }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  // Filter Services based on search input & category tab with strict typing
  const filteredServices = useMemo(() => {
    return SERVICES_DATA.filter((service: ServiceItem) => {
      const title = lang === 'en' ? service.titleEn : service.titleNp;
      const desc = lang === 'en' ? service.descEn : service.descNp;
      const dept = lang === 'en' ? service.departmentEn : service.departmentNp;

      const matchesSearch =
        title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        desc.toLowerCase().includes(searchQuery.toLowerCase()) ||
        dept.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === 'all' || service.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory, lang]);

  const categoryTabs = [
    { id: 'all', labelEn: 'All Services', labelNp: 'सबै सेवाहरू' },
    { id: 'dotm', labelEn: 'Transport (DoTM)', labelNp: 'यातायात (DoTM)' },
    { id: 'vital', labelEn: 'Vital Events', labelNp: 'व्यक्तिगत घटना' },
    { id: 'citizenship', labelEn: 'Citizenship & NID', labelNp: 'नागरिकता तथा NID' },
    { id: 'tax', labelEn: 'Property & Tax', labelNp: 'सम्पत्ति तथा कर' },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 selection:bg-emerald-100 selection:text-emerald-900 pt-22 pl-15 pr-15 pb-8 ">
      
      {/* Header Title Section */}
      <div className="text-center space-y-4 max-w-3xl mx-auto mb-10">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200 shadow-2xs"
        >
          <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
          <span className="text-xs font-semibold text-slate-700">
            {lang === 'en' ? 'Nepal Government Service Directory' : 'नेपाल सरकार सेवा निर्देशिका'}
          </span>
        </motion.div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
          {lang === 'en' ? (
            <>
              Explore Public <span className="text-emerald-600">Services & Procedures</span>
            </>
          ) : (
            <>
              सार्वजनिक <span className="text-emerald-600">सेवा तथा प्रक्रियाहरू</span> हेर्नुहोस्
            </>
          )}
        </h1>

        <p className="text-sm sm:text-base text-slate-600">
          {lang === 'en'
            ? 'Clear guidelines on required documents, estimated fees, and official department steps.'
            : 'आवश्यक कागजात, अनुमानित शुल्क र आधिकारिक विभाग प्रक्रियाहरूको स्पष्ट जानकारी।'}
        </p>
      </div>

      {/* Search Bar & Category Controls */}
      <div className="space-y-6 mb-10">
        <div className="relative max-w-2xl mx-auto">
          <div className="relative flex items-center bg-white rounded-2xl border border-slate-200 shadow-sm focus-within:border-emerald-500 focus-within:ring-2 focus-within:ring-emerald-500/20 transition-all p-2">
            <Search className="w-5 h-5 text-slate-400 ml-3 shrink-0" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                lang === 'en'
                  ? 'Search by service name (e.g. DoTM License, Birth Certificate, Passport...)'
                  : 'सेवा खोज्नुहोस् (जस्तै: सवारी अनुमतिपत्र, जन्म दर्ता, राहदानी...)'
              }
              className="w-full py-2.5 px-3 text-slate-900 placeholder:text-slate-400 bg-transparent text-sm sm:text-base focus:outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="p-1 text-slate-400 hover:text-slate-600 mr-2 rounded-full"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {categoryTabs.map((tab) => {
            const isActive = selectedCategory === tab.id;
            const label = lang === 'en' ? tab.labelEn : tab.labelNp;

            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setSelectedCategory(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all shrink-0 ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                {label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Services Grid */}
      {filteredServices.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service: ServiceItem) => {
            const title = lang === 'en' ? service.titleEn : service.titleNp;
            const desc = lang === 'en' ? service.descEn : service.descNp;
            const dept = lang === 'en' ? service.departmentEn : service.departmentNp;
            const time = lang === 'en' ? service.processingTimeEn : service.processingTimeNp;
            const fee = lang === 'en' ? service.feeEn : service.feeNp;

            return (
              <motion.div
                layout
                key={service.id}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="group relative bg-white rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-emerald-500/50 transition-all duration-200 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center px-2.5 py-1 rounded-md text-[11px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      <Building2 className="w-3 h-3 mr-1 text-slate-500" />
                      {dept}
                    </span>
                    {service.popular && (
                      <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-800">
                        {lang === 'en' ? 'Popular' : 'लोकप्रिय'}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-2">
                    {title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 line-clamp-2 mb-4 leading-relaxed">
                    {desc}
                  </p>

                  <div className="space-y-2 border-t border-slate-100 pt-3 text-xs text-slate-500 mb-6">
                    <div className="flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{time}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Coins className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{fee}</span>
                    </div>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setActiveModalService(service)}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-800 bg-slate-100 hover:bg-emerald-600 hover:text-white transition-all group-hover:bg-slate-900 group-hover:text-white"
                >
                  <span>{lang === 'en' ? 'View Details' : 'विवरण हेर्नुहोस्'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-slate-200">
          <p className="text-slate-500 font-medium">
            {lang === 'en'
              ? 'No matching government services found.'
              : 'कुनै पनि सम्बन्धित सेवा भेटिएन।'}
          </p>
        </div>
      )}

      {/* View Details Modal */}
      <AnimatePresence>
        {activeModalService && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-xs overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              className="relative w-full max-w-2xl bg-white rounded-2xl shadow-xl border border-slate-200 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            >
              <button
                type="button"
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">
                  {lang === 'en' ? activeModalService.departmentEn : activeModalService.departmentNp}
                </span>
                <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 mt-1">
                  {lang === 'en' ? activeModalService.titleEn : activeModalService.titleNp}
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200/80 text-xs sm:text-sm">
                <div>
                  <span className="text-slate-500 block">{lang === 'en' ? 'Processing Time' : 'कार्य समय'}</span>
                  <span className="font-semibold text-slate-900">
                    {lang === 'en' ? activeModalService.processingTimeEn : activeModalService.processingTimeNp}
                  </span>
                </div>
                <div>
                  <span className="text-slate-500 block">{lang === 'en' ? 'Government Fee' : 'सरकारी शुल्क'}</span>
                  <span className="font-semibold text-slate-900">
                    {lang === 'en' ? activeModalService.feeEn : activeModalService.feeNp}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'en' ? 'Required Documents' : 'आवश्यक कागजातहरू'}</span>
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {(lang === 'en' ? activeModalService.documentsEn : activeModalService.documentsNp).map((doc: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-3 pt-2">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'en' ? 'Step-by-Step Procedure' : 'चरणबद्ध प्रक्रिया'}</span>
                </h3>
                <ol className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                  {(lang === 'en' ? activeModalService.stepsEn : activeModalService.stepsNp).map((step: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="font-bold text-emerald-600 text-xs shrink-0">{idx + 1}.</span>
                      <span>{step}</span>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveModalService(null)}
                  className="px-5 py-2.5 rounded-xl bg-slate-900 text-white font-medium text-xs sm:text-sm hover:bg-slate-800 transition-colors"
                >
                  {lang === 'en' ? 'Close Guide' : 'बन्द गर्नुहोस्'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ServicesPage;