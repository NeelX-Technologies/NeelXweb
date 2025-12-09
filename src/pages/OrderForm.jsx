import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import PageHeader from '../components/common/PageHeader';
import { servicesData } from '../data/servicesData';
import { validateEmail, validatePhone } from '../utils/helpers';

const OrderForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    // Contact Information
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    website: '',
    
    // Project Details
    serviceType: '',
    projectBudget: '',
    timeline: '',
    projectDescription: '',
    
    // Additional Services
    additionalServices: [],
    
    // Preferences
    hearAboutUs: '',
    preferredContact: 'email',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const budgetRanges = [
    'Under ₹500',
    '₹500 - ₹1,000',
    '₹1,000 - ₹2,500',
    '₹2,500 - ₹5,000',
    '₹5,000 - ₹10,000',
    'Over ₹10,000',
  ];

  const timelineOptions = [
    'ASAP (Within 2 weeks)',
    '1 Month',
    '2-3 Months',
    '3-6 Months',
    'Flexible',
  ];

  const additionalServiceOptions = [
    'SEO Optimization',
    'Content Writing',
    'Logo Design',
    'Hosting Setup',
    'Domain Registration',
    'Email Setup',
    'Social Media Integration',
    'Analytics Setup',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleCheckboxChange = (service) => {
    setFormData(prev => ({
      ...prev,
      additionalServices: prev.additionalServices.includes(service)
        ? prev.additionalServices.filter(s => s !== service)
        : [...prev.additionalServices, service]
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    // Required fields
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Invalid email format';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Invalid phone format';
    }
    if (!formData.serviceType) newErrors.serviceType = 'Please select a service';
    if (!formData.projectBudget) newErrors.projectBudget = 'Please select a budget range';
    if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
    if (!formData.projectDescription.trim()) {
      newErrors.projectDescription = 'Project description is required';
    } else if (formData.projectDescription.trim().length < 50) {
      newErrors.projectDescription = 'Please provide at least 50 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    // TODO: Integrate with EmailJS
    // Example EmailJS integration:
    // emailjs.send('service_id', 'template_id', formData, 'user_id')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //     navigate('/thank-you');
    //   })
    //   .catch((err) => {
    //     console.error('FAILED...', err);
    //     setErrors({ submit: 'Failed to submit. Please try again.' });
    //     setIsSubmitting(false);
    //   });

    // Simulate API call
    setTimeout(() => {
      console.log('Order Form Submitted:', formData);
      navigate('/thank-you');
    }, 2000);
  };

  return (
    <>
      <PageHeader
        title="Start Your Project"
        subtitle="Tell us about your project and we'll get back to you within 24 hours"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Order Form' }
        ]}
      />

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          {/* Progress Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <span className="font-semibold text-dark-900 dark:text-white">Project Details</span>
              </div>
              <div className="w-16 h-1 bg-dark-200 dark:bg-dark-700"></div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-dark-200 dark:bg-dark-700 text-dark-600 dark:text-dark-400 rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <span className="font-semibold text-dark-600 dark:text-dark-400">Review & Submit</span>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            onSubmit={handleSubmit}
            className="space-y-8"
          >
            {/* Contact Information */}
            <div className="bg-dark-50 dark:bg-dark-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">Contact Information</h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`input-field ${errors.firstName ? 'border-red-500' : ''}`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`input-field ${errors.lastName ? 'border-red-500' : ''}`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`input-field ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`input-field ${errors.phone ? 'border-red-500' : ''}`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="Your Company Inc."
                  />
                </div>

                <div>
                  <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-2">
                    Current Website (if any)
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleChange}
                    className="input-field"
                    placeholder="https://yourwebsite.com"
                  />
                </div>
              </div>
            </div>

            {/* Project Details */}
            <div className="bg-dark-50 dark:bg-dark-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">Project Details</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-2">
                    Service Type <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="serviceType"
                    value={formData.serviceType}
                    onChange={handleChange}
                    className={`input-field ${errors.serviceType ? 'border-red-500' : ''}`}
                  >
                    <option value="">Select a service</option>
                    {servicesData.map(service => (
                      <option key={service.id} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                  {errors.serviceType && (
                    <p className="text-red-500 text-sm mt-1">{errors.serviceType}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-2">
                      Budget Range <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="projectBudget"
                      value={formData.projectBudget}
                      onChange={handleChange}
                      className={`input-field ${errors.projectBudget ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select budget range</option>
                      {budgetRanges.map(range => (
                        <option key={range} value={range}>{range}</option>
                      ))}
                    </select>
                    {errors.projectBudget && (
                      <p className="text-red-500 text-sm mt-1">{errors.projectBudget}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-2">
                      Timeline <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className={`input-field ${errors.timeline ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select timeline</option>
                      {timelineOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                    {errors.timeline && (
                      <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-2">
                    Project Description <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="projectDescription"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    rows="6"
                    className={`input-field ${errors.projectDescription ? 'border-red-500' : ''}`}
                    placeholder="Please describe your project in detail. Include goals, features, target audience, design preferences, and any other relevant information..."
                  ></textarea>
                  <div className="flex justify-between items-center mt-2">
                    {errors.projectDescription && (
                      <p className="text-red-500 text-sm">{errors.projectDescription}</p>
                    )}
                    <p className="text-dark-500 text-sm ml-auto">
                      {formData.projectDescription.length} characters (min. 50)
                    </p>
                  </div>
                </div>

                <div>
                  <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-3">
                    Additional Services (Optional)
                  </label>
                  <div className="grid md:grid-cols-2 gap-3">
                    {additionalServiceOptions.map((service) => (
                      <label
                        key={service}
                        className="flex items-center gap-3 p-3 bg-white dark:bg-dark-900 rounded-lg cursor-pointer hover:bg-primary-50 dark:hover:bg-dark-700 transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={formData.additionalServices.includes(service)}
                          onChange={() => handleCheckboxChange(service)}
                          className="w-5 h-5 text-primary-600 rounded focus:ring-2 focus:ring-primary-600"
                        />
                        <span className="text-dark-700 dark:text-dark-300">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Preferences */}
            <div className="bg-dark-50 dark:bg-dark-800 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-dark-900 dark:text-white mb-6">Additional Information</h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-2">
                    How did you hear about us?
                  </label>
                  <select
                    name="hearAboutUs"
                    value={formData.hearAboutUs}
                    onChange={handleChange}
                    className="input-field"
                  >
                    <option value="">Select an option</option>
                    <option value="google">Google Search</option>
                    <option value="social">Social Media</option>
                    <option value="referral">Referral</option>
                    <option value="advertisement">Advertisement</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-dark-700 dark:text-dark-300 font-semibold mb-3">
                    Preferred Contact Method
                  </label>
                  <div className="flex gap-6">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="email"
                        checked={formData.preferredContact === 'email'}
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-600"
                      />
                      <span className="text-dark-700 dark:text-dark-300">Email</span>
                    </label>
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value="phone"
                        checked={formData.preferredContact === 'phone'}
                        onChange={handleChange}
                        className="w-5 h-5 text-primary-600"
                      />
                      <span className="text-dark-700 dark:text-dark-300">Phone</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>

            {/* Error Message */}
            {errors.submit && (
              <div className="bg-red-50 dark:bg-red-900 border border-red-200 dark:border-red-700 text-red-700 dark:text-red-300 px-6 py-4 rounded-lg">
                {errors.submit}
              </div>
            )}

            {/* Submit Button */}
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`btn btn-primary btn-lg ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-3">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Submitting...
                  </span>
                ) : (
                  'Submit Project Request'
                )}
              </button>
            </div>

            <p className="text-center text-dark-600 dark:text-dark-400 text-sm">
              By submitting this form, you agree to our{' '}
              <a href="/terms" className="text-primary-600 hover:underline">Terms & Conditions</a>
              {' '}and{' '}
              <a href="/privacy" className="text-primary-600 hover:underline">Privacy Policy</a>
            </p>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default OrderForm;
