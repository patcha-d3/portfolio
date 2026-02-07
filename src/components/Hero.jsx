import './Hero.css'
import FluidGradient from './FluidGradient'
import LoadingMorph from './LoadingMorph'

const Hero = ({ serviceCards, Bubble }) => {
  return (
    <section className="home-hero">
      <Bubble>
        Make yourself at <span className="bubble__accent">home!</span>
      </Bubble>

      <div className="hero__surface">
        <div className="hero__gradient" aria-hidden="true">
          <FluidGradient />
        </div>
        <div className="hero__loading" aria-hidden="true">
          <LoadingMorph />
        </div>
      </div>
    </section>
  )
}

export default Hero
