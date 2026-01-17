import { useState } from 'react'

interface LogoProps {
  variant?: 'blue' | 'white'
  className?: string
}

export default function Logo({ variant = 'blue', className = '' }: LogoProps) {
  const [imageError, setImageError] = useState(false)
  
  // Use import.meta.env.BASE_URL to handle base path for GitHub Pages
  // Ensure proper path construction: baseUrl always ends with /, logoPath never starts with /
  const baseUrl = (import.meta.env.BASE_URL as string) || '/'
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const logoPath = variant === 'blue' 
    ? '/JACHS LOGO BLUE.png' 
    : '/JACHS LOGO WHITE.png'
  const normalizedLogoPath = logoPath.startsWith('/') ? logoPath.slice(1) : logoPath
  const logoSrc = `${normalizedBaseUrl}${normalizedLogoPath}`
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
