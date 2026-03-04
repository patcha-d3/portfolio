import './karakedMatcha.css'
import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { karakedMatchaContent } from "./karakedMatchaContent"

const KarakedMatchaCaseStudy = () => (
  <CaseStudyTemplate
    projectId="karakedmatcha"
    content={karakedMatchaContent}
    prevWork={{ title: "Bacchuss", href: "/case-studies/graphics/bacchuss" }}
    nextWork={{ title: "Qooked", href: "/case-studies/graphics/qooked" }}
  />
)

export default KarakedMatchaCaseStudy
