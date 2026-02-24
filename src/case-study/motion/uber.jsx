import CaseStudyTemplate from "../../components/CaseStudyTemplate"
import { uberContent } from "./uberContent"

const Uber = () => (
  <CaseStudyTemplate
    projectId="uber"
    content={uberContent}
    nextWork={{ title: "WhatSUP", href: "/case-studies/motion/whatsup" }}
  />
)

export default Uber
