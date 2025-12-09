import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';
import TestimonialCard from '../components/common/TestimonialCard';
import { testimonialsData, testimonialStats } from '../data/testimonialsData';

const Testimonials = () => {
  return (
    <>
      <PageHeader
        title="Client Testimonials"
        subtitle="Read what our clients say about working with NeelX Technologies"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Testimonials' }
        ]}
      />

      {/* Stats Section */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h3 className="text-5xl font-bold mb-2">{testimonialStats.totalClients}+</h3>
              <p className="text-primary-100 dark:text-primary-200">Happy Clients</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center text-white"
            >
              <h3 className="text-5xl font-bold mb-2">{testimonialStats.projectsCompleted}+</h3>
              <p className="text-primary-100">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center text-white"
            >
              <h3 className="text-5xl font-bold mb-2">{testimonialStats.averageRating}/5</h3>
              <p className="text-primary-100">Average Rating</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center text-white"
            >
              <h3 className="text-5xl font-bold mb-2">{testimonialStats.satisfactionRate}%</h3>
              <p className="text-primary-100">Satisfaction Rate</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonialsData.map((testimonial, index) => (
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
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-primary-100 dark:text-primary-200 mb-8 max-w-2xl mx-auto">
              Join hundreds of satisfied clients who have transformed their business with NeelX Technologies
            </p>
            <a href="/order">
              <button className="btn btn-secondary btn-lg">
                Start Your Project Today
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;
