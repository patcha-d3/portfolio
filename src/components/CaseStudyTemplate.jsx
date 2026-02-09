import "./CaseStudyTemplate.css"
import Navigation from "./Navigation"
import CaseStudyToc from "./CaseStudyToc"
import Bubble from "./Bubble"
import gotitHero from "../case-study/uiux/gotit_hero.png"
import TextHighlighter from "./TextHilight"

const CaseStudyTemplate = () => {
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
        <img
          src={gotitHero}
          alt="Got It case study hero banner"
          width={1200}
          height={640}
        />
      </header>

      <main className="case-template__main">
        <section className="case-template__section case-template__title-block" aria-label="Project title">
          <p className="case-template__title-category">UI/UX Project</p>
          <hr className="case-template__title-divider" />
          <h2 className="case-template__title-heading">Improved learning clarity and reduced study anxiety for trades students by designing an AI-powered, distraction-free study platform through agile, cross-functional collaboration</h2>
        </section>

        <section className="case-template__section case-template__overview">
          <div className="case-template__summary">
            <h2>Overview</h2>
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
                  <a href="#" className="case-template__meta-link case-template__meta-link--primary">Figma Prototype</a>
                  <a href="#" className="case-template__meta-link case-template__meta-link--secondary">Live Website</a>
                </div>
              </div>
            </div>

            <div className="case-template__accomplished">
              <div>
                <h2>What I Accomplished</h2>
                <p>
                I worked as <TextHighlighter>a Product Designer and Scrum Master</TextHighlighter>, supporting both product execution and team momentum across design and development.

From a product perspective, I contributed to UX flows, UI decisions, branding alignment, and front-end implementation using <TextHighlighter>React.js and CSS</TextHighlighter>. From a leadership perspective, I facilitated agile practices, aligned priorities, removed blockers, and ensured the team moved forward with clarity and focus.

I <TextHighlighter>collaborated closely with designers, developers, and marketing teammates</TextHighlighter> to ensure the product balanced user needs, technical feasibility, and delivery timelines.
                </p>
              </div>
              <div>
                <h2>My Role</h2>
                <p>My responsibilities included:</p>
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

        <section className="case-template__section case-template__tools">
          <h2>Tools &amp; Methods</h2>
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

        <section className="case-template__section case-template__challenge">
          <h2>Identified Challenges</h2>
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

        <section className="case-template__section case-template__approach">
          <h2>Approach</h2>
          <p>
            Simplified the habit flow into three steps, introduced visual
            milestones, and paired micro-copy with calming UI patterns to keep
            users engaged without pressure.
          </p>
        </section>

        <section className="case-template__section case-template__highlights">
          <h2>Highlights</h2>
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

        <section className="case-template__section case-template__results">
          <h2>Results</h2>
          <p>
            The refined flow improved perceived clarity and reduced task
            completion time during testing. Users reported higher motivation and
            confidence in daily use.
          </p>
        </section>

        <section className="case-template__section case-template__final">
          <h2>Final Thoughts</h2>
          <p>
            This case study reinforced how thoughtful pacing and small UI cues
            can make habit-building feel supportive rather than overwhelming.
          </p>
        </section>
      </main>
    </div>
  )
}

export default CaseStudyTemplate
