import './App.css'
import Navigation from './components/Navigation'
import Button from './components/Button'
import Hero from './components/Hero'
import { clients, serviceCards, workBlocks } from './data/content'
import Qooked from './graphics/Qooked'
import Craft from './graphics/Craft'
import About from './About'
import Bubble from './components/Bubble'

const App = () => {
  if (window.location.hash === '#qooked') {
    return <Qooked />
  }

  if (window.location.hash === '#craft') {
    return <Craft />
  }

  if (window.location.hash === '#about') {
    return <About />
  }

  return (
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

        <section className="home-works" id="works">
          <div className="home-works__header">
            <h2>Selected Works</h2>
            <div className="home-works__tabs" role="tablist" aria-label="Work categories">
              <button type="button" className="is-active">
                Selected Works
              </button>
              <button type="button">UI/UX Design</button>
              <button type="button">Graphic Design</button>
            </div>
          </div>

          <div className="home-works__list">
            {workBlocks[0].items.map((item) => (
              <article className="home-work-card" key={item.name}>
                <div className="home-work-card__label">UI/UX Designer</div>
                <div className="home-work-card__body">
                  <div className="home-work-card__meta">
                    {item.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                  <Button className="home-work-card__cta">Read more</Button>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
