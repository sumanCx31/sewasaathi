export interface FooterLink {
  labelEn: string;
  labelNp: string;
  href: string;
}

export interface FooterSection {
  titleEn: string;
  titleNp: string;
  links: FooterLink[];
}

export const FOOTER_SECTIONS: FooterSection[] = [
  {
    titleEn: 'Services',
    titleNp: 'सेवाहरू',
    links: [
      { labelEn: 'Citizenship Procedures', labelNp: 'नागरिकता प्रक्रिया', href: '#services' },
      { labelEn: 'Passport & NID Assistance', labelNp: 'राहदानी तथा राष्ट्रिय परिचयपत्र', href: '#services' },
      { labelEn: 'Driving License Guide', labelNp: 'सवारी चालक अनुमतिपत्र मार्गदर्शिका', href: '#services' },
      { labelEn: 'Local Ward Services', labelNp: 'वडा कार्यालय सेवाहरू', href: '#services' },
      { labelEn: 'Tax & Revenue Portal', labelNp: 'कर तथा राजस्व पोर्टल', href: '#services' },
    ],
  },
  {
    titleEn: 'Company & Project',
    titleNp: 'कम्पनी तथा परियोजना',
    links: [
      { labelEn: 'About SewaSathi', labelNp: 'सेवासाथीको बारेमा', href: '#about' },
      { labelEn: 'How AI Works', labelNp: 'एआईले कसरी काम गर्छ', href: '#how-it-works' },
      { labelEn: 'Public Impact', labelNp: 'सार्वजनिक प्रभाव', href: '#about' },
      { labelEn: 'Privacy & Data Protection', labelNp: 'गोपनीयता तथा डेटा सुरक्षा', href: '#privacy' },
      { labelEn: 'Terms of Service', labelNp: 'सेवाका सर्तहरू', href: '#terms' },
    ],
  },
  {
    titleEn: 'Nepal Official Portals',
    titleNp: 'सरकारी मुख्य पोर्टलहरू',
    links: [
      { labelEn: 'Government of Nepal Portal', labelNp: 'नेपाल सरकारको आधिकारिक पोर्टल', href: 'https://nepal.gov.np' },
      { labelEn: 'Department of Passport', labelNp: 'राहदानी विभाग', href: '#' },
      { labelEn: 'Department of National ID', labelNp: 'राष्ट्रिय परिचयपत्र विभाग', href: '#' },
      { labelEn: 'DoTM (Driving License)', labelNp: 'यातायात व्यवस्था विभाग', href: '#' },
    ],
  },
];

export const FOOTER_TEXT = {
  en: {
    tagline: 'AI-Powered Public Service Assistant for Citizens across Nepal.',
    subTagline: 'Simplifying official procedures, documentation, and government guidelines.',
    contactHeader: 'Get in Touch',
    location: 'Kathmandu, Nepal',
    rights: 'All rights reserved.',
    disclaimer:
      'SewaSathi is an AI assistant providing public informational guides. For official legal decisions, please verify with authorized local government ward offices.',
  },
  np: {
    tagline: 'नेपालभरका नागरिकहरूका लागि AI-द्वारा सञ्चालित सार्वजनिक सेवा सहायक।',
    subTagline: 'सरकारी प्रक्रिया, कागजात र निर्देशिकाहरू सरल र सहज बनाउँदै।',
    contactHeader: 'सम्पर्क गर्नुहोस्',
    location: 'काठमाडौँ, नेपाल',
    rights: 'सर्वाधिकार सुरक्षित।',
    disclaimer:
      'सेवासाथी सार्वजनिक जानकारी प्रदान गर्ने AI सहायक हो। आधिकारिक निर्णयका लागि सम्बन्धित सरकारी वा वडा कार्यालयमा सम्पर्क गर्नुहोस्।',
  },
};