import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFilter } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import { portfolioData, portfolioCategories } from '../data/portfolioData';

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All'
    ? portfolioData
    : portfolioData.filter(project => project.category === activeCategory);

  return (
    <>
      <PageHeader
        title="Our Portfolio"
        subtitle="Explore our successful projects and see how we've helped businesses transform their digital presence"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Portfolio' }
        ]}
      />

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaFilter className="text-primary-600" />
              <h3 className="text-lg font-semibold text-dark-900 dark:text-white">Filter by Category</h3>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {portfolioCategories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-2 rounded-full font-medium transition-all ${
                    activeCategory === category
                      ? 'bg-primary-600 text-white shadow-lg scale-105'
                      : 'bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-200 hover:bg-primary-50 dark:hover:bg-dark-600 hover:text-primary-600'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <p className="text-sm font-semibold mb-2">{project.category}</p>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-sm text-dark-200 dark:text-dark-300 line-clamp-2">{project.description}</p>
                    </div>
                  </div>
                  <div className="absolute top-4 left-4">
                    <span className="bg-white text-primary-600 px-3 py-1 rounded-full text-sm font-semibold">
                      {project.year}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <span className="inline-block bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                    {project.category}
                  </span>
                  
                  <h3 className="text-xl font-bold text-dark-900 dark:text-white mb-2 group-hover:text-primary-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-dark-600 dark:text-dark-300 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-xs text-dark-500 dark:text-dark-400 font-semibold mb-2">Services Provided:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-secondary-100 dark:bg-secondary-900 text-secondary-700 dark:text-secondary-300 px-2 py-1 rounded"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-xs text-dark-500 dark:text-dark-400 font-semibold mb-2">Technologies:</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-2 py-1 rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-dark-200">
                    <p className="text-xs text-dark-500 font-semibold mb-2">Results:</p>
                    <ul className="space-y-1">
                      {project.results.map((result, idx) => (
                        <li key={idx} className="text-sm text-dark-700 flex items-start gap-2">
                          <span className="text-green-500 mt-1">✓</span>
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-dark-600 text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Want to Be Our Next Success Story?
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Let's create something amazing together. Start your project today!
            </p>
            <a href="/order">
              <button className="btn btn-secondary btn-lg">
                Start Your Project
              </button>
            </a>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
