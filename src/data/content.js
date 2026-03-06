import streetGarageLogo from '../assets/clients/1ststreet.svg'
import baoyauLogo from '../assets/clients/baoyau.svg'
import karakedLogo from '../assets/clients/karaked shaded.svg'
import upbitLogo from '../assets/clients/upbit.svg'
import verifyvaspLogo from '../assets/clients/verifyvasp.svg'
import sipthesceneLogo from '../assets/clients/sip.svg'
import karaked2Logo from '../assets/clients/karaked.svg'
import pepaLogo from '../assets/clients/pepa.svg'


export const serviceCards = [
  { title: 'UI/UX Design', tone: 'blue' },
  { title: 'Graphic Design', tone: 'yellow' },
  { title: 'Motion Graphics', tone: 'green' },
]

export const clients = [
  { name: 'Upbit', logo: upbitLogo },
  { name: 'VerifyVASP', logo: verifyvaspLogo },
  { name: 'Pepa', logo: pepaLogo },
  { name: '1st Street Garage', logo: streetGarageLogo },
  { name: 'Sip the Scene', logo: sipthesceneLogo },
  { name: 'Karaked2', logo: karaked2Logo },
  { name: 'Karaked', logo: karakedLogo },
  { name: 'Bao Yau', logo: baoyauLogo }

]

export const workBlocks = [
  {
    title: 'UI/UX Design Projects',
    tabLabel: 'UI/UX Design',
    cardLabel: 'UI/UX Project',
    items: [
      {
        id: 'gotit',
        tags: ['Scrum Master', 'Product Designer'],
        name: 'How we simplified complex trade learning with a distraction-free AI study tool for Level 1 Electrical Apprentices in BC',
        description:
          'As Scrum Master and Product Designer, I built an AI study tool that reduces cognitive overload for Level 1 electrician apprentices by summarizing content, simplifying language, and generating mind maps.',
        tone: 'dark',
        link: '/case-studies/uiux/gotit',
      },
      // {
      //   id: 'deepread',
      //   tags: ['UI/UX Designer', 'Front-end Developer'],
      //   name: 'Forgot What You Read? DeepRead Helps You Remember and Reflect',
      //   description:
      //     'A solo end-to-end product experiment transforming passive bookmarks into reflective checkpoints through research UX UI design vibe coding and full deployment.',
      //   tone: 'blue',
      //   link: '/case-studies/uiux/deepread',
      // },
      {
        id: 'healu',
        tags: ['UI/UX Designer', 'Branding Designer'],
        name: 'HealU Turns Body Pain into a Guided Recovery Journey',
        description:
          'Transforming body discomfort into structured digital care, I crafted HealU’s diagnostic journey and exercise system through research, IA, prototyping, coding, and brand development.',
        tone: 'blue',
        link: '/case-studies/uiux/healu',
      },

      // {
      //   id: 'verifyvasp',
      //   tags: ['UI/UX Designer', 'Branding Designer'],
      //   name: 'Improved usability and product clarity for a B2B compliance platform by simplifying site structure, refining navigation, and designing clear user flows in close collaboration with developers',
      //   description:
      //     'under construction',
      //   tone: 'dark',
      // },
    ],
  },
  {
    title: 'Graphic Design Projects',
    tabLabel: 'Graphic Design',
    cardLabel: 'Graphic Design',
    items: [
      {
        id: 'qooked',
        tags: ['Branding Designer', 'Graphic Designer'],
        name: 'Qooked Typographic Menu Design for a Modern Brunch Concept',
        description: 'A newly created brunch restaurant concept developed through strategic research and executed using InDesign, Illustrator, and Photoshop to build a clear, energetic, and personality-driven menu experience.',
        tone: 'yellow',
        link: '/case-studies/graphics/qooked',
      },
      {
        id: 'castleread',
        tags: ['Branding Designer', 'Graphic Designer'],
        name: 'A Set of Poster Designs for a Castle Themed Bookstore',
        description: 'A concept bookstore designed with the immersive aesthetic of a castle. The branding reflects not just a place to buy books, but a sanctuary of imagination and timeless narratives.',
        tone: 'yellow',
        link: '/case-studies/graphics/castleread',
      },
      {
        id: 'bacchuss',
        tags: ['Branding Designer', 'Graphic Designer'],
        name: 'Where Tradition Umeshu Meets a Modern Can Design',
        description: 'Bacchuss transforms traditional Japanese plum wine into a bold, shelf-ready can design crafted for modern Canadian consumers and retail impact.',
        tone: 'yellow',
        link: '/case-studies/graphics/bacchuss',
      },
      // {
      //   id: 'karakedmatcha',
      //   tags: ['Branding Designer', 'Graphic Designer'],
      //   name: 'Where Traditional Matcha Meets a Modern Can Design',
      //   description: 'Karaked Matcha transforms ceremonial-grade matcha into a refined, shelf-ready can design crafted for modern Canadian consumers and retail impact.',
      //   tone: 'yellow',
      //   link: '/case-studies/graphics/karakedmatcha',
      // },
    ],
  },
  {
    title: 'Motion Graphics Projects',
    tabLabel: 'Motion Graphics',
    cardLabel: 'Motion Graphics',
    items: [
      {
        id: 'uber',
        tags: ['Motion Designer'],
        name: 'Late for Class? How Uber Beats the Clock',
        description: 'A relatable morning rush brought to life through motion graphics. This project follows a student racing to BCIT, using layered collage visuals and animated UI elements to show how Uber turns stress into a smooth arrival.',
        tone: 'green',
        link: '/case-studies/motion/uber',
      },
      {
        id: 'whatsup',
        tags: ['Motion Designer'],
        name: 'Late for Class? How Uber Beats the Clock',
        description: 'A relatable morning rush brought to life through motion graphics. This project follows a student racing to BCIT, using layered collage visuals and animated UI elements to show how Uber turns stress into a smooth arrival.',
        tone: 'green',
        link: '/case-studies/motion/whatsup',
      },
    ],
  },
]

export const getWorkItemById = (id) => {
  for (const block of workBlocks) {
    const item = block.items.find((i) => i.id === id)
    if (item) return item
  }
  return null
}
