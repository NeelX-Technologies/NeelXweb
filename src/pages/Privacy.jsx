import { motion } from 'framer-motion';
import PageHeader from '../components/common/PageHeader';

const Privacy = () => {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        subtitle="Your privacy is important to us. Learn how we collect, use, and protect your data"
        breadcrumbs={[
          { label: 'Home', link: '/' },
          { label: 'Privacy Policy' }
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

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">1. Introduction</h2>
            <p className="text-dark-700 dark:text-dark-300 mb-6">
              NeelX Technologies ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">2. Information We Collect</h2>
            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">2.1 Personal Information</h3>
            <p className="text-dark-700 dark:text-dark-300 mb-4">We may collect personal information that you voluntarily provide to us when you:</p>
            <ul className="list-disc pl-6 mb-4 text-dark-700 dark:text-dark-300">
              <li>Fill out contact forms or inquiry forms</li>
              <li>Request quotes or information about our services</li>
              <li>Subscribe to our newsletter</li>
              <li>Create an account or sign a service contract</li>
              <li>Communicate with us via email, phone, or chat</li>
            </ul>
            <p className="text-dark-700 dark:text-dark-300 mb-4">This information may include:</p>
            <ul className="list-disc pl-6 mb-6 text-dark-700 dark:text-dark-300">
              <li>Name and contact information (email, phone number, address)</li>
              <li>Company name and business information</li>
              <li>Payment and billing information</li>
              <li>Project requirements and preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="text-xl font-semibold text-dark-800 dark:text-dark-200 mb-3">2.2 Automatically Collected Information</h3>
            <p className="text-dark-700 dark:text-dark-300 mb-4">When you visit our website, we automatically collect certain information:</p>
            <ul className="list-disc pl-6 mb-6 text-dark-700 dark:text-dark-300">
              <li>IP address and browser type</li>
              <li>Device information and operating system</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website and exit pages</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">3. How We Use Your Information</h2>
            <p className="text-dark-700 dark:text-dark-300 mb-4">We use collected information for the following purposes:</p>
            <ul className="list-disc pl-6 mb-6 text-dark-700 dark:text-dark-300">
              <li><strong>Service Delivery:</strong> To provide, maintain, and improve our services</li>
              <li><strong>Communication:</strong> To respond to inquiries and send project updates</li>
              <li><strong>Marketing:</strong> To send newsletters and promotional materials (with your consent)</li>
              <li><strong>Analytics:</strong> To analyze website usage and improve user experience</li>
              <li><strong>Legal Compliance:</strong> To comply with legal obligations and enforce our terms</li>
              <li><strong>Security:</strong> To detect, prevent, and address fraud or security issues</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-dark-700 dark:text-dark-300 mb-4">We do not sell your personal information. We may share your information with:</p>
            <ul className="list-disc pl-6 mb-6 text-dark-700 dark:text-dark-300">
              <li><strong>Service Providers:</strong> Third-party vendors who help us operate our business (hosting, analytics, payment processing)</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
              <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
            </ul>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">5. Cookies and Tracking Technologies</h2>
            <p className="text-dark-700 mb-4">We use cookies and similar technologies to:</p>
            <ul className="list-disc pl-6 mb-4 text-dark-700">
              <li>Remember your preferences and settings</li>
              <li>Analyze website traffic and user behavior</li>
              <li>Provide personalized content and advertising</li>
              <li>Improve website functionality and performance</li>
            </ul>
            <p className="text-dark-700 mb-6">
              You can control cookies through your browser settings. However, disabling cookies may limit your ability to use certain features of our website.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">6. Data Security</h2>
            <p className="text-dark-700 mb-4">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These measures include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-dark-700">
              <li>SSL/TLS encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Regular security audits and updates</li>
              <li>Access controls and authentication</li>
              <li>Employee training on data protection</li>
            </ul>
            <p className="text-dark-700 mb-6">
              However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">7. Data Retention</h2>
            <p className="text-dark-700 mb-6">
              We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. When information is no longer needed, we will securely delete or anonymize it.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">8. Your Rights and Choices</h2>
            <p className="text-dark-700 mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="list-disc pl-6 mb-6 text-dark-700">
              <li><strong>Access:</strong> Request access to your personal information</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data</li>
              <li><strong>Deletion:</strong> Request deletion of your personal information</li>
              <li><strong>Opt-Out:</strong> Unsubscribe from marketing communications</li>
              <li><strong>Data Portability:</strong> Receive your data in a portable format</li>
              <li><strong>Objection:</strong> Object to certain data processing activities</li>
            </ul>
            <p className="text-dark-700 mb-6">
              To exercise these rights, please contact us at privacy@neelx.com.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">9. Third-Party Links</h2>
            <p className="text-dark-700 mb-6">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these sites. We encourage you to read their privacy policies before providing any information.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">10. Children's Privacy</h2>
            <p className="text-dark-700 mb-6">
              Our services are not directed to individuals under the age of 18. We do not knowingly collect personal information from children. If we discover that we have collected information from a child, we will delete it immediately.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">11. International Data Transfers</h2>
            <p className="text-dark-700 mb-6">
              Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this policy.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">12. Changes to This Policy</h2>
            <p className="text-dark-700 mb-6">
              We may update this Privacy Policy from time to time. We will notify you of significant changes by posting the new policy on our website with an updated "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
            </p>

            <h2 className="text-2xl font-bold text-dark-900 mb-4">13. Contact Us</h2>
            <p className="text-dark-700 mb-2">
              If you have questions or concerns about this Privacy Policy, please contact us:
            </p>
            <div className="bg-dark-50 rounded-lg p-6">
              <p className="text-dark-700 mb-2"><strong>Email:</strong> privacy@neelx.com</p>
              <p className="text-dark-700 mb-2"><strong>Phone:</strong> +1 (555) 123-4567</p>
              <p className="text-dark-700 mb-0"><strong>Address:</strong> 123 Tech Street, San Francisco, CA 94105</p>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Privacy;
