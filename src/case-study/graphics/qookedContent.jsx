import TextHighlighter from '../../components/TextHilight'
import qookedBanner from './qooked/banner.png'
import briefImage from './qooked/01_brief.png'
import researchImage from './qooked/02_research.png'
import brandDirectionImage from './qooked/03_brand_direction.png'
import visual1Image from './qooked/04_visual1.png'
import visual2Image from './qooked/04_visual2.jpg'
import menuSystemImage from './qooked/05.png'
import outcomeImage from './qooked/06_outcome.jpg'

export const qookedContent = {
  bubbleWelcome: (
    <>
      You're exploring <span className="bubble__accent">Qooked</span>, one of my featured Graphic Design project!
    </>
  ),

  projectTitle: 'Brunch Restaurant Menu Design for Qooked',

  tocItems: [
    { id: 'context', label: 'Context' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'pre-design', label: 'Pre-Design' },
    { id: 'design-process', label: 'Design Process' },
    { id: 'problem', label: 'Post-Design' },
    { id: 'final-thoughts', label: 'Final Thoughts' },
  ],

  hero: {
    image: qookedBanner,
    alt: 'Qooked case study hero banner',
  },

  category: 'Graphic Design Project',

  skills: {
    groups: [
      {
        category: 'Design Software',
        chips: ['Adobe Illustrator', 'Adobe InDesign', 'Adobe Photoshop'],
      },
      {
        category: 'Soft Skills',
        chips: ['Branding', 'Layout Design', 'Visual Identity'],
      },
    ],
  },

  context: {
    overview: {
      summary: (
        <p>
          This project focuses on <TextHighlighter className="text-highlight">designing a brand-new brunch menu for a restaurant</TextHighlighter>, including a custom restaurant name, slogan, and wordmark logo.
          The objective is <TextHighlighter className="text-highlight">to create an eye-catching, organized, and dynamic menu that reflects the personality of the food, drinks, ambiance, and overall dining experience</TextHighlighter>. The design must be primarily typographic, supported by carefully chosen colors, vector illustrations, glyphs, and at least one raster graphic.
        </p>
      ),
      meta: [
        { label: 'Type', value: 'Restaurant Menu' },
        { label: 'Client', value: 'Qooked' },
        { label: 'Timeline', value: 'May 2025' },
        { label: 'Role', value: 'Branding Designer' },
      ],
    },
    targetUsers: {
      content: <p>Family diners, couples, and teenagers looking for a casual brunch experience.</p>,
    },
  },

  workflow: {
    steps: [
      { number: 1, title: 'Brief & Audit' },
      { number: 2, title: 'Research & Decode' },
      { number: 3, title: 'Brand Direction' },
      { number: 4, title: 'Visual Identity' },
      { number: 5, title: 'Menu System Design' },
      { number: 6, title: 'Refine & Review' },
    ],
  },

  preDesign: {
    subsections: [
      {
        title: '1. Brief & Audit',
        body: (
          <p>
            I begin by carefully understanding the project requirements and constraints. I review the provided menu copy to identify the restaurant's food focus, target audience, and overall tone, so I can clearly define what needs to be improved and how the rebrand should move forward.
          </p>
        ),
        image: { src: briefImage, alt: 'Brief and audit for Qooked menu' },
      },
      {
        title: '2. Research & Decode',
        body: (
          <p>
            I analyze the food categories and menu structure to understand what the restaurant is truly centered around. By studying the ingredients, dish types, and pricing, I identify the target audience and market positioning.<br /><br />
            From this process, I decode the core themes: an egg-heavy brunch concept, family-friendly atmosphere, urban appeal, and a vibrant weekend brunch vibe.
          </p>
        ),
        image: { src: researchImage, alt: 'Research and decode insights for Qooked menu' },
      },
      {
        title: '3. Brand Direction',
        body: (
          <p>
            Based on the findings, a clear brand direction is defined. The restaurant is positioned as an egg-centric brunch destination with a playful, friendly, and urban personality.<br /><br />
            Key brand keywords are established: Brunch • Egg-forward • Playful • Friendly • Catchy • Daytime Energy.<br /><br />
            These keywords guide the tone, visual language, and overall design decisions moving forward.
          </p>
        ),
        image: { src: brandDirectionImage, alt: 'Brand direction for Qooked' },
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
                title="Qooked menu flipbook"
              />
            </div>
          </>
        ),
        image: { src: outcomeImage, alt: 'Qooked final menu outcome' },
      },
    ],
  },

  designProcess: {
    subsections: [
      {
        title: '4. Visual Identity',
        layout: 'three-block',
        imageBefore: { src: visual1Image, alt: 'Qooked visual identity' },
        body: (
          <p>
            The visual identity translates the brand keywords into a cohesive system. The wordmark logo is developed from the name Qooked, with the letter "Q" transformed into a frying pan holding a sunny-side egg to emphasize the brunch concept. Texture is incorporated into the typography to resemble seasonings sprinkled over food.<br /><br />
            The color palette is built around warm brunch tones — orange to represent daytime energy and warmth, and yellow to symbolize eggs as the core ingredient.
          </p>
        ),
        image: { src: visual2Image, alt: 'Qooked color palette and visual system' },
      },
      {
        title: '5. Menu System Design',
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
        image: { src: menuSystemImage, alt: 'Qooked menu system design' },
      },
    ],
  },

  outcomes: {
    subsections: [
      {
        body: (
          <>
            <p>
              This project helped refine the ability to translate research into clear visual direction. It strengthened understanding of how brand personality should come from content, not decoration.
            </p>
            <p>
              Working with grids, hierarchy, and paragraph styles also reinforced the importance of structure behind the design. A well-organized system makes the final layout feel effortless and easy to read.
            </p>
          </>
        ),
      },
    ],
  },
}
