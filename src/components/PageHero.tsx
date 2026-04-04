import type { ReactNode } from 'react'

type PageHeroProps = {
  title: string
  summary: ReactNode
  eyebrow?: string
  actions?: ReactNode
}

export function PageHero({ title, summary, eyebrow, actions }: PageHeroProps) {
  return (
    <section className="page-hero">
      <div className="container page-hero__grid">
        <div>
          {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
          <h1 className="page-title">{title}</h1>
          <div className="page-summary">{summary}</div>
        </div>
        {actions ? <div className="page-hero__aside">{actions}</div> : null}
      </div>
    </section>
  )
}
