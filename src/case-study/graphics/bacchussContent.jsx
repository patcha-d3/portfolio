import TextHighlighter from '../../components/TextHilight'
import bacchussBanner from './bacchuss/banner.png'
import briefImage from './qooked/01_brief.png'
import researchImage from './bacchuss/02.jpg'
import brandDirectionImage from './bacchuss/03.png'
import visual1Image from './bacchuss/01.png'
import visual2Image from './bacchuss/04.png'
import menuSystemImage from './bacchuss/05.png'
import outcomeImage from './bacchuss/06.png'

export const bacchussContent = {
  bubbleWelcome: (
    <>
      You're exploring <span className="bubble__accent">Bacchuss</span>!
    </>
  ),

  projectTitle: 'Where Tradition Umeshu Meets a Modern Can Design',

  tocItems: [
    { id: 'context', label: 'Context' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'pre-design', label: 'Pre-Design' },
    { id: 'design-process', label: 'Design Process' },
    { id: 'problem', label: 'Post-Design' },
    { id: 'final-thoughts', label: 'Final Thoughts' },
  ],

  hero: {
    image: bacchussBanner,
    alt: 'Bacchuss case study hero banner',
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
        chips: ['Mockup Design', 'Layout Design', 'Visual Identity', 'Package Design', ],
      },
    ],
  },

  context: {
    overview: {
      summary: (
        <p>
          Bacchuss is a beverage can label design project created for the Canadian market. The objective is <TextHighlighter className="text-highlight">to develop a visually compelling and market-ready can design that clearly communicates the product type while maintaining strong brand identity.</TextHighlighter><br /><br />
          The design must balance creativity with technical accuracy, ensuring all required content is properly integrated within the dieline and production standards. Final deliverables include a production-ready dieline, a realistic mockup, and a client proof.
        </p>
      ),
      meta: [
        { label: 'Type', value: 'Beverage Can Label' },
        { label: 'Client', value: 'Bacchuss' },
        { label: 'Timeline', value: 'Nov 2025' },
        { label: 'Role', value: 'Branding Designer' },
      ],
    },
    targetUsers: {
      content: <p>Umeshu drinkers in Canada</p>,
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
            Umeshu is a popular Japanese plum wine known for its smooth, easy drinking taste, yet it remains niche in Canada. At the same time, the Canadian market shows strong demand for premium canned alcohol and global flavors.<br /><br />
            Bacchuss was created to introduce umeshu to a wider Canadian audience by repositioning it as a modern, accessible, and premium canned plum wine. The brand's name is a play on the word "bacchus," the Roman god of wine, and "Bacchuss" is pronounced like "bac-shush" in Japanese.
          </p>
        ),
        image: { src: researchImage, alt: 'Research and decode insights for Bacchuss menu' },
      },
      {
        title: '3. Brand Direction',
        body: (
          <p>
            For Bacchuss, I wanted to position the brand as a premium plum wine rooted in Japanese tradition yet presented in a modern, approachable way for the Canadian market.<br /><br />
What personally interested me most was the idea of time and aging. I chose to <TextHighlighter className="text-highlight">highlight vintage variation as a core concept, where each year reflects a different flavor experience. Younger vintages express a brighter, slightly more acidic profile, while longer aged editions develop deeper, smoother, and more complex notes.</TextHighlighter><br /><br />
Rather than treating different years as simple variations, I framed them as evolving stories of taste. This allowed the brand to communicate craftsmanship, patience, and depth through both flavor and visual identity.
          </p>
        ),
        image: { src: brandDirectionImage, alt: 'Brand direction for Bacchuss' },
      },
    ],
  },



  designProcess: {
    subsections: [
      {
        title: '4. Visual Identity',
        layout: 'three-block',
        imageBefore: { src: visual1Image, alt: 'Bacchuss visual identity' },
        body: (
          <p>
            The visual identity of Bacchuss balances tradition and modernity. A vertical wordmark creates strong shelf presence, while serif typography references heritage and craftsmanship. The overall layout remains clean and minimal to reflect premium positioning.<br /><br />
Color is the key differentiator. Each vintage is expressed through a distinct gradient palette inspired by plum tones. Brighter gradients represent younger, more acidic profiles, while deeper hues signal aged, richer, and more complex flavors.<br /><br />
This system allows every edition to feel unique, yet clearly unified under one brand.
          </p>
        ),
        image: { src: visual2Image, alt: 'Bacchuss color palette and visual system' },
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
        image: { src: menuSystemImage, alt: 'Bacchuss menu system design' },
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
            The final stage focused on refinement and consistency across all vintage variations. Alignment, spacing, and typography hierarchy were carefully adjusted to maintain clarity and balance throughout the layout. Special attention was given to bilingual readability and front facing visibility to ensure strong shelf impact.<br /><br />
            In this stage, <TextHighlighter className="text-highlight">the finalized dielines and corresponding mockups for each label were prepared and attached as production samples. These files serve both as print ready documents for manufacturing and as final presentation materials for client approval.</TextHighlighter>
            </p>
          </>
        ),
        image: { src: outcomeImage, alt: 'Bacchuss final menu outcome' },
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
