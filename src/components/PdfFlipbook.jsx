import { useState, useEffect, useRef } from 'react'
import HTMLFlipBook from 'react-pageflip'
import * as pdfjsLib from 'pdfjs-dist'
import './PdfFlipbook.css'

// PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjsLib.version}/build/pdf.worker.min.mjs`

/**
 * PDF Flipbook - แสดง PDF แบบ flipbook ด้วย react-pageflip (StPageFlip)
 * โชว์หน้าคู่ (spread) อัตโนมัติ
 *
 * @param {string} pdfUrl - URL ของ PDF
 * @param {number} width - ความกว้างของแต่ละหน้า (px)
 * @param {number} height - ความสูงของแต่ละหน้า (px)
 */
const PdfFlipbook = ({ pdfUrl, width = 500, height = 700 }) => {
  const [pages, setPages] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const containerRef = useRef(null)
  const flipBookRef = useRef(null)
  const [dimensions, setDimensions] = useState({ width, height })

  useEffect(() => {
    if (!pdfUrl) return

    let cancelled = false

    const loadPdf = async () => {
      setLoading(true)
      setError(null)
      try {
        const pdf = await pdfjsLib.getDocument(pdfUrl).promise
        if (cancelled) return

        const numPages = pdf.numPages
        const pageImages = []

        for (let i = 1; i <= numPages; i++) {
          const page = await pdf.getPage(i)
          if (cancelled) return

          const scale = Math.min(
            width / page.getViewport({ scale: 1 }).width,
            height / page.getViewport({ scale: 1 }).height,
            2
          )
          const viewport = page.getViewport({ scale })

          const canvas = document.createElement('canvas')
          canvas.width = viewport.width
          canvas.height = viewport.height
          const ctx = canvas.getContext('2d')
          await page.render({
            canvasContext: ctx,
            viewport
          }).promise

          if (cancelled) return
          pageImages.push(canvas.toDataURL('image/png'))
        }

        if (cancelled) return

        // Two-up: แต่ละ spread = 2 หน้า (ซ้าย+ขวา)
        const spreadElements = []
        for (let i = 0; i < pageImages.length; i += 2) {
          const left = pageImages[i]
          const right = pageImages[i + 1]
          spreadElements.push(
            <div key={i} className="pdf-flipbook__spread">
              <div className="pdf-flipbook__spread-half pdf-flipbook__spread-left">
                <img src={left} alt={`หน้า ${i + 1}`} />
              </div>
              <div className="pdf-flipbook__spread-half pdf-flipbook__spread-right">
                {right ? (
                  <img src={right} alt={`หน้า ${i + 2}`} />
                ) : (
                  <div className="pdf-flipbook__spread-blank" />
                )}
              </div>
            </div>
          )
        }

        if (!cancelled) {
          setPages(spreadElements)
          setTotalPages(spreadElements.length)
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message || 'ไม่สามารถโหลด PDF ได้')
          console.error('PdfFlipbook error:', err)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadPdf()
    return () => { cancelled = true }
  }, [pdfUrl, width, height])

  useEffect(() => {
    if (!containerRef.current || pages.length === 0) return
    const updateSize = () => {
      if (containerRef.current) {
        const containerW = containerRef.current.offsetWidth || width * 2
        // two-up: แต่ละ spread กว้าง 2 หน้า
        const spreadW = Math.min(Math.max(400, containerW), 1000)
        setDimensions({
          width: spreadW,
          height
        })
      }
    }
    updateSize()
    const ro = new ResizeObserver(updateSize)
    ro.observe(containerRef.current)
    return () => ro.disconnect()
  }, [pages, width, height])

  const handleFlip = (e) => {
    setCurrentPage(e.data)
  }

  const handlePrev = () => {
    flipBookRef.current?.pageFlip?.()?.flipPrev()
  }

  const handleNext = () => {
    flipBookRef.current?.pageFlip?.()?.flipNext()
  }

  const handleInit = (e) => {
    if (e?.object) {
      setTotalPages(e.object.getPageCount?.() ?? totalPages)
    }
  }

  if (!pdfUrl) return null

  if (loading) {
    return (
      <div className="pdf-flipbook pdf-flipbook--loading">
        <div className="pdf-flipbook__spinner">กำลังโหลด...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="pdf-flipbook pdf-flipbook--error">
        <p>{error}</p>
        <p className="pdf-flipbook__hint">ตรวจสอบว่าไฟล์ {pdfUrl} อยู่ในโฟลเดอร์ public</p>
      </div>
    )
  }

  if (pages.length === 0) return null

  return (
    <div ref={containerRef} className="pdf-flipbook">
      <HTMLFlipBook
        ref={flipBookRef}
        width={dimensions.width}
        height={dimensions.height}
        size="stretch"
        minWidth={400}
        maxWidth={1000}
        minHeight={400}
        maxHeight={900}
        drawShadow
        maxShadowOpacity={0.5}
        flippingTime={600}
        usePortrait
        showCover={false}
        mobileScrollSupport
        onFlip={handleFlip}
        onInit={handleInit}
        className="pdf-flipbook__book"
      >
        {pages}
      </HTMLFlipBook>
      <div className="pdf-flipbook__controls">
        <button type="button" onClick={handlePrev} className="pdf-flipbook__btn">
          ← ก่อนหน้า
        </button>
        <span className="pdf-flipbook__pagenum">
          {currentPage + 1} / {totalPages}
        </span>
        <button type="button" onClick={handleNext} className="pdf-flipbook__btn">
          ถัดไป →
        </button>
      </div>
    </div>
  )
}

export default PdfFlipbook
