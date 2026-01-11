import { Link } from 'react-router-dom'
import { Phone, Mail, MapPin, FileText } from 'lucide-react'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="bg-primary-blue-dark text-white">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <Logo variant="white" className="h-16 w-auto mb-4" />
            <p className="text-gray-300 mb-4">
              Rooted in Compassion. Driven by Excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-accent-gold transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-accent-gold transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a href="tel:781-500-2893" className="hover:text-accent-gold transition-colors">
                  781-500-2893
                </a>
              </li>
              <li className="flex items-start gap-3">
                <FileText className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>Fax: 781-998-0510</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <a 
                  href="mailto:judahhealthcareservices@gmail.com" 
                  className="hover:text-accent-gold transition-colors break-all"
                >
                  judahhealthcareservices@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                <span>56 Central Avenue, Suite 314<br />Lynn, MA 01901</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Office Hours</h3>
            <div className="text-gray-300 space-y-2">
              <p>Monday - Friday</p>
              <p>9:00am - 5:00pm</p>
              <p className="mt-4 text-sm">After-hours: Call the main line</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Judah Health Care Services. All rights reserved.</p>
          <p className="mt-2">
            <Link to="/privacy" className="hover:text-accent-gold transition-colors">
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}
