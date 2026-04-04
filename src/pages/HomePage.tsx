import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import StartSection from '../components/StartSection'

const whyDash = [
  {
    title: 'Performance',
    text: 'Dash is a compiled LLVM-based systems language designed to stay low-level, direct, explicit, and portable. The operational model remains close to the machine instead of hiding critical behavior behind a large runtime.',
  },
  {
    title: 'Control',
    text: 'Mutability is explicit. Pointers are visible. ABI choice is visible. Linking behavior is visible. Dash is built for users who want serious systems work with clear code-generation and integration boundaries.',
  },
  {
    title: 'Tooling',
    text: 'The compiler, source loader, semantic analyzer, linker-facing CLI, and LSP are designed as one coherent toolchain. Import resolution, diagnostics, hover, completion, definition, references, and build flags all follow compiler truth.',
  },
]

const useCases = [
  {
    title: 'Command line tools',
    text: 'Build native executables, keep code direct, and control imports, warnings, output paths, emitted objects, and runtime linking from the CLI.',
    cta: 'Learn the language',
    to: '/learn',
  },
  {
    title: 'C and system integration',
    text: 'Use explicit extern declarations, choose C ABI when needed, and integrate with native libraries and shared objects through direct link flags and profiles.',
    cta: 'See the toolchain',
    to: '/tools',
  },
  {
    title: 'Libraries and shared outputs',
    text: 'Emit object files, shared libraries, and executables from the same compiler pipeline, with import paths, link search paths, and library inputs exposed to the user.',
    cta: 'Install Dash',
    to: '/install',
  },
  {
    title: 'Editor workflows',
    text: 'Dash ships with an LSP-oriented architecture that reuses the same lexer, parser, source loader, and semantic analyzer in read-only mode.',
    cta: 'Read community pages',
    to: '/community',
  },
]

export function HomePage() {
  return (
    <>
      <PageHero
        title="Dash"
        summary={
          <p>
            A systems language focused on explicit control, LLVM-based compilation,
            direct linking, FFI, practical editor tooling, and a syntax surface that stays lighter
            than C++ without moving away from low-level work.
          </p>
        }
        actions={
          <div className="hero-callout">
            <Link to="/learn" className="button button--primary">Get Started</Link>
            <Link to="/install" className="hero-callout__text-link">Installation guide</Link>
          </div>
        }
      />

      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Why Dash?" accent="blue" />
          <div className="three-column-grid">
            {whyDash.map((item) => (
              <article key={item.title} className="text-card text-card--dark">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Where Dash fits" accent="gold">
            The current compiler snapshot supports native executables, object files, shared
            libraries, direct imports, ABI selection, smart linking, and editor integration.
          </SectionHeading>
          <div className="four-column-grid">
            {useCases.map((item) => (
              <article key={item.title} className="feature-card feature-card--dark">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
                <Link to={item.to} className="button button--small button--rose">{item.cta}</Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="container narrow-flow">
          <SectionHeading title="Dash in practice" accent="gold" />
          <p className="lead-paragraph">
            Dash treats the compilation model as part of the language experience. The source loader
            resolves imports and prevents cycles before parsing. The semantic layer handles types,
            indexing, variadics, loops, annotations, and ABI-sensitive behavior. The CLI exposes
            object emission, shared output, warning gates, link profiles, runtime linking, and
            smart linking directly.
          </p>
        </div>
      </section>

      <StartSection />
    </>
  )
}
