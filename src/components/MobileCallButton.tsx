import { Phone } from 'lucide-react'

export default function MobileCallButton() {
  return (
    <a
      href="tel:781-500-2893"
      className="lg:hidden fixed bottom-6 right-6 z-50 bg-accent-gold text-primary-blue p-4 rounded-full shadow-lg hover:bg-accent-gold-light transition-colors focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2"
      aria-label="Call 781-500-2893"
    >
      <Phone className="w-6 h-6" />
    </a>
  )
}
