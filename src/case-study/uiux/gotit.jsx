import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import gotitLogo from "./gotit_logo.png"
import { gotitContent } from "./gotit.content"

const Gotit = () => (
  <CaseStudyTemplate
    projectId="gotit"
    content={gotitContent}
    nextWork={{ title: "HealU", href: "/" }}
    caseLogo={gotitLogo}
  />
)

export default Gotit
