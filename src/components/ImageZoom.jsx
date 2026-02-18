import { useState, useEffect } from 'react'
import './ImageZoom.css'

/**
 * Wraps an image to make it zoomable. Click to open full-size in a lightbox overlay.
 */
export default function ImageZoom({ src, alt, children }) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => e.key === 'Escape' && setIsOpen(false)
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <>
      <div
        className="image-zoom__trigger"
        onClick={() => setIsOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
        aria-label="Click to zoom"
      >
        {children ?? <img src={src} alt={alt ?? ''} />}
      </div>
      {isOpen && (
        <div
          className="image-zoom__overlay"
          onClick={() => setIsOpen(false)}
          role="button"
          tabIndex={0}
          aria-label="Close zoom"
        >
          <img
            src={src}
            alt={alt ?? ''}
            onClick={(e) => e.stopPropagation()}
            className="image-zoom__full"
          />
        </div>
      )}
    </>
  )
}
