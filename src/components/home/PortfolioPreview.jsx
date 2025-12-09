import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import SectionTitle from '../common/SectionTitle';
import { portfolioData, portfolioCategories } from '../../data/portfolioData';

const PortfolioPreview = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const displayCategories = ['All', 'E-commerce', 'Healthcare', 'Education', 'Finance'];
  
  const filteredProjects = activeCategory === 'All'
    ? portfolioData.slice(0, 6)
    : portfolioData.filter(project => project.category === activeCategory).slice(0, 6);

  return (
    <section className="section-padding bg-dark-50 dark:bg-dark-800">
      <div className="container-custom">
        <SectionTitle
          subtitle="Our Portfolio"
          title="Recent Projects We've Completed"
        />

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {displayCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white dark:bg-dark-700 text-dark-700 dark:text-dark-200 hover:bg-primary-50 dark:hover:bg-dark-600'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white dark:bg-dark-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all"
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
                    <p className="text-sm text-dark-200 dark:text-dark-300 mb-3 line-clamp-2">{project.description}</p>
                    <div className="flex items-center gap-2 text-white font-semibold">
                      View Details
                      <FaArrowRight className="text-sm group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
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
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Link to="/portfolio">
            <button className="btn btn-primary">
              View All Projects
              <FaArrowRight />
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioPreview;
