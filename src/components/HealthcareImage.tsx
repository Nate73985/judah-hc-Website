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

  // In Vite, files in public/ are served from root
  // The base path from vite.config.ts doesn't affect public/ files
  // So we use absolute paths starting with /
  if (imageError) {
    return (
      <div className={`bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-xl flex items-center justify-center ${className} min-h-[300px]`}>
        <div className="text-primary-blue opacity-60 text-6xl">🏥</div>
      </div>
    )
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`rounded-lg shadow-xl w-full h-auto object-cover ${className}`}
      style={{ minHeight: '200px', display: 'block' }}
      onError={(e) => {
        console.error(`Failed to load image: ${imageUrl}`, e)
        setImageError(true)
      }}
      onLoad={() => {
        console.log(`Successfully loaded image: ${imageUrl}`)
      }}
      loading="lazy"
    />
  )
}
