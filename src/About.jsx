import { useEffect } from 'react'
import './About.css'
import Navigation from './components/Navigation'
import { StackingCardsDemo } from './components/StackingCards'
import TextHighlighter from "./components/TextHilight"
import profileImage from './assets/about/profile.png'
import logo from './assets/logo.svg'
import Bubble from './components/Bubble'
import figmaIcon from './assets/about/design/figma.svg'
import framerIcon from './assets/about/design/framer.svg'
import wordpressIcon from './assets/about/design/wordpress.svg'
import adobeIllustratorIcon from './assets/about/design/adobeillustrator.svg'
import adobePhotoshopIcon from './assets/about/design/adobephotoshop.svg'
import adobeInDesignIcon from './assets/about/design/adobeindesign.svg'
import adobeAfterEffectsIcon from './assets/about/design/adobeaftereffects.svg'
import html5Icon from './assets/about/tech/html5.svg'
import css3Icon from './assets/about/tech/css3.svg'
import javascriptIcon from './assets/about/tech/javascript.svg'
import reactJsIcon from './assets/about/tech/react-js.svg'
import nextJsIcon from './assets/about/tech/next-js.svg'
import viteIcon from './assets/about/tech/vite.svg'
import githubIcon from './assets/about/tech/github.svg'
import nodeIcon from './assets/about/tech/nodedotjs.svg'
import vercelIcon from './assets/about/tech/vercel.svg'
import vsCodeIcon from './assets/about/tech/visual-studio-code.svg'
import cursorIcon from './assets/about/tech/cursor.svg'

const MONTHS = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, July: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 }

function yearsFromPeriod(period) {
  const parts = period.split(/\s*-\s*/).map((s) => s.trim())
  if (parts.length < 2) return null
  const parsePart = (str) => {
    if (str.toLowerCase() === 'present') return new Date()
    const match = str.match(/^(\w+)\s+(\d{4})$/)
    if (!match) return null
    const month = MONTHS[match[1]]
    const year = parseInt(match[2], 10)
    if (month === undefined || isNaN(year)) return null
    return new Date(year, month, 1)
  }
  const start = parsePart(parts[0])
  const end = parsePart(parts[1])
  if (!start || !end || start > end) return null
  const years = (end - start) / (1000 * 60 * 60 * 24 * 365.25)
  // Only x or x.5 years: round up if fractional part > 0.3, else round down
  const frac = years - Math.floor(years)
  const halfDown = Math.floor(years * 2) / 2
  const halfUp = Math.ceil(years * 2) / 2
  return frac > 0.3 ? halfUp : halfDown
}

function formatPeriodWithYears(period) {
  const y = yearsFromPeriod(period)
  if (y == null) return period
  const label = y === 1 ? '1 year' : `${y} years`
  return `${period} (${label})`
}

const experiences = [
  {
    role: 'Regional Marketing & UX/UI Designer',
    company: 'Upbit Asia Pacific, Singapore',
    period: 'Jan 2023 - Present',
  },
  {
    role: 'Graphic & UX/UI Designer',
    company: 'VerifyVASP, Singapore',
    period: 'Jan 2023 - Present',
  },
  {
    role: 'Restaurant Server',
    company: 'Fat Mao Noodle, Vancouver, Canada',
    period: 'May 2025 - Present',
  },
  {
    role: 'Marketing Designer',
    company: 'Upbit Exchange, Bangkok, Thailand',
    period: 'Jan 2022 - Dec 2022',
  },
  {
    role: 'Architectural Designer',
    company: 'PEPA Studio (Co-founder), Bangkok, Thailand',
    period: 'July 2018 - July 2024',
  },
]

const designWeapons = [
  { label: 'Figma', badge: 'Fi', icon: figmaIcon },
  { label: 'Framer', badge: 'Fr', icon: framerIcon },
  { label: 'Wordpress', badge: 'Wp', icon: wordpressIcon },
  { label: 'Adobe Illustrator', badge: 'Ai', icon: adobeIllustratorIcon },
  { label: 'Adobe Photoshop', badge: 'Ps', icon: adobePhotoshopIcon },
  { label: 'Adobe InDesign', badge: 'Id', icon: adobeInDesignIcon },
  { label: 'Adobe After Effects', badge: 'Ae', icon: adobeAfterEffectsIcon },
  { label: 'Procreate', badge: 'Pr' },
]

