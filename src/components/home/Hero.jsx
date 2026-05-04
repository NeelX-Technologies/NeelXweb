import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPlay, FaWhatsapp } from 'react-icons/fa';
import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-20 overflow-hidden bg-white dark:bg-dark-950">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-primary-500/10 to-transparent blur-3xl" />
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-radial from-secondary-500/10 to-transparent blur-3xl" />
        <div className="absolute inset-0 bg-grid opacity-[0.2] dark:opacity-[0.1]" />
      </div>

      <div className="container-custom relative z-10 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/30 border border-primary-100 dark:border-primary-800 text-primary-700 dark:text-primary-300 font-medium text-sm mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-500"></span>
              </span>
              Innovating the Digital Frontier
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 leading-[1.1] tracking-tight text-dark-900 dark:text-white"
            >
              Building Digital <br />
              <span className="text-gradient">Experiences</span> That Matter
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-dark-600 dark:text-dark-300 mb-10 leading-relaxed max-w-xl"
            >
              NeelX Technologies transforms complex business challenges into seamless digital solutions. We combine strategy, design, and technology to help your brand thrive.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-5"
            >
              <Link to="/order">
                <button className="btn btn-primary group">
                  Get Started
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link to="/services">
                <button className="btn btn-secondary">
                  Our Expertise
                </button>
              </Link>
            </motion.div>

            {/* Trusted By / Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="mt-16 pt-10 border-t border-dark-100 dark:border-dark-800 flex items-center gap-10"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-900 overflow-hidden bg-dark-200">
                    <img src={`https://i.pravatar.cc/100?u=${i}`} alt="User" />
                  </div>
                ))}
                <div className="w-10 h-10 rounded-full border-2 border-white dark:border-dark-900 bg-primary-600 flex items-center justify-center text-white text-xs font-bold">
                  150+
                </div>
              </div>
              <div>
                <p className="text-dark-900 dark:text-white font-bold leading-none mb-1">Trusted by 150+ Companies</p>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <span key={i} className="text-yellow-400 text-sm">★</span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative z-10 w-full aspect-square rounded-[3rem] overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent transition-colors duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" 
                alt="Digital Innovation" 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>

            {/* Floating Glass Cards */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-8 -right-8 glass dark:glass-dark p-6 rounded-2xl shadow-premium z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/50 rounded-xl flex items-center justify-center text-primary-600">
                  <FaArrowRight className="-rotate-45" />
                </div>
                <div>
                  <p className="text-dark-900 dark:text-white font-bold leading-none mb-1">Growth</p>
                  <p className="text-dark-500 dark:text-dark-400 text-xs">Analytics Driven</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 20, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-8 -left-8 glass dark:glass-dark p-6 rounded-2xl shadow-premium z-20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900/50 rounded-xl flex items-center justify-center text-secondary-600">
                  <FaPlay className="ml-1" />
                </div>
                <div>
                  <p className="text-dark-900 dark:text-white font-bold leading-none mb-1">Strategy</p>
                  <p className="text-dark-500 dark:text-dark-400 text-xs">Future Ready</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <motion.a
        href="https://wa.me/918003310994?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] transition-all duration-300 hover:scale-110 active:scale-95 group"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <FaWhatsapp className="text-3xl" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-white dark:bg-dark-800 text-dark-900 dark:text-white px-4 py-2 rounded-lg text-sm font-bold shadow-xl opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat with us
        </span>
      </motion.a>
    </section>
  );
};

export default Hero;
