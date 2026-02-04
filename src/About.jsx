import './About.css'
import Navigation from './components/Navigation'

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

      <header className="about-hero">
        <section className="about-banner" aria-label="About hero banner">
          <div className="about-banner__art" aria-hidden="true">
            <div className="about-banner__avatar" />
          </div>
          <div className="about-banner__copy">
            <p>
              I design user-focused digital products that combine strong visual craft
              with data-driven UX to reduce friction, improve clarity, and help users
              move effortlessly.
            </p>
          </div>
        </section>
        <div className="about-hero__panel">
          <span className="about-hero__label">About Me</span>
          <div className="about-hero__content">
            <h2>UI/UX Designer &amp; Graphic Designer</h2>
            <p>
              I’m Pat Sricome, a UI/UX Designer who started in architecture, moved into
              visual and marketing design, and eventually found my home in product
              design.
            </p>
            <p>
              That career shift shaped how I think: architecture taught me structure
              and systems, graphic design sharpened my eye for detail and branding, and
              UI/UX helped me combine both to create experiences that feel intuitive
              and human.
            </p>
            <p>
              I help busy teams and growing businesses design digital products that are
              easy to navigate, visually consistent, and grounded in real user
              needs—whether it’s improving onboarding flows, reducing drop-offs, or
              simplifying complex content into something users can actually understand.
            </p>
            <p>
              When I’m not designing, you can find me museum-hopping, collecting design
              inspiration, exploring tech gadgets like e-readers and retro handhelds,
              and enjoying 3rd–4th wave specialty coffee.
            </p>
            <div className="about-hero__cta">
              <h3>Wanna work together?</h3>
              <p>I’d love to hear from you.</p>
              <button type="button">Let’s work together!</button>
            </div>
          </div>
        </div>
      </header>

      <main className="about-main">
        <section className="about-section">
          <div className="about-section__header">
            <h2>Work experiences</h2>
          </div>
          <div className="about-experience">
            {experiences.map((item) => (
              <article
                className="about-experience__row"
                key={`${item.role}-${item.company}`}
              >
                <span className="about-experience__role">{item.role}</span>
                <span className="about-experience__company">{item.company}</span>
                <span className="about-experience__period">{item.period}</span>
              </article>
            ))}
          </div>
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
