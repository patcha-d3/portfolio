import streetGarageLogo from '../assets/clients/1ststreet.svg'
import baoyauLogo from '../assets/clients/baoyau.svg'
import karakedLogo from '../assets/clients/karaked shaded.svg'
import upbitLogo from '../assets/clients/upbit.svg'
import verifyvaspLogo from '../assets/clients/verifyvasp.svg'


export const serviceCards = [
  { title: 'UI/UX Design', tone: 'blue' },
  { title: 'Graphic Design', tone: 'yellow' },
  { title: 'Motion Graphics', tone: 'green' },
]

export const clients = [
  { name: '1st Street Garage', logo: streetGarageLogo },
  { name: 'Karaked', logo: karakedLogo },
  { name: 'Upbit', logo: upbitLogo },
  { name: 'Bao Yau', logo: baoyauLogo },
  { name: 'VerifyVASP', logo: verifyvaspLogo },

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
        name: 'Reduced learning complexity for trades students by designing a structured, distraction-free AI study tool grounded in user feedback and fast, iterative prototyping',
        description:
          '',
        tone: 'dark',
        link: '/case-studies/uiux/gotit',
      },
      {
        id: 'healu',
        tags: ['UI/UX Designer', 'Branding Designer'],
        name: 'Reduced learning complexity for trades students by designing a structured, distraction-free AI study tool grounded in user feedback and fast, iterative prototyping',
        description:
          'under construction',
        tone: 'blue',
      },
      {
        id: 'verifyvasp',
        tags: ['UI/UX Designer', 'Branding Designer'],
        name: 'Improved usability and product clarity for a B2B compliance platform by simplifying site structure, refining navigation, and designing clear user flows in close collaboration with developers',
        description:
          'under construction',
        tone: 'dark',
      },
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
        name: 'Package Design for the japanese plum wine brand named Bacchuss',
        description: 'under construction',
        tone: 'yellow',
      },


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
        name: 'Beat the Clock with Uber',
        description: '',
        tone: 'green',
        link: '/case-studies/motion/uber',
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
