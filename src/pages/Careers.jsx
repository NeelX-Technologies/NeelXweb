import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaClock, FaBriefcase, FaArrowRight } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import SectionTitle from '../components/common/SectionTitle';
import { jobOpenings, companyValues } from '../data/aboutData';

const Careers = () => {
  return (
    <>
      <PageHeader
        title="Join Our Team"
        subtitle="Build your career with NeelX Technologies and shape the future of web development"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Careers' }
        ]}
      />

      {/* Why Join Us */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <SectionTitle
            title="Why Work at NeelX?"
            subtitle="Be part of a dynamic team that values innovation, creativity, and growth"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 rounded-xl flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2">{value.title}</h3>
                <p className="text-dark-600 dark:text-dark-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="section-padding bg-dark-50 dark:bg-dark-800">
        <div className="container-custom">
          <SectionTitle
            title="Benefits & Perks"
            subtitle="We care about our team's well-being and growth"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Competitive Salary',
                description: 'Industry-leading compensation packages with performance bonuses',
              },
              {
                title: 'Health Insurance',
                description: 'Comprehensive health, dental, and vision coverage for you and family',
              },
              {
                title: 'Flexible Hours',
                description: 'Work-life balance with flexible schedules and remote work options',
              },
              {
                title: 'Learning & Development',
                description: 'Annual training budget and conference attendance opportunities',
              },
              {
                title: 'Career Growth',
                description: 'Clear career paths with regular reviews and advancement opportunities',
              },
              {
                title: 'Modern Equipment',
                description: 'Latest laptops, multiple monitors, and all tools you need to succeed',
              },
            ].map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl font-bold text-dark-900 mb-3">{benefit.title}</h3>
                <p className="text-dark-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <SectionTitle
            title="Open Positions"
            subtitle="Find your perfect role and apply today"
          />

          <div className="space-y-6">
            {jobOpenings.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white border border-dark-200 rounded-xl p-6 hover:shadow-xl transition-all hover:border-primary-600"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-dark-900 mb-3">{job.title}</h3>
                    
                    <div className="flex flex-wrap gap-4 mb-4">
                      <div className="flex items-center gap-2 text-dark-600">
                        <FaBriefcase className="text-primary-600" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center gap-2 text-dark-600">
                        <FaMapMarkerAlt className="text-primary-600" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-dark-600">
                        <FaClock className="text-primary-600" />
                        <span>{job.experience}</span>
                      </div>
                    </div>

                    <p className="text-dark-700 mb-4">{job.description}</p>

                    <div className="flex flex-wrap gap-2">
                      {job.skills.map((skill, idx) => (
                        <span
                          key={idx}
                          className="bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <a href={`mailto:careers@neelx.com?subject=Application for ${job.title}`}>
                      <button className="btn btn-primary flex items-center gap-2 whitespace-nowrap">
                        Apply Now
                        <FaArrowRight />
                      </button>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <SectionTitle
            title="Application Process"
            subtitle="Here's what to expect when you apply"
          />

          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Apply',
                description: 'Submit your application with resume and portfolio',
              },
              {
                step: '02',
                title: 'Review',
                description: 'Our team reviews your application within 5 business days',
              },
              {
                step: '03',
                title: 'Interview',
                description: 'Multiple rounds including technical and cultural fit assessment',
              },
              {
                step: '04',
                title: 'Offer',
                description: 'Receive offer and join our amazing team!',
              },
            ].map((process, index) => (
              <motion.div
                key={process.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {process.step}
                </div>
                <h3 className="text-xl font-bold text-dark-900 mb-2">{process.title}</h3>
                <p className="text-dark-600">{process.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't See a Perfect Fit?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a href="mailto:careers@neelx.com">
              <button className="btn btn-secondary btn-lg">
                Send Your Resume
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Careers;
