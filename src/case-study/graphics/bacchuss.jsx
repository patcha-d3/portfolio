import './bacchuss.css'
import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { bacchussContent } from "./bacchussContent"

const BacchussCaseStudy = () => (
  <CaseStudyTemplate
    projectId="bacchuss"
    content={bacchussContent}
    nextWork={{ title: "Qooked", href: "/case-studies/graphics/qooked" }}
  />
)

export default BacchussCaseStudy
