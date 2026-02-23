import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { healUContent } from "./healU.content"

const HealU = () => (
  <CaseStudyTemplate
    projectId="healu"
    content={healUContent}
    nextWork={{ title: "Got It", href: "/case-studies/uiux/gotit" }}
  />
)

export default HealU
