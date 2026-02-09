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
    company: 'Fat Mao Noodle',
    period: 'May 2025 - Present',
  },
  {
    role: 'Marketing Designer',
    company: 'Upbit Exchange, Thailand',
    period: 'Jan 2022 - Dec 2022',
  },
  {
    role: 'Architectural Designer',
    company: 'PEPA Studio (Co-founder), Thailand',
    period: 'Jul 2018 - 2024',
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
  return (
    <div className="about-page">
      <Navigation />
      <Bubble>
        Welcome to my <span className="bubble__accent">about me</span> corner!
      </Bubble>
      <header className="about-hero">
        <section className="about-banner" aria-label="About hero banner">
          <div className="about-banner__copy">
            <h1>Product Designer</h1>
            <br/>
            <p>
            I'm Pat Sricome, a <TextHighlighter>Product Designer</TextHighlighter> who started in architecture, moved into visual and marketing design, and eventually found my home in product design.
            </p><br/>
            <p>
              That career shift shaped how I think: architecture taught me structure
              and systems, graphic design sharpened my eye for detail and branding, and
              UI/UX helped me combine both to create experiences that feel intuitive
              and human.
            </p><br/>
            <p>
              I help busy teams and growing businesses design digital products that are
              easy to navigate, visually consistent, and grounded in real user
              needs—whether it’s improving onboarding flows, reducing drop-offs, or
              simplifying complex content into something users can actually understand.
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
