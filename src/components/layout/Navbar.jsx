import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaBars, 
  FaTimes, 
  FaChevronDown,
  FaPhone,
  FaEnvelope,
  FaMoon,
  FaSun
} from 'react-icons/fa';
import { useTheme } from '../../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const { isDarkMode, toggleTheme } = useTheme();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services', hasDropdown: true },
    // { name: 'Pricing', path: '/pricing' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About Us', path: '/about' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const serviceLinks = [
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Website Design', path: '/services/website-design' },
    { name: 'SEO Optimization', path: '/services/seo-optimization' },
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Website Maintenance', path: '/services/website-maintenance' },
  ];

  return (
    <>
      {/* Top Bar */}
      {/* <div className="bg-dark-900 dark:bg-dark-950 text-white py-2 hidden md:block">
        <div className="container-custom">
          <div className="flex justify-between items-center text-sm">
            <div className="flex gap-6">
              <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <FaPhone className="text-xs" />
                <span>+1 (234) 567-890</span>
              </a>
              <a href="mailto:info@neelx.com" className="flex items-center gap-2 hover:text-primary-400 transition-colors">
                <FaEnvelope className="text-xs" />
                <span>info@neelx.com</span>
              </a>
            </div>
            <div className="flex gap-4">
              <Link to="/careers" className="hover:text-primary-400 transition-colors">Careers</Link>
              <Link to="/faq" className="hover:text-primary-400 transition-colors">FAQ</Link>
            </div>
          </div>
        </div>
      </div> */}

      {/* Main Navbar */}
      <nav 
        className={`sticky top-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'glass py-2 shadow-premium' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container-custom">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center group">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center gap-3"
              >
                <div className="relative">
                  <img 
                    src="/neelX.jpeg" 
                    alt="NeelX Technologies" 
                    className="w-11 h-11 rounded-xl object-cover shadow-lg group-hover:rotate-6 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 rounded-xl ring-1 ring-inset ring-black/10 dark:ring-white/10" />
                </div>
                <div>
                  <h1 className="text-2xl font-black tracking-tighter text-dark-900 dark:text-white flex items-center">
                    NEEL<span className="text-primary-600">X</span>
                  </h1>
                  <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-primary-600 dark:text-primary-400 -mt-1">
                    Technologies
                  </p>
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <div key={link.path} className="relative group">
                  {link.hasDropdown ? (
                    <>
                      <NavLink
                        to={link.path}
                        className={({ isActive }) =>
                          `relative flex items-center gap-1 font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                            isActive 
                              ? 'text-primary-600' 
                              : 'text-dark-700 dark:text-dark-300 hover:text-primary-600'
                          }`
                        }
                      >
                        {link.name}
                        <FaChevronDown className="text-[10px]" />
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 group-hover:w-full" />
                      </NavLink>
                      
                      {/* Dropdown Menu */}
                      <div className="absolute left-0 top-full mt-2 w-64 glass dark:glass-dark rounded-xl shadow-premium opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-500 transform translate-y-4 group-hover:translate-y-0 overflow-hidden">
                        <div className="py-3">
                          {serviceLinks.map((service) => (
                            <Link
                              key={service.path}
                              to={service.path}
                              className="block px-6 py-3 text-sm font-semibold text-dark-700 dark:text-dark-200 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 transition-all"
                            >
                              {service.name}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </>
                  ) : (
                    <NavLink
                      to={link.path}
                      className={({ isActive }) =>
                        `relative font-bold text-sm uppercase tracking-wider transition-all duration-300 ${
                          isActive 
                            ? 'text-primary-600' 
                            : 'text-dark-700 dark:text-dark-300 hover:text-primary-600'
                        }`
                      }
                    >
                      {link.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-600 transition-all duration-300 hover:w-full group-hover:w-full" />
                    </NavLink>
                  )}
                </div>
              ))}
              
              {/* Dark Mode Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-dark-100 dark:bg-dark-700 text-dark-900 dark:text-white hover:bg-dark-200 dark:hover:bg-dark-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <FaSun className="text-lg" /> : <FaMoon className="text-lg" />}
              </button>
              
              <Link to="/order" className="btn btn-primary">
                Get Started
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg bg-dark-100 dark:bg-dark-700 text-dark-900 dark:text-white"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? <FaSun /> : <FaMoon />}
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-dark-900 dark:text-white text-2xl p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes /> : <FaBars />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white dark:bg-dark-900 border-t dark:border-dark-700"
            >
              <div className="container-custom py-4">
                <div className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <div key={link.path}>
                      {link.hasDropdown ? (
                        <>
                          <button
                            onClick={() => setIsServicesOpen(!isServicesOpen)}
                            className="flex items-center justify-between w-full font-medium text-dark-700 dark:text-dark-200 hover:text-primary-600 transition-colors"
                          >
                            {link.name}
                            <FaChevronDown 
                              className={`text-xs transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                            />
                          </button>
                          
                          <AnimatePresence>
                            {isServicesOpen && (
                              <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                exit={{ opacity: 0, height: 0 }}
                                className="ml-4 mt-2 flex flex-col gap-2"
                              >
                                {serviceLinks.map((service) => (
                                  <Link
                                    key={service.path}
                                    to={service.path}
                                    className="text-dark-600 dark:text-dark-300 hover:text-primary-600 transition-colors py-1"
                                  >
                                    {service.name}
                                  </Link>
                                ))}
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </>
                      ) : (
                        <NavLink
                          to={link.path}
                          className={({ isActive }) =>
                            `font-medium transition-colors ${
                              isActive ? 'text-primary-600' : 'text-dark-700 dark:text-dark-200 hover:text-primary-600'
                            }`
                          }
                        >
                          {link.name}
                        </NavLink>
                      )}
                    </div>
                  ))}
                  
                  <Link to="/order" className="btn btn-primary w-full">
                    Get Started
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
