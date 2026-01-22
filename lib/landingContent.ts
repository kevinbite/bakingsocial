// The Baking Social - Landing Page Content Configuration
// This file serves as the single source of truth for all landing page content
// Designed for easy migration to Shopify Online Store 2.0 sections

// ============================================================================
// TYPE DEFINITIONS
// ============================================================================

export interface ClassCard {
  id: string;
  title: string;
  description: string;
  duration: string;
  price: number;
  badge?: string;
  category: 'baking' | 'decorating' | 'bread' | 'specialty';
}

export interface ScheduleItem {
  id: string;
  day: string;
  date: string;
  time: string;
  classTitle: string;
  spotsLeft: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface OfferingCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  ctaText: string;
  ctaAnchor: string;
}

export interface PricingTier {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface TrustChip {
  id: string;
  text: string;
  icon?: string;
}

export interface SocialLink {
  id: string;
  platform: string;
  url: string;
  icon: string;
}

export interface SectionConfig<T = unknown> {
  id: string;
  type: string;
  enabled: boolean;
  settings: T;
  blocks?: unknown[];
}

// ============================================================================
// SITE CONFIGURATION
// ============================================================================

export const siteConfig = {
  name: 'The Baking Social',
  tagline: "Atlanta's Baking Night Out",
  description: 'Hands-on baking classes in Atlanta. Social, fun, unforgettable experiences for date nights, girls\' nights, kids camps, and private events.',
  location: {
    city: 'Atlanta',
    state: 'GA',
    address: 'Address coming soon',
  },
  social: {
    instagram: 'https://instagram.com/thebakingsocial',
    tiktok: 'https://tiktok.com/@thebakingsocial',
    facebook: 'https://facebook.com/thebakingsocial',
  },
  contact: {
    email: 'hello@thebakingsocial.com',
    phone: '(404) 555-BAKE',
  },
};

// ============================================================================
// NAVIGATION
// ============================================================================

export const navLinks = [
  { id: 'classes', label: 'Classes', href: '#classes' },
  { id: 'events', label: 'Events', href: '#private-events' },
  { id: 'kids', label: 'Kids & Teens', href: '#offerings' },
  { id: 'about', label: 'About Us', href: '#studio' },
];

// ============================================================================
// HERO SECTION
// ============================================================================

export const heroContent = {
  headline: "Warm ovens. Good company. Unforgettable nights.",
  subheadline: 'Our classes turn baking into your new favorite night out—elevated, interactive, and full of laughter. Come for the cozy vibe, leave with a masterpiece.',
  primaryCta: {
    text: 'Book a Class',
    href: '#schedule',
    dataCta: 'book-class',
  },
  secondaryCta: {
    text: 'Plan a Private Event',
    href: '#private-events',
    dataCta: 'private-events',
  },
  trustChips: [
    { id: '1', text: '20 seats per class', icon: 'users' },
    { id: '2', text: 'All ingredients included', icon: 'check' },
    { id: '3', text: 'Take-home treats', icon: 'gift' },
  ] as TrustChip[],
};

// ============================================================================
// OFFERINGS SECTION
// ============================================================================

export const offeringsContent: OfferingCard[] = [
  {
    id: 'classes',
    title: 'Classes & Workshops',
    description: 'Learn to bake like a pro with our hands-on group classes. From cookies to sourdough, we\'ve got you covered.',
    icon: 'book-open',
    ctaText: 'View Classes',
    ctaAnchor: '#classes',
  },
  {
    id: 'date-nights',
    title: 'Date Nights & Girls\' Nights',
    description: 'The sweetest night out in Atlanta. BYOB, bake together, and make memories (and desserts) to take home.',
    icon: 'heart',
    ctaText: 'Learn More',
    ctaAnchor: '#schedule',
  },
  {
    id: 'kids-camps',
    title: 'Kids & Teens Camps',
    description: 'Week-long baking adventures for young bakers. Build skills, confidence, and friendships.',
    icon: 'sparkles',
    ctaText: 'Camp Info',
    ctaAnchor: '#schedule',
  },
  {
    id: 'corporate',
    title: 'Team-Building & Corporate',
    description: 'Unique team experiences that actually bring people together. Perfect for offsites and celebrations.',
    icon: 'users',
    ctaText: 'Plan an Event',
    ctaAnchor: '#private-events',
  },
];

// ============================================================================
// FEATURED CLASSES
// ============================================================================

export const featuredClasses: ClassCard[] = [
  {
    id: 'chocolate-chip-cookie',
    title: 'Ultimate Chocolate Chip Cookie Lab',
    description: 'Master the perfect chewy-crispy balance. Test different techniques and take home a dozen cookies.',
    duration: '2 hours',
    price: 75,
    badge: 'Most Popular',
    category: 'baking',
  },
  {
    id: 'grandmas-brownies',
    title: "Grandma's Brownies",
    description: 'Classic fudgy brownies with that irresistible crinkly top. A timeless recipe made with love.',
    duration: '1.5 hours',
    price: 75,
    badge: 'Beginner-Friendly',
    category: 'baking',
  },
  {
    id: 'dubai-brownies',
    title: 'Dubai Chocolate Brownies',
    description: 'The viral sensation! Decadent brownies with pistachio cream and kadayif. A showstopper.',
    duration: '2 hours',
    price: 100,
    badge: 'Trending',
    category: 'specialty',
  },
  {
    id: 'giant-cookies',
    title: 'Bakery-Style Giant Cookies',
    description: 'Those massive, gooey, NYC-style cookies. Learn the secrets to bakery-level results at home.',
    duration: '2 hours',
    price: 75,
    badge: 'Beginner-Friendly',
    category: 'baking',
  },
  {
    id: 'cake-decorating',
    title: 'Cake 102: Piping & Decorating',
    description: 'Level up your cake game with professional piping techniques and stunning decorations.',
    duration: '2.5 hours',
    price: 100,
    badge: 'Intermediate',
    category: 'decorating',
  },
  {
    id: 'cupcake-party',
    title: 'Cupcake Decorating Party',
    description: 'Buttercream, fondant, and fun! Perfect for groups who want a creative, social experience.',
    duration: '2 hours',
    price: 75,
    badge: 'Great for Groups',
    category: 'decorating',
  },
  {
    id: 'sourdough-basics',
    title: 'Sourdough Bread Basics',
    description: 'Start your sourdough journey. Learn to make and maintain a starter, plus bake your first loaf.',
    duration: '2.5 hours',
    price: 100,
    badge: 'Take Home Starter',
    category: 'bread',
  },
  {
    id: 'cinnamon-rolls',
    title: 'Weekend Cinnamon Rolls',
    description: 'Pillowy soft, perfectly spiced, cream cheese frosted. The ultimate weekend baking project.',
    duration: '2.5 hours',
    price: 75,
    badge: 'Weekend Favorite',
    category: 'baking',
  },
];

// ============================================================================
// SCHEDULE PREVIEW
// ============================================================================

export const scheduleItems: ScheduleItem[] = [
  // Wednesday Dec 11
  { id: 'w1', day: 'Wednesday', date: 'Dec 11', time: '3:00 PM', classTitle: 'Cookie Decorating', spotsLeft: 8 },
  { id: 'w2', day: 'Wednesday', date: 'Dec 11', time: '5:00 PM', classTitle: 'Seasonal Cookie', spotsLeft: 10 },
  { id: 'w3', day: 'Wednesday', date: 'Dec 11', time: '8:00 PM', classTitle: 'Pizza', spotsLeft: 6 },
  // Thursday Dec 12
  { id: 't1', day: 'Thursday', date: 'Dec 12', time: '3:00 PM', classTitle: 'Cake Decorating', spotsLeft: 5 },
  { id: 't2', day: 'Thursday', date: 'Dec 12', time: '5:00 PM', classTitle: 'Focaccia Bread', spotsLeft: 8 },
  { id: 't3', day: 'Thursday', date: 'Dec 12', time: '8:00 PM', classTitle: 'Chocolate Chip', spotsLeft: 4 },
  // Friday Dec 13
  { id: 'f1', day: 'Friday', date: 'Dec 13', time: '2:30 PM', classTitle: 'Floral Cupcake Designs', spotsLeft: 7 },
  { id: 'f2', day: 'Friday', date: 'Dec 13', time: '5:00 PM', classTitle: 'Pizza Class', spotsLeft: 10 },
  { id: 'f3', day: 'Friday', date: 'Dec 13', time: '8:00 PM', classTitle: 'Chocolate Ganache Cake', spotsLeft: 3 },
  // Saturday Dec 14
  { id: 's1', day: 'Saturday', date: 'Dec 14', time: '9:00 AM', classTitle: 'Cinnamon Rolls', spotsLeft: 6 },
  { id: 's2', day: 'Saturday', date: 'Dec 14', time: '12:30 PM', classTitle: 'Chocolate Chip', spotsLeft: 9 },
  { id: 's3', day: 'Saturday', date: 'Dec 14', time: '3:00 PM', classTitle: 'Banana Bread', spotsLeft: 8 },
  { id: 's4', day: 'Saturday', date: 'Dec 14', time: '5:00 PM', classTitle: 'Pizza Class', spotsLeft: 5 },
  { id: 's5', day: 'Saturday', date: 'Dec 14', time: '8:00 PM', classTitle: 'Rotating Pie Class', spotsLeft: 4 },
  // Sunday Dec 15
  { id: 'u1', day: 'Sunday', date: 'Dec 15', time: '9:00 AM', classTitle: 'Cinnamon Rolls', spotsLeft: 7 },
  { id: 'u2', day: 'Sunday', date: 'Dec 15', time: '12:30 PM', classTitle: 'Focaccia Bread', spotsLeft: 10 },
  { id: 'u3', day: 'Sunday', date: 'Dec 15', time: '3:30 PM', classTitle: 'Chocolate Chip', spotsLeft: 6 },
  { id: 'u4', day: 'Sunday', date: 'Dec 15', time: '6:30 PM', classTitle: 'Brownie/Blondie Class', spotsLeft: 8 },
];

// ============================================================================
// PRICING
// ============================================================================

export const pricingTiers: PricingTier[] = [
  {
    id: 'core',
    title: 'Core Classes',
    price: '$75',
    description: 'per person',
    features: [
      'All ingredients included',
      'Professional instruction',
      'Take-home treats',
      'Recipes to keep',
      'BYOB welcome',
    ],
  },
  {
    id: 'premium',
    title: 'Premium Nights',
    price: '$100–$125',
    description: 'per person',
    features: [
      'Everything in Core',
      'Extended class time',
      'Specialty ingredients',
      'Date Night & themed events',
      'Complimentary refreshments',
    ],
    highlighted: true,
  },
  {
    id: 'camps',
    title: 'Kids & Teens Camps',
    price: '$500',
    description: 'per week',
    features: [
      'Full week of baking',
      'Daily take-home treats',
      'Camp t-shirt',
      'End-of-week showcase',
      'New friends guaranteed',
    ],
  },
];

// ============================================================================
// PRIVATE EVENTS
// ============================================================================

export const privateEventsContent = {
  headline: 'Host Your Next Event With Us!',
  subheadline: 'Birthdays, team-building, celebrations—we make it memorable.',
  steps: [
    {
      number: 1,
      title: 'Pick a Theme',
      description: 'Choose from our menu of experiences or create something custom.',
    },
    {
      number: 2,
      title: 'Choose a Date',
      description: 'We offer flexible scheduling for groups of 10-40.',
    },
    {
      number: 3,
      title: 'We Handle the Rest',
      description: 'From ingredients to instruction, we take care of everything.',
    },
  ],
  eventTypes: [
    'Birthday Parties',
    'Corporate Team-Building',
    'Bridal Showers',
    'Bachelorette Parties',
    'Holiday Gatherings',
    'School Field Trips',
  ],
};

// ============================================================================
// STUDIO VIBE
// ============================================================================

export const studioVibeContent = {
  headline: 'A Space Built for Baking Together',
  features: [
    'Welcoming, modern studio with room to move',
    'Individual workstations with pro equipment',
    'Open layout with clear sight lines for demos',
    'Designed for interaction and conversation',
    'Instagram-worthy backdrops throughout',
  ],
  socialCallout: {
    headline: 'Every Class, Live on Social',
    description: 'Follow along on TikTok and Instagram. Your creations might just go viral.',
  },
};

// ============================================================================
// GALLERY
// ============================================================================

export const galleryContent = {
  headline: 'The Baking Social Experience',
  description: 'What happens when you mix flour, friends, and fun.',
};

// ============================================================================
// FAQ
// ============================================================================

export const faqItems: FAQItem[] = [
  {
    id: '1',
    question: 'Do I need baking experience?',
    answer: 'Not at all! Our classes are designed for all skill levels. We\'ll guide you through every step, whether you\'re a complete beginner or looking to level up your skills. Most of our classes are beginner-friendly.',
  },
  {
    id: '2',
    question: 'What\'s included in the class price?',
    answer: 'Everything you need! All ingredients, equipment, aprons, recipes, and professional instruction are included. Plus, you\'ll take home everything you bake—typically 6-12 items depending on the class.',
  },
  {
    id: '3',
    question: 'Can you accommodate allergies or dietary restrictions?',
    answer: 'We do our best to accommodate common allergies and restrictions when given advance notice. Please note that our kitchen handles wheat, dairy, eggs, nuts, and soy. Contact us before booking if you have specific concerns.',
  },
  {
    id: '4',
    question: 'Can I book a class for my group?',
    answer: 'Absolutely! Groups of 6+ can book a private session. We also offer custom experiences for larger corporate events and celebrations. Head to our Private Events section to inquire.',
  },
  {
    id: '5',
    question: 'Is there an age limit?',
    answer: 'Our general classes are designed for adults (18+). We offer dedicated Kids & Teens programs for younger bakers ages 8-17. Kids under 8 can join private family events with adult supervision.',
  },
  {
    id: '6',
    question: 'What\'s your cancellation policy?',
    answer: 'We understand plans change! Full refunds are available up to 48 hours before class. Within 48 hours, you can reschedule to a future date or receive class credit. No-shows cannot be refunded.',
  },
  {
    id: '7',
    question: 'Can I host a private event?',
    answer: 'Yes! We love hosting birthdays, bachelorette parties, corporate team-building, and more. Private events can be customized to your theme and dietary needs. Fill out our inquiry form to get started.',
  },
  {
    id: '8',
    question: 'Where are you located?',
    answer: 'We\'re in Atlanta, GA! Our exact address will be shared when you book a class. We\'re centrally located with easy parking and public transit access.',
  },
];

// ============================================================================
// FOOTER
// ============================================================================

export const footerContent = {
  emailSignup: {
    headline: 'Join the Atlanta Baking List',
    description: 'Be the first to know about new classes, events, and special offers.',
    placeholder: 'Enter your email',
    buttonText: 'Subscribe',
  },
  legalText: '© 2024 The Baking Social. All rights reserved.',
};

// ============================================================================
// SECTIONS CONFIGURATION (Shopify-style template)
// ============================================================================

export const sectionsConfig: SectionConfig[] = [
  {
    id: 'hero',
    type: 'hero',
    enabled: true,
    settings: heroContent,
  },
  {
    id: 'logo-carousel',
    type: 'logo-carousel',
    enabled: true,
    settings: {},
  },
  {
    id: 'gallery',
    type: 'gallery',
    enabled: true,
    settings: galleryContent,
  },
  {
    id: 'schedule-preview',
    type: 'schedule-preview',
    enabled: true,
    settings: {
      headline: 'This Week in Atlanta',
      subheadline: 'New classes drop weekly',
      items: scheduleItems,
    },
  },
  {
    id: 'offerings',
    type: 'offerings',
    enabled: true,
    settings: { items: offeringsContent },
  },
  {
    id: 'featured-classes',
    type: 'featured-classes',
    enabled: false,
    settings: {
      headline: 'Popular Classes',
      subheadline: 'Hands-on experiences for every skill level',
      classes: featuredClasses,
    },
  },
  {
    id: 'pricing',
    type: 'pricing',
    enabled: false,
    settings: {
      headline: 'Simple, Transparent Pricing',
      subheadline: 'Everything you need for a great experience',
      tiers: pricingTiers,
    },
  },
  {
    id: 'private-events',
    type: 'private-events',
    enabled: true,
    settings: privateEventsContent,
  },
  {
    id: 'studio-vibe',
    type: 'studio-vibe',
    enabled: false,
    settings: studioVibeContent,
  },
  {
    id: 'faq',
    type: 'faq',
    enabled: true,
    settings: {
      headline: 'Frequently Asked Questions',
      items: faqItems,
    },
  },
];

// Export all content for easy access
export const landingContent = {
  site: siteConfig,
  nav: navLinks,
  hero: heroContent,
  offerings: offeringsContent,
  classes: featuredClasses,
  schedule: scheduleItems,
  pricing: pricingTiers,
  privateEvents: privateEventsContent,
  studioVibe: studioVibeContent,
  gallery: galleryContent,
  faq: faqItems,
  footer: footerContent,
  sections: sectionsConfig,
};

