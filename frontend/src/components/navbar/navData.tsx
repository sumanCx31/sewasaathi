export interface NavItem {
  labelEn: string;
  labelNp: string;
  href: string;
}

export const NAV_ITEMS: NavItem[] = [
  { labelEn: 'Home', labelNp: 'गृहपृष्ठ', href: '#home' },
  { labelEn: 'Explore Services', labelNp: 'सेवाहरू हेर्नुहोस्', href: '#services' },
  { labelEn: 'How It Works', labelNp: 'कसरी काम गर्छ', href: '#how-it-works' },
  { labelEn: 'About Us', labelNp: 'हाम्रो बारेमा', href: '#about' },
];

export const NAV_TEXT = {
  en: {
    tagline: 'Government Services, Simplified',
    signIn: 'Sign In',
    getStarted: 'Get Started',
    langLabel: 'English',
    mobileLangTitle: 'Language / भाषा',
  },
  np: {
    tagline: 'सरकारी सेवा, सरल र सहज',
    signIn: 'साइन इन',
    getStarted: 'शुरू गर्नुहोस्',
    langLabel: 'नेपाली',
    mobileLangTitle: 'भाषा / Language',
  },
};