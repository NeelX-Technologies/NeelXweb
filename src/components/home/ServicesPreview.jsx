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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {featuredServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link to={`/services/${service.slug}`}>
                <div className="card-premium card-glow h-full flex flex-col group cursor-pointer">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-dark-600 dark:text-dark-400 mb-6 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-8">
                    {service.technologies.slice(0, 3).map((tech, idx) => (
                      <span
                        key={idx}
                        className="text-[10px] uppercase tracking-wider font-bold bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-2.5 py-1 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="mt-auto pt-6 border-t border-dark-100 dark:border-dark-700 flex items-center justify-between">
                    <span className="text-primary-600 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                      Explore Service
                      <FaArrowRight className="text-sm" />
                    </span>
                  </div>
                </div>
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
