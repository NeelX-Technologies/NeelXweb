import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaAward, FaRocket } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { teamMembers, companyStats, companyValues } from '../data/aboutData';

const AboutUs = () => {
  return (
    <>
      <PageHeader
        title="About NeelX Technologies"
        subtitle="Transforming businesses through innovative web solutions since 2015"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'About Us' }
        ]}
      />

      {/* Company Story */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-dark-900 dark:text-white mb-6">
                Our Story
              </h2>
              <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed mb-4">
                Founded in 2015, NeelX Technologies started with a simple mission: to help businesses succeed online through exceptional web solutions. What began as a small team of passionate developers has grown into a full-service digital agency.
              </p>
              <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed mb-4">
                Today, we're proud to have served over 150 clients across various industries, delivering websites, applications, and digital marketing solutions that drive real results.
              </p>
              <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed">
                Our commitment to quality, innovation, and client satisfaction has made us a trusted partner for businesses looking to establish and grow their online presence.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop"
                alt="Team collaboration"
                className="rounded-xl shadow-2xl w-full"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {companyStats.map((stat, index) => (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center text-white"
              >
                <div className="text-5xl mb-4">{stat.icon}</div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</h3>
                <p className="text-primary-100 dark:text-primary-200 text-lg">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-dark-900 rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-3xl mb-6">
                🎯
              </div>
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">Our Mission</h3>
              <p className="text-dark-600 dark:text-dark-300 text-lg leading-relaxed">
                To empower businesses with cutting-edge web solutions that drive growth, enhance user experience, and deliver measurable results. We strive to be more than just a service provider – we aim to be a trusted partner in our clients' success.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg"
            >
              <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center text-3xl mb-6">
                🔭
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">Our Vision</h3>
              <p className="text-dark-600 text-lg leading-relaxed">
                To become the leading web solutions provider, recognized for innovation, quality, and exceptional client service. We envision a future where every business, regardless of size, can leverage the power of the web to achieve their goals.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Values"
            title="What We Stand For"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h4 className="text-xl font-bold text-dark-900 mb-3">{value.title}</h4>
                <p className="text-dark-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      {/* <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <SectionTitle
            subtitle="Our Team"
            title="Meet The Experts Behind NeelX"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-3 justify-center">
                      <a
                        href={member.social.linkedin}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        in
                      </a>
                      <a
                        href={member.social.twitter}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        tw
                      </a>
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary-600 hover:bg-primary-600 hover:text-white transition-colors"
                      >
                        @
                      </a>
                    </div>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-dark-900 mb-1">{member.name}</h4>
                  <p className="text-primary-600 font-semibold mb-3">{member.role}</p>
                  <p className="text-dark-600 text-sm">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA */}
      <section className="section-padding bg-gradient-to-r from-primary-600 to-secondary-600">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-white max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-primary-100 mb-8">
              Join the 150+ businesses that trust NeelX Technologies for their web solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/order">
                <button className="btn btn-secondary btn-lg">
                  Start Your Project
                </button>
              </a>
              <a href="/contact">
                <button className="btn btn-outline-white btn-lg">
                  Get In Touch
                </button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
