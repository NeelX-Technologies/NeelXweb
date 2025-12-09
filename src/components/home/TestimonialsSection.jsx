import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import TestimonialCard from '../common/TestimonialCard';
import { testimonialsData } from '../../data/testimonialsData';

const TestimonialsSection = () => {
  const featuredTestimonials = testimonialsData.slice(0, 3);

  return (
    <section className="section-padding bg-dark-50 dark:bg-dark-800">
      <div className="container-custom">
        <SectionTitle
          subtitle="Testimonials"
          title="What Our Clients Say About Us"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/testimonials">
            <button className="btn btn-primary">
              Read More Reviews
              <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
