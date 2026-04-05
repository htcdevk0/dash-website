import { PageHero } from '../../components/PageHero'
import { SectionHeading } from '../../components/SectionHeading'
import { CodeCard } from '../../components/CodeCard'
import { Keyword } from '../../components/Keyword'
import { LearnNav } from '../../components/LearnNav'

export function Classes() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Classes"
        summary={
          <p>
            Learn how classes work in Dash, how instance state is represented,
            how <Keyword>self</Keyword> is used, and how <Keyword>pub</Keyword> and <Keyword>static</Keyword> affect visibility and structure.
          </p>
        }
      />

      <section className="band band--green">
        <div className="container">
          <SectionHeading title="What a class is" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              A class in Dash groups related state and behavior together.
            </p>

            <p>
              Fields store data that belongs to the class, and methods define operations
              that work with that data.
            </p>

            <p>
              Instance-oriented classes use <Keyword>self</Keyword> to access the current
              object state from inside methods.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Basic class structure" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`class Counter {
    let value: int->0;

    fn increment(): void {
        self.value = self.value + 1;
    }

    fn get(): int {
        return self.value;
    }
}`}
              />
            </div>

            <div>
              <p>
                This class has one field, <Keyword>value</Keyword>, and two methods.
              </p>

              <p>
                Field initialization uses <Keyword>-&gt;</Keyword>, not <Keyword>=</Keyword>.
              </p>

              <p>
                Inside instance methods, <Keyword>self</Keyword> refers to the current instance.
                That is why the code reads and writes <Keyword>self.value</Keyword>.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Fields" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`class Window {
    let width: int->1280;
    let height: int->720;
    let title: string->"Dash";
}`}
              />
            </div>

            <div>
              <p>
                Fields define the stored state of the class.
              </p>

              <p>
                Each instance carries its own copy of those fields.
              </p>

              <p>
                Because these are instance fields, they are accessed through <Keyword>self</Keyword>
                when used inside methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--pink">
        <div className="container">
          <SectionHeading title="Instance methods" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`class Pair {
    let a: int->0;
    let b: int->0;

    fn sum(): int {
        return self.a + self.b;
    }

    fn reset(): void {
        self.a = 0;
        self.b = 0;
    }
}`}
              />
            </div>

            <div>
              <p>
                Instance methods operate on the current object.
              </p>

              <p>
                They usually read or update fields through <Keyword>self</Keyword>.
              </p>

              <p>
                This is what makes them instance methods rather than independent functions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Public members and visibility" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`class Counter {
    let value: int->0;

    pub fn get(): int {
        return self.value;
    }
}`}
              />
            </div>

            <div>
              <p>
                <Keyword>pub</Keyword> marks a member as public.
              </p>

              <p>
                Use it for methods or fields that are intended to be visible as part of
                the class interface.
              </p>

              <p>
                Members without <Keyword>pub</Keyword> stay internal in normal API design
                and are useful for implementation details that should not be exposed.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Constructors and setup methods" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`class Buffer {
    let size: int->0;
    let data: int*->null;

    pub static new(): void {
        this.size = 0;
        this.data = null;
    }
}`}
              />
            </div>

            <div>
              <p>
                A class may define setup logic through methods such as <Keyword>new</Keyword>.
              </p>

              <p>
                In Dash code, these are often written as <Keyword>static</Keyword> members
                when they are meant to operate at the class level rather than through an
                already existing instance.
              </p>

              <p>
                This keeps object setup explicit.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Static classes" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`class Math: static {
    pub fn add(a: int, b: int): int {
        return a + b;
    }

    pub fn mul(a: int, b: int): int {
        return a * b;
    }
}`}
              />
            </div>

            <div>
              <p>
                A static class is declared with <Keyword>: static</Keyword>.
              </p>

              <p>
                This form is useful when the class is acting as a namespace-like container
                for related functions rather than representing per-instance state.
              </p>

              <p>
                Static classes do not model instance data in the same way as regular classes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="band band--pink">
        <div className="container">
          <SectionHeading title="Instance vs static" accent="gold" />

          <div className="docs-grid">
            <article className="feature-card">
              <h3>Instance class</h3>
              <p>
                Holds object state in fields and uses <Keyword>self</Keyword> inside methods.
              </p>
            </article>

            <article className="feature-card">
              <h3>Static class</h3>
              <p>
                Organizes related functionality without behaving like per-object instance state.
              </p>
            </article>

            <article className="feature-card">
              <h3>Public API</h3>
              <p>
                Use <Keyword>pub</Keyword> on members that are intended to be part of the class interface.
              </p>
            </article>

            <article className="feature-card">
              <h3>Internal members</h3>
              <p>
                Leave implementation details unmarked when they should stay internal to the class design.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="band band--green">
        <div className="container">
          <SectionHeading title="A practical example" accent="gold" />

          <CodeCard
            code={`class Counter {
    let value: int->0;

    pub fn increment(): void {
        self.value = self.value + 1;
    }

    pub fn get(): int {
        return self.value;
    }
}

class Math: static {
    pub fn _double(x: int): int {
        return x * 2;
    }
}`}
          />

          <div style={{ maxWidth: '48rem', marginTop: '1.25rem' }}>
            <p>
              This example shows both styles together.
            </p>

            <p>
              <Keyword>Counter</Keyword> is instance-oriented because it stores state and
              works through <Keyword>self</Keyword>. <Keyword>Math</Keyword> is static because
              it groups functionality without instance fields.
            </p>
          </div>
        </div>
      </section>

      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Notes" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              Classes in Dash stay explicit. Fields, visibility, instance access, and static
              structure are all visible directly in the source.
            </p>

            <p>
              Use regular classes for stateful objects and static classes for grouped APIs
              or utility-style behavior.
            </p>

            <p>
              Use <Keyword>pub</Keyword> intentionally, only where the class is meant to expose
              a stable interface.
            </p>
          </div>

          <LearnNav linkTo='/end' backTo='/learn/functions'/>
        </div>
      </section>
    </>
  )
}