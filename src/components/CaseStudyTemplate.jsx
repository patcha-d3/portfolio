import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import "./CaseStudyTemplate.css"
import Navigation from "./Navigation"
import CaseStudyToc from "./CaseStudyToc"
import Bubble from "./Bubble"
import ImageZoom from "./ImageZoom"
import logo from "../assets/logo.svg"
import { getWorkItemById } from "../data/content"
import logo2 from "../assets/head/logo-02.svg"
import logo3 from "../assets/head/logo-03.svg"
import logo4 from "../assets/head/logo-04.svg"
import logo5 from "../assets/head/logo-05.svg"
import logo6 from "../assets/head/logo-06.svg"

/** Renders string (with HTML) or React node. Use for content that may include <br />, <strong>, etc. */
const HtmlOrReact = ({ content, as: Tag = 'div', className }) => {
  if (content == null) return null
  if (typeof content === 'string') {
    return <Tag className={className} dangerouslySetInnerHTML={{ __html: content }} />
  }
  return <Tag className={className}>{content}</Tag>
}

const CaseStudyTemplate = ({ projectId, content, prevWork, nextWork }) => {
  const workItem = projectId ? getWorkItemById(projectId) : null
  const titleHeading = content?.projectTitle ?? workItem?.name ?? "Case study"
  const [activeSectionId, setActiveSectionId] = useState(null)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  if (!content) {
    return (
      <div className="case-template">
        <p>No content provided. Pass a content object from your case study.</p>
      </div>
    )
  }

  const {
    tocItems,
    hero,
    category,
    skills,
    context,
    storyboard,
    designProcess,
    workflow,
    preDesign,
    problem,
    definingOpportunity,
    howWeSolvedIt,
    designingExperience,
    designSystem,
    leadership,
    outcomes,
    figmaIcon,
  } = content

  const labelFromTocItem = (item) =>
    typeof item === 'object' && item?.label ? item.label : String(item)
  const idFromTocItem = (item) =>
    typeof item === 'object' && item?.id ? item.id : String(item).toLowerCase().replace(/\s+/g, '-')
  const activeLabel = tocItems?.find((item) => idFromTocItem(item) === activeSectionId)
    ? labelFromTocItem(tocItems.find((item) => idFromTocItem(item) === activeSectionId))
    : null

  const bubbleContent = activeLabel ? (
    <>
      You are now reading <span className="bubble__accent">{activeLabel}</span>
    </>
  ) : (
    content.bubbleWelcome ?? content.bubble ?? (
      <>
        Welcome to my <span className="bubble__accent">case study</span> work!
      </>
    )
  )

  return (
    <div className="case-template">
      <Navigation />
      <Bubble>{bubbleContent}</Bubble>
      <CaseStudyToc items={tocItems} onActiveChange={setActiveSectionId} />

      <header className="case-template__hero-banner" aria-label="Case study hero">
        {hero.video ? (
          <video
            src={hero.video}
            poster={hero.image}
            controls
            controlsList="nodownload"
            playsInline
            onContextMenu={(e) => e.preventDefault()}
            width={1200}
            height={640}
            aria-label={hero.alt}
          />
        ) : (
          <img
            src={hero.image}
            alt={hero.alt}
            width={1200}
            height={640}
          />
        )}
      </header>

      <div className="case-template__title-strip" aria-label="Project title">
        <p className="case-template__title-category">{category}</p>
        <hr className="case-template__title-divider" />
        <div className="case-template__title-header">
          <div className="case-template__title-heading-wrap">
            <h2 className="case-template__title-heading">{titleHeading}</h2>
          </div>
        </div>
      </div>

      <main className="case-template__main">
        {skills && (
          <section className="case-template__section" aria-label="Skills used">
            <div className="case-template__skills">
              <div className="section-heading">
                <img src={logo2} alt="" className="section-heading__icon" aria-hidden="true" />
                <div className="section-heading__label">
                  <h2 className="case-template__skills-heading">Skills used</h2>
                </div>
              </div>
              <div className="case-template__skills-groups">
                {skills.groups.map((group) => (
                  <div key={group.category} className="case-template__skills-group">
                    <span className="case-template__skills-category">{group.category}</span>
                    <div className="case-template__skills-chips">
                      {group.chips.map((chip) => (
                        <span key={chip} className="case-template__skill-chip">
                          {chip}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 01 — Context */}
        {context && (
          <section id="context" className="case-template__section case-template__overview">
            <div className="section-heading">
              <img src={logo4} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Context</h2>
              </div>
            </div>

            {context.overview && (
              <div className="case-template__overview-row">
                <div className="case-template__overview-left">
                  <div className="case-template__meta case-template__meta--stacked">
                    {context.overview.meta.map((item) => (
                      <div key={item.label} className="case-template__meta-item">
                        <h4>{item.label}</h4>
                        <HtmlOrReact content={item.value} as="p" />
                      </div>
                    ))}
                    {context.targetUsers && (
                      <div className="case-template__meta-item">
                        <h4>Target Users</h4>
                        <HtmlOrReact content={context.targetUsers.content} as="div" className="case-template__meta-value" />
                      </div>
                    )}
                    {context.overview.metaLinks && context.overview.metaLinks.length > 0 && (
                      <div className="case-template__meta-item">
                        <h4>Live</h4>
                        <div className="case-template__meta-links">
                          {context.overview.metaLinks.map((link) => (
                            <a
                              key={link.label}
                              href={link.href}
                              className={`case-template__meta-link case-template__meta-link--${link.primary ? 'primary' : 'secondary'}`}
                            >
                              {link.primary && figmaIcon && (
                                <span className="case-template__meta-link-icon" aria-hidden="true">
                                  <img src={figmaIcon} alt="" width={18} height={18} />
                                </span>
                              )}
                              {!link.primary && (
                                <span className="case-template__meta-link-icon" aria-hidden="true">
                                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10" />
                                    <path d="M2 12h20" />
                                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                                  </svg>
                                </span>
                              )}
                              <span className="case-template__meta-link-text">{link.label}</span>
                              <span className="case-template__meta-link-arrow" aria-hidden="true">→</span>
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="case-template__overview-right">
                  <div className="case-template__summary">
                    <h3>Overview</h3>
                    <div className="case-template__subsection-body">
                      <HtmlOrReact content={context.overview.summary} as="div" />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {context.targetUsers && !context.overview && (
              <div className="case-template__subsection">
                <h3>Target Users</h3>
                <div className="case-template__subsection-body">
                  <HtmlOrReact content={context.targetUsers.content} as="div" />
                </div>
              </div>
            )}

            {context.whyThisMatters && (
              <div className="case-template__why-this-matters">
                <div className="section-heading">
                  <img src={logo4} alt="" className="section-heading__icon" aria-hidden="true" />
                  <div className="section-heading__label">
                    <h2>Why This Matters</h2>
                  </div>
                </div>
                <div className="case-template__summary">
                  <HtmlOrReact content={context.whyThisMatters.content} as="div" className="case-template__subsection-body" />
                </div>
              </div>
            )}
          </section>
        )}

        {/* 01b — Workflow */}
        {workflow && (
          <section id="workflow" className="case-template__section case-template__workflow">
            <div className="section-heading">
              <img src={logo3} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Workflow</h2>
              </div>
            </div>
            <div className="case-template__workflow-cards">
              {workflow.steps.map((step) => (
                <article key={step.number} className="case-template__workflow-card">
                  <div className="case-template__workflow-card-inner">
                    <span className="case-template__workflow-card-number">{step.number}</span>
                    <div className="case-template__workflow-card-content">
                      <h3>{step.title}</h3>
                      {step.description && (
                        <p className="case-template__workflow-card-description">{step.description}</p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        )}

        {/* Pre-Design (custom subsections) */}
        {preDesign && (
          <section id="pre-design" className="case-template__section case-template__subsections">
            <div className="section-heading">
              <img src={logo5} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Pre-Design</h2>
              </div>
            </div>
            <div className="case-template__subsections-list">
              {preDesign.subsections.map((sub) => (
                <div key={sub.title} className="case-template__subsection">
                  <h3>{sub.title}</h3>
                  <div className="case-template__subsection-body">
                    <HtmlOrReact content={sub.body} as="div" />
                  </div>
                  {sub.image && (
                    sub.image.label ? (
                      <div className="case-template__image-box">
                        <span className="case-template__image-box-label">{sub.image.label}</span>
                        <div className="case-template__subsection-image">
                          <ImageZoom src={sub.image.src} alt={sub.image.alt ?? ''}>
                            <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                          </ImageZoom>
                        </div>
                      </div>
                    ) : (
                      <div className="case-template__subsection-image">
                        <ImageZoom src={sub.image.src} alt={sub.image.alt ?? ''}>
                          <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                        </ImageZoom>
                      </div>
                    )
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 01c — Storyboard */}
        {storyboard && (
          <section id="storyboard" className="case-template__section case-template__storyboard">
            <div className="section-heading">
              <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Storyboard</h2>
              </div>
            </div>
            <div className="case-template__defining-card-wrap">
              <div className="case-template__design-process-body">
                <HtmlOrReact content={storyboard.body} as="div" />
              </div>
              <div className="case-template__storyboard-images">
                {storyboard.images?.map((img, i) => (
                  <div key={i} className="case-template__subsection-image">
                    <ImageZoom src={img.src} alt={img.alt ?? ''}>
                      <img src={img.src} alt={img.alt ?? ''} />
                    </ImageZoom>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 01d — Design Process */}
        {designProcess && (
          <section id="design-process" className="case-template__section case-template__design-process">
            <div className="section-heading">
              <img src={logo6} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Design Process</h2>
              </div>
            </div>
            {designProcess.subsections ? (
              <div className="case-template__subsections-list">
                {designProcess.subsections.map((sub) => (
                  <div key={sub.title} className="case-template__subsection">
                    {(sub.layout === 'three-block' && sub.imageBefore && sub.body && sub.image) || (sub.layout === 'card' && sub.body) ? (
                      <div className={`case-template__subsection-three-block${sub.layout === 'card' ? ` case-template__subsection-three-block--card${sub.image ? ' case-template__subsection-three-block--card-with-image' : ''}` : ''}`}>
                        <h3>{sub.title}</h3>
                        {sub.layout === 'three-block' && (
                          <>
                            <div className="case-template__subsection-block">
                              <div className="case-template__subsection-image">
                                <ImageZoom src={sub.imageBefore.src} alt={sub.imageBefore.alt ?? ''}>
                                  <img src={sub.imageBefore.src} alt={sub.imageBefore.alt ?? ''} />
                                </ImageZoom>
                              </div>
                            </div>
                            <div className="case-template__subsection-block case-template__subsection-body">
                              <HtmlOrReact content={sub.body} as="div" />
                            </div>
                            <div className="case-template__subsection-block">
                              <div className="case-template__subsection-image">
                                <ImageZoom src={sub.image.src} alt={sub.image.alt ?? ''}>
                                  <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                                </ImageZoom>
                              </div>
                            </div>
                          </>
                        )}
                        {sub.layout === 'card' && (
                          <>
                            <div className="case-template__subsection-block case-template__subsection-body">
                              <HtmlOrReact content={sub.body} as="div" />
                            </div>
                            {sub.image && (
                              <div className="case-template__subsection-block">
                                <div className="case-template__subsection-image">
                                  <ImageZoom src={sub.image.src} alt={sub.image.alt ?? ''}>
                                    <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                                  </ImageZoom>
                                </div>
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    ) : (
                      <>
                        <h3>{sub.title}</h3>
                        {sub.imageBefore && (
                          sub.imageBefore.label ? (
                            <div className="case-template__image-box">
                              <span className="case-template__image-box-label">{sub.imageBefore.label}</span>
                              <div className="case-template__subsection-image">
                                <ImageZoom src={sub.imageBefore.src} alt={sub.imageBefore.alt ?? ''}>
                                  <img src={sub.imageBefore.src} alt={sub.imageBefore.alt ?? ''} />
                                </ImageZoom>
                              </div>
                            </div>
                          ) : (
                            <div className="case-template__subsection-image">
                              <ImageZoom src={sub.imageBefore.src} alt={sub.imageBefore.alt ?? ''}>
                                <img src={sub.imageBefore.src} alt={sub.imageBefore.alt ?? ''} />
                              </ImageZoom>
                            </div>
                          )
                        )}
                        <div className="case-template__subsection-body">
                          <HtmlOrReact content={sub.body} as="div" />
                        </div>
                        {sub.image && (
                          sub.image.label ? (
                            <div className="case-template__image-box">
                              <span className="case-template__image-box-label">{sub.image.label}</span>
                              <div className="case-template__subsection-image">
                                <ImageZoom src={sub.image.src} alt={sub.image.alt ?? ''}>
                                  <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                                </ImageZoom>
                              </div>
                            </div>
                          ) : (
                            <div className="case-template__subsection-image">
                              <ImageZoom src={sub.image.src} alt={sub.image.alt ?? ''}>
                                <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                              </ImageZoom>
                            </div>
                          )
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="case-template__defining-card-wrap">
                <div className="case-template__design-process-body">
                  <HtmlOrReact content={designProcess.body} as="div" />
                </div>
                {designProcess.image && (
                  <div className="case-template__subsection-image">
                    <img src={designProcess.image.src} alt={designProcess.image.alt ?? ''} />
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* 02 — The Problem */}
        {problem && (
          <section id="problem" className={`case-template__section ${problem.subsections ? 'case-template__design-process' : 'case-template__challenge'}`}>
            <div className="section-heading">
              <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>{problem.title}</h2>
              </div>
            </div>
            {problem.subsections ? (
              <div className="case-template__subsections-list">
                  {problem.subsections.map((sub) => (
                    <div key={sub.title} className="case-template__subsection">
                      {(sub.layout === 'three-block' && sub.imageBefore && sub.body && sub.image) || (sub.layout === 'card' && sub.body) ? (
                        <div className={`case-template__subsection-three-block${sub.layout === 'card' ? ` case-template__subsection-three-block--card${sub.image ? ' case-template__subsection-three-block--card-with-image' : ''}` : ''}`}>
                          <h3>{sub.title}</h3>
                          {sub.layout === 'three-block' && (
                            <>
                              <div className="case-template__subsection-block">
                                <div className="case-template__subsection-image">
                                  <ImageZoom src={sub.imageBefore.src} alt={sub.imageBefore.alt ?? ''}>
                                    <img src={sub.imageBefore.src} alt={sub.imageBefore.alt ?? ''} />
                                  </ImageZoom>
                                </div>
                              </div>
                              <div className="case-template__subsection-block case-template__subsection-body">
                                <HtmlOrReact content={sub.body} as="div" />
                              </div>
                              <div className="case-template__subsection-block">
                                <div className="case-template__subsection-image">
                                  <ImageZoom src={sub.image.src} alt={sub.image.alt ?? ''}>
                                    <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                                  </ImageZoom>
                                </div>
                              </div>
                            </>
                          )}
                          {sub.layout === 'card' && (
                            <>
                              <div className="case-template__subsection-block case-template__subsection-body">
                                <HtmlOrReact content={sub.body} as="div" />
                              </div>
                              {sub.image && (
                                <div className="case-template__subsection-block">
                                  <div className="case-template__subsection-image">
                                    <ImageZoom src={sub.image.src} alt={sub.image.alt ?? ''}>
                                      <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                                    </ImageZoom>
                                  </div>
                                </div>
                              )}
                            </>
                          )}
                        </div>
                      ) : (
                        <>
                          <h3>{sub.title}</h3>
                          {sub.body && (
                            <div className="case-template__subsection-body">
                              <HtmlOrReact content={sub.body} as="div" />
                            </div>
                          )}
                          {sub.image && (
                            <div className="case-template__subsection-image">
                              <ImageZoom src={sub.image.src} alt={sub.image.alt ?? ''}>
                                <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                              </ImageZoom>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  ))}
              </div>
            ) : (
              <div className="case-template__challenge-card">
                {problem.intro && (
                    <div className="case-template__challenge-intro">
                      <HtmlOrReact content={problem.intro} as="div" />
                    </div>
                  )}
                  <div className="case-template__challenge-grid">
                    {problem.items?.map((item) => (
                      <article key={item.title}>
                        {item.image && (
                          <div className="case-template__challenge-image-wrap">
                            <img src={item.image.src} alt={item.image.alt ?? ''} className="case-template__challenge-image" />
                          </div>
                        )}
                        <h3>{item.title}</h3>
                        <HtmlOrReact content={item.description} as="p" className="case-template__challenge-description" />
                        {item.body && (
                          <HtmlOrReact content={item.body} as="div" className="case-template__challenge-body" />
                        )}
                      </article>
                    ))}
                  </div>
                {problem.image && (
                  <div className="case-template__subsection-image">
                    <img src={problem.image.src} alt={problem.image.alt ?? ''} />
                  </div>
                )}
              </div>
            )}
          </section>
        )}

        {/* 03 — Defining the Opportunity */}
        {definingOpportunity && (
          <section id="defining-opportunity" className="case-template__section case-template__defining-opportunity">
            <div className="section-heading">
              <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Defining the Opportunity</h2>
              </div>
            </div>
            <div className="case-template__defining-card-wrap">
              <div className="case-template__defining-intro">
                <p>{definingOpportunity.intro}</p>
              </div>
              <div className="case-template__defining-cards">
                {definingOpportunity.cards.map((card) => {
                const Icon = card.icon
                return (
                  <article key={card.title} className="case-template__defining-card">
                    {Icon && (
                      <span className="case-template__defining-card-icon" aria-hidden="true">
                        <Icon strokeWidth={1.5} size={36} />
                      </span>
                    )}
                    <h3>{card.title}</h3>
                    <div className="case-template__defining-card-body">
                      <HtmlOrReact content={card.body} as="div" />
                    </div>
                  </article>
                )
              })}
              </div>
            </div>
          </section>
        )}

        {/* 04 — How We Solved It (bento) */}
        {howWeSolvedIt && (
          <section id="how-we-solved-it" className="case-template__section case-template__solution">
            <div className="section-heading">
              <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>{howWeSolvedIt.title}</h2>
              </div>
            </div>
            {howWeSolvedIt.items ? (
              <div className={howWeSolvedIt.bento ? 'case-template__bento-grid' : 'case-template__solution-grid'}>
                {howWeSolvedIt.items.map((item) => {
                  const Icon = item.icon
                  return (
                    <article
                      key={item.title}
                      className={`case-template__bento-card ${item.className || ''}`}
                    >
                      {Icon && (
                        <span className="case-template__bento-card-icon" aria-hidden="true">
                          <Icon strokeWidth={1.5} size={40} />
                        </span>
                      )}
                      <h3>{item.title}</h3>
                      <p className="case-template__solution-description">
                        <HtmlOrReact content={item.description} as="span" />
                      </p>
                      {item.body && (
                        <HtmlOrReact content={item.body} as="div" className="case-template__solution-body" />
                      )}
                    </article>
                  )
                })}
              </div>
            ) : (
              <HtmlOrReact content={howWeSolvedIt.body} as="p" />
            )}
          </section>
        )}

        {/* 05 — Designing the Experience */}
        {designingExperience && (
          <section id="designing-experience" className="case-template__section case-template__designing-experience">
            <div className="section-heading">
              <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Designing the Experience</h2>
              </div>
            </div>
            <div className="case-template__defining-card-wrap">
              <div className="case-template__defining-cards">
                {designingExperience.subsections.map((sub) => (
                  <article key={sub.title} className="case-template__defining-card">
                    <h3>{sub.title}</h3>
                    <div className="case-template__defining-card-body">
                      <HtmlOrReact content={sub.body} as="div" />
                    </div>
                    {sub.image && (
                      <div className="case-template__subsection-image">
                        <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                      </div>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* 06 — Product Design System */}
        {designSystem && (
          <section id="design-system" className="case-template__section case-template__subsections">
            <div className="section-heading">
              <img src={logo5} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Product Design System</h2>
              </div>
            </div>
            <div className="case-template__subsections-list">
              {designSystem.subsections.map((sub) => (
                <div key={sub.title} className="case-template__subsection">
                  <h3>{sub.title}</h3>
                  <div className="case-template__subsection-body">
                    <HtmlOrReact content={sub.body} as="div" />
                  </div>
                  {sub.image && (
                    <div className="case-template__subsection-image">
                      <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 07 — Project Leadership & Execution */}
        {leadership && (
          <section id="leadership" className="case-template__section case-template__subsections">
            <div className="section-heading">
              <img src={logo4} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Project Leadership & Execution</h2>
              </div>
            </div>
            <div className="case-template__subsections-list">
              {leadership.subsections.map((sub) => (
                <div key={sub.title} className="case-template__subsection">
                  <h3>{sub.title}</h3>
                  <div className="case-template__subsection-body">
                    <HtmlOrReact content={sub.body} as="div" />
                  </div>
                  {sub.image && (
                    <div className="case-template__subsection-image">
                      <img src={sub.image.src} alt={sub.image.alt ?? ''} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}

        {/* 08 — Final Thoughts */}
        {outcomes && (
          <section id="final-thoughts" className="case-template__section">
            <div className="section-heading">
              <img src={logo} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Final Thoughts</h2>
              </div>
            </div>
            <div className="case-template__outcomes-card">
              {outcomes.subsections.map((sub) => (
                <div key={sub.title} className="case-template__outcomes-item">
                  <h3>{sub.title}</h3>
                  <div className="case-template__subsection-body">
                    <HtmlOrReact content={sub.body} as="div" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {(prevWork || nextWork) && (
          <section className="case-template__section case-template__next-work">
            <div className="section-heading">
              <img src={logo2} alt="" className="section-heading__icon" aria-hidden="true" />
              <div className="section-heading__label">
                <h2>Explore more</h2>
              </div>
            </div>
            <div className="case-template__nav-links">
              <div className="case-template__nav-link-col">
                <span className="case-template__nav-link-label">Previous Read</span>
                {prevWork ? (
                  <Link to={prevWork.href} className="case-template__nav-link">
                    <span className="case-template__nav-link-arrow" aria-hidden="true">←</span>
                    <span className="case-template__nav-link-title">{prevWork.title}</span>
                  </Link>
                ) : (
                  <span className="case-template__nav-link case-template__nav-link--disabled">—</span>
                )}
              </div>
              <div className="case-template__nav-link-col">
                <span className="case-template__nav-link-label">Next Work</span>
                {nextWork ? (
                  <Link to={nextWork.href} className="case-template__nav-link">
                    <span className="case-template__nav-link-title">{nextWork.title}</span>
                    <span className="case-template__nav-link-arrow" aria-hidden="true">→</span>
                  </Link>
                ) : (
                  <span className="case-template__nav-link case-template__nav-link--disabled">—</span>
                )}
              </div>
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default CaseStudyTemplate