const techStack = [
  { label: 'HTML5', badge: 'H5', icon: html5Icon },
  { label: 'CSS3', badge: 'C3', icon: css3Icon },
  { label: 'Javascript', badge: 'Js', icon: javascriptIcon },
  { label: 'React.js', badge: 'Re', icon: reactJsIcon },
  { label: 'Next.js', badge: 'Nx', icon: nextJsIcon },
  { label: 'Vite', badge: 'Vi', icon: viteIcon },
  { label: 'Git/Github', badge: 'Gi', icon: githubIcon },
  { label: 'Node', badge: 'Nd', icon: nodeIcon },
  { label: 'Vercel', badge: 'Ve', icon: vercelIcon },
  { label: 'Visual Studio Code', badge: 'Vs', icon: vsCodeIcon },
  { label: 'CursorAI', badge: 'Cu', icon: cursorIcon },
]

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="about-page">
      <Navigation />
      <Bubble>
        Welcome to my <span className="bubble__accent">about me</span> corner!
      </Bubble>
      <header className="about-hero">
        <section className="about-banner" aria-label="About hero banner">
          <div className="about-banner__copy">
            <h1>Digital Product Designer</h1>
            <br/>
            <p>
            I'm Pat Sricome, a <TextHighlighter>Digital Product Designer</TextHighlighter> with a background in architecture and visual design, now focused on crafting thoughtful UI/UX experiences.
            </p><br/>
            <p>
            Architecture taught me systems and structure. Graphic design trained my eye for clarity and consistency. <TextHighlighter>UI/UX is where those disciplines meet — turning complexity into intuitive, human-centered digital products.</TextHighlighter>
            </p><br/>
            <p>
            <TextHighlighter>I design interfaces that feel effortless to navigate, reduce friction, and align business goals with real user needs — from refining onboarding flows to simplifying dense, complex content into experiences people actually understand and enjoy using. With a working knowledge of HTML, CSS, and JavaScript</TextHighlighter>, I’m able to think beyond static screens, understand technical constraints, and communicate seamlessly with developers to bring ideas to life.
            </p><br/>
            <h3>Wanna work together? <br/>
I'd love to hear from you.</h3>
              <button type="button" className="button">Let's work together!</button>

          </div>
          <div className="about-banner__art">
            <div className="about-banner__avatar">
              <img src={profileImage} alt="Pat Sricome profile" />
            </div>
          </div>
        </section>
      </header>

      <main className="about-main">
        <section className="hobby-section">
          <div className="hobby-section__header">
            <img src={logo} alt="" className="about-heading__icon" aria-hidden="true" />
            <div className="about-heading">
              <h2>In my quiet moments</h2>
            </div>
          </div>
          <StackingCardsDemo />
        </section>

        <section className="about-section">
          <div className="about-section__header">
            <img src={logo} alt="" className="about-heading__icon" aria-hidden="true" />
            <div className="about-heading">
              <h2>My Experience</h2>
            </div>
          </div>
          <div className="about-experience">
            {experiences.map((exp) => (
              <div className="about-experience__row" key={`${exp.role}-${exp.company}`}>
                <span className="about-experience__role">{exp.role}</span>
                <span className="about-experience__company">{exp.company}</span>
                <span className="about-experience__period">{formatPeriodWithYears(exp.period)}</span>
              </div>
            ))}
          </div>
        </section>



        <section className="about-section">
          <div className="about-section__header">
            <img src={logo} alt="" className="about-heading__icon" aria-hidden="true" />
            <div className="about-heading">
              <h2>My Design Weapons</h2>
            </div>
          </div>
          <div className="about-pill-grid">
            {designWeapons.map((tool) => (
              <article className="about-pill" key={tool.label}>
                <span className="about-pill__icon" aria-hidden="true">
                  {tool.icon ? (
                    <img src={tool.icon} alt="" className="about-pill__icon-img" />
                  ) : (
                    tool.badge
                  )}
                </span>
                <span className="about-pill__label">{tool.label}</span>
              </article>
            ))}
          </div>
        </section>



        <section className="about-section">
          <div className="about-section__header">
            <img src={logo} alt="" className="about-heading__icon" aria-hidden="true" />
            <div className="about-heading">
              <h2>My Tech Stack</h2>
            </div>
          </div>
          <div className="about-pill-grid">
            {techStack.map((tool) => (
              <article className="about-pill" key={tool.label}>
                <span className="about-pill__icon" aria-hidden="true">
                  {tool.icon ? (
                    <img src={tool.icon} alt="" className="about-pill__icon-img" />
                  ) : (
                    tool.badge
                  )}
                </span>
                <span className="about-pill__label">{tool.label}</span>
              </article>
            ))}
          </div>
        </section>

      </main>
    </div>
  )
}

export default About
