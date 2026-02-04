import './Craft.css'
import Navigation from '../components/Navigation'

const Craft = () => {
  return (
    <div className="craft-page">
      <Navigation />

      <main className="craft-main">
        <section className="craft-hero">
          <div className="craft-hero__content">
            <p className="craft-pill">Paper texture · Cloud · Sync</p>
            <h1>Your space for notes, tasks, and big ideas</h1>
            <p className="craft-sub">
              Write, plan, and organize everything in one place. Clean layouts, playful
              textures, and focus-first workflows help ideas move from first thought to
              final form.
            </p>
            <div className="craft-hero__actions">
              <button className="craft-btn craft-btn--primary">Try Craft Free</button>
              <button className="craft-btn craft-btn--ghost">View Templates</button>
            </div>
          </div>
          <div className="craft-hero__media" aria-hidden="true">
            <div className="craft-paper" />
            <div className="craft-card craft-card--floating" />
          </div>
        </section>

        <section className="craft-section craft-section--center">
          <h2>Craft isn’t just for one thing, it’s for your things.</h2>
          <div className="craft-tags">
            {['Docs', 'Tasks', 'Calendar', 'Whiteboards', 'Daily Notes'].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </section>

        <section className="craft-section">
          <h3>How people use Craft</h3>
          <div className="craft-people">
            {[
              { name: 'Tom', role: 'Podcaster', use: 'Meeting notes, social posts' },
              { name: 'Ana', role: 'Producer', use: 'Shoot plans, scripts' },
              { name: 'Gagan', role: 'Product Manager', use: 'Notes, tasks, drafts' },
              { name: 'Amity', role: 'Educator', use: 'Lessons, daily sparks' },
            ].map((person) => (
              <article className="craft-person" key={person.name}>
                <div className="craft-avatar" aria-hidden="true" />
                <div>
                  <h4>{person.name}</h4>
                  <p className="craft-role">{person.role}</p>
                  <p className="craft-use">{person.use}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="craft-section craft-split">
          <div>
            <span className="craft-eyebrow">Write</span>
            <h2>From first thought to final form</h2>
            <p>
              Capture quick notes on any device, then refine them into documents you
              are proud to share. Templates, whiteboards, and AI helpers keep you
              moving.
            </p>
            <div className="craft-links">
              <a href="#craft-write">Learn more</a>
              <a href="#craft-write">Publish &amp; Share</a>
            </div>
          </div>
          <div className="craft-pane">
            <div className="craft-pane__card" />
            <div className="craft-quote">
              “Publishing directly from Craft feels natural — it’s where I write.”
              <span>Tom · Writer</span>
            </div>
          </div>
        </section>

        <section className="craft-section craft-split craft-split--reverse">
          <div>
            <span className="craft-eyebrow">Plan</span>
            <h2>Planning that doesn’t feel like work</h2>
            <p>
              Keep ideas and tasks together. Checklists, reminders, and calendar views
              stay close to the work you are doing.
            </p>
            <div className="craft-links">
              <a href="#craft-plan">Learn more</a>
            </div>
          </div>
          <div className="craft-pane craft-pane--grid">
            <div className="craft-mini" />
            <div className="craft-mini" />
            <div className="craft-mini" />
            <div className="craft-mini" />
          </div>
        </section>

        <section className="craft-section">
          <span className="craft-eyebrow">Organize</span>
          <h2>Structure that adapts to your thinking</h2>
          <div className="craft-structure">
            {[
              'Spaces',
              'Folders & Tags',
              'Collections',
            ].map((label) => (
              <article className="craft-structure__card" key={label}>
                <div className="craft-structure__thumb" aria-hidden="true" />
                <h4>{label}</h4>
                <p>Build the structure that matches your workflow.</p>
              </article>
            ))}
          </div>
        </section>

        <section className="craft-section craft-section--center">
          <span className="craft-eyebrow">Customization</span>
          <h2>Make it unmistakably yours</h2>
          <div className="craft-swatches">
            {[
              'Crimson Coil',
              'Writer',
              'Shape Shift',
              'Little World',
              'Paper',
              'Infinity Void',
            ].map((theme) => (
              <span key={theme}>{theme}</span>
            ))}
          </div>
        </section>

        <section className="craft-pricing">
          <div className="craft-price-card">
            <h3>Free</h3>
            <p>Full access, great if you use it occasionally.</p>
            <strong>$0 / month</strong>
            <button className="craft-btn craft-btn--primary">Get Started</button>
          </div>
          <div className="craft-price-card craft-price-card--highlight">
            <h3>Plus</h3>
            <p>Designed to fit into your everyday flow.</p>
            <strong>$8 / month</strong>
            <button className="craft-btn craft-btn--ghost">Upgrade to Plus</button>
          </div>
        </section>

        <section className="craft-cta">
          <h2>Let’s get started</h2>
          <p>Start for free. No credit card required.</p>
          <div className="craft-hero__actions">
            <button className="craft-btn craft-btn--primary">Download</button>
            <button className="craft-btn craft-btn--ghost">Continue on web</button>
          </div>
        </section>
      </main>
    </div>
  )
}

export default Craft
