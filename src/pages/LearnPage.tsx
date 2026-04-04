import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { Link } from 'react-router-dom'

const StartSection = () => {
    return (
        <section className="band band--rose">
        <div className="container one-column">
          <div>
            <SectionHeading title="Get the toolchain" accent="blue" />
            <p>
              Install Dash through dashtup, review the CLI commands, and use the download page for
              the current installation flow and repository entry points.
            </p>
            <Link to="/download" className="button button--secondary">Open downloads</Link>
          </div>
        </div>
      </section>
    )
}

const chapters = [
  ['Language Tour', 'Dash is a compiled LLVM-based systems language that keeps code low-level, direct, explicit, and portable.'],
  ['Types and Values', 'Builtin scalars, pointers, arrays, maps, casts, #type, and lowered compiler-only types.'],
  ['Functions and Control Flow', 'Global functions, local functions, variadics, loops, match, switch, and StrictReturn.'],
  ['User-Defined Types', 'Class, struct, group, enum, aliases, namespaces, and methods.'],
  ['Collections and Vec<T>', 'Fixed arrays, maps, indexed storage, and Vec<T> as the canonical dynamic sequence direction.'],
  ['Modules, FFI, and Linking', 'Import resolution, extern, ABI choice, smart linking, runtime linking, and profiles.'],
  ['Annotations and Builtins', 'Warning gates, @Safe, @Index, #sizeof, env, is, exdt, and lowered type spelling.'],
  ['Build, CLI, and LSP', 'dash, dash build, dash run, emit modes, warnings, link flags, and editor tooling.'],
]

export function LearnPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Documentation built from the current compiler snapshot"
        summary={<p>Use the synchronized guides to learn the language surface, the type model, the build pipeline, FFI, linking, collections, annotations, and editor tooling.</p>}
      />

      <section className="band band--paper">
        <div className="container">
          <SectionHeading title="Start here" accent="gold" />
          <div className="docs-grid">
            {chapters.map(([title, text]) => (
              <article key={title} className="docs-card">
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="band band--green">
        <div className="container two-column-layout">
          <div>
            <SectionHeading title="Language tour" accent="blue" />
            <p>
              Dash begins with source-loader directives such as <code>@import("std/io")</code> and
              <code>@from("std/os")</code>. After loading, the parser works with declarations such as
              <code>fn</code>, <code>class</code>, <code>struct</code>, <code>group</code>,
              <code>enum</code>, <code>namespace</code>, <code>let</code>, and <code>const</code>.
            </p>
            <pre>{`@import("std/io")

fn main(): int {
    io.println("Hello, Dash!");
    return 0;
}`}</pre>
          </div>
          <div>
            <SectionHeading title="Functions and control flow" accent="blue" />
            <p>
              The current implementation supports global functions, local functions, richer-than-C
              variadics, classic loops, compact range loops, <code>match</code>, and
              <code>switch</code> lowered by the semantic layer.
            </p>
            <pre>{`fn main(): int {
    let base: int = 10;

    add_local(x: int): int {
        return base + x;
    }

    return add_local(32);
}`}</pre>
          </div>
        </div>
      </section>

      <section className="band band--paper">
        <div className="container two-column-layout">
          <div>
            <SectionHeading title="Types, pointers, and maps" accent="gold" />
            <p>
              Dash exposes primitive scalars, machine-oriented storage, pointers, arrays, maps, and
              user-defined aggregates. Pointer arithmetic, indexed storage, and map literals are part
              of the current implementation.
            </p>
            <pre>{`let value: int = 42;
let ptr: int* = &value;
*ptr = 100;

let table: @map<string, int> = {
    ["alpha": 1],
    ["beta": 2]
};`}</pre>
          </div>
          <div>
            <SectionHeading title="Vec<T> and indexed containers" accent="gold" />
            <p>
              The synchronized package treats <code>Vec&lt;T&gt;</code> as the canonical dynamic
              sequence direction, while fixed arrays and maps remain the raw storage primitives.
            </p>
            <pre>{`let arr: Vec<int>::new();
arr.reserve(N);

for (i : N) {
    arr.push(i);
}`}</pre>
          </div>
        </div>
      </section>


      <StartSection />
    </>
  )
}
