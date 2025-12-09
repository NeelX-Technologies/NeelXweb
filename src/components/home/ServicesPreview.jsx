import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import Card from '../common/Card';
import { servicesData } from '../../data/servicesData';

const ServicesPreview = () => {
  const featuredServices = servicesData.slice(0, 3);

  return (
    <section className="section-padding bg-dark-50 dark:bg-dark-800">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Services"
          title="What We Offer"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/services/${service.slug}`}>
                <Card className="h-full hover:border-2 hover:border-primary-600 cursor-pointer">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
                    {service.shortDescription}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-6 pt-6 border-t border-dark-200 dark:border-dark-700">
                    <span className="text-primary-600 dark:text-primary-400 font-semibold">
                      From ₹{service.pricing.basic}
                    </span>
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/services">
            <button className="btn btn-primary btn-lg">
              View All Services
              <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesPreview;
