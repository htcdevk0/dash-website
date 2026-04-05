import { PageHero } from '../../components/PageHero'
import { SectionHeading } from '../../components/SectionHeading'
import { CodeCard } from '../../components/CodeCard'
import { Keyword } from '../../components/Keyword'
import { RunArea } from '../../components/RunArea'
import { LearnNav } from '../../components/LearnNav'

export function Memory() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Memory and pointers"
        summary={
          <p>
            Understand how memory works in Dash, including pointers,
            addresses, and explicit control over data.
          </p>
        }
      />

      {/* INTRO */}
      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Memory model" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              Dash does not hide memory. Every value exists in a defined location,
              and you can directly interact with it.
            </p>

            <p>
              This gives full control over performance and behavior, but requires
              awareness of what your program is doing.
            </p>
          </div>
        </div>
      </section>

      {/* ADDRESS */}
      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Getting an address" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`let x: int = 10;
let ptr: int* = &x;`}
              />
            </div>

            <div>
              <p>
                The <Keyword>&</Keyword> operator returns the address of a variable.
              </p>

              <p>
                A pointer is defined using <Keyword>*</Keyword>.
              </p>

              <p>
                In this example, <Keyword>ptr</Keyword> points to <Keyword>x</Keyword>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEREFERENCE */}
      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Dereferencing" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`let x: int = 10;
let ptr: int* = &x;

let value: int = *ptr;`}
              />
            </div>

            <div>
              <p>
                The <Keyword>*</Keyword> operator accesses the value stored at
                a memory address.
              </p>

              <p>
                Dereferencing allows you to read or modify data through pointers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MODIFY */}
      <section className="band band--pink">
        <div className="container">
          <SectionHeading title="Modifying through pointers" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`let x: int = 10;
let ptr: int* = &x;

*ptr = 20;`}
              />
            </div>

            <div>
              <p>
                Modifying a dereferenced pointer changes the original value.
              </p>

              <p>
                This is direct memory manipulation, with no abstraction layer.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ARRAYS */}
      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Arrays and memory" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`const values: int[3] = {10, 20, 30};

let ptr: int* = &values[0];

let first: int = *ptr;`}
              />
            </div>

            <div>
              <p>
                Arrays are stored in contiguous memory.
              </p>

              <p>
                Taking the address of the first element allows pointer-based access.
              </p>

              <p>
                This is useful for iteration and low-level operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* EXAMPLE */}
      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Example" accent="gold" />

          <CodeCard
            code={`@import("std/io")

fn main(): int {
    let x: int = 10;
    let ptr: int* = &x;

    *ptr = 25;

    io.println(x);

    return 0;
}`}
          />

          <RunArea
            command="dashc main.ds && ./main"
            output={`25`}
          />
        </div>
      </section>

      {/* NOTES */}
      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Notes" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              Dash provides raw access to memory through pointers.
            </p>

            <p>
              There are no hidden safety layers. Correctness depends on how you
              use memory.
            </p>

            <p>
              This design enables maximum performance and control.
            </p>
          </div>

          <LearnNav linkTo='/vector' backTo='/learn/variables' />
        </div>
      </section>
    </>
  )
}