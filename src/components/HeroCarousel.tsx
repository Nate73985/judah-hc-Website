import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface HeroCarouselProps {
  className?: string
}

const heroImages = [
  '/images/healthcare_image_1.png',
  '/images/healthcare_image_6.png',
  '/images/healthcare_image_7.png',
  '/images/healthcare_image_8.png',
]

export default function HeroCarousel({ className = '' }: HeroCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [imageErrors, setImageErrors] = useState<Set<number>>(new Set())

  // Use import.meta.env.BASE_URL to handle base path for GitHub Pages
  const baseUrl = (import.meta.env.BASE_URL as string) || '/'

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroImages.length)
    }, 5000) // Change image every 5 seconds

    return () => clearInterval(interval)
  }, [])

  const getImageUrl = (index: number) => {
    const imagePath = heroImages[index]
    // Ensure proper path construction: baseUrl always ends with /, imagePath never starts with /
    const normalizedBaseUrl = baseUrl.endsWith('/') ? baseUrl : `${baseUrl}/`
    const normalizedImagePath = imagePath.startsWith('/') ? imagePath.slice(1) : imagePath
    return `${normalizedBaseUrl}${normalizedImagePath}`
  }

  const handleImageError = (index: number) => {
    console.warn(`Failed to load hero image ${index + 1}: ${getImageUrl(index)}`)
    setImageErrors((prev) => new Set(prev).add(index))
  }

  // If all images failed, show fallback
  if (imageErrors.size === heroImages.length) {
    return (
      <div className={`relative w-full h-96 md:h-[500px] rounded-lg shadow-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center ${className}`}>
        <div className="text-primary-blue opacity-60 text-6xl">🏥</div>
      </div>
    )
  }

  return (
    <div className={`relative w-full h-96 md:h-[500px] rounded-lg shadow-2xl overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        {!imageErrors.has(currentIndex) && (
          <motion.img
            key={currentIndex}
            src={getImageUrl(currentIndex)}
            alt={`Professional caregiver providing compassionate home care - Image ${currentIndex + 1}`}
            className="w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            onError={() => handleImageError(currentIndex)}
            onLoad={() => {
              console.log(`Successfully loaded hero image ${currentIndex + 1}: ${getImageUrl(currentIndex)}`)
            }}
          />
        )}
      </AnimatePresence>
      
      {/* Image indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex
                ? 'w-8 bg-white'
                : 'w-2 bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
