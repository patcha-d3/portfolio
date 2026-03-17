import TextHighlighter from '../../components/TextHilight'
import upbitBanner from './upbit/banner.png'
import prob1Image from './upbit/prob1.png'
import prob2Image from './upbit/prob2.png'
import prob3Image from './upbit/prob3.png'
import briefImage from './upbit/01.png'
import researchImage from './upbit/02.png'
import visual2Image from './upbit/04.png'
import menuSystemImage from './upbit/05.png'
import outcomeImage from './upbit/media.png'
import styleguideImage from './upbit/051.png'
import signupImage from './upbit/signup.png'

export const upbitContent = {
  bubbleWelcome: (
    <>
      You're exploring <span className="bubble__accent">Upbit</span>, my real-world UI/UX experience!
    </>
  ),

  projectTitle: 'Upbit — In-house Design Across Marketing & Product',

  tocItems: [
    { id: 'context', label: 'Context' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'pre-design', label: 'What Do I Design?' },
    { id: 'design-process', label: 'Digital Product Design' },
    { id: 'problem', label: 'Post-Design' },
    { id: 'final-thoughts', label: 'Final Thoughts' },
  ],

  hero: {
    image: upbitBanner,
    alt: 'Upbit case study hero banner',
  },

  category: 'Marketing & UI/UX Design',

  skills: {
    groups: [
      {
        category: 'Softwares',
        chips: ['Figma', 'Figjam', 'Adobe Illustrator', 'Adobe Photoshop', 'Visual Studio Code'],
      },
      {
        category: 'Soft Skills',
        chips: ['Marketing Design', 'UI/UX Design', 'Branding', 'User Research', 'User Flow', 'Information Architecture', 'Wireframing', 'Prototyping', 'Design Systems', 'Print Design'],
      },
    ],
  },

  context: {
    overview: {
      summary: (
        <>
          <p>
            A visual designer working across <TextHighlighter className="text-highlight">branding, marketing, and product design</TextHighlighter> within Upbit’s in-house team.
          </p>

          <p>
            Since 2022, work has spanned both digital and physical touchpoints — from social campaigns and brand systems to UI/UX and interactive experiences across Asia Pacific markets.
          </p>

          <p>
            Design is approached with clarity and intention — helping users understand faster, feel more confident, and take action more easily, especially within complex financial environments.
          </p>

          <p>
            <TextHighlighter className="text-highlight">
              Balancing user needs, business goals, and real-world constraints is central to every design decision.
            </TextHighlighter>
          </p>
        </>
      ),
      meta: [
        { label: 'Type', value: 'Digital Asset Exchange' },
        { label: 'Company', value: 'Upbit Asia Pacific' },
        { label: 'Timeline', value: '2022 — Present' },
        { label: 'Role', value: 'RegionalMarketing & UI/UX Designer' },
      ],
    },

    targetUsers: {
      content: (
        <p>
          Traders, investors, and internal teams across marketing, product, and operations.
        </p>
      ),
    },
  },


  workflow: {
    steps: [
      { number: 1, title: 'Scope of Work' },
      { number: 2, title: 'System & Experience Design' },
      { number: 3, title: 'Interface & Visual Execution' },
      { number: 4, title: 'Marketing & Content Design' },
      { number: 5, title: 'Testing & Iteration' },
      { number: 6, title: 'Launch & Continuous Improvement' },
    ],
  },

  preDesign: {
    subsections: [
      {
        title: 'Design Scope',
        body: (
          <p>
            Work extended beyond a single project, covering branding, marketing, UI/UX, and internal tools. Outputs ranged from social campaigns and presentations to interface improvements and system design.
            <br /><br />
            Operating within an in-house environment required adaptability, speed, and consistency across multiple teams and formats.
          </p>
        ),
        image: { src: briefImage, alt: 'Overview of design scope at Upbit' },
      },

      

      {
        title: 'System Thinking & Data-Driven Design',
        body: (
          <p>
            Collaboration with Customer Service and development teams enabled deeper understanding of user behavior through internal data.
            <br /><br />
            Analysis of backend data identified drop-off points during the sign-up process. Based on these insights, the experience was refined to improve clarity and reduce friction.
            <br /><br />
            <TextHighlighter className="text-highlight">
              Resulting in a 54% increase in successful sign-up conversion
            </TextHighlighter>.
          </p>
        ),
        image: { src: signupImage, alt: 'Sign up process and conversion rate' },
      },
    ],
  },

  designProcess: {
    subsections: [
      {
        title: 'Interface & Visual Design',
        layout: 'card',
        body: (
          <p>
    The visual direction was shaped by the brand's emphasis on <TextHighlighter className="text-highlight">clarity and transparency</TextHighlighter>. Both the application and overall branding adopt a straightforward and direct approach, avoiding unnecessary complexity.
    <br /><br />
    Rather than focusing on decorative elements, the design prioritizes strong communication — ensuring that information is presented clearly, efficiently, and without distraction. Every visual decision supports usability, helping users navigate and act with confidence in a fast-paced environment.
  </p>
        ),
        image: { src: visual2Image, alt: 'Visual system and interface design' },
      },

      {
        title: 'Marketing & Content Design',
        layout: 'card',
        body: (
          <>
            <div className="upbit-proto-card">
              <img src={styleguideImage} alt="Upbit prototype overview" className="upbit-proto-card__img" />
            </div>              <p>
              A big part of my work focuses on marketing and communication design — especially for social media, campaigns, and product updates.
              I designed a wide range of content including weekly posts, announcements, campaign visuals, and in-app notifications. Many of these were part of ongoing content systems, where consistency and speed were just as important as creativity.
              </p>

            <p>
            Working in a fast-moving environment also taught me how to adapt visuals based on market conditions and performance, while still maintaining a strong and recognizable brand voice.
            </p>
          </>
        ),
        image: { src: menuSystemImage, alt: 'System and navigation design' },
      },
    ],
  },

  problem: {
    title: 'Offline Design',
    subsections: [
      {
        title: 'Out of Home Design',
        layout: 'card',
        body: (
          <p>
            In addition to digital work, I also designed physical materials such as booths, business cards, and event assets.
            <TextHighlighter className="text-highlight">
            This required translating brand identity into real-world environments, ensuring consistency in scale, materials, and user experience.
            </TextHighlighter>
            Working on physical outputs also strengthened my understanding of production, print specifications, and how design decisions translate beyond the screen.
          </p>
        ),
        image: { src: outcomeImage, alt: 'Final product outcome' },
      },
    ],
  },

  outcomes: {
    subsections: [
      {
        body: (
          <>
            <p>
              Working within a live financial platform provided hands-on experience in 
              <TextHighlighter className="text-highlight">designing under real-world constraints</TextHighlighter> — including compliance, scalability, and performance.
            </p>

            <p>
              The experience strengthened cross-functional collaboration, data-informed decision-making, and the ability to design for high-stakes environments.
            </p>

            <p>
              <TextHighlighter className="text-highlight">
                Clarity, precision, and adaptability remain core principles in approaching complex systems.
              </TextHighlighter>
            </p>
          </>
        ),
      },
    ],
  },
}