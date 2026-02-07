import { useEffect, useState } from 'react'
import './Hero.css'
import Folder from './Folder'
import FluidGradient from './FluidGradient'
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
              A Product Designer based in Vancouver, who designs cohesive digital
              products from brand foundations to user experience, creating clean,
              intuitive, and well-structured digital systems.
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
