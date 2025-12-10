import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck, FaTimes, FaArrowRight } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { pricingPlans, maintenancePlans, customPackages } from '../data/pricingData';

const Pricing = () => {
  return (
    <>
      <PageHeader
        title="Pricing Plans"
        subtitle="Transparent pricing with no hidden fees. Choose a plan that works for you."
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Pricing' }
        ]}
      />

      {/* Website Development Pricing */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <SectionTitle
            subtitle="Website Development"
            title="One-Time Development Packages"
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
                  plan.popular ? 'border-2 border-primary-600 lg:scale-105' : 'border border-dark-200 dark:border-dark-700'
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
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">{plan.name}</h3>
                  <p className="text-dark-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    {/* <span className="text-5xl font-bold text-dark-900">₹{plan.price}</span> */}
                    <span className="text-dark-600">/{plan.period}</span>
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
        </div>
      </section>

      {/* Maintenance Plans */}
      <section className="section-padding bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <SectionTitle
            subtitle="Maintenance & Support"
            title="Monthly Maintenance Plans"
          />

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {maintenancePlans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-white dark:bg-dark-800 rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all ${
                  plan.popular ? 'border-2 border-secondary-600' : 'border border-dark-200 dark:border-dark-700'
                }`}
              >
                {plan.popular && (
                  <div className="text-center mb-4">
                    <span className="bg-secondary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Recommended
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-dark-900 mb-2">{plan.name}</h3>
                  <p className="text-dark-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center gap-2">
                    {/* <span className="text-5xl font-bold text-dark-900">₹{plan.price}</span> */}
                    <span className="text-dark-600">/{plan.period}</span>
                  </div>
                </div>

                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <FaCheck className="text-green-500 mt-1 flex-shrink-0" />
                      <span className="text-dark-700 text-sm">{feature}</span>
                    </div>
                  ))}
                  {plan.notIncluded && plan.notIncluded.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3 opacity-50">
                      <FaTimes className="text-red-500 mt-1 flex-shrink-0" />
                      <span className="text-dark-700 text-sm line-through">{feature}</span>
                    </div>
                  ))}
                </div>

                <Link to="/order" className="block">
                  <button className="w-full py-3 rounded-lg font-semibold bg-dark-100 text-dark-900 hover:bg-secondary-600 hover:text-white transition-all">
                    Choose Plan
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Packages */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Additional Services"
            title="Custom Packages"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {customPackages.map((pkg, index) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gradient-to-br from-primary-50 to-secondary-50 rounded-xl p-6 hover:shadow-xl transition-all"
              >
                <div className="text-5xl mb-4">{pkg.icon}</div>
                <h4 className="text-xl font-bold text-dark-900 mb-2">{pkg.name}</h4>
                <p className="text-dark-600 mb-4">{pkg.description}</p>
                {/* <p className="text-2xl font-bold text-primary-600 mb-4">
                  From ₹{pkg.startingPrice}
                </p> */}
                <Link to="/contact">
                  <button className="w-full btn btn-outline text-sm">
                    Get Quote
                  </button>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <SectionTitle
            subtitle="Pricing FAQ"
            title="Common Questions About Pricing"
          />

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "Do you offer refunds?",
                answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with our service. Please review our refund policy for complete details."
              },
              {
                question: "Can I upgrade my plan later?",
                answer: "Absolutely! You can upgrade your plan at any time. We'll prorate the cost and apply any credits to your new plan."
              },
              {
                question: "Are there any hidden fees?",
                answer: "No hidden fees! The price you see is what you pay. Any additional costs (like domain, hosting, premium plugins) will be discussed upfront."
              },
              {
                question: "Do you offer payment plans?",
                answer: "Yes, we offer flexible payment plans for projects over ₹2,000. Contact us to discuss custom payment arrangements."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6"
              >
                <h4 className="text-lg font-bold text-dark-900 mb-2">{faq.question}</h4>
                <p className="text-dark-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-dark-600 mb-6">Still have questions about pricing?</p>
            <Link to="/contact">
              <button className="btn btn-primary">
                Contact Us for Custom Quote
                <FaArrowRight />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
