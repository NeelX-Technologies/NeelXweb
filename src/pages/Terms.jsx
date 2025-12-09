import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const Terms = () => {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        subtitle="Please read these terms carefully before using our services"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Terms & Conditions' }
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

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
            <p className="text-dark-700 dark:text-dark-300 mb-6">
              By accessing and using NeelX Technologies' services, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">2. Services Description</h2>
            <p className="text-dark-700 dark:text-dark-300 mb-4">
              NeelX Technologies provides web development, web design, SEO optimization, digital marketing, and website maintenance services. We reserve the right to modify, suspend, or discontinue any aspect of our services at any time.
            </p>
            <p className="text-dark-700 dark:text-dark-300 mb-6">
              All services are subject to availability and we reserve the right to limit quantities or refuse service to anyone at our sole discretion.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">3. Project Agreements</h2>
            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">3.1 Service Contract</h3>
            <ul className="list-disc pl-6 mb-4 text-dark-700 dark:text-dark-300">
              <li>All projects require a signed contract or written agreement</li>
              <li>Project scope, deliverables, and timelines will be clearly defined</li>
              <li>Changes to project scope may result in additional charges</li>
              <li>Both parties must agree to any modifications in writing</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">3.2 Timeline and Delivery</h3>
            <ul className="list-disc pl-6 mb-6 text-dark-700 dark:text-dark-300">
              <li>Project timelines are estimates and may vary based on client responsiveness</li>
              <li>Delays caused by client feedback or content provision extend the delivery date</li>
              <li>We will make reasonable efforts to meet agreed-upon deadlines</li>
              <li>Rush projects may incur additional charges</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">4. Payment Terms</h2>
            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">4.1 Payment Schedule</h3>
            <ul className="list-disc pl-6 mb-4 text-dark-700 dark:text-dark-300">
              <li>50% deposit required before project commencement</li>
              <li>Remaining 50% due upon project completion</li>
              <li>Monthly maintenance plans billed in advance</li>
              <li>Late payments may incur a 5% monthly interest charge</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">4.2 Accepted Payment Methods</h3>
            <p className="text-dark-700 dark:text-dark-300 mb-6">
              We accept credit cards, debit cards, bank transfers, PayPal, and other digital payment methods. All prices are in USD unless otherwise specified.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">5. Intellectual Property</h2>
            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">5.1 Client Ownership</h3>
            <p className="text-dark-700 dark:text-dark-300 mb-4">
              Upon full payment, the client owns all custom design work, content, and deliverables created specifically for their project. This does not include pre-existing templates, frameworks, or third-party assets.
            </p>

            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">5.2 Portfolio Rights</h3>
            <p className="text-dark-700 dark:text-dark-300 mb-6">
              NeelX Technologies reserves the right to display completed work in our portfolio, case studies, and marketing materials unless explicitly prohibited in writing by the client.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">6. Client Responsibilities</h2>
            <ul className="list-disc pl-6 mb-6 text-dark-700">
              <li>Provide timely feedback and required content</li>
              <li>Ensure all provided content is legally owned or licensed</li>
              <li>Maintain communication throughout the project</li>
              <li>Review and approve deliverables within specified timeframes</li>
              <li>Comply with all applicable laws and regulations</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">7. Warranties and Disclaimers</h2>
            <p className="text-dark-700 mb-4">
              We warrant that all services will be performed in a professional and workmanlike manner. However, we do not guarantee specific results or rankings from SEO or digital marketing services.
            </p>
            <p className="text-dark-700 mb-6">
              Our services are provided "as is" without warranty of any kind, either express or implied, including but not limited to the implied warranties of merchantability and fitness for a particular purpose.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">8. Limitation of Liability</h2>
            <p className="text-dark-700 mb-6">
              NeelX Technologies shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising out of or related to our services.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">9. Confidentiality</h2>
            <p className="text-dark-700 mb-6">
              We treat all client information as confidential and will not disclose it to third parties without consent, except as required by law or necessary to provide services.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">10. Termination</h2>
            <p className="text-dark-700 mb-4">
              Either party may terminate services with 30 days written notice. Upon termination:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-700">
              <li>Client must pay for all work completed to date</li>
              <li>We will deliver all completed work and source files</li>
              <li>Refunds are subject to our refund policy</li>
              <li>Confidentiality obligations remain in effect</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">11. Dispute Resolution</h2>
            <p className="text-dark-700 mb-6">
              Any disputes arising from these terms shall be resolved through good faith negotiation. If negotiation fails, disputes will be resolved through binding arbitration in accordance with applicable laws.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">12. Governing Law</h2>
            <p className="text-dark-700 mb-6">
              These terms shall be governed by and construed in accordance with the laws of the jurisdiction in which NeelX Technologies operates, without regard to its conflict of law provisions.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">13. Changes to Terms</h2>
            <p className="text-dark-700 mb-6">
              We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting to our website. Continued use of our services constitutes acceptance of modified terms.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">14. Contact Information</h2>
            <p className="text-dark-700 mb-2">
              For questions about these terms, please contact us:
            </p>
            <div className="bg-dark-50 rounded-lg p-6">
              <p className="text-dark-700 mb-2"><strong>Email:</strong> legal@neelx.com</p>
              <p className="text-dark-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p className="text-dark-700 mb-0"><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Terms;
