import TextHighlighter from '../../components/TextHilight'
import healUBanner from './healU/banner.png'
import prob1Image from './healU/prob1.png'
import prob2Image from './healU/prob2.png'
import prob3Image from './healU/prob3.png'
import briefImage from './healU/01.png'
import researchImage from './healU/02.png'
import brandDirectionImage from '../graphics/qooked/03_brand_direction.png'
import visual1Image from '../graphics/qooked/04_visual1.png'
import visual2Image from './healU/04.png'
import menuSystemImage from '../graphics/qooked/05.png'
import outcomeImage from '../graphics/qooked/06_outcome.jpg'

export const healUContent = {
  bubbleWelcome: (
    <>
      You're exploring <span className="bubble__accent">HealU</span>, one of my featured UI/UX project!
    </>
  ),

  projectTitle: 'HealU Turns Body Pain into a Guided Recovery Journey',

  tocItems: [
    { id: 'context', label: 'Context' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'pre-design', label: 'Pre-Design' },
    { id: 'design-process', label: 'Design Process' },
    { id: 'problem', label: 'Post-Design' },
    { id: 'final-thoughts', label: 'Final Thoughts' },
  ],

  hero: {
    image: healUBanner,
    alt: 'HealU case study hero banner',
  },

  category: 'UI/UX Project',

  skills: {
    groups: [
      {
        category: 'Softwares',
        chips: ['Figma', 'Figjam','Adobe Illustrator', 'Adobe Photoshop', 'Visual Studio Code'],
      },
      {
        category: 'Soft Skills',
        chips: ['User Research', 'User Persona', 'User Flow', 'Information Architecture', 'Low-fi Wireframe', 'Hi-fi Wireframe', 'Prototyping', 'Branding'],
      },
      {
        category: 'Front-end Development',
        chips: ['Next.Js', 'HTML', 'CSS', 'Javascript'],
      },
    ],
  },

  context: {
    overview: {
      summary: (
        <p>
          HealU is a mobile app designed to <TextHighlighter className="text-highlight">help office and remote workers manage posture-related pain through personalized recovery plans</TextHighlighter>. The experience begins with a scenario-based diagnostic survey, followed by tailored exercise recommendations and daily check-ins to track progress. By combining guided exercises, pain tracking, and re-diagnosis features, HealU transforms body discomfort into a structured and supportive digital recovery journey.
        </p>
      ),
      meta: [
        { label: 'Type', value: 'Application' },
        { label: 'Client', value: 'HealU' },
        { label: 'Timeline', value: 'Feb - May 2025' },
        { label: 'Role', value: 'Product Designer, Front-end Developer' },
      ],
    },
    targetUsers: {
      content: <p>Office workers, Remote workers</p>,
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
        title: '1. Planning & Research',
        body: (
          <p>
          The project began with brainstorming and research on health issues affecting Canadians. Findings showed that 1 in 5 Canadians experience chronic pain, 85 percent of office workers report back pain, and 41 percent of remote workers experience worsening back pain. This highlighted a clear opportunity to address posture related discomfort. As a three month project, careful planning was required. A Kanban board was created in Figma and milestones were scheduled in a shared calendar to manage workload and meet internal deadlines.
          </p>
        ),
        image: { src: briefImage, alt: 'Brief and audit for HealU menu' },
      },
      {
        title: '2. User Insights & Problem Framing',
        body: (
          <>
            <p>
            Research and survey findings revealed that posture related pain is common among office and remote workers who sit for extended hours. Many experience back and neck discomfort but struggle to seek regular physiotherapy due to busy schedules and limited accessibility. Insights showed a strong demand for personalized features and simple progress tracking.
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
            <p>The core problem was framed as a need for an accessible, guided, and structured recovery solution that fits into users’ daily routines without requiring frequent clinic visits.</p>
          </>
        ),
        image: { src: researchImage, alt: 'Research and decode insights for HealU menu' },
      },
      {
        quote: 'Long hours at a desk slowly turn discomfort into daily pain, and eventually into chronic conditions that quietly take control of everyday life.',
      },
      {
        title: '3. Information Architecture',
        body: (
          <p>
            Based on the findings, a clear brand direction is defined. The restaurant is positioned as an egg-centric brunch destination with a playful, friendly, and urban personality.<br /><br />
            Key brand keywords are established: Brunch • Egg-forward • Playful • Friendly • Catchy • Daytime Energy.<br /><br />
            These keywords guide the tone, visual language, and overall design decisions moving forward.
          </p>
        ),
        image: { src: brandDirectionImage, alt: 'Brand direction for HealU' },
      },
    ],
  },

  

  designProcess: {
    subsections: [
      {
        title: '4. Wireframing',
        layout: 'three-block',
        imageBefore: { src: visual1Image, alt: 'HealU visual identity' },
        body: (
          <p>
            The visual identity translates the brand keywords into a cohesive system. The wordmark logo is developed from the name HealU, with creative typography that emphasizes the brunch concept and a sense of warmth. Texture is incorporated into the typography to resemble seasonings sprinkled over food.<br /><br />
            The color palette is built around warm brunch tones — orange to represent daytime energy and warmth, and yellow to symbolize eggs as the core ingredient.
          </p>
        ),
        image: { src: visual2Image, alt: 'HealU color palette and visual system' },
      },
      {
        title: '5. Prototyping & Visual Design',
        layout: 'card',
        body: (
          <>
            <p>
              A structured modular grid is created to organize content clearly and consistently. Menu categories are arranged strategically to support natural reading flow.
            </p>
            <p>
              Paragraph and character styles are carefully divided to make the content easier to manage and maintain consistency throughout the layout. The styles include:
            </p>
            <ul>
              <li>Slogan</li>
              <li>Footer</li>
              <li>Food Category</li>
              <li>Food Header</li>
              <li>Glyph Header</li>
              <li>Food Subheader</li>
              <li>Menu Name</li>
              <li>Menu Ingredients</li>
              <li>Add/Modify</li>
              <li>Sticker Text</li>
              <li>Sticker Subtext</li>
            </ul>
            <p>
              This system allows clear hierarchy and quick updates without disrupting the overall layout. The structure ensures dish names, prices, and add-ons are easy to distinguish, prioritizing readability and effortless scanning.
            </p>
          </>
        ),
        image: { src: menuSystemImage, alt: 'HealU menu system design' },
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
              The final stage focuses on refinement and quality control. Spacing, alignment, consistency, and typographic balance are adjusted.
            </p>
            <p>
              All elements are proofread carefully to eliminate errors and ensure the final menu is polished, cohesive, and aligned with the intended brand personality.
            </p>
            <div className="qooked-flipbook">
              <iframe
                style={{ width: '100%', maxWidth: '840px', height: '510px', display: 'block', margin: '48px auto' }}
                src="https://online.anyflip.com/frsff/absi/index.html"
                seamless
                scrolling="no"
                frameBorder="0"
                allowTransparency
                allowFullScreen
                title="HealU menu flipbook"
              />
            </div>
          </>
        ),
        image: { src: outcomeImage, alt: 'HealU final menu outcome' },
      },
    ],
  },

  outcomes: {
    subsections: [
      {
        body: (
          <>
            <p>
            This project provided a complete end to end product experience, from early research and problem framing to final development and implementation. It was a <TextHighlighter className="text-highlight">valuable opportunity to experience the full UX process, including research, problem solving, usability testing, and iteration.</TextHighlighter> Usability testing played a critical role in refining the app, allowing continuous improvements to user flow and creating a smoother, more intuitive experience.</p>
            <p>A major milestone was building the web application using Next.js for the first time. This involved learning how to structure components, manage modules, and translate design decisions into functional interfaces. The development phase strengthened both technical confidence and system thinking.</p>
            <p>
            Strong teamwork was one of the biggest success factors. <TextHighlighter className="text-highlight">Clear communication and shared responsibility helped the team consistently meet deadlines and deliver the project successfully.</TextHighlighter></p>
            <p>
            Several challenges emerged throughout the process. The unique user flow meant there were limited existing references to rely on, requiring deeper exploration and validation. Limited background knowledge in the healthcare domain also made it challenging to fully understand terminology and propose accurate solutions. Additionally, early layout and consistency gaps required refinement, as simplifying the design while maintaining clarity proved more complex than expected.</p>
            <p>
Overall, this project reinforced the importance of structured collaboration, iterative testing, and bridging design with development to create meaningful digital solutions.
            </p>
          </>
        ),
      },
    ],
  },
}
