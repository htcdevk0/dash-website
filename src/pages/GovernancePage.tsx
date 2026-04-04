import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

export function GovernancePage() {
  return (
    <>
      <PageHero
        eyebrow="Governance"
        title="Project direction and implementation truth"
        summary={<p>The synchronized documentation package is written against the current compiler snapshot and treats implementation truth as the source of record for the language surface, tooling behavior, and supported syntax.</p>}
      />

      <section className="band band--paper">
        <div className="container two-column-layout">
          <div>
            <SectionHeading title="Documentation principles" accent="gold" />
            <ul className="feature-list">
              <li>The synchronized package is based on the current compiler tree.</li>
              <li>Source-loader directives such as <code>@import</code> and <code>@from</code> are documented as real behavior.</li>
              <li>The current docs treat <code>Vec&lt;T&gt;</code> as the canonical dynamic sequence direction.</li>
              <li>Compiler and LSP behavior are described together where they share architecture.</li>
            </ul>
          </div>
          <div>
            <SectionHeading title="Design style" accent="gold" />
            <p>
              Dash is documented as a language that prefers explicit intent. The user chooses
              mutability, ABI, link strategy, type shape, and storage form. The project direction is
              not centered on hidden runtime behavior or opaque build abstraction.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--green">
        <div className="container narrow-flow">
          <SectionHeading title="Implementation-led decisions" accent="blue" />
          <p className="lead-paragraph">
            The current compiler snapshot is the baseline for modules, source loading, struct and
            class behavior, variadics, builtins, warning annotations, link profiles, and LSP support.
            This keeps the public site aligned with the actual toolchain instead of drifting into
            aspirational or outdated descriptions.
          </p>
        </div>
      </section>
    </>
  )
}
