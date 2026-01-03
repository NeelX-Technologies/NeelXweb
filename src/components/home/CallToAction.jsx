import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaPhone, FaEnvelope } from 'react-icons/fa';

const CallToAction = () => {
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      {/* Floating Shapes */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          ease: "easeInOut" 
        }}
        className="absolute top-10 right-10 w-20 h-20 bg-white opacity-10 rounded-full"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute bottom-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full"
      />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center text-white max-w-4xl mx-auto"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-primary-200 font-semibold uppercase tracking-wide mb-4"
          >
            Ready to Get Started?
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
          >
            Let's Build Something Amazing Together
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-primary-100 mb-10"
          >
            Transform your business with our cutting-edge web solutions. Get started today and see the difference we can make.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link to="/order">
              <button className="btn btn-secondary btn-lg shadow-xl hover:shadow-2xl">
                Start Your Project
                <FaArrowRight />
              </button>
            </Link>
            <Link to="/contact">
              <button className="btn btn-outline-white btn-lg">
                Contact Us
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex flex-wrap justify-center gap-8 text-primary-100 dark:text-primary-200"
          >
            <a 
              href="tel:+919664078862" 
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                <FaPhone />
              </div>
              <div className="text-left">
                <p className="text-sm">Call Us Now</p>
                <p className="font-semibold text-white">+91 96640 78862</p>
              </div>
            </a>
            <a 
              href="mailto:Conatact@neelxtechnologies.com" 
              className="flex items-center gap-3 hover:text-white transition-colors group"
            >
              <div className="w-12 h-12 bg-white bg-opacity-20 rounded-full flex items-center justify-center group-hover:bg-opacity-30 transition-all">
                <FaEnvelope />
              </div>
              <div className="text-left">
                <p className="text-sm">Email Us</p>
                <p className="font-semibold text-white">Conatact@neelxtechnologies.com</p>
              </div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
