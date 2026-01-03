import { useState } from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import Accordion from '../components/common/Accordion';
import { faqData, faqCategories, getFaqsByCategory } from '../data/faqData';

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const filteredFaqs = getFaqsByCategory(activeCategory);

  return (
    <>
      <PageHeader
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about our services, pricing, and process"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'FAQ' }
        ]}
      />

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <h3 className="text-lg font-semibold text-dark-900 dark:text-white text-center mb-6">
              Browse by Category
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {faqCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white shadow-lg'
                      : 'bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-200 hover:bg-primary-50 dark:hover:bg-dark-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* FAQ Accordion */}
          <div className="max-w-4xl mx-auto">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <Accordion items={filteredFaqs} allowMultiple={true} />
            </motion.div>
          </div>

          {/* Still Have Questions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
            <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/contact">
                <button className="btn btn-secondary btn-lg">
                  Contact Support
                </button>
              </a>
              <a href="mailto:contact@neelxtechnologies.com">
                <button className="btn btn-outline-white btn-lg">
                  Email Us
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQ;
