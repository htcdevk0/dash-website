import { PageHero } from '../../components/PageHero'
import { SectionHeading } from '../../components/SectionHeading'
import { CodeCard } from '../../components/CodeCard'
import { Keyword } from '../../components/Keyword'
import { RunArea } from '../../components/RunArea'
import { FastCommand } from '../../components/FastCommand'
import { LearnNav } from '../../components/LearnNav'

export function GetStarted() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Get started with Dash"
        summary={
          <p>
            Learn how to write, build, and run your first Dash program,
            and understand the core principles behind the language.
          </p>
        }
      />

      {/* INTRODUCTION */}
      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Introduction" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              Dash is a systems programming language designed for performance,
              explicit control, and predictable behavior.
            </p>

            <p>
              It does not abstract away memory, pointers, or linking. Instead,
              it exposes them in a structured and consistent way.
            </p>

            <p>
              You are always aware of what your program does.
            </p>
          </div>
        </div>
      </section>

      {/* FIRST PROGRAM */}
      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Your first program" accent="gold" />

          <div className="two-column-layout">
            <div>
              <CodeCard
                code={`@import("std/io")

fn main(): int {
    io.println("Hello, Dash");
    return 0;
}`}
              />
            </div>

            <div>
              <p>
                This is a minimal Dash program.
              </p>

              <p>
                The <Keyword>@import</Keyword> directive loads the standard IO module,
                making console output available.
              </p>

              <p>
                The <Keyword>fn</Keyword> keyword defines a function. Every program
                starts at <Keyword>main</Keyword>.
              </p>

              <p>
                The return type <Keyword>int</Keyword> represents the process exit code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RUNNING */}
      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Running your program" accent="gold" />
          <div className="two-column-layout">
            <div>
              <CodeCard code={`dashc run main.ds`} />
              <RunArea command='dashc run main.ds' output='Hello, Dash'/>
            </div>


            <div>
              <p>
                The <Keyword>dash</Keyword> CLI compiles and runs the program in one step.
              </p>

              <p>
                For more control, you can build separately:
              </p>

              <CodeCard
                code={`dashc build main.ds
./main`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CLI OVERVIEW */}
      <section className="band band--pink">
        <div className="container">
          <SectionHeading title="CLI overview" accent="gold" />

          <div className="docs-grid">
            <article className="feature-card">
              <FastCommand command='dashc run'/>
              <p>
                Compiles and executes the program in a single step.
              </p>
            </article>

            <article className="feature-card">
              <FastCommand command='dashc build'/>
              <p>
                Produces a binary without running it.
              </p>
            </article>

            <article className="feature-card">
              <FastCommand command='dashc build <file.ds> --emit-llvm' />
              <p>
                Outputs LLVM IR for inspection or advanced workflows.
              </p>
            </article>

            <article className="feature-card">
              <FastCommand command='dashc build <file.ds> --shared'/>
              <p>
                Builds a shared library instead of an executable.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* UNDERSTANDING */}
      <section className="band band--green">
        <div className="container">
          <SectionHeading title="Understanding the structure" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              Dash programs are composed of modules, functions, and explicit
              operations.
            </p>

            <p>
              There are no hidden behaviors or implicit runtime layers.
            </p>

            <p>
              Every allocation, call, and interaction follows what you wrote.
            </p>
          </div>
        </div>
      </section>

      {/* DESIGN PHILOSOPHY */}
      <section className="band band--purple">
        <div className="container">
          <SectionHeading title="Design philosophy" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              Dash is not designed to be a high-level convenience language.
            </p>

            <p>
              It is designed for systems where performance, control, and
              predictability are required.
            </p>

            <p>
              The goal is to provide low-level power without unnecessary
              complexity.
            </p>
          </div>
        </div>
      </section>

      {/* NEXT STEPS */}
      <section className="band band--brown">
        <div className="container">
          <SectionHeading title="Next steps" accent="gold" />

          <div style={{ maxWidth: '48rem' }}>
            <p>
              Continue with the next lessons to understand variables,
              memory handling, pointers, and the Void build system.
            </p>
          </div>
          <LearnNav linkTo='/variables' backTo='/learn'/>
        </div>
      </section>
    </>
  )
}