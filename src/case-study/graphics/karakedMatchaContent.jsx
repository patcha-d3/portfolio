import TextHighlighter from '../../components/TextHilight'
import karakedMatchaBanner from './karakedMatcha/banner.png'
import briefImage from './qooked/01_brief.png'
import researchImage from './karakedMatcha/02.jpg'
import brandDirectionImage from './karakedMatcha/03.png'
import visual1Image from './karakedMatcha/01.png'
import visual2Image from './karakedMatcha/04.png'
import menuSystemImage from './karakedMatcha/05.png'
import outcomeImage from './karakedMatcha/06.png'

export const karakedMatchaContent = {
  bubbleWelcome: (
    <>
      You're exploring <span className="bubble__accent">Karaked Matcha</span>!
    </>
  ),

  projectTitle: 'Where Traditional Matcha Meets a Modern Can Design',

  tocItems: [
    { id: 'context', label: 'Context' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'pre-design', label: 'Pre-Design' },
    { id: 'design-process', label: 'Design Process' },
    { id: 'problem', label: 'Post-Design' },
    { id: 'final-thoughts', label: 'Final Thoughts' },
  ],

  hero: {
    image: karakedMatchaBanner,
    alt: 'Karaked Matcha case study hero banner',
  },

  category: 'Graphic Design Project',

  skills: {
    groups: [
      {
        category: 'Design Software',
        chips: ['Adobe Illustrator', 'Adobe Photoshop'],
      },
      {
        category: 'Soft Skills',
        chips: ['Mockup Design', 'Layout Design', 'Visual Identity', 'Package Design'],
      },
    ],
  },

  context: {
    overview: {
      summary: (
        <p>
          Karaked Matcha is a beverage can label design project created for the Canadian market. The objective is <TextHighlighter className="text-highlight">to develop a visually compelling and market-ready can design that clearly communicates the product type while maintaining strong brand identity.</TextHighlighter><br /><br />
          The design must balance creativity with technical accuracy, ensuring all required content is properly integrated within the dieline and production standards. Final deliverables include a production-ready dieline, a realistic mockup, and a client proof.
        </p>
      ),
      meta: [
        { label: 'Type', value: 'Beverage Can Label' },
        { label: 'Client', value: 'Karaked' },
        { label: 'Timeline', value: 'Nov 2025' },
        { label: 'Role', value: 'Branding Designer' },
      ],
    },
    targetUsers: {
      content: <p>Matcha drinkers in Canada</p>,
    },
  },

  workflow: {
    steps: [
      { number: 1, title: 'Brief & Audit' },
      { number: 2, title: 'Research & Decode' },
      { number: 3, title: 'Brand Direction' },
      { number: 4, title: 'Visual Identity' },
      { number: 5, title: 'Label Design' },
      { number: 6, title: 'Refine & Review' },
    ],
  },

  preDesign: {
    subsections: [
      {
        title: '1. Brief & Audit',
        body: (
          <p>
            The project began with reviewing the assignment requirements and technical constraints, including Canadian bilingual regulations, required nutritional content, barcode placement, and dieline specifications.<br /><br />
            An audit was conducted to identify mandatory elements and ensure all production standards such as mL format, 300 PPI raster setup, and packaging requirements were clearly defined before design exploration.
            <br /><br /></p>
        ),
      },
      {
        title: '2. Research & Decode',
        body: (
          <p>
            Matcha has grown in popularity across the Canadian market, with demand for authentic, premium-grade Japanese green tea in ready-to-drink formats. At the same time, consumers seek brands that honor tradition while feeling modern and accessible.<br /><br />
            Karaked Matcha was created to introduce ceremonial-grade matcha to Canadian consumers by positioning it as a premium, authentic, and contemporary option. The brand extends the Karaked family with a focus on matcha's rich heritage and clean flavor.
          </p>
        ),
        image: { src: researchImage, alt: 'Research and decode insights for Karaked Matcha' },
      },
      {
        title: '3. Brand Direction',
        body: (
          <p>
            For Karaked Matcha, I wanted to position the brand as a premium matcha beverage rooted in Japanese tradition yet presented in a modern, approachable way for the Canadian market.<br /><br />
            What personally interested me most was the idea of ceremonial purity and green. I chose to <TextHighlighter className="text-highlight">highlight grade variety as a core concept, where each variant reflects a different matcha experience. Ceremonial grade expresses rich, umami-forward profiles, while culinary editions offer brighter, more versatile notes.</TextHighlighter><br /><br />
            Rather than treating different grades as simple variations, I framed them as evolving stories of taste. This allowed the brand to communicate authenticity, craftsmanship, and depth through both flavor and visual identity.
          </p>
        ),
        image: { src: brandDirectionImage, alt: 'Brand direction for Karaked Matcha' },
      },
    ],
  },

  designProcess: {
    subsections: [
      {
        title: '4. Visual Identity',
        layout: 'three-block',
        imageBefore: { src: visual1Image, alt: 'Karaked Matcha visual identity' },
        body: (
          <p>
            The visual identity of Karaked Matcha balances tradition and modernity. A clean wordmark creates strong shelf presence, while refined typography references Japanese craftsmanship. The overall layout remains minimal to reflect premium positioning.<br /><br />
            Color is the key differentiator. Each grade is expressed through a distinct palette inspired by matcha tones. Deep greens represent ceremonial richness, while lighter hues signal brighter, more refreshing profiles.<br /><br />
            This system allows every edition to feel unique, yet clearly unified under one brand.
          </p>
        ),
        image: { src: visual2Image, alt: 'Karaked Matcha color palette and visual system' },
      },
      {
        title: '5. Label Design',
        layout: 'card',
        body: (
          <>
            <p>
            At this stage, the focus shifted to ensuring the label was fully production ready. The dieline specifications were strictly followed, including the 229.0 mm width and 128.0 mm cut length, with all required elements placed within printable and safe zones.<br /><br />
            Dimensions, seam overlap, and clear areas were carefully reviewed to prevent distortion during application. Raster files were prepared at 300 PPI and all assets were properly packaged, ensuring the final files are ready for print and manufacturing.
            </p>
          </>
        ),
        image: { src: menuSystemImage, alt: 'Karaked Matcha label design' },
      },
    ],
  },

  problem: {
    title: 'Post-Design',
    subsections: [
      {
        title: '6. Refine & Finalize',
        layout: 'card',
        body: (
          <>
            <p>
            The final stage focused on refinement and consistency across all grade variations. Alignment, spacing, and typography hierarchy were carefully adjusted to maintain clarity and balance throughout the layout. Special attention was given to bilingual readability and front facing visibility to ensure strong shelf impact.<br /><br />
            In this stage, <TextHighlighter className="text-highlight">the finalized dielines and corresponding mockups for each label were prepared and attached as production samples. These files serve both as print ready documents for manufacturing and as final presentation materials for client approval.</TextHighlighter>
            </p>
          </>
        ),
        image: { src: outcomeImage, alt: 'Karaked Matcha final outcome' },
      },
    ],
  },
  outcomes: {
    subsections: [
      {
        body: (
          <>
            <p>
            This project provided valuable hands on experience in packaging and label design, moving beyond visual aesthetics into real production considerations. It reinforced the importance of designing within technical constraints while maintaining strong brand storytelling.<br /><br />
            Through creating dielines, preparing print ready files, and developing realistic mockups, the process became much more aligned with real world workflows. I gained a clearer understanding of how design decisions translate into manufacturing requirements and client expectations. It also built familiarity with production standards, file preparation, and the type of documentation required when collaborating with manufacturers and presenting finalized work to clients.<br /><br />
            Overall, this project strengthened both creative direction and technical execution within a professional packaging design context.
            </p>
          </>
        ),
      },
    ],
  },
}
