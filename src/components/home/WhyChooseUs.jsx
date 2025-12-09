import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaRocket, FaShieldAlt, FaHeadset, FaChartLine } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';

const WhyChooseUs = () => {
  const features = [
    {
      icon: FaRocket,
      title: 'Fast Delivery',
      description: 'We deliver projects on time without compromising quality. Our agile approach ensures quick turnaround.'
    },
    {
      icon: FaUsers,
      title: 'Expert Team',
      description: 'Our team consists of experienced designers, developers, and marketers who are passionate about their work.'
    },
    {
      icon: FaShieldAlt,
      title: 'Secure & Reliable',
      description: 'Security is our top priority. We build robust, secure solutions that you can trust.'
    },
    {
      icon: FaHeadset,
      title: '24/7 Support',
      description: 'We provide round-the-clock support to ensure your website runs smoothly at all times.'
    },
    {
      icon: FaChartLine,
      title: 'Result Driven',
      description: 'We focus on delivering measurable results that contribute to your business growth and success.'
    },
    {
      icon: FaCheckCircle,
      title: 'Quality Assurance',
      description: 'Rigorous testing and quality checks ensure your project meets the highest standards.'
    }
  ];

  return (
    <section className="section-padding bg-white dark:bg-dark-900">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <SectionTitle
              subtitle="Why Choose Us"
              title="We're Different From Others"
              centered={false}
            />
            
            <p className="text-dark-600 dark:text-dark-300 text-lg mb-6">
              At NeelX Technologies, we don't just build websites - we create digital experiences that drive results. Here's what sets us apart from the competition:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-1">10+ Years of Experience</h4>
                  <p className="text-dark-600 dark:text-dark-300">Proven track record in delivering successful digital solutions.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-1">150+ Happy Clients</h4>
                  <p className="text-dark-600 dark:text-dark-300">Trusted by businesses across various industries worldwide.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FaCheckCircle className="text-green-500 text-xl mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-dark-900 dark:text-white mb-1">98% Client Satisfaction</h4>
                  <p className="text-dark-600 dark:text-dark-300">Our clients love working with us and return for more projects.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Features Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-dark-50 dark:bg-dark-800 rounded-xl p-6 hover:bg-primary-50 dark:hover:bg-dark-700 transition-colors group"
              >
                <feature.icon className="text-4xl text-primary-600 dark:text-primary-400 mb-4 group-hover:scale-110 transition-transform" />
                <h4 className="text-xl font-bold text-dark-900 dark:text-white mb-2">
                  {feature.title}
                </h4>
                <p className="text-dark-600 dark:text-dark-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
