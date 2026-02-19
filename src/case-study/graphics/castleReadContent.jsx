import TextHighlighter from '../../components/TextHilight'
import castleReadBanner from './castle-read/thumbnail.png'
import concept02 from './castle-read/concept-02.svg'
import concept03 from './castle-read/concept-03.svg'
import concept04 from './castle-read/concept-04.svg'
import logoConceptsImage from './castle-read/02_research.png'
import brandDirectionImage from './castle-read/03_brand_direction.png'

import visual2Image from './castle-read/04_visual2.png'
import totebagImage from './castle-read/05.png'
import outcomeImage from './castle-read/06_outcome.png'

export const castleReadContent = {
  bubbleWelcome: (
    <>
      You're exploring <span className="bubble__accent">CastleRead</span>, one of my featured Graphic Design project!
    </>
  ),

  projectTitle: 'A Set of Poster Designs for a Castle Themed Bookstore',

  tocItems: [
    { id: 'context', label: 'Context' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'pre-design', label: 'Pre-Design' },
    { id: 'design-process', label: 'Design Process' },
    { id: 'problem', label: 'Post-Design' },
    { id: 'final-thoughts', label: 'Final Thoughts' },
  ],

  hero: {
    image: castleReadBanner,
    alt: 'CastleRead case study hero banner',
  },

  category: 'Graphic Design Project',

  skills: {
    groups: [
      {
        category: 'Design Software',
        chips: ['Adobe Illustrator', 'Adobe Photoshop'],
      },
      {
        category: 'Design Skills',
        chips: ['Branding', 'Visual Identity', 'Illustration', 'Mockup Design'],
      },
    ],
  },

  context: {
    overview: {
      summary: (
        <p>
          CastleRead is a <TextHighlighter className="text-highlight">concept bookstore designed as a castle-inspired sanctuary for stories and imagination.</TextHighlighter> The brief required creating multiple original logo icons and evolving one into a full-page product advertisement.<br /><br />
          The design objective was to translate themes of fantasy, legacy, and protection into strong visual symbols, then extend that identity into a cohesive and technically refined brand execution.
        </p>
      ),
      meta: [
        { label: 'Type', value: 'Product Advertisement' },
        { label: 'Client', value: 'CastleRead' },
        { label: 'Timeline', value: 'Dec - Jan 2025' },
        { label: 'Role', value: 'Branding Designer' },
      ],
    },
    targetUsers: {
      content: <p>Readers of fantasy, historical fiction, and epic period narratives.</p>,
    },
  },

  workflow: {
    steps: [
      { number: 1, title: 'Brand Exploration' },
      { number: 2, title: 'Logo Concept Development' },
      { number: 3, title: 'Poster Series Development' },
      { number: 4, title: 'Brand Application & Mockups' },
      { number: 5, title: 'Future Expansion' },
    ],
  },

  preDesign: {
    subsections: [
      {
        title: '1. Brand Exploration',
        body: (
          <p>
            The concept began with defining CastleRead as more than a bookstore, but a sanctuary built for immersive storytelling. Inspired by my love for spending time in bookstores, I elevated the challenge by shaping the brand around a castle theme to attract readers of fantasy, historical fiction, and epic period narratives. The goal was to establish a clear emotional direction rooted in imagination, timelessness, and quiet grandeur before moving into visual development.
          <br/><br/></p>
        ),

      },
    ],
  },

  designProcess: {
    subsections: [
      {
        title: '2. Logo Concept Development',
        layout: 'card',
        body: (
          <>
            <div className="logo-concept-cards">
              <div className="logo-concept-cards__item">
                <img src={concept02} alt="Logo concept 1: symmetry and top-down castle layout" />
                <p>Symmetry and a top-down castle layout formed by repeated book shapes.</p>
              </div>
              <div className="logo-concept-cards__item">
                <img src={concept03} alt="Logo concept 2: open book and castle silhouette (selected)" />
                <p>Fluid curves from intersecting circles—an open book transforming into a castle silhouette.</p>
              </div>
              <div className="logo-concept-cards__item">
                <img src={concept04} alt="Logo concept 3: isometric fortress and stacked books" />
                <p>Isometric perspective connecting fortress architecture with stacked books.</p>
              </div>
            </div>
            <p>
Three distinct logo directions were explored to translate the CastleRead concept into visual form. Each concept combined the symbolism of books and castle architecture using simplified geometric shapes, while maintaining clarity in black and white.<br /><br />
The first direction focused on symmetry and a top-down castle layout formed by repeated book shapes.<br/><TextHighlighter className="text-highlight">The second direction achieved its fluid curves through the intersection of multiple circles, creating smooth, organic lines that resemble an open book transforming into a castle silhouette.</TextHighlighter><br/> The third adopted an isometric perspective, emphasizing structure and repetition to connect fortress architecture with stacked books.<br /><br />
From these explorations, the strongest direction was selected based on conceptual clarity, visual balance, and scalability.<br/><br/>
Option two was selected <TextHighlighter className="text-highlight">because it most clearly communicates the image of an open book while still embedding recognizable castle architecture within the form, creating a balanced and immersive visual identity.</TextHighlighter> 
            </p>
          </>
        ),
        image: { src: logoConceptsImage, alt: 'CastleRead logo concepts' },
      },
      {
        title: '3. Poster Series Development',
        layout: 'card',
        body: (
          <p>
The CastleRead identity expands into a thematic poster series that reinterprets the idea of the castle across cultures. Three visual directions European East Asian and Middle Eastern explore how storytelling and architectural grandeur intersect within different traditions.<br/><br/>
Rather than promoting products, the posters focus on atmosphere and emotion. The copywriting remains minimal and poetic, aiming to sell the feeling of entering a realm of knowledge and imagination rather than simply visiting a bookstore.
          </p>
        ),
        image: { src: visual2Image, alt: 'CastleRead poster series' },
      },
      {
        title: '4. Brand Application & Mockups',
        layout: 'card',
        body: (
          <p>
            To test the strength of the visual identity, the logo and poster system were applied to real-world contexts through mockups. This included storefront signage, book covers, tote bags, and printed materials to evaluate how the brand performs across different touchpoints.<br/><br/>
            The goal was to ensure consistency, scalability, and visual impact beyond flat compositions, confirming that CastleRead functions as a cohesive and immersive brand experience.
          </p>
        ),
        image: { src: outcomeImage, alt: 'CastleRead brand application mockups' },
      },
    ],
  },

  problem: {
    title: 'Post-Design',
    subsections: [
      {
        title: '5. Future Expansion',
        layout: 'card',
        body: (
          <p>
Beyond advertising the bookstore itself, CastleRead has potential to expand into branded merchandise that strengthens the identity outside the physical space. One natural extension is a tote bag designed for carrying books while still reflecting the castle-inspired visual language.<br/><br/>
This allows the brand to move with the reader, turning everyday objects into subtle extensions of the CastleRead world and reinforcing the connection between storytelling and lifestyle.
          </p>
        ),
        image: { src: totebagImage, alt: 'CastleRead future expansion' },
      },
    ],
  },

  outcomes: {
    subsections: [
      {
        body: (
          <>
            <p>
            This project strengthened both conceptual thinking and technical execution. Working within strict logo construction guidelines such as achromatic builds, expanded strokes, clean pathfinder usage, and organized file structure reinforced precision and discipline in vector design.<br/><br/>
Extending the identity into a structured poster series and product advertisement deepened my understanding of visual consistency, paragraph styles, global color systems, and how branding must function cohesively across multiple formats.
Most importantly, I learned that strong branding is not just about aesthetics, but about building a clear concept first and allowing every design decision to support that narrative with clarity and intention.
            </p>
          </>
        ),
      },
    ],
  },
}
