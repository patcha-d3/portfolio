import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { gotitContent } from "./gotit.content"

const Gotit = () => (
  <CaseStudyTemplate
    projectId="gotit"
    content={gotitContent}
    nextWork={{ title: "HealU", href: "/case-studies/uiux/healu" }}
  />
)

export default Gotit
