import { Phone, Mail, MapPin } from 'lucide-react'

export default function TopBar() {
  return (
    <div className="bg-primary-blue text-white py-2 text-sm">
      <div className="container-custom">
        <div className="flex flex-wrap items-center justify-center md:justify-between gap-4">
          <a 
            href="tel:781-500-2893" 
            className="flex items-center gap-2 hover:text-accent-gold transition-colors"
            aria-label="Call us at 781-500-2893"
          >
            <Phone className="w-4 h-4" />
            <span>781-500-2893</span>
          </a>
          <a 
            href="mailto:judahhealthcareservices@gmail.com" 
            className="flex items-center gap-2 hover:text-accent-gold transition-colors"
            aria-label="Email us at judahhealthcareservices@gmail.com"
          >
            <Mail className="w-4 h-4" />
            <span className="hidden sm:inline">judahhealthcareservices@gmail.com</span>
            <span className="sm:hidden">Email Us</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="hidden md:inline">56 Central Avenue, Suite 314, Lynn, MA 01901</span>
            <span className="md:hidden">Lynn, MA</span>
          </div>
        </div>
      </div>
    </div>
  )
}
