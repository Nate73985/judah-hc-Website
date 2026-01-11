import { useState, FormEvent } from 'react'
import { Mail, CheckCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
    preferredContact: 'phone',
  })
  const [showSuccess, setShowSuccess] = useState(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    
    const subject = `Care Request - ${formData.name}`
    const body = `Name: ${formData.name}\nPhone: ${formData.phone}\nEmail: ${formData.email}\nPreferred Contact Method: ${formData.preferredContact}\n\nMessage:\n${formData.message}`
    
    const mailtoLink = `mailto:judahhealthcareservices@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    
    window.location.href = mailtoLink
    setShowSuccess(true)
    setTimeout(() => setShowSuccess(false), 5000)
    
    // Reset form
    setFormData({
      name: '',
      phone: '',
      email: '',
      message: '',
      preferredContact: 'phone',
    })
  }

  return (
    <div className="bg-white p-8 rounded-lg shadow-lg">
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg flex items-center gap-3"
          >
            <CheckCircle className="w-5 h-5 text-green-600" />
            <p className="text-green-800">Opening your email client...</p>
          </motion.div>
        )}
      </AnimatePresence>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
              Phone *
            </label>
            <input
              type="tel"
              id="phone"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            />
          </div>
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
          />
        </div>
        <div>
          <label htmlFor="preferredContact" className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Contact Method
          </label>
          <select
            id="preferredContact"
            value={formData.preferredContact}
            onChange={(e) => setFormData({ ...formData, preferredContact: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
          >
            <option value="phone">Phone</option>
            <option value="email">Email</option>
            <option value="either">Either</option>
          </select>
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            required
            rows={5}
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-blue focus:border-transparent"
            placeholder="Tell us about your care needs..."
          />
        </div>
        <button
          type="submit"
          className="btn-primary w-full flex items-center justify-center gap-2"
        >
          <Mail className="w-5 h-5" />
          Send Message
        </button>
      </form>
    </div>
  )
}
