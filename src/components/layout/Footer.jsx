import { Link } from 'react-router-dom';
import { 
  FaFacebookF, 
  FaLinkedinIn, 
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaArrowRight
} from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Blog', path: '/blog' },
  ];

  const services = [
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Website Design', path: '/services/website-design' },
    { name: 'SEO Optimization', path: '/services/seo-optimization' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Website Maintenance', path: '/services/website-maintenance' },
    { name: 'AI Chatbot Development', path: '/services/ai-chatbot-development' },
  ];

  const legalLinks = [
    { name: 'Terms & Conditions', path: '/terms' },
    { name: 'Privacy Policy', path: '/privacy' },
    { name: 'Refund Policy', path: '/refund' },
    { name: 'FAQ', path: '/faq' },
  ];

  const socialLinks = [
    { icon: FaFacebookF, href: 'https://www.facebook.com/share/1BnxZKtbbW/', label: 'Facebook' },
    { icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/neelxtechnologies/posts/?feedView=all', label: 'LinkedIn' },
    { icon: FaInstagram, href: 'https://www.instagram.com/neelxtechnologies?utm_source=qr&igsh=bDRtem04dHNwNGp5', label: 'Instagram' },
  ];

  return (
    <footer className="bg-dark-900 dark:bg-black text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Company Info */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <img 
                src="/neelX.jpeg" 
                alt="NeelX Technologies" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <div>
                <h3 className="text-2xl font-bold">
                  Neel<span className="text-primary-400">X</span>
                </h3>
                <p className="text-xs text-dark-400 -mt-1">Technologies</p>
              </div>
            </Link>
            
            <p className="text-dark-300 mb-6">
              We provide cutting-edge web solutions to help your business grow online. From design to deployment, we've got you covered.
            </p>
            
            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-dark-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-dark-300 hover:text-primary-400 transition-colors flex items-center gap-2 group"
                  >
                    <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+919664078862"
                  className="flex items-start gap-3 text-dark-300 hover:text-primary-400 transition-colors"
                >
                  <FaPhone className="text-primary-400 mt-1" />
                  <div>
                    <p className="font-medium text-white">Phone</p>
                    <p>+91 96640 78862</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@neelxtechnologies.com"
                  className="flex items-start gap-3 text-dark-300 hover:text-primary-400 transition-colors"
                >
                  <FaEnvelope className="text-primary-400 mt-1" />
                  <div>
                    <p className="font-medium text-white">Email</p>
                    <p>contact@neelxtechnologies.com</p>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-dark-800">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-dark-400 text-sm text-center md:text-left">
              © {currentYear} NeelX Technologies. All rights reserved.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              {legalLinks.map((link, index) => (
                <span key={link.path} className="flex items-center gap-6">
                  <Link
                    to={link.path}
                    className="text-dark-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </Link>
                  {index < legalLinks.length - 1 && (
                    <span className="text-dark-700">|</span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
