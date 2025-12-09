import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  centered = true,
  className = '' 
}) => {
  return (
    <div className={`section-title ${centered ? 'text-center' : ''} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {subtitle && (
          <p className="text-primary-600 dark:text-primary-400 font-semibold uppercase tracking-wide mb-2">
            {subtitle}
          </p>
        )}
        <h2 className="text-dark-900 dark:text-white mb-4">{title}</h2>
      </motion.div>
    </div>
  );
};

export default SectionTitle;
