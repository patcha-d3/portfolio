import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { healUContent } from "./healU.content"

const HealU = () => (
  <CaseStudyTemplate
    projectId="healu"
    content={healUContent}
    nextWork={{ title: "Upbit", href: "/case-studies/uiux/upbit" }}
  />
)

export default HealU
