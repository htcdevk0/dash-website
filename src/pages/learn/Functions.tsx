import { PageHero } from '../../components/PageHero'
import { SectionHeading } from '../../components/SectionHeading'
import { CodeCard } from '../../components/CodeCard'
import { Keyword } from '../../components/Keyword'
import { RunArea } from '../../components/RunArea'
import { LearnNext } from '../../components/LearnNext'
import { LearnNav } from '../../components/LearnNav'

export function Functions() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Functions"
        summary={
          <p>
            Learn how functions work in Dash, how parameters and return types are declared,
            and how visibility is used for APIs that should be exposed.
          </p>
        }
      />

      <section className="band band--green">
        <div className="container">
          <SectionHeading title="What a function is" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              Functions are the main unit of executable logic in Dash. They define behavior,
              receive parameters, and may return a value.
            </p>

            <p>
              Dash keeps function declarations explicit. Parameter types are written directly,
              the return type is declared directly, and there is no hidden behavior around calls.
            </p>

            <p>
              A function is declared with <Keyword>fn</Keyword>.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Basic declaration" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`fn add(a: int, b: int): int {
    return a + b;
}`}
              />
            </div>

            <div>
              <p>
                This function is named <Keyword>add</Keyword>. It receives two parameters,
                <Keyword>a</Keyword> and <Keyword>b</Keyword>, both typed as <Keyword>int</Keyword>.
              </p>

              <p>
                The return type appears after <Keyword>:</Keyword>. In this case, the function
                returns an <Keyword>int</Keyword>.
              </p>

              <p>
                Returning a value is done with <Keyword>return</Keyword>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Functions with no return value" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`@import("std/io")

fn log_ready(): void {
    io.println("ready");
}`}
              />
            </div>

            <div>
              <p>
                When a function does not return a value, its return type is <Keyword>void</Keyword>.
              </p>

              <p>
                This is common for logging, setup code, and other procedures where the purpose
                is the side effect rather than a returned result.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--pink">
        <div className="container">
          <SectionHeading title="Calling functions" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`@import("std/io")

fn add(a: int, b: int): int {
    return a + b;
}

fn main(): int {
    let result: int = add(10, 20);
    io.println(result);
    return 0;
}`}
              />
            </div>

            <div>
              <p>
                Functions are called by name with parentheses.
              </p>

              <p>
                Arguments are passed in order and must match the declared parameter list.
              </p>

              <p>
                In this example, the result of <Keyword>add(10, 20)</Keyword> is stored in
                a variable and then printed.
              </p>
            </div>
          </div>

          <RunArea
            command="dashc build main.ds && ./main"
            output={`30`}
          />
        </div>
      </section>

      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Parameters" accent="gold" />

          <div className="docs-grid">
            <article className="feature-card">
              <h3>Typed explicitly</h3>
              <p>
                Every parameter has an explicit type. Dash does not hide parameter typing.
              </p>
            </article>

            <article className="feature-card">
              <h3>Ordered</h3>
              <p>
                Function arguments are matched by position in the order declared by the function.
              </p>
            </article>

            <article className="feature-card">
              <h3>Local to the function</h3>
              <p>
                Parameters exist only inside the function body and behave like local bindings.
              </p>
            </article>

            <article className="feature-card">
              <h3>Part of the contract</h3>
              <p>
                The parameter list is part of the function's interface and should stay clear and direct.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Return values" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`fn square(x: int): int {
    return x * x;
}

fn zero(): int {
    return 0;
}`}
              />
            </div>

            <div>
              <p>
                A function that returns a value must return something compatible with its declared type.
              </p>

              <p>
                Keeping the return type explicit makes the function contract easy to read and easy
                to reason about.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Public functions" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`pub fn add(a: int, b: int): int {
    return a + b;
}`}
              />
            </div>

            <div>
              <p>
                <Keyword>pub</Keyword> marks a function as public.
              </p>

              <p>
                Use it when a function is meant to be part of a visible API rather than being
                only internal to the current implementation context.
              </p>

              <p>
                Public visibility is especially important in library code and reusable modules.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--pink">
        <div className="container">
          <SectionHeading title="Functions inside real code" accent="gold" />

          <CodeCard
            code={`@import("std/io")

pub fn max(a: int, b: int): int {
    if (a > b) {
        return a;
    }

    return b;
}

fn main(): int {
    let value: int = max(12, 8);
    io.println(value);
    return 0;
}`}
          />

          <RunArea
            command="dashc build main.ds && ./main"
            output={`12`}
          />
        </div>
      </section>

      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Notes" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              Functions in Dash are explicit, typed, and direct. Parameters, return values,
              and visibility all stay visible in the declaration itself.
            </p>

            <p>
              This matches the broader design of the language: control and clarity first.
            </p>
          </div>

          <LearnNav linkTo='/classes' backTo='/learn/vector'/>
        </div>
      </section>
    </>
  )
}