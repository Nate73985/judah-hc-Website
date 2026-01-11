import { Helmet } from 'react-helmet-async'
import { Phone, Mail, MapPin, FileText, Clock } from 'lucide-react'
import { motion } from 'framer-motion'
import ContactForm from '../components/ContactForm'

export default function Contact() {
  return (
    <>
      <Helmet>
        <title>Contact Us - Judah Health Care Services</title>
        <meta 
          name="description" 
          content="Contact Judah Health Care Services in Lynn, Massachusetts. Call 781-500-2893 or email us to learn more about our home care services." 
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200">
              We're here to help. Reach out to learn more about our services or to schedule a consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <h2 className="text-3xl font-bold text-primary-blue mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                    <a 
                      href="tel:781-500-2893" 
                      className="text-primary-blue hover:text-primary-blue-dark transition-colors text-lg"
                    >
                      781-500-2893
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Fax</h3>
                    <p className="text-gray-700 text-lg">781-998-0510</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <a 
                      href="mailto:judahhealthcareservices@gmail.com" 
                      className="text-primary-blue hover:text-primary-blue-dark transition-colors break-all"
                    >
                      judahhealthcareservices@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                    <p className="text-gray-700">
                      56 Central Avenue, Suite 314<br />
                      Lynn, MA 01901
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Office Hours</h3>
                    <p className="text-gray-700 mb-2">
                      Monday - Friday<br />
                      9:00am - 5:00pm
                    </p>
                    <p className="text-sm text-gray-600">
                      After-hours: Call the main line
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-primary-blue mb-8 text-center">Find Us</h2>
          <div className="bg-gray-200 rounded-lg h-96 flex items-center justify-center">
            <p className="text-gray-500">Map placeholder - Embed Google Maps or preferred mapping service here</p>
          </div>
        </div>
      </section>
    </>
  )
}
