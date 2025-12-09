import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const Badge = ({ 
  children, 
  variant = 'primary', 
  icon,
  className = '' 
}) => {
  const variants = {
    primary: 'bg-primary-100 text-primary-700',
    secondary: 'bg-secondary-100 text-secondary-700',
    success: 'bg-green-100 text-green-700',
    warning: 'bg-yellow-100 text-yellow-700',
    danger: 'bg-red-100 text-red-700',
    info: 'bg-blue-100 text-blue-700',
    dark: 'bg-dark-100 text-dark-700',
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-sm font-medium ${variants[variant]} ${className}`}
    >
      {icon && icon}
      {children}
    </motion.span>
  );
};

export default Badge;
