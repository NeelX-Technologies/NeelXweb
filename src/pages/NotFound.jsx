import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaHome, FaSearch, FaArrowLeft } from 'react-icons/fa';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-9xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent mb-4">
            404
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-4xl font-bold text-dark-900 dark:text-white mb-4">
            Oops! Page Not Found
          </h2>
          <p className="text-xl text-dark-600 dark:text-dark-300 mb-8">
            The page you're looking for seems to have wandered off into the digital void.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white dark:bg-dark-800 rounded-2xl shadow-xl p-8 mb-8"
        >
          <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-4">Here's what you can do:</h3>
          <ul className="text-left text-dark-600 dark:text-dark-300 space-y-3">
            <li className="flex items-start gap-3">
              <span className="text-primary-600 mt-1">•</span>
              <span>Check the URL for typos or errors</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 mt-1">•</span>
              <span>Return to the homepage and navigate from there</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 mt-1">•</span>
              <span>Use the search function to find what you're looking for</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-primary-600 mt-1">•</span>
              <span>Contact us if you believe this is an error</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Link to="/">
            <button className="btn btn-primary flex items-center gap-2">
              <FaHome />
              Back to Home
            </button>
          </Link>
          <Link to="/services">
            <button className="btn btn-outline-primary flex items-center gap-2">
              <FaSearch />
              Browse Services
            </button>
          </Link>
          <Link to="/contact">
            <button className="btn btn-outline-primary">
              Contact Support
            </button>
          </Link>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-12"
        >
          <p className="text-dark-500 dark:text-dark-400 text-sm">
            Error Code: 404 | Page Not Found
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
