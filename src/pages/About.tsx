import { Helmet } from 'react-helmet-async'
import { Heart, Target, Users, Award } from 'lucide-react'
import { motion } from 'framer-motion'
import HealthcareImage from '../components/HealthcareImage'

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every patient and family with genuine care, empathy, and understanding.',
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We maintain the highest standards of care through continuous training and quality improvement.',
    },
    {
      icon: Users,
      title: 'Patient-Centered',
      description: 'Every care plan is tailored to the unique needs, preferences, and goals of each individual.',
    },
    {
      icon: Award,
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical practices in all our interactions.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>About Us - Judah Health Care Services</title>
        <meta 
          name="description" 
          content="Learn about Judah Health Care Services - a patient and family-centered home care provider in Massachusetts. Rooted in Compassion. Driven by Excellence." 
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Judah Health Care Services</h1>
            <p className="text-xl text-gray-200 mb-4">
              Rooted in Compassion. Driven by Excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6 text-center">
                Our Mission
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                At Judah Health Care Services, we are dedicated to providing exceptional home care and home health services that enable individuals to live safely, comfortably, and with dignity in their own homes. We believe that quality healthcare should be accessible, personalized, and delivered with the utmost respect for each patient's unique needs and preferences.
              </p>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Our mission is to enhance the quality of life for our patients and provide peace of mind for their families through compassionate, skilled, and reliable care. We are committed to building trusting relationships with patients, families, and healthcare providers while maintaining the highest standards of clinical excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Brand Line Highlight */}
      <section className="section-padding bg-accent-gold">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-3xl md:text-4xl font-bold text-primary-blue">
              Rooted in Compassion.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-primary-blue mt-2">
              Driven by Excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                Our Approach to Care
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                We understand that choosing home care services is an important decision that affects the entire family. Our patient and family-centered approach ensures that we work collaboratively with you to develop a care plan that addresses not just medical needs, but also emotional, social, and practical concerns.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                Our team of licensed healthcare professionals brings years of experience and a deep commitment to providing care that respects each individual's dignity, independence, and personal preferences. We take the time to listen, understand, and respond to the unique circumstances of each patient and family we serve.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Whether you need skilled nursing care, assistance with daily activities, therapy services, or companion care, we coordinate all aspects of your care to ensure seamless communication with your physicians and other healthcare providers. Our goal is to make the home care experience as smooth and stress-free as possible for everyone involved.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <HealthcareImage
                type="nurse"
                className="w-full h-80 md:h-96"
                alt="Healthcare professional providing patient-centered care"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-blue rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-primary-blue mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
