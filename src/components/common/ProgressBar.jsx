import { motion } from 'framer-motion';

const ProgressBar = ({ 
  progress, 
  showLabel = true,
  color = 'primary',
  height = 'medium',
  className = '' 
}) => {
  const colors = {
    primary: 'bg-primary-600',
    secondary: 'bg-secondary-600',
    success: 'bg-green-600',
    warning: 'bg-yellow-600',
    danger: 'bg-red-600',
  };

  const heights = {
    small: 'h-2',
    medium: 'h-3',
    large: 'h-4',
  };

  return (
    <div className={className}>
      {showLabel && (
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-dark-700 dark:text-dark-300">Progress</span>
          <span className="text-sm font-semibold text-dark-900 dark:text-white">{progress}%</span>
        </div>
      )}
      <div className={`w-full bg-dark-200 dark:bg-dark-700 rounded-full overflow-hidden ${heights[height]}`}>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className={`${heights[height]} ${colors[color]} rounded-full`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
