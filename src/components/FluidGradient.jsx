import { motion } from 'framer-motion'
import './FluidGradient.css'

const FluidGradient = ({
  color1 = '#5EA9FF',
  color2 = '#E0E1FF',
  color3 = '#CAE3FF',
  gradientSpeed = 6,
  blur = 100,
}) => {
  const duration = 20 / gradientSpeed

  return (
    <div
      className="fluid-gradient"
      style={{
        '--fluid-color-1': color1,
        '--fluid-color-2': color2,
        '--fluid-color-3': color3,
        '--fluid-blur': `${blur}px`,
      }}
    >
      <motion.div
        className="fluid-gradient__orb fluid-gradient__orb--one"
        animate={{
          x: ['0%', '20%', '0%'],
          y: ['0%', '35%', '0%'],
        }}
        transition={{
          duration,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="fluid-gradient__orb fluid-gradient__orb--two"
        animate={{
          x: ['0%', '-40%', '0%'],
          y: ['0%', '20%', '0%'],
        }}
        transition={{
          duration: duration * 1.2,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="fluid-gradient__orb fluid-gradient__orb--three"
        animate={{
          x: ['0%', '15%', '0%'],
          y: ['0%', '-20%', '0%'],
        }}
        transition={{
          duration: duration * 0.9,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </div>
  )
}

export default FluidGradient
