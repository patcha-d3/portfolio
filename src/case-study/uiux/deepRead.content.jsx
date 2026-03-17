import TextHighlighter from '../../components/TextHilight'
import deepReadBanner from './deepRead/banner.png'
import prob1Image from './deepRead/prob1.png'
import prob2Image from './deepRead/prob2.png'
import prob3Image from './deepRead/prob3.png'
import briefImage from './deepRead/01.svg'
import researchImage from './deepRead/02.png'
import visual2Image from './deepRead/04.png'
import menuSystemImage from './deepRead/05.png'
import outcomeImage from './deepRead/06.png'
import styleguideImage from './deepRead/051.png'

export const deepReadContent = {
  bubbleWelcome: (
    <>
      You're exploring <span className="bubble__accent">DeepRead</span>, one of my featured UI/UX project!
    </>
  ),

  projectTitle: 'Forgot What You Read? DeepRead Helps You Remember and Reflect',

  tocItems: [
    { id: 'context', label: 'Context' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'pre-design', label: 'What Do I Design?' },
    { id: 'design-process', label: 'Digital Product Design' },
    { id: 'problem', label: 'Post-Design' },
    { id: 'final-thoughts', label: 'Final Thoughts' },
  ],

  hero: {
    image: deepReadBanner,
    alt: 'DeepRead case study hero banner',
  },

  category: 'UI/UX Project',

  skills: {
    groups: [
      {
        category: 'Softwares',
        chips: ['Figma', 'Figjam', 'Adobe Illustrator', 'Adobe Photoshop', 'CursorAI'],
      },
      {
        category: 'Soft Skills',
        chips: ['User Research', 'User Persona', 'User Flow', 'Information Architecture', 'Low-fi Wireframe', 'Hi-fi Wireframe', 'Prototyping', 'Branding'],
      },
      {
        category: 'Front-end Development',
        chips: ['React', 'Vite', 'HTML', 'CSS', 'Javascript'],
      },
    ],
  },

  context: {
    overview: {
      summary: (
        <p>
          DeepRead is a <TextHighlighter className="text-highlight">reflective companion for readers who forget more than just the page number</TextHighlighter>. <br />
Instead of treating bookmarks as passive markers, DeepRead turns them into small checkpoints. Every time you stop reading, you log where you paused, what you learned, and how you felt. <br /><br />
Over time, those small reflections become a structured reading journal.<br /><br />
It doesn’t replace your reading app. <br />
It helps you remember why the book mattered.
        </p>
      ),
      meta: [
        { label: 'Type', value: 'MobileApplication' },
        { label: 'Client', value: 'DeepRead' },
        { label: 'Timeline', value: 'Feb - Mar 2026' },
        { label: 'Role', value: 'Product Designer, Front-end Developer' },
      ],
    },
    targetUsers: {
      content: <p>Book lovers, e-Book readers</p>,
    },
  },

  workflow: {
    steps: [
      { number: 1, title: 'Planning & Research' },
      { number: 2, title: 'User Insights & Problem Framing' },
      { number: 3, title: 'Information Architecture' },
      { number: 4, title: 'Wireframing' },
      { number: 5, title: 'Prototyping & Visual Design' },
      { number: 6, title: 'User Testing' },
      { number: 7, title: 'Development & Implementation' },
    ],
  },

  preDesign: {
    subsections: [
      {
        quote: 'We rarely forget the page we stopped at.<br />We forget what the story meant.',
      },
      {
        title: '1. Planning & Research',
        body: (
          <p>
            DeepRead started from a simple, relatable problem.
Sometimes we stop reading a book for weeks, and when we come back, we don’t just forget the page number. We forget what happened, what we were thinking, and how we felt.
Bookmarks track location.
They don’t track meaning.
So I began exploring how people read in real life and reviewing existing tools like highlights and reading trackers. Most focus on progress, not reflection.
That became the opportunity.<br /><br />
What if bookmarking could capture thoughts, not just pages?
          </p>
        ),
        image: { src: briefImage, alt: 'Brief and audit for DeepRead' },
      },
      {
        title: '2. User Insights & Problem Framing',
        body: (
          <>
            <p>
              Research and survey findings revealed that readers often finish books without a way to capture their thoughts. Many want to look back at quotes, moods, and reflections but struggle with scattered notes and forgotten memories. Insights showed a strong demand for simple logging, mood tracking, and compiled summaries that turn reading into a richer experience.
            </p>
            <div className="healu-themes">
              <h4 className="healu-themes-title">Pain Points</h4>
              <div className="healu-themes-inner">
                <div className="healu-theme-col">
                  <img src={prob1Image} alt="" className="healu-theme-img" />
                </div>
                <div className="healu-theme-col">
                  <img src={prob2Image} alt="" className="healu-theme-img" />
                </div>
                <div className="healu-theme-col">
                  <img src={prob3Image} alt="" className="healu-theme-img" />
                </div>
              </div>
            </div>
            <p>The core problem was framed as a need for an accessible, simple, and delightful reflection companion that fits into readers' routines without overwhelming them with features.</p>
          </>
        ),
        image: { src: researchImage, alt: 'Research and decode insights for DeepRead' },
      },
      {
        quote: 'A book finished without reflection is like a journey without a journal — the moments fade, and only fragments remain.',
      },
      {
        title: '3. Information Architecture',
        body: (
          <p>
            Based on the findings, a clear app structure was defined. DeepRead is positioned as a reflection-focused companion with a calm, focused, and bookish personality.<br /><br />
            Key product keywords are established: Reflection • Progress • Mood • Quotes • Calendar • Summary.<br /><br />
            These keywords guide the information architecture, navigation, and overall design decisions moving forward.
          </p>
        ),
      },
    ],
  },

  designProcess: {
    subsections: [
      {
        title: '4. Wireframing',
        layout: 'card',
        body: (
          <p>
            The visual identity translates the product keywords into a cohesive system. The design emphasizes readability, calm tones, and a sense of contemplation. Typography was chosen for clarity and a literary feel. The color palette is built around soft, book-friendly tones — warm neutrals and accent colors that support focus and reflection.
          </p>
        ),
        image: { src: visual2Image, alt: 'DeepRead color palette and visual system' },
      },
      {
        title: '5. Prototyping & Visual Design',
        layout: 'card',
        body: (
          <>
            <div className="healu-proto-card">
              <img src={styleguideImage} alt="DeepRead prototype overview" className="healu-proto-card__img" />
              <p className="healu-proto-card__caption">The design system ensures consistency across screens and supports a cohesive user experience.</p>
            </div>
            <p>
              The visual direction did not emerge instantly. Early iterations revealed inconsistencies in layout, spacing, and hierarchy. Through trial and refinement, a structured approach was developed to bring clarity to the interface. The experience was designed around core flows: logging a reflection, viewing the calendar, browsing books, and reviewing the summary.<br /><br />
              For logging, the journey begins with selecting a book and date. Users record pages read, mood, and optional quotes or reflections. The calendar view provides a quick overview of reading activity. The books section lets users track progress and mark books as finished. When a book is complete, the summary compiles all logs into an aggregated journal.<br /><br />
              Separating these flows allowed the product to feel focused and purposeful, while maintaining clarity in interaction and purpose.
            </p>
            <div className="healu-prototypes">
              <iframe
                style={{ width: '100%', maxWidth: '1200px', height: '510px', display: 'block', margin: '48px auto' }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCpVhC0bbc4mRIikES7zP8n%2FHeal_U-Copy%3Fnode-id%3D17-6%26p%3Df%26viewport%3D869%252C458%252C0.06%26t%3DSvJpYZ84sYGDZ4tD-0%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D418%253A2067%26show-proto-sidebar%3D1"
                allowFullScreen
                title="DeepRead Figma prototype - flow 1"
              />
              <iframe
                style={{ width: '100%', maxWidth: '1200px', height: '510px', display: 'block', margin: '48px auto' }}
                src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FCpVhC0bbc4mRIikES7zP8n%2FHeal_U-Copy%3Fnode-id%3D17-6%26p%3Df%26viewport%3D869%252C458%252C0.06%26t%3DSvJpYZ84sYGDZ4tD-0%26scaling%3Dscale-down%26content-scaling%3Dfixed%26starting-point-node-id%3D1045%253A4541%26show-proto-sidebar%3D1"
                allowFullScreen
                title="DeepRead Figma prototype - flow 2"
              />
            </div>
          </>
        ),
        image: { src: menuSystemImage, alt: 'DeepRead navigation and flow design' },
      },
    ],
  },

  problem: {
    title: 'Post-Design',
    subsections: [
      {
        title: '6. User Testing',
        layout: 'card',
        body: (
          <>
            <p>
              After conducting usability testing, design improvements were made based on the findings to enhance overall usability and clarity.<br /><br />
              <TextHighlighter className="text-highlight">Participants tested the high fidelity prototype. Feedback highlighted areas for improvement in the logging flow, calendar interaction, and summary layout. Iterations were made to simplify data entry, clarify navigation, and improve the overall reading experience.</TextHighlighter><br /><br />
              These iterations significantly improved clarity, interaction feedback, and overall user flow.
            </p>
          </>
        ),
        image: { src: outcomeImage, alt: 'DeepRead final outcome' },
      },
    ],
  },

  outcomes: {
    subsections: [
      {
        body: (
          <>
            <p>
              This project provided a complete end-to-end product experience, from early research and problem framing to final development and implementation. It was a <TextHighlighter className="text-highlight">valuable opportunity to experience the full UX process, including research, problem solving, usability testing, and iteration.</TextHighlighter> Usability testing played a critical role in refining the app, allowing continuous improvements to user flow and creating a smoother, more intuitive experience.
            </p>
            <p>A major milestone was building the web application using React and Vite. This involved learning how to structure components, manage state, and translate design decisions into functional interfaces. The development phase strengthened both technical confidence and product thinking.</p>
            <p>
              <TextHighlighter className="text-highlight">Clear communication and iterative design helped deliver a focused product that meets the needs of readers who want to reflect on their reading journey.</TextHighlighter>
            </p>
            <p>
              Several challenges emerged throughout the process. Defining the right scope — reflection logging without becoming a full reading app — required careful balance. Ensuring the interface felt simple yet capable took multiple rounds of refinement. Additionally, designing for a calm, contemplative experience while maintaining usability proved a rewarding design challenge.
            </p>
            <p>
              Overall, this project reinforced the importance of user-centered design, iterative testing, and bridging design with development to create meaningful digital solutions.
            </p>
          </>
        ),
      },
    ],
  },
}
