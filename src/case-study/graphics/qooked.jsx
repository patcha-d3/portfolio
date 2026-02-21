import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { qookedContent } from "./qookedContent"

const QookedCaseStudy = () => (
  <CaseStudyTemplate
    projectId="qooked"
    content={qookedContent}
    nextWork={{ title: "CastleRead", href: "/case-studies/graphics/castleread" }}
  />
)

export default QookedCaseStudy
