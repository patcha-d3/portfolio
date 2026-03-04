import { useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FeaturedWorks from './components/FeaturedWorks'
import { clients, serviceCards, workBlocks } from './data/content'
import logo from './assets/logo.svg'
import Qooked from './graphics/Qooked'
import Craft from './graphics/Craft'
import About from './About'
import Projects from './Projects'
import Gallery from './gallery'
import Bubble from './components/Bubble'
import Gotit from './case-study/uiux/gotit'
import HealU from './case-study/uiux/healU'
import DeepRead from './case-study/uiux/deepRead'
import Uber from './case-study/motion/uber'
import WhatSUP from './case-study/motion/whatsup'
import QookedCaseStudy from './case-study/graphics/qooked'
import CastleReadCaseStudy from './case-study/graphics/castleRead'
import BacchussCaseStudy from './case-study/graphics/bacchuss'
import KarakedMatchaCaseStudy from './case-study/graphics/karakedMatcha'

const Home = () => (
    <div className="page" id="home">
      <Navigation />

      <main className="home">
        <Hero serviceCards={serviceCards} Bubble={Bubble} />

        <motion.section
          className="home-clients"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <div className="section-heading">
            <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
            <div className="section-heading__label">
              <h2>People I've worked with</h2>
            </div>
          </div>
          <div className="home-clients__ticker" aria-label="Client logos">
            <div className="home-clients__row">
              {clients.map((client, index) => (
                <img
                  key={`${client.name}-${index}`}
                  className="home-clients__logo"
                  src={client.logo}
                  alt={client.name}
                />
              ))}
            </div>
          </div>
        </motion.section>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <FeaturedWorks workBlocks={workBlocks} />
        </motion.div>
      </main>
    </div>
  )

const App = () => {
  useEffect(() => {
    const preventContextMenu = (e) => e.preventDefault()
    document.addEventListener('contextmenu', preventContextMenu)
    return () => document.removeEventListener('contextmenu', preventContextMenu)
  }, [])

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/qooked" element={<Qooked />} />
      <Route path="/craft" element={<Craft />} />
      <Route path="/case-study-template" element={<Gotit />} />
      <Route path="/case-studies/uiux/gotit" element={<Gotit />} />
      <Route path="/case-studies/uiux/healu" element={<HealU />} />
      <Route path="/case-studies/uiux/deepread" element={<DeepRead />} />
      <Route path="/case-studies/motion/uber" element={<Uber />} />
      <Route path="/case-studies/motion/whatsup" element={<WhatSUP />} />
      <Route path="/case-studies/graphics/qooked" element={<QookedCaseStudy />} />
      <Route path="/case-studies/graphics/castleread" element={<CastleReadCaseStudy />} />
      <Route path="/case-studies/graphics/bacchuss" element={<BacchussCaseStudy />} />
      <Route path="/case-studies/graphics/karakedmatcha" element={<KarakedMatchaCaseStudy />} />
    </Routes>
  )
}

export default App
