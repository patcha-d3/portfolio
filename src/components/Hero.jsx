import { useEffect, useState } from 'react'
import './Hero.css'
import Folder from './Folder'
import FluidGradient from './FluidGradient'
import TextHighlighter from './TextHilight'
import './TextHilight.css'
// import LoadingMorph from './LoadingMorph'

const Hero = ({ serviceCards, Bubble }) => {
  const [folderVariant, setFolderVariant] = useState('Default')
  const [showFolderText, setShowFolderText] = useState(false)

  useEffect(() => {
    const fadeDurationMs = 2000
    const variantDelayMs = 100
    const timer = setTimeout(() => {
      setFolderVariant('Hover')
      setShowFolderText(true)
    }, fadeDurationMs + variantDelayMs)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="home-hero">
      <Bubble>
        Make yourself at <span className="bubble__accent">home!</span>
      </Bubble>

      <div className="hero__surface">
        <div className="hero__gradient" aria-hidden="true">
          <FluidGradient />
        </div>
        <div className="hero__folder hero__folder--fadein">
          <div className="hero__folder-inner">
            <h1
              className={`hero__folder-text${
                showFolderText ? ' hero__folder-text--show' : ''
              }`}
            >
              A <TextHighlighter className="text-highlight">Digital Product Designer</TextHighlighter> based in Vancouver, who designs cohesive digital
              products <TextHighlighter className="text-highlight">from brand foundations to user experience</TextHighlighter>, creating clean,
              intuitive, and well-structured digital systems to your web and mobile applications.
            </h1>
            <div className="hero__folder-visual">
              <Folder width={360} height={260} variant={folderVariant} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
