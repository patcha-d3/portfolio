import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { castleReadContent } from "./castleReadContent"

const CastleReadCaseStudy = () => (
  <CaseStudyTemplate
    projectId="castleread"
    content={castleReadContent}
    prevWork={{ title: "Qooked", href: "/case-studies/graphics/qooked" }}
    nextWork={{ title: "Bacchuss", href: "/case-studies/graphics/bacchuss" }}
  />
)

export default CastleReadCaseStudy
