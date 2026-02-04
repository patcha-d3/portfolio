import './App.css'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Button from './components/Button'
import LoadingMorph from './components/LoadingMorph'
import { clients, serviceCards, workBlocks } from './data/content'
import Qooked from './graphics/Qooked'
import Craft from './graphics/Craft'
import About from './About'

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
    <div className="page">
      <Navigation />
      <Hero />

      <main className="main">
        <section className="intro" aria-label="Loading logo preview">
          <LoadingMorph />
        </section>
        <section className="intro" id="about">
          <h2>What do I do?</h2>
          <p>
            Design solutions that elevate brands and create seamless user experiences.
            I help bring ideas to life with strategy and creativity.
          </p>
        </section>

        <section className="services">
          {serviceCards.map((card) => (
            <article key={card.title} className={`service-card service-card--${card.tone}`}>
              <h3>{card.title}</h3>
              <div className="service-card__art" />
            </article>
          ))}
        </section>

        <section className="clients">
          <h2>People I've worked with</h2>
          <div className="clients__ticker" aria-label="Client list ticker">
            <div className="clients__track">
              {clients.map((client) => (
                <img
                  key={client.name}
                  className="clients__logo"
                  src={client.logo}
                  alt={client.name}
                />
              ))}
            </div>
            <div className="clients__track" aria-hidden="true">
              {clients.map((client) => (
                <img
                  key={`${client.name}-duplicate`}
                  className="clients__logo"
                  src={client.logo}
                  alt=""
                />
              ))}
            </div>
          </div>
        </section>

        <section className="works" id="works">
          <div className="works__header">
            <h2>Selected Works</h2>
            <Button className="works__cta">See more</Button>
          </div>

          {workBlocks.map((block) => (
            <div className="work-block" key={block.title}>
              <div className="work-block__title">
                <span />
                <h3>{block.title}</h3>
              </div>
              <div className="work-block__list">
                {block.items.map((item) => (
                  <article className="work-card" key={item.name}>
                    <div className={`work-card__thumb work-card__thumb--${item.tone}`} />
                    <div className="work-card__content">
                      <div className="work-card__tags">
                        {item.tags.map((tag) => (
                          <span key={tag}>{tag}</span>
                        ))}
                      </div>
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <a href="#works">Read More</a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      <footer className="footer" id="contact">
        <div className="footer__links">
          <span>Email</span>
          <span>LinkedIn</span>
          <div className="footer__logo">
            <img src="/src/assets/logo.svg" alt="Pat Sricome logo" />
          </div>
          <span>Github</span>
        </div>
        <p>© 2026 All right reserved</p>
      </footer>
    </div>
  )
}

export default App
