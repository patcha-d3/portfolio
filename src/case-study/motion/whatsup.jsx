import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { whatsupContent } from "./whatsupContent"

const WhatSUP = () => (
  <CaseStudyTemplate
    projectId="whatsup"
    content={whatsupContent}
    nextWork={{ title: "Uber", href: "/case-studies/motion/uber" }}
  />
)

export default WhatSUP
