import uberVid from './uber/uber_vid.mp4'
import TextHighlighter from '../../components/TextHilight'
import storyboard01 from './uber/storyboard-01.png'
import storyboard02 from './uber/storyboard-02.png'
import process1 from './uber/process1.png'

export const uberContent = {
  bubbleWelcome: (
    <>
      You're exploring <span className="bubble__accent">Uber</span>, one of my featured Motion project!
    </>
  ),

  projectTitle:
    'Beat the Clock with Uber',

  tocItems: [
    { id: 'context', label: 'Context' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'storyboard', label: 'Storyboard' },
    { id: 'design-process', label: 'Design Process' },
    { id: 'outcomes', label: 'Final Thoughts' },
  ],

  hero: {
    video: uberVid,
    alt: 'Uber case study hero banner',
  },

  category: 'Motion Design Project',

  skills: {
    groups: [
      {
        category: 'Software',
        chips: ['Adobe After Effects', 'Adobe Illustrator', 'Adobe Photoshop'],
      },
      {
        category: 'Soft Skills',
        chips: ['Storytelling', 'Visual Communication'],
      },
    ],
  },

  context: {
    overview: {
      summary: (
      <p>
        This midterm project <TextHighlighter className="text-highlight">focuses on creating a 1-minute motion graphics video that explains how to use a service</TextHighlighter>. The concept demonstrates how to use Uber through a simple and relatable story. The narrative follows a female student who wakes up late and needs to commute to BCIT. Instead of taking the bus, which would take too long, she chooses Uber to arrive at school on time.
      </p>
    ),
      meta: [
        { label: 'Type', value: 'Motion Design' },
        { label: 'Client', value: 'Uber' },
        { label: 'Timeline', value: '1 month' },
        { label: 'Role', value: 'Motion Designer' },
      ],
    },
  },

  workflow: {
    steps: [
      { number: 1, title: 'Idea development' },
      { number: 2, title: 'Storyboarding' },
      { number: 3, title: 'Media planning'},
      { number: 4, title: 'Asset preparation'},
      { number: 5, title: 'Animation & editing'},
      { number: 6, title: 'Sound design' },
      { number: 7, title: 'Final export and refinement'},
    ],
  },

  storyboard: {
    body: '<p>The storyboard follows a simple problem-to-solution structure. It starts with a student waking up late and realizing that taking the bus would take too long, creating a sense of urgency.<br/>The middle shows the step-by-step process of booking an Uber through interface graphics and pop-up elements.<br/>It ends with the student arriving at BCIT on time, clearly showing Uber as a fast and convenient solution.</p>',
    images: [
      { src: storyboard01, alt: 'Uber storyboard part 1' },
      { src: storyboard02, alt: 'Uber storyboard part 2' },
    ],
  },

  designProcess: {
    body: '<p>Before starting production, a clear plan was created to identify the assets required for this project. A storyboard was developed to map out the scenes, transitions, and the sequence of pop-out elements. The storyboard was then translated into a media plan to define what would be included in the final video.<br/><br/>For the visual style, the assignment required real video footage, so a collage style combined with interface graphics was selected to maintain a cohesive tone. Images of locations in Vancouver were used, and the backgrounds were removed so they could be layered into each scene.<br/><br/>The soundtrack chosen is Caravan from the movie Whiplash. The music builds strong energy and enhances the sense of urgency, supporting the fast-paced narrative of a busy morning commute.</p>',
    image: { src: process1, alt: 'Uber design process' },
  },



  outcomes: {
    subsections: [
      {
        title: 'Overview',
        body: <p>In this assignment, I did my best to <TextHighlighter className="text-highlight">apply the techniques learned in class and translate them into my own visual style while aligning with Uber’s branding</TextHighlighter>. The project helped strengthen skills in storytelling, timing, and motion composition within a short one-minute format. It also reinforced the importance of planning, especially through storyboarding and media organization before production.<br/><br/>
Overall, this project improved confidence in combining video footage with motion graphics while maintaining a cohesive tone and clear message.</p>,
      },
    ],
  },
}
