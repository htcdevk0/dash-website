import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

export function CommunityPage() {
  return (
    <>
      <PageHero
        eyebrow="Community"
        title="Work with the language, the docs, and the toolchain"
        summary={<p>The Dash ecosystem is organized around the compiler, the synchronized documentation, dashtup for installation, and the broader repository-driven workflow around language evolution.</p>}
      />

      <section className="band band--rose">
        <div className="container two-column-equal">
          <div>
            <SectionHeading title="Read the docs" accent="blue" />
            <p>
              Use the language tour, types, functions, collections, modules, linking, annotations,
              and complete reference chapters as the main entry points for learning and review.
            </p>
          </div>
          <div>
            <SectionHeading title="Work with the repositories" accent="blue" />
            <p>
              Dash installation is centered on dashtup, while the language and standard-library work
              continue through repository-based development and toolchain iteration.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="container narrow-flow">
          <SectionHeading title="Editor-oriented workflows" accent="gold" />
          <p className="lead-paragraph">
            The LSP reuses the compiler pipeline in read-only mode for hover, completion,
            definitions, references, symbols, and diagnostics. That makes editor feedback a practical
            part of everyday community usage, not a separate parser with separate behavior.
          </p>
        </div>
      </section>
    </>
  )
}
