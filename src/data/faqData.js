export const faqData = [
  {
    id: 1,
    category: 'General',
    question: 'What services does NeelX Technologies offer?',
    answer: 'We offer a comprehensive range of web services including website development, website design, SEO optimization, digital marketing, and website maintenance. Our team specializes in creating custom solutions tailored to your specific business needs.'
  },
  {
    id: 2,
    category: 'General',
    question: 'How long does it take to build a website?',
    answer: 'The timeline varies depending on the project complexity. A basic website typically takes 2-4 weeks, while more complex projects with custom features can take 6-12 weeks. We provide a detailed timeline during the consultation phase.'
  },
  {
    id: 3,
    category: 'General',
    question: 'Do you work with clients globally?',
    answer: 'Yes! We work with clients worldwide. Our team is experienced in remote collaboration and we use modern communication tools to ensure seamless project management regardless of your location.'
  },
  {
    id: 4,
    category: 'Pricing',
    question: 'How much does a website cost?',
    answer: 'Our pricing varies based on your requirements. Basic websites start at ₹499, professional websites at ₹1,499, and enterprise solutions at ₹3,999. We offer custom quotes for unique projects. Contact us for a detailed proposal.'
  },
  {
    id: 5,
    category: 'Pricing',
    question: 'Do you offer payment plans?',
    answer: 'Yes, we offer flexible payment plans for larger projects. Typically, we require a 50% deposit to start the project and the remaining 50% upon completion. Custom payment schedules can be arranged for enterprise clients.'
  },
  {
    id: 6,
    category: 'Pricing',
    question: 'What is included in the maintenance plans?',
    answer: 'Our maintenance plans include security updates, backups, uptime monitoring, plugin/theme updates, technical support, and content updates. The specific features vary by plan tier - Basic, Standard, or Premium.'
  },
  {
    id: 7,
    category: 'Process',
    question: 'What is your development process?',
    answer: 'Our process includes: 1) Discovery & Planning, 2) Design & Prototyping, 3) Development, 4) Testing & Quality Assurance, 5) Launch, and 6) Ongoing Support. We keep you involved at every stage with regular updates and feedback sessions.'
  },
  {
    id: 8,
    category: 'Process',
    question: 'Can I see the progress during development?',
    answer: 'Absolutely! We provide access to a staging environment where you can review the work in progress. We also schedule regular check-ins and provide weekly progress reports to keep you informed.'
  },
  {
    id: 9,
    category: 'Process',
    question: 'Do I need to provide content for my website?',
    answer: 'While we can help with content creation, providing your own content ensures accuracy and authenticity. If needed, we offer professional copywriting services as an add-on to help create compelling content for your website.'
  },
  {
    id: 10,
    category: 'Technical',
    question: 'Will my website be mobile-friendly?',
    answer: 'Yes! All our websites are fully responsive and optimized for all devices - smartphones, tablets, and desktops. We follow mobile-first design principles to ensure the best user experience across all screen sizes.'
  },
  {
    id: 11,
    category: 'Technical',
    question: 'Will my website be SEO optimized?',
    answer: 'Yes, all our websites include basic SEO optimization including meta tags, proper heading structure, fast loading times, and mobile responsiveness. We also offer advanced SEO packages for comprehensive optimization.'
  },
  {
    id: 12,
    category: 'Technical',
    question: 'What platforms/technologies do you use?',
    answer: 'We work with modern technologies including React, Next.js, Node.js, WordPress, Shopify, and more. We choose the best technology stack based on your specific requirements, budget, and long-term goals.'
  },
  {
    id: 13,
    category: 'Technical',
    question: 'Will I be able to update the website myself?',
    answer: 'Yes! We provide user-friendly content management systems (CMS) that allow you to easily update content, images, and other elements. We also provide training and documentation to help you manage your website.'
  },
  {
    id: 14,
    category: 'Support',
    question: 'Do you provide ongoing support after launch?',
    answer: 'Yes, we offer various support and maintenance plans to keep your website running smoothly. This includes security updates, bug fixes, backups, and technical support. All projects include 30-90 days of free support post-launch.'
  },
  {
    id: 15,
    category: 'Support',
    question: 'What if I need changes after the website is live?',
    answer: 'Minor adjustments during the warranty period are covered. For larger changes or new features, we provide competitive hourly rates or can create a custom package based on your needs.'
  },
  {
    id: 16,
    category: 'Support',
    question: 'How quickly do you respond to support requests?',
    answer: 'Support response times vary by plan: Basic (24-48 hours), Standard (12-24 hours), and Premium (1-4 hours). Emergency support with priority response is available for Premium plan subscribers.'
  },
  {
    id: 17,
    category: 'SEO & Marketing',
    question: 'How long does it take to see SEO results?',
    answer: 'SEO is a long-term strategy. You may start seeing improvements in 3-6 months, with significant results typically appearing in 6-12 months. The timeline depends on your industry competition and current website status.'
  },
  {
    id: 18,
    category: 'SEO & Marketing',
    question: 'Do you guarantee first page rankings?',
    answer: 'While we cannot guarantee specific rankings (no ethical SEO company can), we use proven strategies to improve your visibility and rankings over time. We focus on sustainable, white-hat SEO techniques that deliver long-term results.'
  },
  {
    id: 19,
    category: 'SEO & Marketing',
    question: 'What digital marketing services do you offer?',
    answer: 'We offer social media marketing, PPC advertising, email marketing, content marketing, influencer marketing, and marketing automation. We create customized strategies based on your goals and target audience.'
  },
  {
    id: 20,
    category: 'Getting Started',
    question: 'How do I get started?',
    answer: 'Simply contact us through our contact form, email, or phone. We\'ll schedule a free consultation to discuss your needs, goals, and budget. After that, we\'ll provide a detailed proposal and timeline for your project.'
  }
];

export const faqCategories = [
  'All',
  'General',
  'Pricing',
  'Process',
  'Technical',
  'Support',
  'SEO & Marketing',
  'Getting Started'
];

export const getFaqsByCategory = (category) => {
  if (category === 'All') return faqData;
  return faqData.filter(faq => faq.category === category);
};
