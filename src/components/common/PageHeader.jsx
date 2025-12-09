import { motion } from 'framer-motion';

const PageHeader = ({ 
  title, 
  subtitle, 
  backgroundImage,
  breadcrumbs = [] 
}) => {
  return (
    <div className="relative bg-gradient-to-r from-primary-600 to-secondary-600 dark:from-primary-700 dark:to-secondary-700 py-20 md:py-28 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center text-white"
        >
          {/* Breadcrumbs */}
          {breadcrumbs.length > 0 && (
            <nav className="mb-4">
              <ol className="flex items-center justify-center gap-2 text-sm">
                {breadcrumbs.map((crumb, index) => (
                  <li key={index} className="flex items-center gap-2">
                    {index > 0 && <span>/</span>}
                    {crumb.link ? (
                      <a href={crumb.link} className="hover:text-primary-200 dark:hover:text-primary-300 transition-colors">
                        {crumb.label}
                      </a>
                    ) : (
                      <span className="text-primary-200">{crumb.label}</span>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          <h1 className="text-white mb-4">{title}</h1>
          {subtitle && (
            <p className="text-xl text-primary-100 dark:text-primary-200 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default PageHeader;
