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
  const imageUrl = imageUrls[type]

  return (
    <img
      src={imageUrl}
      alt={alt}
      className={`rounded-lg shadow-xl w-full h-auto object-cover ${className}`}
      onError={(e) => {
        const target = e.currentTarget as HTMLImageElement
        target.style.display = 'none'
        // Fallback: create a placeholder div
        const parent = target.parentElement
        if (parent && !parent.querySelector('.image-fallback')) {
          const fallback = document.createElement('div')
          fallback.className = `image-fallback bg-gradient-to-br from-blue-100 to-blue-200 rounded-lg shadow-xl flex items-center justify-center ${className} min-h-[300px]`
          fallback.innerHTML = '<div class="text-primary-blue opacity-60 text-6xl">🏥</div>'
          parent.appendChild(fallback)
        }
      }}
      loading="lazy"
    />
  )
}
