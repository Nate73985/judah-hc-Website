import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  
  // Use BASE_URL for image paths to support GitHub Pages
  const baseUrl = (import.meta.env.BASE_URL as string) || '/'
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const fullLogoPath = `${normalizedBaseUrl}images/JHCS_Logo_Blue.png`

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/careers', label: 'Careers' },
  ]

  const handleRequestCare = () => {
    if (location.pathname === '/') {
      const contactSection = document.getElementById('contact-section')
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      window.location.href = '/#contact-section'
    }
    setMobileMenuOpen(false)
  }

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3" aria-label="Judah Health Care Services Home">
            {/* Full Logo Image - Top Left */}
            <img 
              src={fullLogoPath} 
              alt="Judah Healthcare Services Logo" 
              className="h-12 md:h-16 w-auto flex-shrink-0 object-contain"
            />
            <Logo variant="blue" className="h-12 md:h-16 w-auto" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-colors hover:text-primary-blue ${
                  location.pathname === link.path ? 'text-primary-blue' : 'text-gray-700'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={handleRequestCare}
              className="btn-primary"
              aria-label="Request Care"
            >
              Request Care
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-gray-700 hover:text-primary-blue transition-colors"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t"
          >
            <nav className="container-custom py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-medium py-2 transition-colors ${
                    location.pathname === link.path ? 'text-primary-blue' : 'text-gray-700'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <button
                onClick={handleRequestCare}
                className="btn-primary w-full mt-2"
              >
                Request Care
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
