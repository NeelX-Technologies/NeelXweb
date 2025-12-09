import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { pricingPlans } from '../../data/pricingData';

const PricingPreview = () => {
  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <SectionTitle
          subtitle="Pricing Plans"
          title="Choose The Right Plan For You"
        />

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all ${
                plan.popular ? 'border-2 border-primary-600 lg:-translate-y-4' : 'border border-dark-200 dark:border-dark-700'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">{plan.name}</h3>
                <p className="text-dark-600 dark:text-dark-300 mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-bold text-dark-900 dark:text-white">₹{plan.price}</span>
                  <span className="text-dark-600 dark:text-dark-400">/{plan.period}</span>
                </div>
              </div>

              <div className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-dark-700 dark:text-dark-300">{feature}</span>
                  </div>
                ))}
                {plan.notIncluded.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3 opacity-50">
                    <FaTimes className="text-red-500 mt-1 flex-shrink-0" />
                    <span className="text-dark-700 dark:text-dark-300 line-through">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/order" className="block">
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700'
                      : 'bg-dark-100 dark:bg-dark-700 text-dark-900 dark:text-white hover:bg-primary-600 hover:text-white'
                  }`}
                >
                  {plan.cta}
                </button>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/pricing">
            <button className="btn btn-outline">
              View All Pricing Plans
              <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingPreview;
