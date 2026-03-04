import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { deepReadContent } from "./deepRead.content"

const DeepRead = () => (
  <CaseStudyTemplate
    projectId="deepread"
    content={deepReadContent}
    nextWork={{ title: "HealU", href: "/case-studies/uiux/healu" }}
  />
)

export default DeepRead
