import { Helmet } from 'react-helmet-async'
import { Shield } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Judah Health Care Services</title>
        <meta 
          name="description" 
          content="Privacy Policy for Judah Health Care Services. Learn how we protect your personal and health information." 
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-12 h-12" />
              <h1 className="text-4xl md:text-5xl font-bold">Privacy Policy</h1>
            </div>
            <p className="text-xl text-gray-200">
              Your privacy and the security of your health information are our top priorities.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto prose prose-lg">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8 text-gray-700"
            >
              <div>
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Last Updated</h2>
                <p>This Privacy Policy was last updated on {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Our Commitment to Privacy</h2>
                <p>
                  Judah Health Care Services is committed to protecting the privacy and confidentiality of your personal and health information. We understand the sensitive nature of health information and take our responsibility to safeguard it seriously.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Health Information Privacy (HIPAA)</h2>
                <p>
                  As a healthcare provider, we are required by law to maintain the privacy of your protected health information (PHI) and to provide you with notice of our legal duties and privacy practices. We follow the Health Insurance Portability and Accountability Act (HIPAA) and all applicable state and federal privacy laws.
                </p>
                <p>
                  We use and disclose your health information only as permitted by law and as necessary to provide you with quality healthcare services. This may include sharing information with your physicians, other healthcare providers involved in your care, insurance companies for billing purposes, and as required by law.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Information We Collect</h2>
                <p>We collect information that you provide to us, including:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Personal identification information (name, address, phone number, email)</li>
                  <li>Health information and medical history</li>
                  <li>Insurance and billing information</li>
                  <li>Emergency contact information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-blue mb-4">How We Use Your Information</h2>
                <p>We use your information to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide healthcare services and coordinate your care</li>
                  <li>Communicate with you and your family about your care</li>
                  <li>Process billing and insurance claims</li>
                  <li>Comply with legal and regulatory requirements</li>
                  <li>Improve our services and quality of care</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Your Rights</h2>
                <p>You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access and obtain a copy of your health information</li>
                  <li>Request amendments to your health information</li>
                  <li>Request restrictions on how we use or disclose your information</li>
                  <li>Request confidential communications</li>
                  <li>File a complaint if you believe your privacy rights have been violated</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Security Measures</h2>
                <p>
                  We implement appropriate administrative, physical, and technical safeguards to protect your information from unauthorized access, use, or disclosure. Our staff members are trained on privacy and security protocols, and we regularly review and update our security measures.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy or wish to exercise your privacy rights, please contact us:
                </p>
                <p className="mt-4">
                  <strong>Judah Health Care Services</strong><br />
                  56 Central Avenue, Suite 314<br />
                  Lynn, MA 01901<br />
                  Phone: <a href="tel:781-500-2893" className="text-primary-blue hover:underline">781-500-2893</a><br />
                  Email: <a href="mailto:judahhealthcareservices@gmail.com" className="text-primary-blue hover:underline">judahhealthcareservices@gmail.com</a>
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-primary-blue mb-4">Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website and updating the "Last Updated" date. We encourage you to review this policy periodically.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
