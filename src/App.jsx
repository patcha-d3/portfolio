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
import Bubble from './components/Bubble'
import Gotit from './case-study/uiux/gotit'
import Uber from './case-study/motion/uber'
import QookedCaseStudy from './case-study/graphics/qooked'

const Home = () => (
    <div className="page" id="home">
      <Navigation />

      <main className="home">
        <Hero serviceCards={serviceCards} Bubble={Bubble} />

        <section className="home-clients">
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
        </section>

        <FeaturedWorks workBlocks={workBlocks} />
      </main>
    </div>
  )

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/qooked" element={<Qooked />} />
      <Route path="/craft" element={<Craft />} />
      <Route path="/case-study-template" element={<Gotit />} />
      <Route path="/case-studies/uiux/gotit" element={<Gotit />} />
      <Route path="/case-studies/motion/uber" element={<Uber />} />
      <Route path="/case-studies/graphics/qooked" element={<QookedCaseStudy />} />
    </Routes>
  )
}

export default App
