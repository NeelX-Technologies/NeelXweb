import { motion } from 'framer-motion';
import { FaQuoteLeft } from 'react-icons/fa';
import Rating from './Rating';

const TestimonialCard = ({ testimonial }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-dark-800 rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition-shadow"
    >
      <FaQuoteLeft className="text-4xl text-primary-200 dark:text-primary-700 mb-4" />
      
      <p className="text-dark-700 dark:text-dark-300 mb-6 leading-relaxed">
        {testimonial.text}
      </p>

      <div className="flex items-center gap-4">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-14 h-14 rounded-full object-cover"
        />
        <div className="flex-1">
          <h4 className="font-semibold text-dark-900 dark:text-white">{testimonial.name}</h4>
          <p className="text-sm text-dark-600 dark:text-dark-400">
            {testimonial.position} at {testimonial.company}
          </p>
        </div>
        <Rating rating={testimonial.rating} size="small" />
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
