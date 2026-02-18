import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { castleReadContent } from "./castleReadContent"

const CastleReadCaseStudy = () => (
  <CaseStudyTemplate
    projectId="castleread"
    content={castleReadContent}
    nextWork={{ title: "Bacchuss", href: "/" }}
  />
)

export default CastleReadCaseStudy
