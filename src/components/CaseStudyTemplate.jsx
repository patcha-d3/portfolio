import { useEffect } from "react"
import { Link } from "react-router-dom"
import "./CaseStudyTemplate.css"
import Navigation from "./Navigation"
import CaseStudyToc from "./CaseStudyToc"
import Bubble from "./Bubble"
import gotitHero from "../case-study/uiux/gotit_hero.png"
import logo from "../assets/logo.svg"
import figmaIcon from "../assets/about/design/figma.svg"
import TextHighlighter from "./TextHilight"
import { getWorkItemById } from "../data/content"

const CaseStudyTemplate = ({ projectId, nextWork }) => {
  const workItem = projectId ? getWorkItemById(projectId) : null
  const titleHeading = workItem?.name ?? "Case study"

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="case-template">
      <Navigation />
      <Bubble>
        Welcome to my <span className="bubble__accent">case study</span> work!
      </Bubble>
      <CaseStudyToc
        items={[
          "Overview",
          "Challenge",
          "Solution",
          "Process",
          "Results",
          "Final Thoughts",
        ]}
      />

      <header className="case-template__hero-banner" aria-label="Case study hero">
        <span className="case-template__hero-label">Featured Work</span>
        <img
          src={gotitHero}
          alt="Got It case study hero banner"
          width={1200}
          height={640}
        />
      </header>

      <div className="case-template__title-strip" aria-label="Project title">
        <p className="case-template__title-category">UI/UX Project</p>
        <hr className="case-template__title-divider" />
        <div className="case-template__title-header">
          <div className="case-template__case-logo" aria-hidden="true">
            {/* 64×64 placeholder – replace with <img src={yourCaseStudyLogo} alt="" /> */}
          </div>
          <div className="case-template__title-heading-wrap">
            <h2 className="case-template__title-heading">{titleHeading}</h2>
          </div>
        </div>
      </div>

      <main className="case-template__main">
        <section className="case-template__section" aria-label="Skills used">
          <div className="case-template__skills">
            <div className="section-heading">
              <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2 className="case-template__skills-heading">Skills used</h2>
              </div>
            </div>
            <div className="case-template__skills-groups">
              <div className="case-template__skills-group">
                <span className="case-template__skills-category">UI/UX</span>
                <div className="case-template__skills-chips">
                  <span className="case-template__skill-chip">Lo-fi Wireframe</span>
                  <span className="case-template__skill-chip">Mid-fi Wireframe</span>
                  <span className="case-template__skill-chip">Hi-fi Wireframe</span>
                  <span className="case-template__skill-chip">Prototyping</span>
                </div>
              </div>
              <div className="case-template__skills-group">
                <span className="case-template__skills-category">Graphic Design</span>
                <div className="case-template__skills-chips">
                  <span className="case-template__skill-chip">Branding</span>
                  <span className="case-template__skill-chip">Style Guide</span>
                </div>
              </div>
              <div className="case-template__skills-group">
                <span className="case-template__skills-category">Development</span>
                <div className="case-template__skills-chips">
                  <span className="case-template__skill-chip">Front-end Development</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="overview" className="case-template__section case-template__overview">
        <div className="section-heading">
              <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Overview</h2>
              </div>
            </div>
          <div className="case-template__summary">
    

            <p>
            Got It is a student-led educational technology initiative at British Columbia Institute of Technology (BCIT), created to support underrepresented trades students who struggle with limited study time, dense technical manuals, and learning anxiety.

Traditional trade textbooks are often overwhelming, text-heavy, and difficult to navigate. The team was asked to design a digital learning tool that could simplify complex electrical concepts, reduce cognitive overload, and help students feel more confident and organized in their learning.
            </p>
          </div>

          <div className="case-template__overview-row">
            <div className="case-template__meta">
              <div>
                <h4>Type</h4>
                <p>AI-Powered Study Tool</p>
              </div>
              <div>
                <h4>Client</h4>
                <p>ConnectHER</p>
              </div>
              <div>
                <h4>Timeline</h4>
                <p>Sep 2025 - Dec 2025</p>
              </div>
              <div>
                <h4>Target Users</h4>
                <p>Electrical Apprentices,<br/> trades students,<br/>  underrepresented learners</p>
              </div>
              <div>
                <h4>Role</h4>
                <p>Product Designer, <br/> Scrum Master</p>
              </div>
              <div>
                <h4>Live</h4>
                <div className="case-template__meta-links">
                  <a href="#" className="case-template__meta-link case-template__meta-link--primary">
                    <span className="case-template__meta-link-icon" aria-hidden="true">
                      <img src={figmaIcon} alt="" width={18} height={18} />
                    </span>
                    <span className="case-template__meta-link-text">Figma Prototype</span>
                    <span className="case-template__meta-link-arrow" aria-hidden="true">→</span>
                  </a>
                  <a href="#" className="case-template__meta-link case-template__meta-link--secondary">
                    <span className="case-template__meta-link-icon" aria-hidden="true">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <path d="M2 12h20" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                    </span>
                    <span className="case-template__meta-link-text">Visit Website</span>
                    <span className="case-template__meta-link-arrow" aria-hidden="true">→</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="case-template__accomplished">
              <div>
                <h2>As a Product Designer and Scrum Master,</h2>
                <p>
                I worked as <TextHighlighter>a Product Designer and Scrum Master</TextHighlighter>, supporting both product execution and team momentum across design and development.

From a product perspective, I contributed to UX flows, UI decisions, branding alignment, and front-end implementation using <TextHighlighter>React.js and CSS</TextHighlighter>. From a leadership perspective, I facilitated agile practices, aligned priorities, removed blockers, and ensured the team moved forward with clarity and focus.

I <TextHighlighter>collaborated closely with designers, developers, and marketing teammates</TextHighlighter> to ensure the product balanced user needs, technical feasibility, and delivery timelines.
                </p>
              </div>
              <div>
                <h2>My Responsibilities included:</h2>
                <ul className="case-template__role-list">
                  <li>Designing and refining user flows focused on clarity and low cognitive load</li>
                  <li>Supporting UI decisions to create a calm, distraction-free interface</li>
                  <li>Collaborating with developers to ensure designs were implemented accurately</li>
                  <li>Facilitating stand-ups, planning sessions, and sprint alignment as Scrum Master</li>
                  <li>Keeping the team focused on user problems rather than feature overload</li>
                </ul>
                <p>
                  While this was a team effort, my role sat at the intersection of <TextHighlighter>design execution, collaboration, and delivery.</TextHighlighter>
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="tools" className="case-template__section case-template__tools">
          <div className="section-heading">
            <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
            <div className="section-heading__label">
              <h2>Tools &amp; Methods</h2>
            </div>
          </div>
          <div className="case-template__tools-grid">
            <div>
              <h4>Design</h4>
              <p>Figma</p>
              <p>Procreate</p>
            </div>
            <div>
              <h4>Research</h4>
              <p>Competitive audit</p>
              <p>User interviews</p>
            </div>
            <div>
              <h4>Delivery</h4>
              <p>Prototype testing</p>
              <p>Design handoff</p>
            </div>
          </div>
        </section>

        <section id="challenge" className="case-template__section case-template__challenge">
          <div className="section-heading">
            <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
            <div className="section-heading__label">
              <h2>Identified Challenges</h2>
            </div>
          </div>
          <div className="case-template__challenge-grid">
            <article>
              <h3>Low retention</h3>
              <p>Users dropped off after week one without reminders.</p>
            </article>
            <article>
              <h3>Cluttered flow</h3>
              <p>Too many steps made simple tasks feel heavy.</p>
            </article>
            <article>
              <h3>Motivation gap</h3>
              <p>Progress feedback felt generic and unhelpful.</p>
            </article>
          </div>
        </section>

        <section id="solution" className="case-template__section case-template__results">
          <div className="section-heading">
            <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
            <div className="section-heading__label">
              <h2>Approach</h2>
            </div>
          </div>
          <p>
            Simplified the habit flow into three steps, introduced visual
            milestones, and paired micro-copy with calming UI patterns to keep
            users engaged without pressure.
          </p>
        </section>

        <section id="process" className="case-template__section case-template__highlights">
          <div className="section-heading">
            <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
            <div className="section-heading__label">
              <h2>Highlights</h2>
            </div>
          </div>
          <div className="case-template__media-grid">
            <img
              src="https://placehold.co/520x360?text=Screen+1"
              alt="Got It screen example one"
            />
            <img
              src="https://placehold.co/520x360?text=Screen+2"
              alt="Got It screen example two"
            />
            <img
              src="https://placehold.co/520x360?text=Screen+3"
              alt="Got It screen example three"
            />
          </div>
        </section>

        <section id="results" className="case-template__section case-template__results">
          <div className="section-heading">
            <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
            <div className="section-heading__label">
              <h2>Results</h2>
            </div>
          </div>
          <p>
            The refined flow improved perceived clarity and reduced task
            completion time during testing. Users reported higher motivation and
            confidence in daily use.
          </p>
        </section>

        <section id="results" className="case-template__section case-template__results">
          <div className="section-heading">
            <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
            <div className="section-heading__label">
              <h2>Final Thoughts</h2>
            </div>
          </div>
          <p>
          This case study reinforced how thoughtful pacing and small UI cues
            can make habit-building feel supportive rather than overwhelming.
          </p>
        </section>

  


        {nextWork && (
          <section className="case-template__section case-template__next-work">
            <div className="section-heading">
              <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Next Case Study</h2>
              </div>
            </div>
            <Link to={nextWork.href} className="case-template__next-work-link">
              <span className="case-template__next-work-label">Next project</span>
              <span className="case-template__next-work-title">{nextWork.title}</span>
              <span className="case-template__next-work-arrow" aria-hidden="true">→</span>
            </Link>
          </section>
        )}
      </main>
    </div>
  )
}

export default CaseStudyTemplate
