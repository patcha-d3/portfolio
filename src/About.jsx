import './About.css'
import Navigation from './components/Navigation'

import profileImage from './assets/about/profile.png'
import Bubble from './components/Bubble'

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
  { label: 'Figma', badge: 'Fi' },
  { label: 'Framer', badge: 'Fr' },
  { label: 'Wordpress', badge: 'Wp' },
  { label: 'Adobe Illustrator', badge: 'Ai' },
  { label: 'Adobe Photoshop', badge: 'Ps' },
  { label: 'Adobe InDesign', badge: 'Id' },
  { label: 'Adobe After Effects', badge: 'Ae' },
  { label: 'Procreate', badge: 'Pr' },
]

const techStack = [
  { label: 'HTML5', badge: 'H5' },
  { label: 'CSS3', badge: 'C3' },
  { label: 'Javascript', badge: 'Js' },
  { label: 'React.js', badge: 'Re' },
  { label: 'Next.js', badge: 'Nx' },
  { label: 'Vite', badge: 'Vi' },
  { label: 'Git/Github', badge: 'Gi' },
  { label: 'Node', badge: 'Nd' },
  { label: 'Vercel', badge: 'Ve' },
  { label: 'Visual Studio Code', badge: 'Vs' },
  { label: 'CursorAI', badge: 'Cu' },
]

const About = () => {
  return (
    <div className="about-page">
      <Navigation />
      <Bubble>
        Make yourself at <span className="bubble__accent">home!</span>
      </Bubble>
      <header className="about-hero">
        <section className="about-banner" aria-label="About hero banner">
          <div className="about-banner__copy">
          <h2>UI/UX Designer &amp;<br/> Graphic Designer</h2><br/>
            <p>
            I'm Pat Sricome, a UI/UX Designer who started in architecture, moved into visual and marketing design, and eventually found my home in product design.
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
        <section className="about-hobby">
          <h2>In my quiet moments</h2>
        </section>

        <section className="about-section">
          <div className="about-section__header">
            <h2>My Design Weapons</h2>
          </div>
          <div className="about-pill-grid">
            {designWeapons.map((tool) => (
              <article className="about-pill" key={tool.label}>
                <span className="about-pill__icon" aria-hidden="true">
                  {tool.badge}
                </span>
                <span className="about-pill__label">{tool.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div className="about-section__header">
            <h2>My Tech Stack</h2>
          </div>
          <div className="about-pill-grid">
            {techStack.map((tool) => (
              <article className="about-pill" key={tool.label}>
                <span className="about-pill__icon" aria-hidden="true">
                  {tool.badge}
                </span>
                <span className="about-pill__label">{tool.label}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="about-cta">
          <h2>Let’s work together!</h2>
          <p>I’d love to hear from you.</p>
          <div className="about-cta__links">
            <span>Email</span>
            <span>LinkedIn</span>
            <span>Github</span>
          </div>
        </section>
      </main>
    </div>
  )
}

export default About
