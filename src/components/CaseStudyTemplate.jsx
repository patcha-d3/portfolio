import "./CaseStudyTemplate.css"
import Navigation from "./Navigation"
import CaseStudyToc from "./CaseStudyToc"
import Bubble from "./Bubble"

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

      <header className="case-template__hero">
        <div className="case-template__hero-card">
          <div className="case-template__hero-icon" aria-hidden="true">
            Got It
          </div>
          <h1>Got It</h1>
          <p>
            A habit-friendly product experience focused on helping users track
            progress with calm, focused UI.
          </p>
        </div>
        <div className="case-template__hero-media">
          <img
            src="https://placehold.co/1400x640?text=Case+Study+Hero"
            alt="Case study hero banner"
          />
        </div>
      </header>

      <main className="case-template__main">
        <section className="case-template__section case-template__overview">
          <div className="case-template__summary">
            <h2>Overview</h2>
            <p>
              Got It is a UX/UI case study that explores how micro-interactions
              and gentle guidance can improve daily habit tracking. The project
              focused on clarity, motivation, and visual rhythm.
            </p>
          </div>
          <div className="case-template__meta">
            <div>
              <h4>Type</h4>
              <p>Mobile App</p>
            </div>
            <div>
              <h4>Timeline</h4>
              <p>6 weeks</p>
            </div>
            <div>
              <h4>Target Users</h4>
              <p>Students, young professionals</p>
            </div>
            <div>
              <h4>Role</h4>
              <p>UX/UI Design, Research</p>
            </div>
          </div>
        </section>

        <section className="case-template__section case-template__accomplished">
          <div>
            <h2>What I Accomplished</h2>
            <p>
              Designed a cohesive UI system, defined the interaction flow, and
              validated layout choices through rapid prototyping.
            </p>
          </div>
          <div>
            <h2>My Role</h2>
            <p>
              Led research synthesis, created the design system, and produced
              high-fidelity prototypes for usability checks.
            </p>
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
