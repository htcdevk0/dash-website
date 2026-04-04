import { Link } from 'react-router-dom'
import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'

const workflowCards = [
  {
    title: 'Manifest-first',
    text: 'Void reads void.toml as the source of truth for the project. The manifest keeps project identity, entry file, artifact type, compiler flags, link profiles, imports, and native link inputs in one place.',
  },
  {
    title: 'Artifact-aware',
    text: 'project.type selects how the build is produced. Executable projects keep regular linking, static projects switch to compile-only mode with -c, and dynamic projects generate shared objects with --shared.',
  },
  {
    title: 'Direct mapping',
    text: 'Instead of inventing a hidden pipeline, Void resolves the manifest into a real compiler command. Imports become repeated -I flags, link profiles become -L=<profile>, and native library settings stay explicit.',
  },
  {
    title: 'Predictable output',
    text: 'Void can validate, list, diff, format, and doctor the current project state before building. The goal is to keep builds readable, canonical, and easy to inspect.',
  },
]

const designCards = [
  {
    title: 'Dependency-free',
    text: 'The current implementation is plain C++20 with standard library facilities. No external TOML parser, no CLI framework, and no package manager dependency are required to run Void.',
  },
  {
    title: 'Canonical manifests',
    text: 'Whenever Void writes a manifest, it emits a stable layout. That keeps project files cleaner, reduces formatting drift, and makes diffs easier to read in version control.',
  },
  {
    title: 'Dash-first',
    text: 'Void is designed for Dash projects and the way the Dash compiler already works. It organizes builds around the current toolchain instead of trying to replace it with a separate ecosystem model.',
  },
]

const commandGroups = [
  {
    title: 'Project creation and execution',
    items: [
      'void init [name]',
      'void build',
      'void run -- --fullscreen --debug',
      'void clean',
    ],
  },
  {
    title: 'Manifest editing and inspection',
    items: [
      'void add <type> <item>',
      'void remove <item>',
      'void show',
      'void list',
    ],
  },
  {
    title: 'Validation and maintenance',
    items: [
      'void validate',
      'void format',
      'void diff',
      'void doctor',
    ],
  },
  {
    title: 'Project information',
    items: [
      'void help',
      'void version',
      'void license',
      'void author',
    ],
  },
]

