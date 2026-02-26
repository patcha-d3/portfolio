import uberVid from './whatsup/whatSup.mp4'
import TextHighlighter from '../../components/TextHilight'
import storyboard01 from './whatsup/storyboard.png'
import storyboard02 from './whatsup/moodtone.png'
import process1 from './whatsup/process.png'

export const whatsupContent = {
  bubbleWelcome: (
    <>
      You're watching <span className="bubble__accent">WhatSUP</span>, the promo video for WhatSUP project!
    </>
  ),

  projectTitle:
    'Need a break? WhatSUP is the answer!',

  tocItems: [
    { id: 'context', label: 'Context' },
    { id: 'workflow', label: 'Workflow' },
    { id: 'idea-development', label: 'Idea Development' },
    { id: 'storyboard', label: 'Storyboard' },
    { id: 'design-process', label: 'Design Process' },
    { id: 'outcomes', label: 'Final Thoughts' },
  ],

  hero: {
    video: uberVid,
    alt: 'WhatSUP case study hero banner',
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
        This promotional video was created as part of the WhatSUP project to introduce the brand and highlight its energetic, community-focused identity. WhatSUP is a stand-up paddleboarding and kayaking business based on Bowen Island 
<br/><br/>
        The video was <TextHighlighter className="text-highlight">produced collaborativelywith one teammate, where we divided roles and co-developed the concept and motion execution.</TextHighlighter>  With a strict one-minute limit, we focused on delivering a clear, concise, and engaging brand message.
        <br/><br/>
        This was my first time collaborating on a motion graphics project, and through strong planning and communication, we created a result we are truly proud of!
      </p>
    ),
      meta: [
        { label: 'Type', value: 'Motion Design' },
        { label: 'Client', value: 'WhatSUP' },
        { label: 'Timeline', value: '1 week' },
        { label: 'Role', value: 'Co-Motion Designer' },
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

  ideaDevelopment: {
    body: `<p>Since WhatSUP’s branding carries a retro, 70s-inspired aesthetic with vibrant and playful colors, we wanted the promotional video to reflect that energy in a bold and straightforward way. Early in our discussion, we aligned on creating something visually expressive yet simple enough to execute collaboratively within a short timeframe.</p><br/><p>We decided on a collage-style approach because it naturally complements retro visuals and allows flexibility when working as a team. The layered textures, cut-out elements, and dynamic compositions helped us translate the brand’s fun, outdoor spirit into motion.</p><br/><p>The mood and tone references below guided our creative direction, ensuring we stayed visually aligned and consistent throughout the production process.</p>`,
    images: [
      { src: storyboard02, alt: 'WhatSUP idea development' },
    ],
  },

  storyboard: {
    body: '<p>After defining the mood and tone, we each developed our own storyboard concepts for the promotional video. My concept focused on presenting a clear core narrative: starting with the user’s pain points such as a busy, stressful lifestyle, followed by the desire to escape reality, then introducing WhatSUP’s activities and services, and ending with an uplifting, inviting conclusion.</p>',
    images: [
      { src: storyboard01, alt: 'WhatSUP storyboard part 1' },

    ],
  },

  designProcess: {
    body: '<p>Once we aligned on this direction, my teammate proposed transition ideas between each stage to create a smoother and more cohesive flow throughout the video.</p><br/><p>To manage production efficiently, we divided the video into scenes, worked on them individually, and later combined everything into one cohesive final piece.</p>',
    image: { src: process1, alt: 'WhatSUP design process' },
  },



  outcomes: {
    subsections: [
      {
        title: 'Overview',
        body: (
          <>
            <p>Overall, this project is something we are truly proud of. We genuinely enjoyed the creative process and the opportunity to exchange ideas, align our visual direction, and bring a shared concept to life.</p>
            <p><TextHighlighter className="text-highlight">Collaborating on a motion video was a valuable learning experience. It was not easy to combine separately created scenes into one cohesive piece. Ensuring consistency in pacing, style, and transitions required continuous communication and careful coordination. Avoiding overlap while maintaining a unified narrative became one of our biggest challenges.</TextHighlighter></p>
            <p>Through this process, we learned that strong collaboration is not just about dividing tasks, but about staying aligned, adaptable, and supportive throughout every stage of production.</p>
          </>
        ),
      },
    ],
  },
}
