import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { qookedContent } from "./qookedContent"

const QookedCaseStudy = () => (
  <CaseStudyTemplate
    projectId="qooked"
    content={qookedContent}
    nextWork={{ title: "Bacchuss", href: "/" }}
  />
)

export default QookedCaseStudy
