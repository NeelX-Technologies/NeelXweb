import { motion } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';
import { useEffect } from 'react';

const Modal = ({ 
  isOpen, 
  onClose, 
  title, 
  children,
  size = 'medium' 
}) => {
  const sizes = {
    small: 'max-w-md',
    medium: 'max-w-2xl',
    large: 'max-w-4xl',
    full: 'max-w-6xl',
  };

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
      />

      {/* Modal */}
      <div className="flex min-h-full items-center justify-center p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className={`relative bg-white dark:bg-dark-800 rounded-xl shadow-2xl w-full ${sizes[size]} p-6`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-dark-400 dark:text-dark-500 hover:text-dark-600 dark:hover:text-dark-300 transition-colors"
          >
            <FaTimes className="text-xl" />
          </button>

          {/* Title */}
          {title && (
            <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4 pr-8">
              {title}
            </h3>
          )}

          {/* Content */}
          <div className="mt-4">
            {children}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
