export const pricingPlans = [
  {
    id: 1,
    name: 'Starter',
    price: 499,
    period: 'one-time',
    description: 'Perfect for small businesses and startups getting online',
    popular: false,
    features: [
      'Up to 5 pages',
      'Responsive design',
      'Basic SEO optimization',
      'Contact form integration',
      'Social media integration',
      '30 days support',
      'Mobile-friendly design',
      'Fast loading speed'
    ],
    notIncluded: [
      'E-commerce functionality',
      'Advanced animations',
      'Custom CMS',
      'Priority support'
    ],
    cta: 'Get Started',
    recommended: false
  },
  {
    id: 2,
    name: 'Professional',
    price: 1499,
    period: 'one-time',
    description: 'Ideal for growing businesses needing more features',
    popular: true,
    features: [
      'Up to 15 pages',
      'Custom responsive design',
      'Advanced SEO optimization',
      'Blog/News section',
      'Contact & inquiry forms',
      'Social media integration',
      'Email newsletter integration',
      '90 days support',
      'Content management system',
      'Google Analytics setup',
      'Performance optimization',
      'Security features'
    ],
    notIncluded: [
      'E-commerce functionality',
      'Custom integrations'
    ],
    cta: 'Get Started',
    recommended: true
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 3999,
    period: 'one-time',
    description: 'Complete solution for large businesses and e-commerce',
    popular: false,
    features: [
      'Unlimited pages',
      'Custom design & development',
      'Complete SEO package',
      'E-commerce functionality',
      'Payment gateway integration',
      'Advanced animations',
      'Custom CMS',
      'Multi-language support',
      'API integrations',
      '6 months priority support',
      'Performance optimization',
      'Advanced security',
      'Regular backups',
      'Training & documentation',
      'Dedicated account manager'
    ],
    notIncluded: [],
    cta: 'Contact Sales',
    recommended: false
  }
];

export const maintenancePlans = [
  {
    id: 1,
    name: 'Basic Care',
    price: 199,
    period: 'month',
    description: 'Essential maintenance for keeping your site running',
    features: [
      'Weekly security updates',
      'Monthly backups',
      'Uptime monitoring',
      'Plugin/theme updates',
      'Basic support (email)',
      '2 hours of changes/updates',
      'Performance monitoring',
      'Monthly report'
    ],
    notIncluded: [
      'Content updates',
      'Priority support',
      'Emergency support'
    ]
  },
  {
    id: 2,
    name: 'Standard Care',
    price: 399,
    period: 'month',
    description: 'Comprehensive maintenance with priority support',
    popular: true,
    features: [
      'Daily security updates',
      'Weekly backups',
      '24/7 uptime monitoring',
      'Plugin/theme updates',
      'Priority support',
      '5 hours of changes/updates',
      'Content updates',
      'Performance optimization',
      'SEO monitoring',
      'Bi-weekly reports',
      'Emergency support'
    ],
    notIncluded: [
      'Dedicated account manager'
    ]
  },
  {
    id: 3,
    name: 'Premium Care',
    price: 799,
    period: 'month',
    description: 'Complete website care with dedicated support',
    features: [
      'Real-time security monitoring',
      'Daily backups',
      '24/7 monitoring & alerts',
      'All updates & maintenance',
      'Premium priority support',
      '10 hours of changes/updates',
      'Unlimited content updates',
      'Performance optimization',
      'SEO & analytics reporting',
      'Weekly reports',
      'Emergency support (1hr response)',
      'Dedicated account manager',
      'Monthly strategy calls'
    ],
    notIncluded: []
  }
];

export const customPackages = [
  {
    id: 1,
    name: 'SEO Package',
    startingPrice: 799,
    period: 'month',
    description: 'Boost your search rankings',
    icon: '🚀'
  },
  {
    id: 2,
    name: 'Digital Marketing',
    startingPrice: 999,
    period: 'month',
    description: 'Complete marketing solution',
    icon: '📊'
  },
  {
    id: 3,
    name: 'E-commerce Setup',
    startingPrice: 2499,
    period: 'one-time',
    description: 'Start selling online',
    icon: '🛒'
  },
  {
    id: 4,
    name: 'Website Redesign',
    startingPrice: 1999,
    period: 'one-time',
    description: 'Modernize your website',
    icon: '✨'
  }
];