export function VoidPage() {
  return (
    <>
      <PageHero
        eyebrow="Tools / Void"
        title="Void"
        summary={
          <p>
            A dependency-free build system for Dash projects. Void uses a single
            <code> void.toml </code>
            manifest to describe project layout, compiler flags, imports, linking,
            and output type, then resolves that manifest into a direct Dash compiler invocation.
          </p>
        }
        actions={
          <div className="hero-callout">
            <Link to="/install" className="button button--primary">Install Dash</Link>
            <Link to="/tools" className="hero-callout__text-link">Back to tools overview</Link>
          </div>
        }
      />

      <section className="band band--paper">
        <div className="container two-column-layout">
          <div>
            <SectionHeading title="What Void is" accent="gold" />
            <p>
              Void gives Dash projects a standard manifest, a predictable build entry point,
              and a small command-line workflow centered on the current compiler model.
              It does not replace the Dash compiler. It orchestrates it.
            </p>
            <p>
              The build definition stays explicit: entry file, artifact type, compiler flags,
              import search paths, Dash link profiles, native objects, shared inputs, linker
              directories, and native libraries are all described in the manifest instead of
              being hidden behind implicit behavior.
            </p>
          </div>
          <div>
            <SectionHeading title="Installed with dashtup" accent="gold" />
            <p>
              When Dash is installed through dashtup, Void is installed alongside the toolchain,
              so the build workflow is available immediately after the main installation flow.
            </p>
            <pre>{`git clone https://github.com/htcdevk0/dashtup.git
cd dashtup
./dashtup install

void version`}</pre>
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="How Void works" accent="gold">
            The pipeline stays intentionally small: read the manifest, validate paths and required
            fields, resolve the artifact mode, map values to compiler arguments, and run the build.
          </SectionHeading>
          <div className="four-column-grid">
            {workflowCards.map((card) => (
              <article key={card.title} className="feature-card feature-card--dark">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="container two-column-layout">
          <div>
            <SectionHeading title="Standard project layout" accent="gold" />
            <pre>{`project/
├── void.toml
└── src/
    └── main.ds`}</pre>
            <p>
              The manifest sits at the project root and becomes the source of truth for build
              configuration. Additional source files can be tracked through the optional
              <code> [sources] </code>
              inventory for organization and validation.
            </p>
          </div>
          <div>
            <SectionHeading title="Example manifest" accent="gold" />
            <pre>{`[project]
name = "HelloDash"
entry = "src/main.ds"
type = "exe"

[build]
flags = ["-O", "-sl"]
output = "build/"
dashc = "dashc"

[libs]
link = ["gtk4"]

[imports]
default = ["imports"]

[linker]
dirs = ["native/lib"]
native = ["m", "pthread"]`}</pre>
          </div>
        </div>
      </section>

      <section className="band band--green">
        <div className="container">
          <SectionHeading title="From manifest to compiler command" accent="blue">
            Void keeps the mapping obvious. The manifest above resolves into the same kind of
            compiler command a Dash user could write by hand.
          </SectionHeading>
          <pre>{`dashc src/main.ds -o build/HelloDash -O -sl -Iimports -L=gtk4 -ldnative/lib -lm -lpthread`}</pre>
          <div className="three-column-grid">
            <article className="text-card text-card--dark">
              <h3>Imports</h3>
              <p>
                <code>imports.default</code> expands item by item into repeated <code>-I</code>
                arguments.
              </p>
            </article>
            <article className="text-card text-card--dark">
              <h3>Dash link profiles</h3>
              <p>
                <code>libs.link</code> becomes <code>-L=&lt;profile&gt;</code>, matching the current
                Dash link model.
              </p>
            </article>
            <article className="text-card text-card--dark">
              <h3>Native linking</h3>
              <p>
                <code>linker.dirs</code> maps to <code>-ld&lt;path&gt;</code> and
                <code> linker.native </code>
                maps to <code>-l&lt;name&gt;</code>.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="container">
          <SectionHeading title="Artifact modes" accent="gold">
            The artifact type lives in the <code>[project]</code> section and controls how Void builds
            the final output.
          </SectionHeading>
          <div className="three-column-grid">
            <article className="docs-card">
              <h3>Executable</h3>
              <p>
                <code>type = "exe"</code> builds a regular executable and keeps normal linking enabled.
              </p>
              <pre>{`[project]
name = "game"
entry = "src/main.ds"
type = "exe"`}</pre>
            </article>
            <article className="docs-card">
              <h3>Static object</h3>
              <p>
                <code>type = "static"</code> switches to compile-only mode and emits an object file with
                <code> -c</code>.
              </p>
              <pre>{`[project]
name = "dash_core"
entry = "src/core.ds"
type = "static"`}</pre>
            </article>
            <article className="docs-card">
              <h3>Shared object</h3>
              <p>
                <code>type = "dynamic"</code> generates a shared object using
                <code> --shared</code>.
              </p>
              <pre>{`[project]
name = "dash_math"
entry = "src/math.ds"
type = "dynamic"`}</pre>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--rose">
        <div className="container">
          <SectionHeading title="Core commands" accent="blue">
            Void keeps project management, manifest maintenance, and build inspection in the same CLI.
          </SectionHeading>
          <div className="docs-grid">
            {commandGroups.map((group) => (
              <article key={group.title} className="feature-card feature-card--dark">
                <h3>{group.title}</h3>
                <ul className="feature-list">
                  {group.items.map((item) => (
                    <li key={item}><code>{item}</code></li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="container two-column-layout">
          <div>
            <SectionHeading title="Practical examples" accent="gold" />
            <pre>{`void init demo
cd demo
void build
void run

void add link gtk4
void add import imports
void add native pthread
void format
void doctor`}</pre>
            <p>
              Array-oriented fields can be edited directly from the CLI. Supported add targets include
              files, flags, link profiles, static inputs, dynamic inputs, imports, linker directories,
              and native libraries.
            </p>
          </div>
          <div>
            <SectionHeading title="Executable arguments" accent="gold" />
            <pre>{`void run -- --fullscreen --debug`}</pre>
            <p>
              For executable projects, everything after <code>--</code> is forwarded to the produced
              program. This keeps the build command and runtime command in one place while preserving
              normal argument passing.
            </p>
            <p>
              <code>void run</code> is intentionally restricted to executable projects. Static and
              dynamic artifact modes stay build-only.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Design principles" accent="gold" />
          <div className="three-column-grid">
            {designCards.map((card) => (
              <article key={card.title} className="text-card text-card--dark">
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="container narrow-flow">
          <SectionHeading title="Where Void fits in the Dash toolchain" accent="gold" />
          <p className="lead-paragraph">
            Void is the project build layer. Dash remains the compiler. dashtup remains the installer.
            This separation keeps responsibilities clear: install the toolchain with dashtup, define
            projects with <code>void.toml</code>, and build through a command model that stays close to
            the compiler itself.
          </p>
          <div className="button-row">
            <Link to="/install" className="button button--primary">Install Dash</Link>
            <Link to="/download" className="button button--secondary">Open downloads</Link>
          </div>
        </div>
      </section>
    </>
  )
}
