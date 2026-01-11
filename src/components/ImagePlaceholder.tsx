import { Stethoscope, Heart, Users, Activity, Pill, Home } from 'lucide-react'

interface ImagePlaceholderProps {
  type?: 'hero' | 'nurse' | 'therapy' | 'medication' | 'companion' | 'general'
  className?: string
  alt?: string
}

export default function ImagePlaceholder({ 
  type = 'general', 
  className = '',
  alt = 'Healthcare service illustration'
}: ImagePlaceholderProps) {
  const getIcon = () => {
    switch (type) {
      case 'hero':
        return <Users className="w-24 h-24" />
      case 'nurse':
        return <Stethoscope className="w-24 h-24" />
      case 'therapy':
        return <Activity className="w-24 h-24" />
      case 'medication':
        return <Pill className="w-24 h-24" />
      case 'companion':
        return <Heart className="w-24 h-24" />
      default:
        return <Home className="w-24 h-24" />
    }
  }

  const getGradient = () => {
    switch (type) {
      case 'hero':
        return 'from-blue-100 via-blue-50 to-blue-200'
      case 'nurse':
        return 'from-blue-200 via-blue-100 to-blue-300'
      case 'therapy':
        return 'from-yellow-100 via-yellow-200 to-yellow-300'
      case 'medication':
        return 'from-green-100 via-blue-50 to-blue-200'
      case 'companion':
        return 'from-pink-100 via-yellow-100 to-yellow-200'
      default:
        return 'from-gray-100 via-gray-50 to-blue-200'
    }
  }

  return (
    <div 
      className={`bg-gradient-to-br ${getGradient()} rounded-lg shadow-xl flex items-center justify-center ${className}`}
      role="img"
      aria-label={alt}
    >
      <div className="text-primary-blue opacity-60">
        {getIcon()}
      </div>
    </div>
  )
}
