import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { uberContent } from "./uberContent"

const Uber = () => (
  <CaseStudyTemplate
    projectId="uber"
    content={uberContent}
    nextWork={{ title: "Next Project", href: "/" }}
  />
)

export default Uber
