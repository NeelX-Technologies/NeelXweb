import { Link } from 'react-router-dom';
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaPhone,
  FaEnvelope,
  FaArrowRight,
  FaMapMarkerAlt
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
    <footer className="bg-dark-950 text-white relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary-600/10 blur-[120px] rounded-full pointer-events-none" />

      {/* Main Footer */}
      <div className="container-custom relative z-10 pt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-8">
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src="/neelX.jpeg"
                  alt="NeelX Technologies"
                  className="w-12 h-12 rounded-xl object-cover shadow-2xl group-hover:rotate-6 transition-transform duration-500"
                />
                <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-white/10" />
              </div>
              <div>
                <h3 className="text-2xl font-black tracking-tighter">
                  NEEL<span className="text-primary-500">X</span>
                </h3>
                <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary-500 -mt-1">Technologies</p>
              </div>
            </Link>

            <p className="text-dark-400 leading-relaxed">
              Empowering businesses through innovative digital solutions. We turn your vision into high-performance reality with cutting-edge technology and creative design.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-11 h-11 bg-dark-900 border border-white/5 rounded-xl flex items-center justify-center hover:bg-primary-600 hover:border-primary-500 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="text-lg group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-600 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-dark-400 hover:text-white transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Our Services
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-600 rounded-full" />
            </h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service.path}>
                  <Link
                    to={service.path}
                    className="text-dark-400 hover:text-white transition-all flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-8 relative inline-block">
              Get in Touch
              <span className="absolute -bottom-2 left-0 w-8 h-1 bg-primary-600 rounded-full" />
            </h4>
            <ul className="space-y-6">
              <li>
                <a
                  href="tel:+919664078862"
                  className="flex items-center gap-4 text-dark-400 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 bg-dark-900 border border-white/5 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <FaPhone className="text-sm" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-dark-500">Call Us</p>
                    <p className="font-semibold">+91 96640 78862</p>
                  </div>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@neelxtechnologies.com"
                  className="flex items-center gap-4 text-dark-400 hover:text-white transition-all group"
                >
                  <div className="w-10 h-10 bg-dark-900 border border-white/5 rounded-lg flex items-center justify-center group-hover:bg-primary-600 transition-colors">
                    <FaEnvelope className="text-sm" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-dark-500">Email Us</p>
                    <p className="font-semibold">contact@neelxtechnologies.com</p>
                  </div>
                </a>
              </li>
              <li>
                <div className="flex items-center gap-4 text-dark-400 group">
                  <div className="w-10 h-10 bg-dark-900 border border-white/5 rounded-lg flex items-center justify-center">
                    <FaMapMarkerAlt className="text-sm text-primary-500" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest font-bold text-dark-500">Our Location</p>
                    <p className="font-semibold">Jaipur | Neemrana, Rajasthan</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-dark-500 text-sm font-medium">
            © {currentYear} Neel<span className="text-primary-500">X</span> Technologies. Crafted with precision.
          </p>

          <div className="flex gap-8">
            {legalLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-dark-500 hover:text-primary-500 text-xs font-bold uppercase tracking-widest transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>

  );
};

export default Footer;
