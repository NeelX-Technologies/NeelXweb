import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaEnvelope, FaPhone, FaCalendar, FaArrowRight } from 'react-icons/fa';

const ThankYou = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 flex items-center justify-center py-20">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          {/* Success Icon */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="mb-8"
          >
            <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto shadow-2xl">
              <FaCheckCircle className="text-white text-5xl" />
            </div>
          </motion.div>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-dark-900 dark:text-white mb-4">
              Thank You!
            </h1>
            <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
              Your request has been successfully submitted.
            </p>
          </motion.div>

          {/* Details Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 md:p-12 mb-8"
          >
            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">What Happens Next?</h2>
            
            <div className="space-y-6 text-left">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaEnvelope className="text-primary-600 dark:text-primary-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-900 dark:text-white mb-1">Confirmation Email</h3>
                  <p className="text-dark-600 dark:text-dark-300">
                    You'll receive a confirmation email shortly with your request details.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaPhone className="text-secondary-600 dark:text-secondary-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-900 dark:text-white mb-1">Our Team Will Contact You</h3>
                  <p className="text-dark-600 dark:text-dark-300">
                    A project manager will reach out within 24 hours to discuss your requirements.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900 rounded-lg flex items-center justify-center flex-shrink-0">
                  <FaCalendar className="text-green-600 dark:text-green-400 text-xl" />
                </div>
                <div>
                  <h3 className="font-bold text-dark-900 dark:text-white mb-1">Schedule a Consultation</h3>
                  <p className="text-dark-600 dark:text-dark-300">
                    We'll schedule a free consultation call to understand your project better.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-dark-200 dark:border-dark-700">
              <p className="text-dark-700 dark:text-dark-300 mb-4">
                <strong>Need immediate assistance?</strong>
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+15551234567">
                  <button className="btn btn-outline-primary flex items-center gap-2">
                    <FaPhone />
                    Call Us: +1 (555) 123-4567
                  </button>
                </a>
                <a href="mailto:info@neelx.com">
                  <button className="btn btn-outline-primary flex items-center gap-2">
                    <FaEnvelope />
                    Email: info@neelx.com
                  </button>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Additional Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="grid md:grid-cols-3 gap-6"
          >
            <Link to="/portfolio">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <h3 className="font-bold text-dark-900 mb-2">View Our Work</h3>
                <p className="text-dark-600 text-sm mb-3">
                  Explore our portfolio of successful projects
                </p>
                <span className="text-primary-600 font-semibold flex items-center gap-2">
                  View Portfolio <FaArrowRight />
                </span>
              </div>
            </Link>

            <Link to="/blog">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <h3 className="font-bold text-dark-900 mb-2">Read Our Blog</h3>
                <p className="text-dark-600 text-sm mb-3">
                  Get insights on web development and design
                </p>
                <span className="text-primary-600 font-semibold flex items-center gap-2">
                  Read Articles <FaArrowRight />
                </span>
              </div>
            </Link>

            <Link to="/testimonials">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer">
                <h3 className="font-bold text-dark-900 mb-2">Client Reviews</h3>
                <p className="text-dark-600 text-sm mb-3">
                  See what our clients say about us
                </p>
                <span className="text-primary-600 font-semibold flex items-center gap-2">
                  Read Testimonials <FaArrowRight />
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Back to Home */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-12"
          >
            <Link to="/">
              <button className="btn btn-primary btn-lg">
                Back to Home
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThankYou;
