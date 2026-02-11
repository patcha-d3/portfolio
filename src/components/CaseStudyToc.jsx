import { useState, useEffect } from 'react'
import './CaseStudyToc.css'

const slugFromItem = (item) => {
  return item.toLowerCase().replace(/\s+/g, '-')
}

const CaseStudyToc = ({ title = 'Table of Contents', items = [] }) => {
  const [activeId, setActiveId] = useState(null)

  const handleLinkClick = (e, id) => {
    e.preventDefault()
    const el = document.getElementById(id)
    if (!el) return
    document.querySelectorAll('.case-template__section--fadein').forEach((s) =>
      s.classList.remove('case-template__section--fadein')
    )
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.classList.add('case-template__section--fadein')
      })
    })
    window.history.pushState(null, '', `#${id}`)
  }

  useEffect(() => {
    const ids = items.map(slugFromItem)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return
          const id = entry.target.id
          if (ids.includes(id)) setActiveId(id)
        })
      },
      {
        rootMargin: '-15% 0px -70% 0px',
        threshold: 0,
      }
    )

    let mounted = true
    const timeoutId = setTimeout(() => {
      if (!mounted) return
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.observe(el)
      })
    }, 100)

    return () => {
      mounted = false
      clearTimeout(timeoutId)
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (el) observer.unobserve(el)
      })
    }
  }, [items])

  return (
    <nav className="case-toc" aria-label={title}>
      <h3>{title}</h3>
      <ul>
        {items.map((item) => {
          const id = slugFromItem(item)
          const isActive = activeId === id
          return (
            <li key={item}>
              <a
                href={`#${id}`}
                className={`case-toc__link${isActive ? ' case-toc__link--active' : ''}`}
                onClick={(e) => handleLinkClick(e, id)}
              >
                <span className="case-toc__arrow" aria-hidden>→ </span>
                {item}
              </a>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export default CaseStudyToc
