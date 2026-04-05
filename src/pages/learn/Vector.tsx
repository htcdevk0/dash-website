import { PageHero } from '../../components/PageHero'
import { SectionHeading } from '../../components/SectionHeading'
import { CodeCard } from '../../components/CodeCard'
import { Keyword } from '../../components/Keyword'
import { RunArea } from '../../components/RunArea'
import { LearnNext } from '../../components/LearnNext'
import { LearnNav } from '../../components/LearnNav'

export function Vector() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Vector"
        summary={
          <p>
            Learn how <Keyword>Vec&lt;T&gt;</Keyword> works in Dash, how to create one,
            how it grows, and how to manage dynamic heap-backed storage explicitly.
          </p>
        }
      />

      <section className="band band--green">
        <div className="container">
          <SectionHeading title="What a vector is" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              A vector in Dash is a dynamic container backed by heap memory.
              Unlike a fixed array, a vector can grow as elements are pushed into it.
            </p>

            <p>
              The standard implementation stores three main pieces of state:
              a raw buffer pointer, the current number of valid elements, and
              the current allocated capacity.
            </p>

            <p>
              Internally, <Keyword>Vec&lt;T&gt;</Keyword> is built around explicit memory
              allocation and resizing. Nothing about its behavior is hidden.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Importing and creating a vector" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`@import("std/vector")

let names: Vec<string>::new();
let values: Vec<int>::new();`}
              />
            </div>

            <div>
              <p>
                To use vectors, import <Keyword>@import("std/vector")</Keyword>.
              </p>

              <p>
                The element type must always be explicit. A vector is generic,
                so you must specify the contained type such as <Keyword>Vec&lt;string&gt;</Keyword>{' '}
                or <Keyword>Vec&lt;int&gt;</Keyword>.
              </p>

              <p>
                <Keyword>::new()</Keyword> creates an empty vector with
                <Keyword>buffer = null</Keyword>, <Keyword>size = 0</Keyword>, and{' '}
                <Keyword>capacity = 0</Keyword>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Pushing values" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`@import("std/vector")

let names: Vec<string>::new();

names.push("joe");
names.push("mary");
names.push("john");`}
              />
            </div>

            <div>
              <p>
                <Keyword>push</Keyword> appends a new value to the end of the vector.
              </p>

              <p>
                If the current size has reached capacity, the vector grows before
                the new element is written.
              </p>

              <p>
                The current implementation starts with a capacity of 4 and then
                doubles capacity when it needs more space.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--pink">
        <div className="container">
          <SectionHeading title="How growth works" accent="gold" />

          <div className="docs-grid">
            <article className="feature-card">
              <h3>Heap buffer</h3>
              <p>
                The vector stores elements in a raw heap allocation through
                <Keyword>buffer: T*</Keyword>.
              </p>
            </article>

            <article className="feature-card">
              <h3>Size</h3>
              <p>
                <Keyword>size</Keyword> is the number of valid elements currently
                stored in the vector.
              </p>
            </article>

            <article className="feature-card">
              <h3>Capacity</h3>
              <p>
                <Keyword>capacity</Keyword> is the number of allocated slots
                available before another reallocation is needed.
              </p>
            </article>

            <article className="feature-card">
              <h3>Reallocation</h3>
              <p>
                When growth is required, a larger heap block is allocated,
                elements are copied, and the old block is released.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Reserving capacity" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`@import("std/vector")

let values: Vec<int>::new();
values.reserve(64);`}
              />
            </div>

            <div>
              <p>
                <Keyword>reserve</Keyword> allocates enough capacity for at least
                the requested number of elements.
              </p>

              <p>
                This is useful when you already know the approximate size of the
                vector and want to reduce repeated reallocations during pushing.
              </p>

              <p>
                The standard implementation also provides <Keyword>::new_reserved(...)</Keyword>{' '}
                to create a vector and reserve memory immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Reading and writing elements" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`let values: Vec<int>::new();

values.push(10);
values.push(20);

let a: int = values.get(0);
values.set(99, 1);`}
              />
            </div>

            <div>
              <p>
                <Keyword>get</Keyword> reads an element by index.
              </p>

              <p>
                <Keyword>set</Keyword> overwrites an existing element at a given index.
              </p>

              <p>
                Bounds are checked through the vector's internal safety helpers,
                and invalid access triggers an error path instead of silently reading
                outside valid storage.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Removing values" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`let values: Vec<int>::new();

values.push(10);
values.push(20);
values.push(30);

let last: int = values.pop();
values.remove(0);
values.remove_unordered(0);`}
              />
            </div>

            <div>
              <p>
                <Keyword>pop</Keyword> removes and returns the last element.
              </p>

              <p>
                <Keyword>remove</Keyword> deletes an element and shifts the
                remaining elements left to preserve order.
              </p>

              <p>
                <Keyword>remove_unordered</Keyword> replaces the removed element
                with the last one, which is faster when element order does not matter.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--pink">
        <div className="container">
          <SectionHeading title="Length, raw data, and clearing" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`let values: Vec<int>::new();

values.push(1);
values.push(2);

let count: int = values.len();
let ptr: int* = values.data();

values.clear();`}
              />
            </div>

            <div>
              <p>
                <Keyword>len</Keyword> returns the current number of valid elements.
              </p>

              <p>
                <Keyword>data</Keyword> exposes the raw buffer pointer, which is useful
                for low-level work and interoperability.
              </p>

              <p>
                <Keyword>clear</Keyword> resets the logical size to zero without
                freeing the allocated capacity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Destroying the vector" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`let values: Vec<int>::new();

values.push(10);
values.push(20);

values.destroy();`}
              />
            </div>

            <div>
              <p>
                <Keyword>destroy</Keyword> releases the heap allocation and resets
                the internal state back to null and zero.
              </p>

              <p>
                Since the vector owns heap memory, destroying it is the explicit
                way to release that storage.
              </p>

              <p>
                This matches Dash's general design: memory ownership stays visible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Complete example" accent="gold" />

          <CodeCard
            code={`@import("std/io")
@import("std/vector")

fn main(): int {
    let names: Vec<string>::new();

    names.push("joe");
    names.push("mary");
    names.push("john");

    io.println(names.get(0)); // Or names[0], provided by @Index in Vec<T>
    io.println(names.len());

    names.destroy();
    return 0;
}`}
          />

          <RunArea
            command="dashc main.ds && ./main"
            output={`joe
3`}
          />
        </div>
      </section>

      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="How Vec<T> is implemented" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              The standard vector is implemented as a generic structure with a raw
              pointer buffer, explicit size tracking, capacity tracking, checked
              access helpers, and manual allocation through the memory module.
            </p>

            <p>
              When capacity is insufficient, a larger block is allocated,
              existing elements are copied into the new block, and the previous
              allocation is released.
            </p>

            <p>
              This makes the vector dynamic, but still fully aligned with Dash's
              low-level and explicit memory model.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--pink">
        <div className="container">
          <SectionHeading title="Notes" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              <Keyword>Vec&lt;T&gt;</Keyword> is the standard growable container in Dash.
            </p>

            <p>
              It is generic, heap-backed, explicitly typed, and manually managed.
              It gives dynamic behavior without hiding allocation or ownership.
            </p>

            <p>
              Use fixed arrays when size is known at compile time. Use vectors when
              the number of elements changes during execution.
            </p>
          </div>

          <LearnNav linkTo='/functions' backTo='/learn/memory'/>
        </div>
      </section>
    </>
  )
}