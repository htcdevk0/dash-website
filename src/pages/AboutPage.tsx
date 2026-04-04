import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import StartSection from '../components/StartSection'

export function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="About Dash"
        summary={
          <p>
            Dash is a systems programming language focused on explicit control,
            performance, and a coherent toolchain. It is designed for building
            low-level software with clarity and predictability.
          </p>
        }
      />

      {/* OVERVIEW */}
      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Overview" accent="gold" />
          <div className="two-column-layout">
            <div>
              <p>
                Dash is built on top of LLVM and provides direct control over
                memory, pointers, and linking. The language is designed to stay
                close to the machine while maintaining a structured and readable
                syntax.
              </p>
              <p>
                The toolchain is part of the language itself. Compilation,
                linking, and build orchestration are designed to work together
                without hidden behavior.
              </p>
            </div>
            <div>
              <p>
                Dash emphasizes predictability. There are no implicit abstractions,
                and behavior remains explicit across the entire pipeline.
              </p>
              <p>
                The goal is not to simplify systems programming, but to make it
                consistent and controllable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CURRENT STATE */}
      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Current state" accent="gold" />
          <div className="two-column-layout">
            <div>
              <p>
                Dash is currently available for Linux (64-bit) environments.
                The toolchain and runtime are actively used in real scenarios
                and are stable for development.
              </p>
              <p>
                The system is designed to run without external dependencies,
                relying only on its own standard libraries and minimal system
                components.
              </p>
            </div>
            <div>
              <p>
                Distribution is handled through the official installer
                (<code>dashtup</code>), which installs the compiler,
                standard libraries, and tooling in a consistent layout.
              </p>
              <p>
                Additional platforms may be supported in the future as the
                language continues to evolve.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DETAILS */}
      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Design principles" accent="gold" />
          <div className="docs-grid">
            <article className="feature-card">
              <h3>Explicit control</h3>
              <p>
                Memory, pointers, and linking are fully exposed. There is no
                hidden runtime behavior.
              </p>
            </article>

            <article className="feature-card">
              <h3>Performance first</h3>
              <p>
                Dash is designed for raw performance and low-level systems where
                efficiency is critical.
              </p>
            </article>

            <article className="feature-card">
              <h3>Coherent tooling</h3>
              <p>
                The compiler, build system, and editor tooling share the same
                internal model.
              </p>
            </article>

            <article className="feature-card">
              <h3>Minimal dependencies</h3>
              <p>
                Dash runs without external dependencies beyond its standard
                libraries and system interfaces.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section className="band band--pink">
        <div className="container">
          <SectionHeading title="Notes" accent="gold" />
          <div style={{ maxWidth: '48rem' }}>
            <p>
              Dash is under active development, but already stable and usable
              for real-world projects. The language continues to evolve through
              practical usage and refinement rather than experimental features.
            </p>
            <p>
              The focus remains on consistency, control, and long-term
              maintainability.
            </p>
          </div>
        </div>
      </section>

      <StartSection />
    </>
  )
}