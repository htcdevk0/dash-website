import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

const toolCards = [
  ['Source loading', 'The loader scans files, strips directives, resolves imports, tracks namespace shortcuts, prevents cycles, and hands normalized source to the parser.'],
  ['Compiler CLI', 'The current toolchain supports direct execution, build mode, run mode, LLVM emission, object-only output, shared output, warnings, import paths, and linking flags.'],
  ['FFI and ABI', 'extern("c") uses C ABI while bare extern uses Dash ABI, keeping boundaries explicit for system integration and library work.'],
  ['Smart linking', 'When requested, the link plan prefers shared Dash support libraries where possible and falls back to filtered static inputs when dynamic coverage is incomplete.'],
  ['Runtime linking', 'The CLI supports runtime shared libraries from ~/.dash/lib and built-in link profiles such as gtk4 in the current snapshot.'],
  ['LSP', 'Hover, completion, definition, references, documentSymbol, and diagnostics reuse the same lexer, parser, source loader, and analyzer.'],
]

export function ToolsPage() {
  return (
    <>
      <PageHero
        eyebrow="Tools"
        title="A coherent language and toolchain"
        summary={
          <p>
            Dash treats the compiler, source loader, link behavior, and editor tooling as one connected system. 
            The implementation is designed so editor behavior stays close to compiler truth.
          </p>
        }
      />

      {/* TOOLCHAIN OVERVIEW */}
      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Toolchain overview" accent="gold" />
          <div className="docs-grid">
            {toolCards.map(([title, text]) => (
              <article key={title} className="feature-card feature-card--dark">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* VOID SECTION */}
      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Void build system" accent="gold" />

          <div className="two-column-layout">
            <div>
              <p>
                Void is the build system for Dash projects. It defines how source files, imports, and 
                output artifacts are structured through a simple <code>void.toml</code> file.
              </p>
              <p>
                It is designed to stay close to the compiler model, avoiding hidden behavior while keeping 
                builds predictable and explicit.
              </p>
              <p>
                Void is installed automatically with <code>dashtup</code> and is available out of the box 
                without additional setup.
              </p>

              <Link to="/tools/void" className="button button--primary">
                Learn more about Void
              </Link>
            </div>

            <div>
              <pre>{`# Example void.toml
[project]
type = "exe"
entry = "main.ds"

[imports]
default = ["../utils"]

# Build
void build

# Run
void run`}</pre>
            </div>
          </div>
        </div>
      </section>

      {/* COMMANDS */}
      <section className="band band--paper">
        <div className="container two-column-layout">
          <div>
            <SectionHeading title="Build commands" accent="gold" />
            <pre>{`dash main.ds
dash build main.ds
dash run main.ds

dash build app.ds --emit-llvm -o app.ll
dash build lib.ds --shared -o libdemo.so
dash build tool.ds -Wapi-warning -Werror`}</pre>
          </div>
          <div>
            <SectionHeading title="Linking commands" accent="gold" />
            <pre>{`dash build main.ds -sl
dash build main.ds -d
dash build main.ds -L=gtk4
dash build main.ds support.o -cl libextra.a -ld/usr/lib -lm`}</pre>
          </div>
        </div>
      </section>
    </>
  )
}