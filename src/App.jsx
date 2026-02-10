import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import FeaturedWorks from './components/FeaturedWorks'
import { clients, serviceCards, workBlocks } from './data/content'
import Qooked from './graphics/Qooked'
import Craft from './graphics/Craft'
import About from './About'
import Bubble from './components/Bubble'
import CaseStudyTemplate from './components/CaseStudyTemplate'
import Gotit from './case-study/uiux/gotit'

const Home = () => (
    <div className="page" id="home">
      <Navigation />

      <main className="home">
        <Hero serviceCards={serviceCards} Bubble={Bubble} />

        <section className="home-clients">
          <h2>People I've worked with</h2>
          <div className="home-clients__ticker" aria-label="Client logos">
            <div className="home-clients__row">
              {[...clients, ...clients].map((client, index) => (
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
      <Route path="/qooked" element={<Qooked />} />
      <Route path="/craft" element={<Craft />} />
      <Route path="/case-study-template" element={<CaseStudyTemplate projectId="gotit" nextWork={{ title: "HealU", href: "/" }} />} />
      <Route path="/case-studies/uiux/gotit" element={<Gotit />} />
    </Routes>
  )
}

export default App
