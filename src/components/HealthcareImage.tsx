import { useState } from 'react'

interface HealthcareImageProps {
  type: 'hero' | 'nurse' | 'therapy' | 'medication' | 'companion'
  className?: string
  alt: string
}

// Using local images from public/images/ directory
// Images show nurses and healthcare professionals with happy patients in comfortable settings
const imageUrls = {
  hero: '/images/healthcare_image_1.png',
  nurse: '/images/healthcare_image_2.png',
  therapy: '/images/healthcare_image_4.png',
  medication: '/images/healthcare_image_3.png',
  companion: '/images/healthcare_image_5.png',
}

export default function HealthcareImage({ type, className = '', alt }: HealthcareImageProps) {
  const [imageError, setImageError] = useState(false)
  const imageUrl = imageUrls[type]

  // Use import.meta.env.BASE_URL to handle base path for GitHub Pages
  // Ensure proper path construction: baseUrl always ends with /, imageUrl never starts with /
  const baseUrl = (import.meta.env.BASE_URL as string) || '/'
  const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
  const normalizedImagePath = imageUrl.startsWith('/') ? imageUrl.slice(1) : imageUrl
  const fullImageUrl = `${normalizedBaseUrl}${normalizedImagePath}`

  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-xl flex items-center justify-center ${className} min-h-[300px]`}>
        <div className="text-primary-blue opacity-60 text-6xl">🏥</div>
      </div>
    )
  }

  return (
    <img
      src={fullImageUrl}
      alt={alt}
      className={`rounded-lg shadow-xl w-full h-auto object-cover ${className}`}
      style={{ minHeight: '200px', display: 'block' }}
      onError={(e) => {
        console.error(`Failed to load image: ${fullImageUrl}`, e)
        setImageError(true)
      }}
      onLoad={() => {
        console.log(`Successfully loaded image: ${fullImageUrl}`)
      }}
      loading="lazy"
    />
  )
}
