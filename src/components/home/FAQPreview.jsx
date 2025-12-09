import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import Accordion from '../common/Accordion';
import { faqData } from '../../data/faqData';

const FAQPreview = () => {
  const featuredFaqs = faqData.slice(0, 6);

  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <SectionTitle
          subtitle="FAQ"
          title="Frequently Asked Questions"
        />

        <div className="max-w-3xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Accordion items={featuredFaqs} />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-dark-600 dark:text-dark-300 mb-6">
            Can't find the answer you're looking for? Check out our complete FAQ page.
          </p>
          <Link to="/faq">
            <button className="btn btn-outline">
              View All FAQs
              <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQPreview;
