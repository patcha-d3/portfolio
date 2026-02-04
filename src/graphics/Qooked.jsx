import './Qooked.css'
import Navigation from '../components/Navigation'
import CaseStudyToc from '../components/CaseStudyToc'

const Qooked = () => {
  return (
    <div className="qooked-page">
      <Navigation />

      <CaseStudyToc
        items={['Overview', 'Challenge', 'Solution', 'Process', 'Final Thoughts']}
      />

      <header className="qooked-hero">
        <img
          className="qooked-hero__image"
          src="https://placehold.co/1200x600?text=Qooked+Hero"
          alt="Qooked hero banner placeholder"
        />
      </header>

      <main className="qooked-main">
        <section className="qooked-title">
          <span className="qooked-title__eyebrow">Graphic Design</span>
          <hr></hr>
          <h1>QOOKED</h1>
          <p>xxxx</p>
        </section>

        <section className="qooked-overview">
          <div className="qooked-overview__summary">
            <p>
              This project is part of a Vector Design 6006 assignment. The brief was to
              design a bistro restaurant menu based on a provided menu list. The key
              deliverable focused on presenting a rebranded visual identity for the
              restaurant, along with a clear and well-structured menu layout.
            </p>
          </div>
          <div className="qooked-overview__meta">
            <div>
              <h4>Type</h4>
              <p>Restaurant Menu</p>
            </div>
            <div>
              <h4>Timeline</h4>
              <p>May 2025</p>
            </div>
            <div>
              <h4>Target Users</h4>
              <p>Family, couple, teenagers</p>
            </div>
            <div>
              <h4>Role</h4>
              <p>Branding Designer</p>
            </div>
          </div>
          <div className="qooked-overview__callouts">
            <div>
              <h3>What I Accomplished</h3>
              <p>xxxx</p>
            </div>
            <div>
              <h3>My Role</h3>
              <p>xxxx</p>
            </div>
          </div>
        </section>

        <section className="qooked-tools">
          <h2>Tools &amp; Methods</h2>
          <div className="qooked-tools__grid">
            <div>
              <h4>Design Softwares</h4>
              <p>Adobe Illustrator</p>
              <p>Adobe InDesign</p>
            </div>
            <div>
              <h4>Development</h4>
              <p>React.js</p>
              <p>CSS</p>
            </div>
          </div>
        </section>

        <section className="qooked-section">
          <h2>Identified Challenges</h2>
          <p>xxxx</p>
        </section>

        <section className="qooked-section qooked-approach">
          <h2>Approach</h2>
          <p>
            For the menu layout, I used Adobe InDesign to manage the large amount of
            content efficiently. InDesign allowed me to structure information clearly
            and maintain consistency across multiple menu sections by setting up
            character styles and paragraph styles.
          </p>
          <ul>
            <li>Clear hierarchy between headings, item names, descriptions, and prices</li>
            <li>Strong readability despite the dense content</li>
            <li>Visual consistency across all menu pages</li>
          </ul>
          <p>
            By combining a playful visual style with a well-organized layout system,
            the final design balances expressive branding with functional clarity,
            making the menu easy to scan and enjoyable to read.
          </p>
        </section>

        <section className="qooked-section">
          <h2>Highlights</h2>
          <p>xxxx</p>
        </section>

        <section className="qooked-section">
          <h2>Results</h2>
          <p>xxxx</p>
        </section>

        <section className="qooked-final">
          <h3>Final Thoughts &amp; Learnings</h3>
          <p>
            This project helped me think as both a product designer and a Scrum Master.
            I learned that strong product outcomes come from reducing complexity,
            validating early, and maintaining momentum through clear communication.
            Step-by-step guides and alignment across stakeholders helped keep the focus
            on outcomes. Most importantly, this project reinforced my belief that good
            design is not just about interfaces, but about creating structure that
            helps people feel confident, capable, and supported.
          </p>
        </section>

        <section className="qooked-gallery">
          <img
            src="https://placehold.co/1200x520?text=Menu+Spread"
            alt="Qooked menu spread placeholder"
          />
        </section>
      </main>
    </div>
  )
}

export default Qooked
