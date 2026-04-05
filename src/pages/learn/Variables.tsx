import { PageHero } from '../../components/PageHero'
import { SectionHeading } from '../../components/SectionHeading'
import { CodeCard } from '../../components/CodeCard'
import { Keyword } from '../../components/Keyword'
import { RunArea } from '../../components/RunArea'
import { LearnNav } from '../../components/LearnNav'

export function Variables() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Variables"
        summary={
          <p>
            Learn how variables work in Dash, including types, mutability,
            and fixed-size arrays.
          </p>
        }
      />

      {/* BASICS */}
      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Declaring variables" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`let x: int = 10;
const y: int = 20;`}
              />
            </div>

            <div>
              <p>
                Variables are declared using <Keyword>let</Keyword> or{' '}
                <Keyword>const</Keyword>.
              </p>

              <p>
                <Keyword>let</Keyword> creates a mutable variable, while{' '}
                <Keyword>const</Keyword> creates an immutable one.
              </p>

              <p>
                Types are explicit and defined using <Keyword>:</Keyword>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MUTABILITY */}
      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Mutability" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`let x: int = 10;
x = 20; // valid

const y: int = 10;
y = 20; // error`}
              />
            </div>

            <div>
              <p>
                Mutability is explicit.
              </p>

              <p>
                A <Keyword>let</Keyword> variable can be reassigned, while a{' '}
                <Keyword>const</Keyword> variable cannot.
              </p>

              <p>
                This avoids hidden state changes and keeps behavior predictable.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TYPES */}
      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Primitive types" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`let a: int = 10;
let b: uint = 20;
let c: float = 1.5;
let d: double = 2.0;
let e: bool = true;
let f: char = 'A';
let s: string = "Hello";`}
              />
            </div>

            <div>
              <p>
                Dash uses explicit primitive types.
              </p>

              <p>
                <Keyword>int</Keyword> and <Keyword>uint</Keyword> are the main
                integer types.
              </p>

              <p>
                Floating point values use <Keyword>float</Keyword> and{' '}
                <Keyword>double</Keyword>.
              </p>

              <p>
                <Keyword>string</Keyword> represents a pointer to characters.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARRAYS */}
      <section className="band band--pink">
        <div className="container">
          <SectionHeading title="Fixed arrays" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`const values: int[3] = {10, 20, 30};

let x: int = values[0];`}
              />
            </div>

            <div>
              <p>
                Dash uses fixed-size arrays.
              </p>

              <p>
                The size is part of the type, defined using{' '}
                <Keyword>[n]</Keyword>.
              </p>

              <p>
                Array elements are accessed using indexing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Example" accent="gold" />

          <CodeCard
            code={`@import("std/io")

fn main(): int {
    const values: int[3] = {10, 20, 30};

    io.println(values[0]);

    return 0;
}`}
          />

          <RunArea
            command="dashc build main.ds && ./main"
            output={`10`}
          />
        </div>
      </section>

      {/* NOTES */}
      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Notes" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              Dash favors explicit and predictable data structures.
            </p>

            <p>
              Arrays have fixed size and defined memory layout, making behavior
              clear and efficient.
            </p>

            <p>
              Understanding variables and types is essential before moving into
              memory control and pointers.
            </p>
          </div>
            
          <LearnNav linkTo='/memory' backTo='/learn/get-started' />

        </div>
      </section>
    </>
  )
}