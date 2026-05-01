import type { LucideIcon } from 'lucide-react';
import { ShieldCheck, HeartPulse, Car, Award, Search, Briefcase, Stethoscope } from 'lucide-react';

export type InsurancePackageItem = {
  title: string;
  desc: string;
  icon: LucideIcon;
  /** Path after locale, e.g. insurance/solutions/health-wellness */
  href: string;
  image?: string;
  badge?: string;
  duration?: string;
  highlights?: string[];
};

export type InsurancePackageGroup = {
  title: string;
  blurb: string;
  items: InsurancePackageItem[];
};

/** Full catalog — used on /insurance/solutions */
export const INSURANCE_SERVICE_GROUPS: InsurancePackageGroup[] = [
  {
    title: 'Personal Solutions',
    blurb: 'Everyday protection for individuals and families.',
    items: [
      {
        title: 'Motor Private',
        desc: 'Reliable private motor cover with optional add-ons for total peace of mind.',
        icon: Car,
        href: 'insurance/solutions/motor-travel',
      },
      {
        title: 'Travel Insurance',
        desc: 'Protect your trips with emergency medical, baggage, and disruption coverage.',
        icon: HeartPulse,
        href: 'insurance/solutions/motor-travel',
      },
      {
        title: 'Personal Accident',
        desc: 'Financial protection against accidental injury, disability, and related costs.',
        icon: ShieldCheck,
        href: 'insurance/solutions/health-wellness',
      },
    ],
  },
  {
    title: 'Corporate Solutions',
    blurb: 'Risk cover tailored for SMEs and larger organizations.',
    items: [
      {
        title: 'WIBA Insurance',
        desc: 'Cover for work-related injuries and occupational risk across your workforce.',
        icon: Award,
        href: 'insurance/solutions/corporate-health',
      },
      {
        title: 'Professional Liability',
        desc: 'Protect your business against professional errors, omissions, and legal claims.',
        icon: Search,
        href: 'insurance/solutions/professional-liability',
      },
      {
        title: 'Business Assets',
        desc: 'Secure your offices, equipment, and stock against major business disruptions.',
        icon: ShieldCheck,
        href: 'insurance/solutions/business-assets',
      },
    ],
  },
  {
    title: 'Medical Solutions',
    blurb: 'Medical plans designed for families, SMEs, and corporates.',
    items: [
      {
        title: 'Individual & Family Medical',
        desc: 'Flexible medical plans for households with inpatient and outpatient options.',
        icon: HeartPulse,
        href: 'insurance/solutions/health-wellness',
      },
      {
        title: 'SME Medical Cover',
        desc: 'Cost-effective staff medical cover to support small and growing teams.',
        icon: Briefcase,
        href: 'insurance/solutions/corporate-health',
      },
      {
        title: 'Corporate Medical Cover',
        desc: 'Scalable group medical programs for established organizations.',
        icon: Stethoscope,
        href: 'insurance/solutions/corporate-health',
      },
    ],
  },
  {
    title: 'Other Solutions',
    blurb: 'Specialized plans for education, legacy, and custom risk needs.',
    items: [
      {
        title: 'Education Plans',
        desc: 'Build a steady savings and protection plan for future school costs.',
        icon: Briefcase,
        href: 'insurance/solutions/life-legacy',
      },
      {
        title: 'Last Expense Cover',
        desc: 'Prepare families for urgent final-expense obligations without financial strain.',
        icon: ShieldCheck,
        href: 'insurance/solutions/life-legacy',
      },
      {
        title: 'Pension Plans',
        desc: 'Long-term retirement planning options aligned to your income goals.',
        icon: Car,
        href: 'insurance/solutions/life-legacy',
      },
    ],
  },
];

/** Highlight row on /insurance — three most-requested entry points */
export const POPULAR_PACKAGES: InsurancePackageItem[] = [
  {
    title: 'Personal Insurance',
    desc: 'Protect yourself and your family with dependable day-to-day cover options.',
    icon: HeartPulse,
    href: 'insurance/solutions/health-wellness',
    image: '/images/home.png',
    badge: 'Personal',
    duration: '5 Covers',
    highlights: [
      'Motor Private and Travel Insurance',
      'Personal Accident and Domestic Package',
      'Golfers Policy and lifestyle add-ons',
    ],
  },
  {
    title: 'Corporate Insurance',
    desc: 'Comprehensive risk protection built for SMEs, teams, and growing enterprises.',
    icon: Briefcase,
    href: 'insurance/solutions/business-assets',
    image: '/images/guide.png',
    badge: 'Corporate',
    duration: '10 Covers',
    highlights: [
      'WIBA, Marine, Fire and Allied Perils',
      'Liabilities, Engineering, and Bonds',
      'Motor Commercial, Aviation, and more',
    ],
  },
  {
    title: 'Medical Insurance',
    desc: 'Flexible medical plans for individuals, families, SMEs, and corporate teams.',
    icon: Stethoscope,
    href: 'insurance/solutions/health-wellness',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=80',
    badge: 'Medical',
    duration: '3 Covers',
    highlights: [
      'My Afya Shield (Individual & Family)',
      'Fidelity Afya Shield SME',
      'Fidelity Corporate Cover',
    ],
  },
];
