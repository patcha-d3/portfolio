import './bacchuss.css'
import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { bacchussContent } from "./bacchussContent"

const BacchussCaseStudy = () => (
  <CaseStudyTemplate
    projectId="bacchuss"
    content={bacchussContent}
    prevWork={{ title: "CastleRead", href: "/case-studies/graphics/castleread" }}
    nextWork={{ title: "Karaked Matcha", href: "/case-studies/graphics/karakedmatcha" }}
  />
)

export default BacchussCaseStudy
