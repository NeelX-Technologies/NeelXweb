import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheck, FaArrowRight, FaClock, FaChartLine } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import { getServiceBySlug } from '../data/servicesData';

const ServiceDetails = () => {
  const { slug } = useParams();
  const service = getServiceBySlug(slug);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
            Service Not Found
          </h2>
          <Link to="/services" className="text-primary-600 hover:underline">
            Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <PageHeader
        title={service.title}
        subtitle={service.shortDescription}
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Services', link: '/services' },
          { label: service.title }
        ]}
      />

      {/* Service Overview */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">

          {/* Overview Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Left content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="text-7xl mb-6">{service.icon}</div>

              <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
                About {service.title}
              </h2>

              <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed mb-6">
                {service.description}
              </p>

              <div className="flex gap-4 mb-6">
                <div className="flex items-center gap-2 text-dark-700 dark:text-dark-300">
                  <FaClock className="text-primary-600" />
                  <span className="font-semibold">
                    Delivery: {service.deliveryTime}
                  </span>
                </div>

                <div className="flex items-center gap-2 text-dark-700 dark:text-dark-300">
                  <FaChartLine className="text-primary-600" />
                  <span className="font-semibold">{service.category}</span>
                </div>
              </div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="rounded-xl shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>
          </div>

          {/* Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-8 text-center">
              What's Included
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {service.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-dark-50 dark:bg-dark-800 rounded-lg p-6 hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                >
                  <FaCheck className="text-green-500 text-xl mb-3" />
                  <p className="text-dark-900 dark:text-white font-medium">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technologies */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-8 text-center">
              Technologies We Use
            </h3>

            <div className="flex flex-wrap justify-center gap-4">
              {service.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-white dark:bg-dark-800 border-2 border-primary-600 text-primary-700 dark:text-primary-300 px-6 py-3 rounded-full font-semibold hover:bg-primary-600 hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-8 text-center">
              Key Benefits
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3 bg-white dark:bg-dark-800 border border-dark-200 dark:border-dark-700 rounded-lg p-6 hover:border-primary-600 transition-colors"
                >
                  <FaCheck className="text-green-500 text-xl mt-1 flex-shrink-0" />
                  <p className="text-dark-700 dark:text-dark-300">{benefit}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Process */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-8 text-center">
              Our Process
            </h3>

            <div className="max-w-4xl mx-auto">
              {service.process.map((step, index) => (
                <div key={index} className="flex gap-6 mb-8 last:mb-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.step}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                      {step.title}
                    </h4>
                    <p className="text-dark-600 dark:text-dark-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h3 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">
              Ready to Get Started?
            </h3>

            <p className="text-dark-600 dark:text-dark-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a custom solution that fits your needs and budget.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/order">
                <button className="btn btn-primary btn-lg">
                  Order This Service <FaArrowRight />
                </button>
              </Link>

              <Link to="/contact">
                <button className="btn btn-outline btn-lg">
                  Get Free Consultation
                </button>
              </Link>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
};

export default ServiceDetails;
