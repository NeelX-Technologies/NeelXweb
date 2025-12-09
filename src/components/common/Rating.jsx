import { motion } from 'framer-motion';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';

const Rating = ({ rating, maxRating = 5, showNumber = false, size = 'medium' }) => {
  const sizes = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-xl',
  };

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= maxRating; i++) {
      if (i <= rating) {
        stars.push(
          <FaStar key={i} className="text-yellow-400" />
        );
      } else if (i - 0.5 === rating) {
        stars.push(
          <FaStarHalfAlt key={i} className="text-yellow-400" />
        );
      } else {
        stars.push(
          <FaRegStar key={i} className="text-yellow-400" />
        );
      }
    }
    return stars;
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`flex items-center gap-1 ${sizes[size]}`}
    >
      {renderStars()}
      {showNumber && (
        <span className="ml-2 text-dark-600 dark:text-dark-400 font-medium">
          {rating.toFixed(1)}
        </span>
      )}
    </motion.div>
  );
};

export default Rating;
