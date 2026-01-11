import { useState } from 'react'

interface LogoProps {
  variant?: 'blue' | 'white'
  className?: string
}

export default function Logo({ variant = 'blue', className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false)
  
  const logoSrc = variant === 'blue' 
    ? '/JACHS LOGO BLUE.png' 
    : '/JACHS LOGO WHITE.png'
  const textColor = variant === 'blue' ? 'text-primary-blue' : 'text-white'

  // Show text fallback if image fails to load
  if (imageError) {
    return (
      <div className={`${className} flex items-center`}>
        <span className={`text-xl md:text-2xl font-bold ${textColor} leading-tight`}>
          JUDAH<br />
          <span className="text-sm md:text-base font-semibold">HEALTH CARE SERVICES</span>
        </span>
      </div>
    )
  }

  return (
    <img 
      src={logoSrc} 
      alt="Judah Health Care Services" 
      className={className}
      onError={() => {
        console.warn(`Logo image failed to load: ${logoSrc}`)
        setImageError(true)
      }}
    />
  )
}
