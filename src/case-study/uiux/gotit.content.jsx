import { Brain, Clock, Users, ShieldCheck, Target, Compass, CheckCircle } from 'lucide-react'
import gotitHero from './gotit_hero.png'
import iaImage from './IA.png'
import uiImage from './gotit/dashboard.png'
import accessibilityImage from './gotit/tutorial.png'
import visualLanguageImage from './gotit/visual.png'
import projectManagementImage from './gotit/jira.png'
import figmaIcon from '../../assets/about/design/figma.svg'
import digitalProductDesignImage from './gotit/happypath.png'
import personaImage from './gotit/persona.png'
import brand1Image from './gotit/brand1.png'
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
    { id: 'final-thoughts', label: 'Final Thoughts' },
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
          <p>Level 1 Electrical Apprentices in BC,</p>
          <p>Underrepresented learners</p>

          
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
    intro:
      'User interviews revealed a clear pattern. Apprentices weren’t struggling because they lacked discipline — they were overwhelmed before they even began.<br /><br />Textbooks felt like a different language. Ten weeks moved too fast. Chapters piled up faster than they could process. For some, neurodiverse learning styles made dense, unstructured material even harder to navigate.',

    title: 'What Level 1 Electrical Apprentices in BC Face',
    image: { src: personaImage, alt: 'User persona' },
    items: [
      {
        title: 'Overwhelmed by Volume',
        description: '8 textbooks. Thousands of pages. Dense technical language.',
        body: 'Level 1 electrical theory includes multiple textbooks totaling hundreds of pages, packed with unfamiliar terminology and minimal visual support.',
      },
      {

        title: 'Extreme Time Compression',
        description: '10 weeks to absorb everything before taking the exam.',
        body: 'That means:<br /><br />- Over 200 pages per week<br />- Continuous assessments<br />- No buffer to fall behind<br />- If someone misses even a few days, the backlog compounds immediately.',
      },
      {
        title: '"Where Do I Even Start?" Paralysis',
        description: 'Lack of structure → Functional Freeze',
        body: 'When faced with massive content and tight deadlines, many apprentices experience:<br /><br />- Difficulty prioritizing chapters<br />- No clear study roadmap<br />- Inability to break material into manageable parts',
      },
      {
        title: 'Neurodiversity & Learning Gaps',
        description: 'ADHD, dyslexia, autism spectrum, or years out of formal education',
        body: 'Many apprentices have ADHD, dyslexia, or years out of formal education. Dense manuals assume strong reading stamina and fast processing—yet jargon and abstract theory create cognitive friction instead of clarity.',
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
        body: '<ul><li>Clarity over complexity</li><li>Structure over volume</li><li>Accessibility by default</li><li>Accuracy as a requirement, not a feature</li></ul>',
      },
      {
        icon: Compass,
        title: 'Product Direction',
        body: '<p>Focused on transforming dense manuals into structured, manageable learning experiences.</p>',
      },
      {
        icon: CheckCircle,
        title: 'Success Criteria',
        body: '<ul><li>Reduce cognitive overload</li><li>Provide clear starting points</li><li>Support diverse learning styles</li><li>Deliver accurate, trade-aligned outputs</li></ul>',
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
        image: { src: brand1Image, alt: 'Brand & Identity' },
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

  // 08 — Final Thoughts
  outcomes: {
    subsections: [
      {
        title: 'What Worked',
        body: (
          <p>
            Assumption is not problem-solving. Strong design decisions came from user testing, not personal opinion. What may feel clear and intuitive during design can feel confusing or overwhelming to users. Iterative testing revealed blind spots early and ensured the product reduced friction instead of creating new learning curves.
          </p>
        ),
      },
      {
        title: 'What I Learned',
        body: (
          <p>
            This project strengthened more than just design execution.
Project management became a daily practice — structuring sprints, facilitating discussions, and keeping momentum under pressure. Listening openly, mediating disagreements, and making timely decisions proved just as critical as wireframes or UI.
<br /><br />Good products are built on clarity. Strong teams are built on trust and communication.
          </p>
        ),
      },
      {
        title: 'Skills Gained',
        body: (
          <ul>
            <li>Agile project management and sprint planning</li>
            <li>Cross-functional collaboration between design and development</li>
            <li>Decision-making under scope and time constraints</li>
            <li>Next.js application structure and routing</li>
            <li>AI API integration and prompt refinement</li>
            <li>Front-end implementation with React and CSS</li>
            <li>User testing synthesis and iterative design improvements</li>
            <li>Branding direction and merchandise design</li>
            <li>Long-term product vision and roadmap development</li>
          </ul>
        ),
      },
    ],
  },

  figmaIcon,
}
