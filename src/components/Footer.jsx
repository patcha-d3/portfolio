import { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import './Footer.css'

import layer00 from '../assets/footer/layer_00_text.png'
import layer01 from '../assets/footer/layer_01_floor.png'
import layer07 from '../assets/footer/layer_07_view.png'
import layer03 from '../assets/footer/layer_03_clouds.png'
import layer04 from '../assets/footer/layer_04_view.png'
import layer05 from '../assets/footer/layer_05_wallrug.png'
import layer06 from '../assets/footer/layer_06_lines.png'

const LAYERS = [
  layer00, layer01, layer03, layer04,layer07, layer05, layer06, 
]

const ParallaxLayer = ({ src, index, scrollYProgress }) => {
  /* Each layer fades in - all 7 layers visible by ~25% scroll */
  const opacity = useTransform(
    scrollYProgress,
    [
      index * 0.03,
      index * 0.03 + 0.06,
      0.5,
      0.85,
    ],
    [0, 1, 1, 0.95]
  )

  /* After all layers visible (~25%), scroll 15% more = scale 1 → 1.2 */
  const scale = useTransform(
    scrollYProgress,
    [0.25, 0.4],
    [1, 1.2]
  )

  return (
    <motion.div
      className="footer-parallax__layer"
      style={{ opacity, scale, zIndex: index }}
    >
      <img src={src} alt="" className="footer-parallax__img" />
    </motion.div>
  )
}

const Footer = () => {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  return (
    <footer className="footer-parallax" ref={containerRef} role="contentinfo">
      <div className="footer-parallax__viewport">
        {LAYERS.map((src, i) => (
          <ParallaxLayer
            key={i}
            src={src}
            index={i}
            scrollYProgress={scrollYProgress}
          />
        ))}
      </div>
      <div className="footer-parallax__spacer" aria-hidden="true" />
    </footer>
  )
}

export default Footer
