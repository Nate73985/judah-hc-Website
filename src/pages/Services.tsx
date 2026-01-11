import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import HealthcareImage from '../components/HealthcareImage'

export default function Services() {
  const services = [
    {
      title: 'Skilled Nursing',
      description: 'Our licensed registered nurses provide comprehensive medical care in your home, including wound care, medication administration, health monitoring, and patient education.',
      includes: [
        'Wound care and dressing changes',
        'Medication administration and monitoring',
        'Vital signs monitoring',
        'IV therapy and injections',
        'Health assessments and care planning',
        'Patient and family education',
        'Coordination with physicians',
      ],
      imageType: 'nurse' as const,
      imageAlt: 'Professional nurse providing skilled nursing care at home',
    },
    {
      title: 'Home Health Aide',
      description: 'Certified home health aides assist with personal care and daily living activities, helping patients maintain independence and dignity in their own homes.',
      includes: [
        'Bathing and personal hygiene assistance',
        'Grooming and dressing support',
        'Mobility assistance and transfers',
        'Meal preparation and feeding assistance',
        'Light housekeeping related to patient care',
        'Companionship and emotional support',
        'Medication reminders',
      ],
      imageType: 'companion' as const,
      imageAlt: 'Home health aide assisting with personal care',
    },
    {
      title: 'Personal Care',
      description: 'Personalized assistance with daily activities tailored to individual needs, promoting independence and quality of life.',
      includes: [
        'Assistance with activities of daily living (ADLs)',
        'Personal hygiene and grooming',
        'Meal planning and preparation',
        'Errands and transportation assistance',
        'Medication reminders',
        'Exercise and mobility support',
        'Respite care for family caregivers',
      ],
      imageType: 'companion' as const,
      imageAlt: 'Personal care assistant helping with daily activities',
    },
    {
      title: 'Therapy Services',
      description: 'Licensed therapists provide physical, occupational, and speech therapy services in the comfort of your home to help restore function and improve quality of life.',
      includes: [
        'Physical therapy for mobility and strength',
        'Occupational therapy for daily living skills',
        'Speech therapy for communication and swallowing',
        'Fall prevention and balance training',
        'Pain management techniques',
        'Home safety assessments',
        'Therapeutic exercise programs',
      ],
      imageType: 'therapy' as const,
      imageAlt: 'Physical therapist conducting therapy session at home',
    },
    {
      title: 'Medication Management',
      description: 'Expert oversight and support for medication schedules, ensuring safety and adherence to prescribed treatments.',
      includes: [
        'Medication administration and monitoring',
        'Medication reconciliation and review',
        'Education on medication purpose and side effects',
        'Medication schedule organization',
        'Coordination with pharmacies and physicians',
        'Monitoring for drug interactions',
        'Compliance tracking and reporting',
      ],
      imageType: 'medication' as const,
      imageAlt: 'Healthcare professional providing medication management',
    },
    {
      title: 'Companion Care',
      description: 'Friendly companionship and emotional support to reduce isolation and enhance quality of life for individuals living at home.',
      includes: [
        'Conversation and social interaction',
        'Recreational activities and hobbies',
        'Accompaniment to appointments and outings',
        'Reading and entertainment',
        'Light meal preparation',
        'Safety supervision',
        'Family communication and updates',
      ],
      imageType: 'companion' as const,
      imageAlt: 'Companion caregiver providing friendly support',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Our Services - Judah Health Care Services</title>
        <meta 
          name="description" 
          content="Comprehensive home care and home health services including skilled nursing, home health aide, personal care, therapy services, medication management, and companion care." 
        />
      </Helmet>

      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-blue to-primary-blue-dark text-white section-padding">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              We provide comprehensive home care and home health services designed to meet your unique needs. Our skilled professionals deliver compassionate, high-quality care in the comfort of your home.
            </p>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <HealthcareImage
                    type={service.imageType}
                    className="w-full h-80 md:h-96"
                    alt={service.imageAlt}
                  />
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl font-bold text-primary-blue mb-4">
                    {service.title}
                  </h2>
                  <p className="text-lg text-gray-700 mb-6">
                    {service.description}
                  </p>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-blue mb-4">
                      What It Includes:
                    </h3>
                    <ul className="space-y-3">
                      {service.includes.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
            Not Sure What You Need?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Our care coordinators are here to help you understand your options and create a personalized care plan that fits your needs.
          </p>
          <Link to="/contact" className="btn-primary">
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
