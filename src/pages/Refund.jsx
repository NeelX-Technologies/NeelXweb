import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const Refund = () => {
  return (
    <>
      <PageHeader
        title="Refund Policy"
        subtitle="Understanding our refund and cancellation terms"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Refund Policy' }
        ]}
      />

      <section className="section-padding bg-white dark:bg-dark-900">
        <div className="container-custom max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="prose prose-lg max-w-none"
          >
            <div className="bg-dark-50 dark:bg-dark-800 rounded-xl p-6 mb-8">
              <p className="text-dark-600 dark:text-dark-300 mb-0">
                <strong>Last Updated:</strong> December 8, 2025
              </p>
            </div>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">1. Overview</h2>
            <p className="text-dark-700 dark:text-dark-300 mb-6">
              At NeelX Technologies, we strive for complete client satisfaction. This Refund Policy outlines the conditions under which refunds may be requested and processed for our web development, design, SEO, digital marketing, and maintenance services.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">2. Project Deposits</h2>
            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">2.1 Non-Refundable Deposits</h3>
            <p className="text-dark-700 dark:text-dark-300 mb-4">
              The initial 50% deposit paid before project commencement is non-refundable. This deposit covers:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-700 dark:text-dark-300">
              <li>Project planning and strategy development</li>
              <li>Resource allocation and team assignment</li>
              <li>Initial research and competitive analysis</li>
              <li>Opportunity cost of declined projects</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">2.2 Deposit Usage</h3>
            <p className="text-dark-700 dark:text-dark-300 mb-6">
              Once work has commenced, the deposit is considered earned and will not be refunded under any circumstances, including project cancellation by the client.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">3. Project Cancellation</h2>
            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">3.1 Client-Initiated Cancellation</h3>
            <p className="text-dark-700 dark:text-dark-300 mb-4">
              If you wish to cancel a project after work has begun:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-700 dark:text-dark-300">
              <li>The initial deposit is non-refundable</li>
              <li>You will be billed for all work completed to date at our standard hourly rate</li>
              <li>All completed deliverables will be provided upon full payment</li>
              <li>Cancellation must be submitted in writing via email</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">3.2 NeelX-Initiated Cancellation</h3>
            <p className="text-dark-700 dark:text-dark-300 mb-6">
              If we cancel a project due to circumstances beyond our control, we will refund any payments received minus the value of work already completed.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">4. Service-Specific Refund Policies</h2>
            
            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">4.1 Website Development Projects</h3>
            <ul className="list-disc pl-6 mb-4 text-dark-700 dark:text-dark-300">
              <li>Refunds are not available once design mockups are approved</li>
              <li>Changes to approved designs may incur additional charges</li>
              <li>Final payment is due upon project completion before site launch</li>
              <li>Post-launch support is subject to separate maintenance agreements</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">4.2 SEO Services</h3>
            <ul className="list-disc pl-6 mb-4 text-dark-700 dark:text-dark-300">
              <li>SEO is a long-term strategy; results are not guaranteed within a specific timeframe</li>
              <li>No refunds are provided for SEO services after work has commenced</li>
              <li>Monthly SEO packages require 30 days notice for cancellation</li>
              <li>Partial month cancellations are not pro-rated</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark-800 mb-3">4.3 Digital Marketing Services</h3>
            <ul className="list-disc pl-6 mb-4 text-dark-700">
              <li>Marketing campaign results depend on various factors beyond our control</li>
              <li>Ad spend budgets are separate from service fees and are non-refundable</li>
              <li>Service fees are non-refundable once campaign has launched</li>
              <li>Campaign modifications are subject to additional fees</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark-800 mb-3">4.4 Maintenance Plans</h3>
            <ul className="list-disc pl-6 mb-6 text-dark-700">
              <li>Monthly maintenance plans are billed in advance</li>
              <li>Cancellation requires 30 days written notice</li>
              <li>No refunds for partial months or unused services</li>
              <li>Emergency support requests outside plan scope incur additional fees</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">5. Satisfaction Guarantee</h2>
            <p className="text-dark-700 mb-4">
              We offer a satisfaction guarantee on all completed projects:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-700">
              <li>Unlimited revisions during the agreed revision period</li>
              <li>Free bug fixes for 30 days post-launch</li>
              <li>Technical support during warranty period</li>
              <li>Performance optimization if issues arise from our work</li>
            </ul>
            <p className="text-dark-700 mb-6">
              This guarantee does not constitute grounds for a refund but ensures we will work with you to achieve satisfaction.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">6. Refund Eligibility</h2>
            <p className="text-dark-700 mb-4">
              Refunds may be considered in the following exceptional circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-700">
              <li>We fail to deliver agreed-upon services without valid reason</li>
              <li>Duplicate payment or billing errors</li>
              <li>Services were charged but not provided</li>
              <li>Technical issues on our end prevent service delivery</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">7. Non-Refundable Items</h2>
            <p className="text-dark-700 mb-4">
              The following are strictly non-refundable:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-700">
              <li>Initial deposits and setup fees</li>
              <li>Third-party costs (domains, hosting, licenses, ad spend)</li>
              <li>Custom development work already completed</li>
              <li>Time spent on consultations and meetings</li>
              <li>Services where deliverables have been provided</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">8. Refund Process</h2>
            <p className="text-dark-700 mb-4">
              To request a refund:
            </p>
            <ol className="list-decimal pl-6 mb-6 text-dark-700">
              <li>Submit a written refund request to billing@neelx.com</li>
              <li>Include project details, invoice number, and reason for refund</li>
              <li>Allow 5-7 business days for review</li>
              <li>If approved, refunds are processed within 14 business days</li>
              <li>Refunds are issued to the original payment method</li>
            </ol>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">9. Dispute Resolution</h2>
            <p className="text-dark-700 mb-6">
              If you're unsatisfied with our decision on a refund request, we encourage you to contact us to discuss the matter further. We're committed to finding fair solutions and maintaining positive client relationships.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">10. Chargebacks</h2>
            <p className="text-dark-700 mb-6">
              Initiating a chargeback without first attempting to resolve the issue through our refund process may result in suspension of services and legal action to recover costs and fees.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">11. Changes to Refund Policy</h2>
            <p className="text-dark-700 mb-6">
              We reserve the right to modify this Refund Policy at any time. Changes will be posted on our website with an updated date. Your continued use of our services after changes constitutes acceptance of the modified policy.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">12. Contact Information</h2>
            <p className="text-dark-700 mb-2">
              For refund requests or questions about this policy:
            </p>
            <div className="bg-dark-50 rounded-lg p-6">
              <p className="text-dark-700 mb-2"><strong>Email:</strong> billing@neelx.com</p>
              <p className="text-dark-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p className="text-dark-700 mb-2"><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
              <p className="text-dark-700 mb-0"><strong>Business Hours:</strong> Monday - Friday, 9:00 AM - 6:00 PM PST</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Refund;
