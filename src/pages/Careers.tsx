import { Helmet } from 'react-helmet-async'
import { Mail, Users, Heart, Briefcase } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Careers() {

  const roles = [
    {
      title: 'Home Health Aide',
      description: 'Provide compassionate personal care and assistance with daily living activities.',
    },
    {
      title: 'Certified Nursing Assistant (CNA)',
      description: 'Support patients with healthcare needs under the supervision of registered nurses.',
    },
    {
      title: 'Registered Nurse (RN)',
      description: 'Deliver skilled nursing care, assessments, and care coordination.',
    },
    {
      title: 'Care Coordinator',
      description: 'Coordinate care plans, communicate with families, and manage patient services.',
    },
  ]

  const handleEmailResume = (role: string) => {
    const subject = `Career Inquiry - ${role}`
    const body = `Dear Hiring Manager,\n\nI am interested in the ${role} position at Judah Health Care Services.\n\nPlease find my resume attached.\n\nThank you for your consideration.`
    
    const mailtoLink = `mailto:judahhealthcareservices@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailtoLink
  }

  return (
    <>
      <Helmet>
        <title>Careers - Judah Health Care Services</title>
        <meta 
          name="description" 
          content="Join the Judah Health Care Services team. We're hiring Home Health Aides, CNAs, RNs, and Care Coordinators in Massachusetts." 
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join Our Team</h1>
            <p className="text-xl text-gray-200">
              Make a meaningful difference in the lives of patients and families. We're looking for compassionate healthcare professionals who share our commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                At Judah Health Care Services, we value our team members and recognize that exceptional care starts with exceptional people. We offer a supportive work environment, competitive compensation, and opportunities for professional growth.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                If you're passionate about providing high-quality, compassionate care and want to be part of a team that makes a real difference, we'd love to hear from you.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary-blue rounded-lg flex items-center justify-center flex-shrink-0">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-blue mb-2">
                      {role.title}
                    </h3>
                    <p className="text-gray-600">{role.description}</p>
                  </div>
                </div>
                <button
                  onClick={() => handleEmailResume(role.title)}
                  className="btn-primary w-full flex items-center justify-center gap-2"
                >
                  <Mail className="w-5 h-5" />
                  Email Your Resume
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits/Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-blue mb-2">
                Supportive Team
              </h3>
              <p className="text-gray-600">
                Work with a collaborative team that values your expertise and supports your professional growth.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-blue mb-2">
                Meaningful Work
              </h3>
              <p className="text-gray-600">
                Make a real difference in the lives of patients and families in your community.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-primary-blue mb-2">
                Professional Growth
              </h3>
              <p className="text-gray-600">
                Opportunities for training, development, and career advancement in healthcare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Ready to Apply?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Send your resume to us and we'll be in touch. We review applications on an ongoing basis.
          </p>
          <button
            onClick={() => handleEmailResume('General Inquiry')}
            className="btn-primary flex items-center justify-center gap-2 mx-auto"
          >
            <Mail className="w-5 h-5" />
            Email Your Resume
          </button>
        </div>
      </section>
    </>
  )
}
