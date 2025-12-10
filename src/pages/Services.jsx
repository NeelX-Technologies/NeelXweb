import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import Card from '../components/common/Card';
import { servicesData } from '../data/servicesData';

const Services = () => {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="Comprehensive web solutions tailored to your business needs"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Services' }
        ]}
      />

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/services/${service.slug}`}>
                  <Card className="h-full hover:border-2 hover:border-primary-600 cursor-pointer group">
                    <div className="text-6xl mb-6">{service.icon}</div>
                    
                    <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3 group-hover:text-primary-600 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-dark-600 dark:text-dark-300 mb-4">
                      {service.shortDescription}
                    </p>

                    <div className="mb-4">
                      <p className="text-sm text-dark-500 dark:text-dark-400 mb-2">Key Features:</p>
                      <ul className="space-y-1">
                        {service.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="text-sm text-dark-600 dark:text-dark-300 flex items-start gap-2">
                            <span className="text-primary-600 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.technologies.slice(0, 4).map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-end pt-6 border-t border-dark-200 dark:border-dark-700">
                      <span className="text-primary-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                        Learn More
                        <FaArrowRight className="text-sm" />
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-2xl mx-auto">
              We offer custom solutions tailored to your specific needs. Let's discuss your project!
            </p>
            <Link to="/contact">
              <button className="btn btn-secondary btn-lg">
                Contact Us for Custom Solutions
                <FaArrowRight />
              </button>
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
