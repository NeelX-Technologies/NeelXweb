export const portfolioData = [
  {
    id: 1,
    title: 'TechStart E-commerce Platform',
    category: 'E-commerce',
    client: 'TechStart Inc.',
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?w=800&auto=format&fit=crop',
    description: 'A modern e-commerce platform built with React and Node.js, featuring real-time inventory management and seamless payment integration.',
    services: ['Web Development', 'UI/UX Design', 'E-commerce'],
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    results: [
      '250% increase in online sales',
      '60% reduction in cart abandonment',
      '4.8/5 customer satisfaction rating'
    ],
    link: '#',
    year: 2024
  },
  {
    id: 2,
    title: 'HealthCare Pro Medical Portal',
    category: 'Healthcare',
    client: 'HealthCare Pro',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop',
    description: 'A comprehensive patient management system with appointment booking, telemedicine capabilities, and secure health records.',
    services: ['Web Development', 'Custom Software', 'Security'],
    technologies: ['Next.js', 'PostgreSQL', 'AWS', 'WebRTC'],
    results: [
      '5000+ active patients',
      '90% appointment completion rate',
      'HIPAA compliant infrastructure'
    ],
    link: '#',
    year: 2024
  },
  {
    id: 3,
    title: 'FoodHub Restaurant Website',
    category: 'Restaurant',
    client: 'FoodHub Restaurants',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&auto=format&fit=crop',
    description: 'An elegant restaurant website with online ordering, table reservations, and menu management system.',
    services: ['Web Design', 'Web Development', 'SEO'],
    technologies: ['React', 'Firebase', 'Google Maps API'],
    results: [
      '180% increase in online orders',
      '45% growth in table bookings',
      'Top 3 local search rankings'
    ],
    link: '#',
    year: 2023
  },
  {
    id: 4,
    title: 'EduLearn Online Platform',
    category: 'Education',
    client: 'EduLearn Academy',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&auto=format&fit=crop',
    description: 'A comprehensive learning management system with video courses, quizzes, and student progress tracking.',
    services: ['Web Development', 'LMS', 'Video Streaming'],
    technologies: ['React', 'Node.js', 'MySQL', 'Vimeo API'],
    results: [
      '10,000+ enrolled students',
      '95% course completion rate',
      '4.9/5 platform rating'
    ],
    link: '#',
    year: 2023
  },
  {
    id: 5,
    title: 'RealEstate Finder Portal',
    category: 'Real Estate',
    client: 'Prime Properties',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop',
    description: 'A feature-rich property listing platform with advanced search filters, virtual tours, and agent management.',
    services: ['Web Development', 'UI/UX Design', 'SEO'],
    technologies: ['Next.js', 'MongoDB', 'Google Maps', 'Cloudinary'],
    results: [
      '500+ property listings',
      '70% increase in qualified leads',
      '85% mobile user engagement'
    ],
    link: '#',
    year: 2024
  },
  {
    id: 6,
    title: 'FitLife Gym & Fitness',
    category: 'Fitness',
    client: 'FitLife Wellness',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop',
    description: 'A dynamic fitness center website with class schedules, trainer profiles, and membership management.',
    services: ['Web Design', 'Web Development', 'Digital Marketing'],
    technologies: ['React', 'Firebase', 'Stripe', 'Calendly'],
    results: [
      '200% increase in memberships',
      '350+ class bookings per month',
      '92% member retention rate'
    ],
    link: '#',
    year: 2023
  },
  {
    id: 7,
    title: 'TravelWorld Booking Platform',
    category: 'Travel',
    client: 'TravelWorld Tours',
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&auto=format&fit=crop',
    description: 'A comprehensive travel booking platform with package customization, payment processing, and itinerary management.',
    services: ['Web Development', 'Payment Integration', 'SEO'],
    technologies: ['Next.js', 'PostgreSQL', 'Stripe', 'Google Maps'],
    results: [
      '1000+ bookings in 6 months',
      '40% increase in direct bookings',
      'Top 5 travel website in region'
    ],
    link: '#',
    year: 2024
  },
  {
    id: 8,
    title: 'Fashion Boutique Online Store',
    category: 'Fashion',
    client: 'Elegance Boutique',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&auto=format&fit=crop',
    description: 'A stylish e-commerce platform for fashion retail with virtual try-on, size recommendations, and social shopping features.',
    services: ['Web Design', 'E-commerce', 'Digital Marketing'],
    technologies: ['React', 'Shopify', 'Instagram API', 'AI/ML'],
    results: [
      '300% growth in online revenue',
      '50,000+ monthly visitors',
      '4.7/5 customer reviews'
    ],
    link: '#',
    year: 2023
  },
  {
    id: 9,
    title: 'FinanceHub Banking Portal',
    category: 'Finance',
    client: 'SecureBank',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop',
    description: 'A secure online banking platform with account management, bill payments, and investment tracking.',
    services: ['Web Development', 'Security', 'Custom Software'],
    technologies: ['React', 'Node.js', 'PostgreSQL', 'JWT', 'Encryption'],
    results: [
      '50,000+ active users',
      'Zero security breaches',
      '99.9% uptime achievement'
    ],
    link: '#',
    year: 2024
  }
];

export const portfolioCategories = [
  'All',
  'E-commerce',
  'Healthcare',
  'Restaurant',
  'Education',
  'Real Estate',
  'Fitness',
  'Travel',
  'Fashion',
  'Finance'
];

export const getPortfolioByCategory = (category) => {
  if (category === 'All') return portfolioData;
  return portfolioData.filter(item => item.category === category);
};
