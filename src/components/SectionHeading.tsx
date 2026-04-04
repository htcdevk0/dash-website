import type { ReactNode } from 'react'

export function SectionHeading({ title, accent = 'gold', children }: { title: string; accent?: 'gold' | 'blue' | 'purple'; children?: ReactNode }) {
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      <span className={`section-heading__rule section-heading__rule--${accent}`} />
      {children ? <p>{children}</p> : null}
    </div>
  )
}
