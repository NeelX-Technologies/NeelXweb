import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaArrowRight, FaClock, FaUser, FaEye } from 'react-icons/fa';

const BlogCard = ({ blog, featured = false }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white dark:bg-dark-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 ${
        featured ? 'md:flex' : ''
      }`}
    >
      <Link to={`/blog/${blog.slug}`} className={featured ? 'md:w-1/2' : ''}>
        <div className="relative h-64 overflow-hidden">
          <img
            src={blog.image}
            alt={blog.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute top-4 left-4">
            <span className="bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-medium">
              {blog.category}
            </span>
          </div>
        </div>
      </Link>

      <div className={`p-6 ${featured ? 'md:w-1/2' : ''}`}>
        <div className="flex items-center gap-4 text-sm text-dark-500 dark:text-dark-400 mb-3">
          <span className="flex items-center gap-1">
            <FaUser className="text-xs" />
            {blog.author}
          </span>
          <span className="flex items-center gap-1">
            <FaClock className="text-xs" />
            {blog.readTime}
          </span>
          {blog.views && (
            <span className="flex items-center gap-1">
              <FaEye className="text-xs" />
              {blog.views}
            </span>
          )}
        </div>

        <Link to={`/blog/${blog.slug}`}>
          <h3 className={`font-bold text-dark-900 dark:text-white mb-3 hover:text-primary-600 transition-colors ${
            featured ? 'text-2xl' : 'text-xl'
          }`}>
            {blog.title}
          </h3>
        </Link>

        <p className="text-dark-600 dark:text-dark-300 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {blog.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs bg-dark-100 dark:bg-dark-700 text-dark-600 dark:text-dark-300 px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            to={`/blog/${blog.slug}`}
            className="text-primary-600 font-semibold flex items-center gap-2 hover:gap-3 transition-all"
          >
            Read More
            <FaArrowRight className="text-sm" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
};

export default BlogCard;
