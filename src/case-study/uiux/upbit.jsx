import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { upbitContent } from "./upbit.content"
import "./upbit.css"

const Upbit = () => (
  <CaseStudyTemplate
    projectId="upbit"
    content={upbitContent}
    nextWork={{ title: "Got It", href: "/case-studies/uiux/gotit" }}
  />
)

export default Upbit
