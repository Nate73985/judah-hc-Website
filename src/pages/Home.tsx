import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import { Phone, Heart, Users, ClipboardCheck, HeartHandshake, Star, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'
import FAQAccordion from '../components/FAQAccordion'
import ContactForm from '../components/ContactForm'
import HealthcareImage from '../components/HealthcareImage'
import HeroCarousel from '../components/HeroCarousel'

export default function Home() {
  const services = [
    {
      title: 'Skilled Nursing',
      description: 'Professional nursing care in the comfort of your home.',
    },
    {
      title: 'Home Health Aide',
      description: 'Compassionate assistance with daily living activities.',
    },
    {
      title: 'Personal Care',
      description: 'Personalized support tailored to individual needs.',
    },
    {
      title: 'Therapy Services',
      description: 'Physical, occupational, and speech therapy at home.',
    },
    {
      title: 'Medication Management',
      description: 'Expert oversight of medication schedules and administration.',
    },
    {
      title: 'Companion Care',
      description: 'Friendly companionship and emotional support.',
    },
  ]

  const trustPoints = [
    { icon: Heart, text: 'Compassionate Care' },
    { icon: Users, text: 'Skilled Professionals' },
    { icon: ClipboardCheck, text: 'Personalized Plans' },
    { icon: HeartHandshake, text: 'Coordinated Support' },
  ]

  const whyChooseUs = [
    'Licensed and insured healthcare professionals',
    '24/7 availability for urgent care needs',
    'Family-centered approach to care planning',
    'Respect for patient dignity and independence',
    'Seamless coordination with physicians and specialists',
  ]

  const testimonials = [
    {
      text: 'The care team from Judah Health Care Services has been exceptional. They treat my mother with such respect and kindness, and I have complete peace of mind knowing she\'s in good hands.',
      initials: 'M.R.',
    },
    {
      text: 'Professional, reliable, and truly compassionate. The nurses are knowledgeable and always take time to explain everything. We couldn\'t be happier with the service.',
      initials: 'J.S.',
    },
    {
      text: 'Having Judah Health Care Services has made such a difference in our family\'s life. The personalized care plan addresses all our needs, and the staff feels like part of our family.',
      initials: 'A.T.',
    },
  ]

  const faqItems = [
    {
      question: 'What services does Judah Health Care Services provide?',
      answer: 'We offer a comprehensive range of home care and home health services including skilled nursing, home health aide services, personal care, therapy services (physical, occupational, and speech), medication management, and companion care. All services are tailored to meet individual patient needs.',
    },
    {
      question: 'Who is eligible for home health services?',
      answer: 'Eligibility typically requires a physician\'s order and a need for skilled care. Patients must be homebound, meaning leaving home requires considerable effort. We work with patients of all ages who need medical care or assistance with daily activities in their home setting.',
    },
    {
      question: 'How do I schedule services?',
      answer: 'Simply call us at 781-500-2893 or use our contact form. Our team will conduct an initial assessment to understand your needs and develop a personalized care plan. We aim to begin services as quickly as possible while ensuring all necessary approvals are in place.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We provide services throughout Massachusetts, with a focus on the greater Boston area including Lynn and surrounding communities. Contact us to confirm service availability in your specific location.',
    },
    {
      question: 'How do I get started?',
      answer: 'Getting started is easy. Contact us by phone or email to discuss your needs. We\'ll schedule a free consultation and assessment, work with your physician if needed, and create a care plan that fits your situation. Our team handles all the coordination to make the process smooth.',
    },
    {
      question: 'How do you protect patient privacy?',
      answer: 'We strictly adhere to HIPAA regulations and maintain the highest standards of patient confidentiality. All staff members are trained in privacy protocols, and we use secure systems to protect all patient information. Your privacy and dignity are our top priorities.',
    },
  ]

  return (
    <>
      <Helmet>
        <title>Judah Health Care Services - Home Care & Home Health in Massachusetts</title>
        <meta 
          name="description" 
          content="Professional home care and home health services in Massachusetts. Skilled nursing, personal care, therapy services, and more. Rooted in Compassion. Driven by Excellence." 
        />
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-blue via-primary-blue-light to-primary-blue-dark text-white overflow-hidden">
        <div className="container-custom section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Quality Home Care You Can Trust
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 mb-8">
                Professional healthcare services delivered with compassion in the comfort of your home.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="tel:781-500-2893"
                  className="btn-secondary text-center"
                  aria-label="Call us at 781-500-2893"
                >
                  <Phone className="inline-block w-5 h-5 mr-2" />
                  Call Now
                </a>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById('contact-section')
                    contactSection?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="btn-outline bg-transparent border-white text-white hover:bg-white hover:text-primary-blue"
                >
                  Request Care
                </button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <HeroCarousel className="w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-gray-50 py-8">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {trustPoints.map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <point.icon className="w-8 h-8 text-primary-blue mx-auto mb-2" />
                <p className="font-semibold text-gray-900">{point.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive home care and home health services tailored to your needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-semibold text-primary-blue mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/services" className="btn-primary">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              How It Works
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Getting started with quality home care is simple
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { step: '1', title: 'Call Us', description: 'Contact us to discuss your care needs and schedule a free consultation.' },
              { step: '2', title: 'Assessment', description: 'We conduct a comprehensive assessment to create your personalized care plan.' },
              { step: '3', title: 'Start Care', description: 'Our skilled professionals begin providing care in your home.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-primary-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-semibold text-primary-blue mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-6">
                Why Choose Judah Health Care Services?
              </h2>
              <ul className="space-y-4">
                {whyChooseUs.map((point, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <CheckCircle className="w-6 h-6 text-accent-gold flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{point}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
            <HealthcareImage 
              type="nurse"
              className="w-full h-80 md:h-96"
              alt="Skilled nurse providing home health care"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              What Our Families Say
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent-gold text-accent-gold" />
                  ))}
                </div>
                <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-primary-blue font-semibold">— {testimonial.initials}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services
            </p>
          </div>
          <div className="max-w-3xl mx-auto">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact-section" className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-blue mb-4">
              Get Started Today
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Contact us to learn more about how we can help you or your loved one
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <ContactForm />
          </div>
          {/* Map */}
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="rounded-lg overflow-hidden shadow-lg" style={{ height: '400px' }}>
              <iframe
                src="https://www.google.com/maps?q=56+Central+Avenue+Suite+314+Lynn+MA+01901&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Judah Health Care Services Location - 56 Central Avenue, Suite 314, Lynn, MA 01901"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
