import './Hero.css'
import FluidGradient from './FluidGradient'
import LoadingMorph from './LoadingMorph'

const Hero = () => {
  return (
    <section className="hero" id="home">
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
