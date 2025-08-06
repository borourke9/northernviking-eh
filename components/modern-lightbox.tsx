"use client"

import { useState, useEffect } from "react"
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

interface LightboxImage {
  src: string
  alt: string
  title: string
  description: string
  category: string
}

interface ModernLightboxProps {
  images: LightboxImage[]
  isOpen: boolean
  currentIndex: number
  onClose: () => void
  onNext: () => void
  onPrevious: () => void
}

export function ModernLightbox({ images, isOpen, currentIndex, onClose, onNext, onPrevious }: ModernLightboxProps) {
  const [isZoomed, setIsZoomed] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
      setImageLoaded(false)
    } else {
      document.body.style.overflow = "unset"
      setIsZoomed(false)
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return

      switch (e.key) {
        case "Escape":
          onClose()
          break
        case "ArrowLeft":
          onPrevious()
          break
        case "ArrowRight":
          onNext()
          break
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose, onNext, onPrevious])

  if (!isOpen || !images[currentIndex]) return null

  const currentImage = images[currentIndex]

  return (
    <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 z-10 bg-gradient-to-b from-black/80 to-transparent p-6">
        <div className="flex items-center justify-between">
          <div className="text-white">
            <div className="flex items-center gap-3 mb-2">
              <span className="bg-amber-600/80 text-white px-3 py-1 rounded-full text-xs font-body font-medium">
                {currentImage.category}
              </span>
              <span className="font-body text-sm text-white/60">
                {currentIndex + 1} of {images.length}
              </span>
            </div>
            <h2 className="font-heading text-2xl font-semibold text-white mb-1">{currentImage.title}</h2>
            <p className="font-body text-white/80 font-light max-w-2xl">{currentImage.description}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsZoomed(!isZoomed)}
              className="text-white hover:bg-white/10 p-2 rounded-full"
            >
              {isZoomed ? <ZoomOut className="w-5 h-5" /> : <ZoomIn className="w-5 h-5" />}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-white hover:bg-white/10 p-2 rounded-full"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      {images.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            onClick={onPrevious}
            className="absolute left-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 p-3 rounded-full transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={onNext}
            className="absolute right-6 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/10 p-3 rounded-full transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </Button>
        </>
      )}

      {/* Main Image Container */}
      <div className="absolute inset-0 flex items-center justify-center p-6 pt-32 pb-20">
        <div
          className={`relative max-w-full max-h-full transition-all duration-500 ease-out ${
            isZoomed ? "scale-150 cursor-zoom-out" : "cursor-zoom-in"
          } ${imageLoaded ? "opacity-100" : "opacity-0"}`}
          onClick={() => setIsZoomed(!isZoomed)}
        >
          <Image
            src={currentImage.src || "/placeholder.svg"}
            alt={currentImage.alt}
            width={1200}
            height={800}
            className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
            onLoad={() => setImageLoaded(true)}
            priority
          />
        </div>

        {/* Loading State */}
        {!imageLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-8 h-8 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
          </div>
        )}
      </div>

      {/* Thumbnail Strip */}
      {images.length > 1 && (
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
          <div className="flex justify-center gap-2 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => {
                  // This would trigger parent component to change currentIndex
                  const event = new CustomEvent("lightbox-change", { detail: index })
                  window.dispatchEvent(event)
                }}
                className={`relative flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-200 ${
                  index === currentIndex
                    ? "ring-2 ring-amber-400 scale-110"
                    : "opacity-60 hover:opacity-100 hover:scale-105"
                }`}
              >
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  fill
                  className="object-cover"
                  sizes="64px"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Click outside to close */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />
    </div>
  )
}
