import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const Accordion = ({ items, allowMultiple = false }) => {
  const [activeIndexes, setActiveIndexes] = useState([]);

  const toggleItem = (index) => {
    if (allowMultiple) {
      setActiveIndexes(prev =>
        prev.includes(index)
          ? prev.filter(i => i !== index)
          : [...prev, index]
      );
    } else {
      setActiveIndexes(prev =>
        prev.includes(index) ? [] : [index]
      );
    }
  };

  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="border border-dark-200 dark:border-dark-700 rounded-lg overflow-hidden"
        >
          <button
            onClick={() => toggleItem(index)}
            className="w-full px-6 py-4 flex items-center justify-between bg-white dark:bg-dark-800 hover:bg-dark-50 dark:hover:bg-dark-700 transition-colors text-left"
          >
            <span className="font-semibold text-dark-900 dark:text-white">{item.question || item.title}</span>
            <FaChevronDown
              className={`text-primary-600 dark:text-primary-400 transition-transform duration-300 ${
                activeIndexes.includes(index) ? 'rotate-180' : ''
              }`}
            />
          </button>

          <AnimatePresence>
            {activeIndexes.includes(index) && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 py-4 bg-dark-50 dark:bg-dark-900 text-dark-700 dark:text-dark-300">
                  {item.answer || item.content}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
