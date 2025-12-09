import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaSearch } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import BlogCard from '../components/common/BlogCard';
import { blogData, blogCategories, getBlogsByCategory } from '../data/blogData';

const BlogList = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');
  
  const filteredBlogs = getBlogsByCategory(activeCategory).filter(blog =>
    blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
    blog.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const featuredBlog = blogData[0];

  return (
    <>
      <PageHeader
        title="Our Blog"
        subtitle="Insights, tips, and trends in web development, design, and digital marketing"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Blog' }
        ]}
      />

      {/* Featured Blog */}
      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-8">Featured Article</h2>
            <BlogCard blog={featuredBlog} featured={true} />
          </motion.div>

          {/* Search and Filter */}
          <div className="mb-12">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
              <div className="relative w-full md:w-96">
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="input-field pl-12"
                />
                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-dark-400 dark:text-dark-500" />
              </div>

              <div className="flex flex-wrap gap-2">
                {blogCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full font-medium transition-all text-sm ${
                      activeCategory === category
                        ? 'bg-primary-600 text-white'
                        : 'bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-200 hover:bg-primary-50 dark:hover:bg-dark-600'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Blog Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredBlogs.slice(1).map((blog, index) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BlogCard blog={blog} />
              </motion.div>
            ))}
          </div>

          {filteredBlogs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-dark-600 text-lg">No articles found matching your criteria.</p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="section-padding bg-dark-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
              Get the latest articles, tips, and insights delivered directly to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg text-dark-900 focus:outline-none focus:ring-2 focus:ring-secondary-400"
              />
              <button className="btn btn-secondary">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BlogList;
