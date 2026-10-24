export interface ServiceItem {
  id: string;
  category: 'dotm' | 'vital' | 'citizenship' | 'tax';
  titleEn: string;
  titleNp: string;
  descEn: string;
  descNp: string;
  departmentEn: string;
  departmentNp: string;
  processingTimeEn: string;
  processingTimeNp: string;
  feeEn: string;
  feeNp: string;
  documentsEn: string[];
  documentsNp: string[];
  stepsEn: string[];
  stepsNp: string[];
  popular?: boolean;
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'dotm-license-renew',
    category: 'dotm',
    titleEn: 'Driving License Renewal (DoTM)',
    titleNp: 'सवारी चालक अनुमतिपत्र नवीकरण (यातायात)',
    descEn: 'Online biometric slot booking, medical test clearance, and renewal fee payment guide.',
    descNp: 'अनलाइन बायोमेट्रिक समय छनोट, स्वास्थ्य परीक्षण तथा शुल्क भुक्तानी मार्गदर्शिका।',
    departmentEn: 'Department of Transport Management (DoTM)',
    departmentNp: 'यातायात व्यवस्था विभाग',
    processingTimeEn: '2 - 5 Business Days',
    processingTimeNp: '२ - ५ कार्यदिन',
    feeEn: 'NPR 1,500 - 3,000 (Category dependent)',
    feeNp: 'रु १,५०० - ३,००० (वर्ग अनुसार)',
    popular: true,
    documentsEn: [
      'Original Driving License',
      'Citizenship Certificate Copy',
      'Blood Group Card',
      'Medical Test Report from Authorized Office',
    ],
    documentsNp: [
      'मूल सवारी चालक अनुमतिपत्र',
      'नागरिकताको प्रतिलिपि',
      'रक्तसमूह कार्ड',
      'स्वीकृत स्वास्थ्य परीक्षण रिपोर्ट',
    ],
    stepsEn: [
      'Fill out the online application form on the DoTM portal.',
      'Book a slot for biometric verification and eye test.',
      'Visit the designated Transport Management Office with original documents.',
      'Pay the renewal fee and collect the temporary renewal receipt.',
    ],
    stepsNp: [
      'यातायात व्यवस्था विभागको पोर्टलमा अनलाइन फारम भर्नुहोस्।',
      'बायोमेट्रिक र दृष्टि परीक्षणको लागि समय (Slot) छनोट गर्नुहोस्।',
      'मूल कागजातसहित सम्बन्धित यातायात कार्यालयमा उपस्थित हुनुहोस्।',
      'शुल्क बुझाएर अस्थायी नवीकरण रसिद प्राप्त गर्नुहोस्।',
    ],
  },
  {
    id: 'birth-certificate',
    category: 'vital',
    titleEn: 'Birth Certificate Registration',
    titleNp: 'जन्म दर्ता प्रमाण पत्र',
    descEn: 'Official registration of child birth at local ward office within 35 days.',
    descNp: 'जन्म भएको ३५ दिनभित्र स्थानीय वडा कार्यालयमा गरिने आधिकारिक दर्ता।',
    departmentEn: 'Local Ward Office / Department of Civil Registration',
    departmentNp: 'स्थानीय वडा कार्यालय / व्यक्तिगत घटना दर्ता विभाग',
    processingTimeEn: 'Same Day - 1 Business Day',
    processingTimeNp: 'सोही दिन - १ कार्यदिन',
    feeEn: 'Free (within 35 days) / NPR 50 Delay Fee',
    feeNp: 'निःशुल्क (३५ दिनभित्र) / रु ५० ढिलासुस्ती शुल्क',
    popular: true,
    documentsEn: [
      'Hospital Birth Discharge Certificate',
      'Parents Citizenship Certificates (Original & Copy)',
      'Parents Marriage Certificate Copy',
    ],
    documentsNp: [
      'अस्पतालको जन्म/डिसचार्ज प्रमाण पत्र',
      'आमाबाबुको नागरिकता प्रमाण पत्र (मूल र प्रतिलिपि)',
      'आमाबाबुको विवाह दर्ता प्रमाण पत्र',
    ],
    stepsEn: [
      'Collect birth discharge document from the hospital.',
      'Visit local ward office of permanent or temporary residence.',
      'Fill out vital event registration Form No. 1.',
      'Receive official Birth Certificate signed by Ward Secretary.',
    ],
    stepsNp: [
      'अस्पतालबाट जन्म डिसचार्ज कागजात लिनुहोस्।',
      'स्थानीय वडा कार्यालयमा उपस्थित हुनुहोस्।',
      'व्यक्तिगत घटना दर्ता फारम नम्बर १ भर्नुहोस्।',
      'वडा सचिवद्वारा प्रमाणित जन्म दर्ता प्रमाण पत्र प्राप्त गर्नुहोस्।',
    ],
  },
  {
    id: 'citizenship-new',
    category: 'citizenship',
    titleEn: 'New Citizenship Certificate (By Descent)',
    titleNp: 'नयाँ नागरिकता प्रमाण पत्र (वंशज)',
    descEn: 'First-time citizenship application guidelines through District Administration Office (DAO).',
    descNp: 'जिल्ला प्रशासन कार्यालय मार्फत पहिलो पटक नागरिकता बनाउने प्रक्रिया।',
    departmentEn: 'District Administration Office (DAO)',
    departmentNp: 'जिल्ला प्रशासन कार्यालय (DAO)',
    processingTimeEn: '1 - 2 Business Days',
    processingTimeNp: '१ - २ कार्यदिन',
    feeEn: 'NPR 10 (Stamp / Application)',
    feeNp: 'रु १० (टिकट / निवेदन)',
    popular: true,
    documentsEn: [
      'Father or Mother Original Citizenship Certificate',
      'Birth Certificate & Academic Certificates (SEE/SLC)',
      'Ward Recommendation Letter (Sifarish)',
      'Passport size photos (3 copies)',
    ],
    documentsNp: [
      'बुबा वा आमाको मूल नागरिकता प्रमाण पत्र',
      'जन्म दर्ता र शैक्षिक प्रमाण पत्र (SEE/SLC)',
      'वडा कार्यालयको नागरिकता सिफारिस',
      'पासपोर्ट साइजको फोटो (३ प्रति)',
    ],
    stepsEn: [
      'Obtain citizenship sifarish from local ward office.',
      'Verification of lineage and documents by ward secretary.',
      'Submit application at the District Administration Office.',
      'Biometric capture and collect official Citizenship card.',
    ],
    stepsNp: [
      'स्थानीय वडा कार्यालयबाट नागरिकता सिफारिस लिनुहोस्।',
      'वडा सचिवबाट कागजात प्रमाणीकरण गराउनुहोस्।',
      'जिल्ला प्रशासन कार्यालयमा निवेदन पेश गर्नुहोस्।',
      'बायोमेट्रिक विवरण दिएपछि नागरिकता प्राप्त गर्नुहोस्।',
    ],
  },
  {
    id: 'passport-nid',
    category: 'citizenship',
    titleEn: 'e-Passport & National ID (NID) Booking',
    titleNp: 'ई-राहदानी तथा राष्ट्रिय परिचयपत्र (NID)',
    descEn: 'National ID enrollment and e-Passport appointment pre-enrollment booking.',
    descNp: 'राष्ट्रिय परिचयपत्र विवरण संकलन तथा ई-राहदानी अनलाइन अपोइन्टमेन्ट बुक।',
    departmentEn: 'Department of Passport / Department of National ID',
    departmentNp: 'राहदानी विभाग / राष्ट्रिय परिचयपत्र तथा पञ्जीकरण विभाग',
    processingTimeEn: '15 - 30 Days (Standard) / 2 Days (Urgent)',
    processingTimeNp: '१५ - ३० दिन (साधारण) / २ दिन (द्रुत)',
    feeEn: 'NPR 5,000 (Standard) / NPR 12,000 (Urgent)',
    feeNp: 'रु ५,००० (साधारण) / रु १२,००० (द्रुत)',
    popular: true,
    documentsEn: [
      'National ID Number (NIN) or Verified Receipt',
      'Original Citizenship Certificate',
      'Old Passport (if applying for renewal)',
    ],
    documentsNp: [
      'राष्ट्रिय परिचयपत्र नम्बर (NIN) वा भ्यालिडेटेड रसिद',
      'मूल नागरिकता प्रमाण पत्र',
      'पुराना राहदानी (नवीकरणको हकमा)',
    ],
    stepsEn: [
      'Enroll for National ID at designated DAO or Ward Center.',
      'Fill out e-Passport online application on Department of Passport portal.',
      'Pay fees and choose appointment date/time.',
      'Visit passport office for live photo & biometric capture.',
    ],
    stepsNp: [
      'तोकिएको जिल्ला प्रशासन वा वडा केन्द्रमा NID दर्ता गराउनुहोस्।',
      'राहदानी विभागको अनलाइन पोर्टलमा ई-पासपोर्ट फारम भर्नुहोस्।',
      'राजस्व बुझाएर अपोइन्टमेन्ट मिति छनोट गर्नुहोस्।',
      'लाइभ फोटो तथा बायोमेट्रिकका लागि राहदानी केन्द्र जानुहोस्।',
    ],
  },
  {
    id: 'property-tax',
    category: 'tax',
    titleEn: 'Integrated Property Tax & Land Revenue',
    titleNp: 'एकीकृत सम्पत्ति कर तथा भू-राजस्व',
    descEn: 'Annual local government property, land, and house tax calculation and payment guide.',
    descNp: 'वार्षिक घरजग्गा तथा सम्पत्ति कर मूल्याङ्कन र भुक्तानी मार्गदर्शिका।',
    departmentEn: 'Local Municipality / Ward Tax Section',
    departmentNp: 'स्थानीय नगरपालिका / वडा कर शाखा',
    processingTimeEn: 'Same Day',
    processingTimeNp: 'सोही दिन',
    feeEn: 'Based on property valuation',
    feeNp: 'सम्पत्ति मूल्याङ्कन अनुसार',
    documentsEn: [
      'Land Ownership Certificate (Lalpurja)',
      'Previous Year Tax Clearance Receipt',
      'Approved House Construction Clearance (Naksha Pass)',
    ],
    documentsNp: [
      'जग्गा धनी प्रमाण पुर्जा (लालपुर्जा)',
      'गत वर्षको कर चुक्ता रसिद',
      'स्वीकृत घरको नक्सा पास प्रमाणपत्र',
    ],
    stepsEn: [
      'Calculate property valuation at Ward Revenue Counter.',
      'Submit Lalpurja and previous tax clearing receipts.',
      'Pay annual property tax digitally or at counter.',
      'Receive Ward Tax Clearance Certificate.',
    ],
    stepsNp: [
      'वडाको राजस्व काउन्टरमा सम्पत्ति मूल्याङ्कन गराउनुहोस्।',
      'लालपुर्जा र अघिल्लो वर्षको कर रसिद पेश गर्नुहोस्।',
      'अनलाइन वा काउन्टरमा वार्षिक कर भुक्तानी गर्नुहोस्।',
      'कर चुक्ता प्रमाण पत्र प्राप्त गर्नुहोस्।',
    ],
  },
];