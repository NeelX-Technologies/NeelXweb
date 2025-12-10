export const servicesData = [
  {
    id: 1,
    slug: 'website-development',
    title: 'Website Development',
    shortDescription: 'Custom, scalable, and high-performance websites tailored to your business needs.',
    description: 'We build modern, responsive websites using the latest technologies. Our development process ensures your website is fast, secure, and scalable to grow with your business.',
    icon: '💻',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&auto=format&fit=crop',
    features: [
      'Custom Web Applications',
      'E-commerce Solutions',
      'Content Management Systems',
      'Progressive Web Apps (PWA)',
      'API Integration',
      'Database Design & Management',
      'Responsive Design',
      'Performance Optimization'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'PostgreSQL', 'Next.js', 'Express.js'],
    benefits: [
      'Scalable architecture that grows with your business',
      'Fast loading times for better user experience',
      'SEO-friendly code structure',
      'Cross-browser compatibility',
      'Mobile-first responsive design',
      'Secure and reliable infrastructure'
    ],
    process: [
      {
        step: 1,
        title: 'Discovery & Planning',
        description: 'We analyze your requirements and create a detailed project roadmap.'
      },
      {
        step: 2,
        title: 'Design & Prototyping',
        description: 'Create wireframes and interactive prototypes for your approval.'
      },
      {
        step: 3,
        title: 'Development',
        description: 'Build your website using best practices and latest technologies.'
      },
      {
        step: 4,
        title: 'Testing & Launch',
        description: 'Rigorous testing followed by smooth deployment to production.'
      },
      {
        step: 5,
        title: 'Support & Maintenance',
        description: 'Ongoing support to keep your website running perfectly.'
      }
    ],
    pricing: {
      basic: 1499,
      standard: 2999,
      premium: 5999
    },
    deliveryTime: '4-8 weeks',
    category: 'Development'
  },
  {
    id: 2,
    slug: 'website-design',
    title: 'Website Design',
    shortDescription: 'Beautiful, user-friendly designs that convert visitors into customers.',
    description: 'Our design team creates stunning, intuitive interfaces that engage users and drive conversions. We focus on user experience, modern aesthetics, and brand consistency.',
    icon: '🎨',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&auto=format&fit=crop',
    features: [
      'UI/UX Design',
      'Brand Identity Design',
      'Wireframing & Prototyping',
      'Responsive Layouts',
      'Interactive Animations',
      'Design Systems',
      'Landing Page Design',
      'Mobile App Design'
    ],
    technologies: ['Figma', 'Adobe XD', 'Sketch', 'Adobe Illustrator', 'Adobe Photoshop'],
    benefits: [
      'Increased user engagement and conversion rates',
      'Professional brand image',
      'Consistent design language across all platforms',
      'Mobile-optimized user experience',
      'Accessibility-focused design',
      'Modern and trending design patterns'
    ],
    process: [
      {
        step: 1,
        title: 'Research & Analysis',
        description: 'Study your brand, competitors, and target audience.'
      },
      {
        step: 2,
        title: 'Wireframing',
        description: 'Create layout structure and user flow diagrams.'
      },
      {
        step: 3,
        title: 'Visual Design',
        description: 'Design beautiful interfaces with your brand colors and style.'
      },
      {
        step: 4,
        title: 'Prototyping',
        description: 'Build interactive prototypes for testing and feedback.'
      },
      {
        step: 5,
        title: 'Handoff & Support',
        description: 'Deliver design files and support during development.'
      }
    ],
    pricing: {
      basic: 999,
      standard: 1999,
      premium: 3999
    },
    deliveryTime: '2-4 weeks',
    category: 'Design'
  },
  {
    id: 3,
    slug: 'seo-optimization',
    title: 'SEO Optimization',
    shortDescription: 'Improve your search rankings and drive organic traffic to your website.',
    description: 'Our SEO experts use proven strategies to improve your website\'s visibility in search engines. We focus on both on-page and off-page optimization to deliver measurable results.',
    icon: '🚀',
    image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&auto=format&fit=crop',
    features: [
      'Keyword Research & Analysis',
      'On-Page SEO Optimization',
      'Technical SEO Audit',
      'Link Building Strategy',
      'Content Optimization',
      'Local SEO',
      'SEO Performance Tracking',
      'Competitor Analysis'
    ],
    technologies: ['Google Analytics', 'Google Search Console', 'SEMrush', 'Ahrefs', 'Moz'],
    benefits: [
      'Higher search engine rankings',
      'Increased organic traffic',
      'Better user experience',
      'Improved website authority',
      'Higher conversion rates',
      'Long-term sustainable growth'
    ],
    process: [
      {
        step: 1,
        title: 'SEO Audit',
        description: 'Comprehensive analysis of your current SEO performance.'
      },
      {
        step: 2,
        title: 'Strategy Development',
        description: 'Create customized SEO strategy based on your goals.'
      },
      {
        step: 3,
        title: 'Implementation',
        description: 'Execute on-page and technical SEO improvements.'
      },
      {
        step: 4,
        title: 'Content & Links',
        description: 'Optimize content and build quality backlinks.'
      },
      {
        step: 5,
        title: 'Monitor & Optimize',
        description: 'Track results and continuously improve performance.'
      }
    ],
    pricing: {
      basic: 799,
      standard: 1499,
      premium: 2999
    },
    deliveryTime: 'Ongoing (3-6 months)',
    category: 'Marketing'
  },
  {
    id: 4,
    slug: 'digital-marketing',
    title: 'Digital Marketing',
    shortDescription: 'Comprehensive digital marketing strategies to grow your online presence.',
    description: 'We create and execute data-driven digital marketing campaigns across multiple channels to maximize your ROI and achieve your business goals.',
    icon: '📊',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop',
    features: [
      'Social Media Marketing',
      'Pay-Per-Click (PPC) Advertising',
      'Email Marketing Campaigns',
      'Content Marketing',
      'Conversion Rate Optimization',
      'Marketing Analytics',
      'Influencer Marketing',
      'Brand Strategy'
    ],
    technologies: ['Google Ads', 'Facebook Ads', 'Mailchimp', 'HubSpot', 'Hootsuite', 'Buffer'],
    benefits: [
      'Reach your target audience effectively',
      'Measurable ROI on marketing spend',
      'Build brand awareness and loyalty',
      'Generate quality leads',
      'Increase sales and revenue',
      'Data-driven decision making'
    ],
    process: [
      {
        step: 1,
        title: 'Market Research',
        description: 'Analyze your market, audience, and competitors.'
      },
      {
        step: 2,
        title: 'Strategy Planning',
        description: 'Develop comprehensive marketing strategy and campaigns.'
      },
      {
        step: 3,
        title: 'Campaign Creation',
        description: 'Design and launch marketing campaigns across channels.'
      },
      {
        step: 4,
        title: 'Optimization',
        description: 'Monitor performance and optimize for better results.'
      },
      {
        step: 5,
        title: 'Reporting',
        description: 'Regular reports with insights and recommendations.'
      }
    ],
    pricing: {
      basic: 999,
      standard: 2499,
      premium: 4999
    },
    deliveryTime: 'Ongoing (Monthly)',
    category: 'Marketing'
  },
  {
    id: 5,
    slug: 'website-maintenance',
    title: 'Website Maintenance',
    shortDescription: 'Keep your website secure, updated, and performing at its best.',
    description: 'Our maintenance services ensure your website stays secure, fast, and up-to-date. We handle everything from security updates to performance optimization.',
    icon: '🔧',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=800&auto=format&fit=crop',
    features: [
      'Regular Security Updates',
      'Performance Monitoring',
      'Backup & Recovery',
      'Bug Fixes & Troubleshooting',
      'Content Updates',
      'Plugin/Software Updates',
      'Uptime Monitoring',
      'Security Scanning'
    ],
    technologies: ['Cloudflare', 'New Relic', 'Pingdom', 'Git', 'AWS', 'Docker'],
    benefits: [
      'Maximum uptime and reliability',
      'Protection against security threats',
      'Optimal website performance',
      'Peace of mind with regular backups',
      'Quick resolution of issues',
      'Focus on your business, not technical issues'
    ],
    process: [
      {
        step: 1,
        title: 'Initial Assessment',
        description: 'Evaluate your website\'s current state and needs.'
      },
      {
        step: 2,
        title: 'Maintenance Plan',
        description: 'Create customized maintenance schedule and checklist.'
      },
      {
        step: 3,
        title: 'Regular Updates',
        description: 'Perform scheduled maintenance tasks and updates.'
      },
      {
        step: 4,
        title: 'Monitoring',
        description: 'Continuously monitor performance and security.'
      },
      {
        step: 5,
        title: 'Monthly Reports',
        description: 'Detailed reports on maintenance activities and status.'
      }
    ],
    pricing: {
      basic: 299,
      standard: 599,
      premium: 999
    },
    deliveryTime: 'Ongoing (Monthly)',
    category: 'Support'
  },
  {
    id: 6,
    slug: 'ai-chatbot-development',
    title: 'AI Chatbot Development',
    shortDescription: 'Intelligent chatbots that automate customer service and boost engagement 24/7.',
    description: 'We develop advanced AI-powered chatbots that understand natural language, provide instant responses, and learn from interactions. Our chatbots integrate seamlessly with your website and business tools to enhance customer experience and reduce support costs.',
    icon: '🤖',
    image: 'https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=800&auto=format&fit=crop',
    features: [
      'Natural Language Processing (NLP)',
      'Multi-language Support',
      'Custom Training & Knowledge Base',
      'CRM & Database Integration',
      'Analytics & Insights Dashboard',
      'WhatsApp & Social Media Integration',
      'Voice-enabled Chatbots',
      'Automated Lead Generation'
    ],
    technologies: ['OpenAI', 'DialogFlow', 'Python', 'TensorFlow', 'Rasa', 'LangChain'],
    benefits: [
      '24/7 customer support without human intervention',
      'Reduce support costs by up to 70%',
      'Instant responses improve customer satisfaction',
      'Qualify and capture leads automatically',
      'Handle multiple conversations simultaneously',
      'Continuous learning and improvement'
    ],
    process: [
      {
        step: 1,
        title: 'Requirement Analysis',
        description: 'Understand your business needs, use cases, and customer queries.'
      },
      {
        step: 2,
        title: 'Design Conversation Flow',
        description: 'Create dialogue flows and user journey maps for natural interactions.'
      },
      {
        step: 3,
        title: 'AI Training',
        description: 'Train the chatbot with your business data and industry knowledge.'
      },
      {
        step: 4,
        title: 'Integration & Testing',
        description: 'Integrate with your systems and conduct thorough testing.'
      },
      {
        step: 5,
        title: 'Deployment & Optimization',
        description: 'Launch the chatbot and continuously optimize based on performance data.'
      }
    ],
    pricing: {
      basic: 2499,
      standard: 4999,
      premium: 8999
    },
    deliveryTime: '3-6 weeks',
    category: 'AI & Automation'
  }
];

export const getServiceBySlug = (slug) => {
  return servicesData.find(service => service.slug === slug);
};

export const getServicesByCategory = (category) => {
  return servicesData.filter(service => service.category === category);
};
