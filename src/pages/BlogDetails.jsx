import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaUser, FaClock, FaEye, FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import BlogCard from '../components/common/BlogCard';
import { getBlogBySlug, getRelatedBlogs } from '../data/blogData';

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = getBlogBySlug(slug);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-dark-900 dark:text-white mb-4">Blog Post Not Found</h2>
          <Link to="/blog" className="text-primary-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const relatedBlogs = getRelatedBlogs(blog.id, blog.category);

  return (
    <>
      <PageHeader
        title={blog.title}
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Blog', link: '/blog' },
          { label: blog.title }
        ]}
      />

      <article className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Article Meta */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <div className="flex flex-wrap items-center gap-6 text-dark-600 dark:text-dark-300 mb-6">
                <div className="flex items-center gap-3">
                  <img
                    src={blog.authorImage}
                    alt={blog.author}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <p className="font-semibold text-dark-900 dark:text-white">{blog.author}</p>
                    <p className="text-sm text-dark-500 dark:text-dark-400">{blog.authorRole}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="text-primary-600" />
                  <span>{blog.readTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaEye className="text-primary-600" />
                  <span>{blog.views} views</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {blog.category}
                </span>
                {blog.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-dark-100 dark:bg-dark-700 text-dark-700 dark:text-dark-300 px-4 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Featured Image */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-12"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-96 object-cover rounded-xl shadow-2xl"
              />
            </motion.div>

            {/* Article Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="prose prose-lg max-w-none mb-12"
            >
              <div
                dangerouslySetInnerHTML={{ __html: blog.content }}
                className="text-dark-700 leading-relaxed"
              />
            </motion.div>

            {/* Author Bio */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-dark-50 rounded-xl p-8 mb-12"
            >
              <div className="flex items-start gap-6">
                <img
                  src={blog.authorImage}
                  alt={blog.author}
                  className="w-24 h-24 rounded-full object-cover flex-shrink-0"
                />
                <div>
                  <h4 className="text-xl font-bold text-dark-900 mb-1">{blog.author}</h4>
                  <p className="text-primary-600 font-semibold mb-3">{blog.authorRole}</p>
                  <p className="text-dark-600">
                    Expert in web development and digital marketing with over 10 years of experience. 
                    Passionate about sharing knowledge and helping businesses succeed online.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-between items-center mb-12 pb-12 border-b border-dark-200">
              <Link
                to="/blog"
                className="flex items-center gap-2 text-primary-600 hover:gap-3 transition-all"
              >
                <FaArrowLeft />
                Back to Blog
              </Link>
            </div>
          </div>

          {/* Related Articles */}
          {relatedBlogs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-dark-900 mb-8 text-center">
                Related Articles
              </h3>
              <div className="grid md:grid-cols-3 gap-8">
                {relatedBlogs.map((relatedBlog, index) => (
                  <motion.div
                    key={relatedBlog.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <BlogCard blog={relatedBlog} />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </article>
    </>
  );
};

export default BlogDetails;
