import { useId, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import "./FolderTab.css"

const GooeySvgFilter = ({ id, strength = 15 }) => {
  return (
    <svg className="folder-tab__filter" aria-hidden="true">
      <filter id={id}>
        <feGaussianBlur in="SourceGraphic" stdDeviation={strength} result="blur" />
        <feColorMatrix
          in="blur"
          mode="matrix"
          values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
          result="gooey"
        />
        <feComposite in="SourceGraphic" in2="gooey" operator="atop" />
      </filter>
    </svg>
  )
}

const TAB_CONTENT = [
  {
    title: "Specialty Coffee",
    heading: "Specialty Coffee",
    body:
      "When I’m not designing, you’ll probably find me immersed in the world of third-wave coffee. Making pour-over coffee has become a daily ritual for me—almost like a form of meditation. It’s a quiet moment where I slow down, focus on what’s right in front of me, and enjoy the process as much as the result. I love taking in the aroma and exploring the delicate aftertaste of light-roast beans.\n\nIf we ever get the chance, I’d love to make a cup of coffee for you.",
  },
  {
    title: "Tech Gadgets",
    heading: "Specialty Coffee",
    body:
      "When I’m not designing, you’ll probably find me immersed in the world of third-wave coffee. Making pour-over coffee has become a daily ritual for me—almost like a form of meditation. It’s a quiet moment where I slow down, focus on what’s right in front of me, and enjoy the process as much as the result. I love taking in the aroma and exploring the delicate aftertaste of light-roast beans.\n\nIf we ever get the chance, I’d love to make a cup of coffee for you.",
  },
  {
    title: "2022",
    files: [
      "moving-to-a-new-city.md",
      "starting-a-blog.md",
      "photography-basics.md",
      "first-coding-project.md",
    ],
  },
  {
    title: "2021",
    files: [
      "goals-and-aspirations.md",
      "daily-gratitude.md",
      "learning-to-cook.md",
      "remote-work-journal.md",
    ],
  },
]

const FolderTab = ({ className = "", filterId, strength = 15, style }) => {
  const [activeTab, setActiveTab] = useState(0)
  const rawId = useId()
  const safeId = rawId.replace(/:/g, "")
  const id = filterId || `gooey-${safeId}`

  return (
    <div className={`folder-tab ${className}`.trim()} style={style}>
      <GooeySvgFilter id={id} strength={strength} />
      <div className="folder-tab__frame">
        <div className="folder-tab__gooey" style={{ filter: `url(#${id})` }}>
          <div className="folder-tab__bar">
            {TAB_CONTENT.map((_, index) => (
              <div key={index} className="folder-tab__tab-slot">
                {activeTab === index && (
                  <motion.div
                    layoutId="active-tab"
                    className="folder-tab__tab-active"
                    transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="folder-tab__panel">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 50, filter: "blur(10px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -50, filter: "blur(10px)" }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="folder-tab__panel-inner"
              >
                {TAB_CONTENT[activeTab].heading ? (
                  <div className="folder-tab__copy">
                    <h3>{TAB_CONTENT[activeTab].heading}</h3>
                    <p>
                      {TAB_CONTENT[activeTab].body.split("\n\n")[0]}
                      <br />
                      <br />
                      {TAB_CONTENT[activeTab].body.split("\n\n")[1]}
                    </p>
                  </div>
                ) : (
                  <ul className="folder-tab__files">
                    {TAB_CONTENT[activeTab].files.map((file) => (
                      <li key={file} className="folder-tab__file">
                        {file}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="folder-tab__labels">
          {TAB_CONTENT.map((tab, index) => (
            <button
              key={tab.title}
              type="button"
              onClick={() => setActiveTab(index)}
              className="folder-tab__label"
            >
              <span
                className={
                  activeTab === index
                    ? "folder-tab__label-text is-active"
                    : "folder-tab__label-text"
                }
              >
                {tab.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export { GooeySvgFilter }
export default FolderTab
