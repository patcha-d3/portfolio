import { Brain, Clock, Users, ShieldCheck, Target, Compass, CheckCircle } from 'lucide-react'
import gotitHero from './gotit_hero.png'
import iaImage from './IA.png'
import uiImage from './gotit/dashboard.png'
import accessibilityImage from './gotit/tutorial.png'
import visualLanguageImage from './gotit/visual.png'
import projectManagementImage from './gotit/jira.png'
import figmaIcon from '../../assets/about/design/figma.svg'
import digitalProductDesignImage from './gotit/happypath.png'
import TextHighlighter from '../../components/TextHilight'

export const gotitContent = {
  bubbleWelcome: (
    <>
      You're exploring <span className="bubble__accent">Got It</span>, one of my featured UI/UX project!
    </>
  ),

  projectTitle:
    'Reduced learning complexity for trades students by designing a structured, distraction-free AI study tool grounded in user feedback and fast, iterative prototyping',

  tocItems: [
    { id: 'context', label: 'Context' },
    { id: 'problem', label: 'The Problem' },
    { id: 'defining-opportunity', label: 'Defining the Opportunity' },
    { id: 'how-we-solved-it', label: 'How We Solved It' },
    { id: 'designing-experience', label: 'Designing the Experience' },
    { id: 'design-system', label: 'Product Design System' },
    { id: 'leadership', label: 'Project Leadership & Execution' },
    { id: 'outcomes', label: 'Outcomes & Impact' },
  ],

  hero: {
    image: gotitHero,
    alt: 'Got It case study hero banner',
  },

  category: 'UI/UX Project',

  skills: {
    groups: [
      {
        category: 'UI/UX',
        chips: ['Lo-fi Wireframe', 'Mid-fi Wireframe', 'Hi-fi Wireframe', 'Prototyping'],
      },
      {
        category: 'Graphic Design',
        chips: ['Branding', 'Style Guide'],
      },
      {
        category: 'Development',
        chips: ['Front-end Development'],
      },
    ],
  },

  // 01 — Context
  context: {
    overview: {
      summary:
        '<p>Got It is an AI-powered study platform designed for Level 1 Electrical Apprentices in BC. The program runs in an intensive 10-week format, requiring students to process large volumes of dense, technical material quickly. For many apprentices, the barrier isn’t motivation, it’s cognitive overload.<br /><br />Got It bridges the gap between how manuals are written and how apprentices actually learn.</p>',
      meta: [
        { label: 'Type', value: 'AI-Powered Study Tool' },
        { label: 'Client', value: 'ConnectHER' },
        { label: 'Timeline', value: 'Sep 2025 - Dec 2025' },
        {
          label: 'Role',
          value: (
            <>
              Product Designer,
              <br /> Scrum Master
            </>
          ),
        },
      ],
      metaLinks: [
        { label: 'Figma Prototype', href: '#', primary: true },
        { label: 'Visit Website', href: '#', primary: false },
      ],
    },
    targetUsers: {
      content: (
        <>
          <p>Electrical apprentices, trades students, and underrepresented learners.</p>
          <p>
          Level 1 Electrical Apprentices in British Columbia, particularly those who struggle with dense technical manuals, time pressure, or diverse learning styles such as ADHD, dyslexia, or returning adult learners.
          </p>
        </>
      ),
    },
    whyThisMatters: {
      content: (
        <p>
          Level 1 is fast, intense, and foundational. When students fall behind, it compounds quickly. A significant number of apprentices do not complete their program, and many leave the trade entirely.
          Designing for clarity at this stage isn’t just about better studying, it directly impacts confidence, retention, and long-term career success.
        </p>
      ),
    },
  },

  tools: {
    groups: [
      { title: 'Design', items: ['Figma', 'Procreate'] },
      { title: 'Research', items: ['Competitive audit', 'User interviews'] },
      { title: 'Delivery', items: ['Prototype testing', 'Design handoff'] },
    ],
  },

  // 02 — The Problem
  problem: {
    title: 'What Level 1 Electrical Apprentices in BC Face',
    items: [
      {
        image: { src: 'https://placehold.co/400x200?text=Challenge+1', alt: 'Overwhelmed by Volume' },
        title: 'Overwhelmed by Volume',
        description: '8 textbooks. Thousands of pages. Dense technical language.',
        body: 'Level 1 electrical theory includes multiple textbooks totaling hundreds of pages, packed with unfamiliar terminology and minimal visual support.<br /><br />The challenge isn\'t intelligence.<br />It\'s cognitive overload.',
      },
      {
        image: { src: 'https://placehold.co/400x200?text=Challenge+2', alt: 'Extreme Time Compression' },
        title: 'Extreme Time Compression',
        description: '10 weeks to absorb everything before taking the exam.',
        body: 'That means:<br /><br />- Over 200 pages per week<br />- Continuous assessments<br />- No buffer to fall behind<br />- If someone misses even a few days, the backlog compounds immediately.<br /><br />There is no gradual catch-up curve.',
      },
      {
        image: { src: 'https://placehold.co/400x200?text=Challenge+3', alt: 'Where Do I Even Start Paralysis' },
        title: '"Where Do I Even Start?" Paralysis',
        description: 'Lack of structure → Functional Freeze',
        body: 'When faced with massive content and tight deadlines, many apprentices experience:<br /><br />- Difficulty prioritizing chapters<br />- No clear study roadmap<br />- Inability to break material into manageable parts<br />- Starting anxiety → avoidance → guilt cycle',
      },
      {
        image: { src: 'https://placehold.co/400x200?text=Challenge+4', alt: 'Neurodiversity & Learning Gaps' },
        title: 'Neurodiversity & Learning Gaps',
        description: 'ADHD, dyslexia, autism spectrum, or years out of formal education',
        body: 'Many apprentices have ADHD, dyslexia, are on the autism spectrum, or haven\'t been in formal education for years. Traditional manuals assume high reading stamina, strong working memory, and fast information processing—yet dense paragraphs, abstract theory, and heavy jargon create cognitive friction instead of clarity. The system expects uniform learners, but the classroom is not uniform.',
      },
    ],
  },

  // 03 — Defining the Opportunity
  definingOpportunity: {
    intro:
      'Rather than building another generic AI study tool, we saw an opportunity to design a clarity-first system tailored specifically for apprentices under time pressure.',
    cards: [
      {
        icon: Target,
        title: 'Design Principles',
        body: '<ul><li>Clarity over complexity</li><li>Structure over volume</li><li>Accessibility by default</li><li>Accuracy as a requirement, not a feature</li></ul><p>If the material is overwhelming, the interface must reduce friction — not add to it.</p>',
      },
      {
        icon: Compass,
        title: 'Product Direction',
        body: '<p>We focused on transforming dense manuals into structured, manageable learning experiences. Instead of replacing content, the goal was to reformat how apprentices interact with it using simplifying language, visualizing structure, and guiding next steps.</p>',
      },
      {
        icon: CheckCircle,
        title: 'Success Criteria',
        body: '<ul><li>Reduce cognitive overload</li><li>Provide clear starting points</li><li>Support diverse learning styles</li><li>Deliver accurate, trade-aligned outputs</li></ul><p>Success meant apprentices could move from "I can\'t start" to "I know what to do next."</p>',
      },
    ],
  },

  // 04 — How We Solved It (bento)
  howWeSolvedIt: {
    title: 'How We Solved It',
    bento: true,
    items: [
      {
        icon: Brain,
        title: 'Reducing Cognitive Overload',
        description:
          'We transformed dense technical content into simplified, structured, and visual formats to make information easier to process.',
      },
      {
        icon: Clock,
        title: 'Breaking the 10-Week Pressure',
        description:
          'Introduced guided study flows and time-based planning tools to turn overwhelming volume into daily actionable steps.',
      },
      {
        icon: Users,
        title: 'Designing for Neurodiverse Learning',
        description:
          'Built accessibility and clarity into the interface by default, supporting different processing styles without adding complexity.',
      },
      {
        icon: ShieldCheck,
        title: 'Accuracy as a Requirement',
        description:
          'Grounded outputs in verified trade materials to ensure reliability in a safety-critical learning environment.',
      },
    ],
  },

  // 05 — Designing the Experience
  designingExperience: {
    subsections: [
      {
        title: 'Core Features',
        body: '<p>Simplify converts dense manuals into plain language. Summarize creates quick study notes from long readings. Mind-map turns information into visual learning aids. A personalized study guide breaks content into daily steps with a built-in Pomodoro timer for focus.</p>',
      },
      {
        title: 'Interaction Design',
        body: '<p>The flow guides users from upload to simplify, understand, review, and plan. Each step removes uncertainty and shows the next action. The happy path keeps apprentices moving forward instead of getting stuck.</p>',
      },
      {
        title: 'Brand & Identity',
        body: '<p><strong>Tone of voice</strong> — Supportive and clear, never overwhelming.</p><p><strong>Messaging</strong> — "Confidence starts with clarity" and similar phrases reinforce the value proposition.</p><p><strong>Calm visual direction</strong> — Minimal chrome, intentional spacing, and predictable layouts.</p><p><strong>Sticker pack</strong> — A cohesive set that strengthens product identity and community.</p><p><strong>Presentation visual system</strong> — Consistent branding across pitches, handoffs, and external communication.</p>',
      },
    ],
  },

  // 06 — Product Design System
  designSystem: {
    subsections: [
      {
        title: 'Information Architecture',
        body: <p>The platform follows a clear learning flow from upload to simplify, understand, review, and plan. Each step removes uncertainty and guides the next action.</p>,
        image: { src: iaImage, alt: 'Information Architecture' },
      },
      {
        title: 'UI Design Decisions',
        body: <p>Strong hierarchy, intentional spacing, and predictable layouts reduce distraction and create a sense of control.</p>,
        image: { src: uiImage, alt: 'UI Design Decisions' },
      },
      {
        title: 'Accessibility',
        body: <p>Adjustable typography, text-to-speech, and split-screen comparison support different cognitive needs without adding complexity.</p>,
        image: { src: accessibilityImage, alt: 'Accessibility' },
      },
      {
        title: 'Visual Language',
        body: <p>A calm and structured visual system reinforces safety and clarity, helping the experience feel manageable from the first interaction.</p>,
        image: { src: visualLanguageImage, alt: 'Visual Language' },
      },
    ],
  },

  // 07 — Project Leadership & Execution
  leadership: {
    subsections: [
      {
        title: 'Project Management',
        body: '<p>The project began with co-creating a detailed Team Charter, where I helped define roles based on individual strengths and weaknesses while aligning on shared success criteria.</p><p>I structured the full project setup from the ground up, including:</p><ul><li>Creating and configuring the Jira Kanban board</li><li>Designing the sprint structure</li><li>Preparing agendas for internal and external meetings</li><li>Facilitating weekly standups and retrospectives</li></ul><p>By establishing clear systems early, I ensured alignment, accountability, and consistent momentum throughout the semester.</p>',
        image: { src: projectManagementImage, alt: 'Project Management' },
      },
      {
        title: 'Digital Product Design',
        body: '<p>I conducted user and advisor interviews to shape early product direction and guide refinement.</p><p>I defined the information architecture from sitemap to happy path flows before moving into visual design. The experience evolved from low-fidelity wireframes to final UI, maintaining clarity and usability at every stage.</p><p>Beyond UX execution, I also contributed to branding direction and merchandise design, including a cohesive sticker pack that strengthened the product identity.</p>',
        image: { src: digitalProductDesignImage, alt: 'Digital Product Design' },
      },
    ],
  },

  // 08 — Outcomes & Impact
  outcomes: {
    subsections: [
      {
        title: 'What Worked',
        body: (
          <p>
            The refined flow improved perceived clarity and reduced task completion time during
            testing. Users reported higher motivation and confidence in daily use.
          </p>
        ),
      },
      {
        title: 'What I Learned',
        body: (
          <p>
            This case study reinforced how thoughtful pacing and small UI cues can make habit-building
            feel supportive rather than overwhelming.
          </p>
        ),
      },
      {
        title: 'Skills Gained',
        body: (
          <p>
            UX flows, UI decisions, branding alignment, front-end implementation, agile facilitation,
            stand-ups, planning sessions, sprint alignment, and cross-functional collaboration.
          </p>
        ),
      },
    ],
  },

  figmaIcon,
}
