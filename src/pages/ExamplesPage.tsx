import { PageHero } from '../components/PageHero'
import { SectionHeading } from '../components/SectionHeading'
import { CodeCard } from '../components/CodeCard'
import { FastCommand } from '../components/FastCommand'
import { Keyword } from '../components/Keyword'

type ExampleItem = {
  title: string
  description: string
  code: string
}

type ExampleSection = {
  title: string
  intro: string
  examples: ExampleItem[]
}

const bands = [
  'band band--green',
  'band band--purple',
  'band band--brown',
  'band band--pink',
  'band band--paper',
]

const sections: ExampleSection[] = [
  {
    title: 'Hello world and output',
    intro:
      'Start with simple programs that write values to the console through the standard IO module.',
    examples: [
      {
        title: 'Hello world',
        description: 'The smallest useful Dash program.',
        code: `@import("std/io")

fn main(): int {
    io.println("Hello, Dash");
    return 0;
}`,
      },
      {
        title: 'Printing a number',
        description: 'Console output is not limited to strings.',
        code: `@import("std/io")

fn main(): int {
    io.println(42);
    return 0;
}`,
      },
      {
        title: 'Printing a boolean',
        description: 'Primitive values can be printed directly.',
        code: `@import("std/io")

fn main(): int {
    let ready: bool = true;
    io.println(ready);
    return 0;
}`,
      },
      {
        title: 'Multiple lines',
        description: 'Write more than one line in sequence.',
        code: `@import("std/io")

fn main(): int {
    io.println("line one");
    io.println("line two");
    io.println("line three");
    return 0;
}`,
      },
    ],
  },
  {
    title: 'Variables',
    intro:
      'Variables in Dash are explicit. Types are written directly and nothing is inferred silently from hidden rules.',
    examples: [
      {
        title: 'Mutable integer',
        description: 'A mutable integer declared with let.',
        code: `let value: int = 10;`,
      },
      {
        title: 'Mutable string',
        description: 'Strings can also be stored in mutable bindings.',
        code: `let name: string = "Dash";`,
      },
      {
        title: 'Separate declaration style',
        description: 'Use one variable for each distinct purpose.',
        code: `let width: int = 1280;
let height: int = 720;
let title: string = "Window";`,
      },
      {
        title: 'Read and print',
        description: 'Variables can be passed to standard library functions.',
        code: `@import("std/io")

fn main(): int {
    let x: int = 25;
    io.println(x);
    return 0;
}`,
      },
    ],
  },
  {
    title: 'Constants and mutability',
    intro:
      'Dash separates mutable and immutable bindings. A value declared with const cannot be reassigned.',
    examples: [
      {
        title: 'Constant integer',
        description: 'A fixed value declared with const.',
        code: `const port: int = 8080;`,
      },
      {
        title: 'Mutable reassignment',
        description: 'let values may be changed later.',
        code: `let count: int = 0;
count = 1;
count = 2;`,
      },
      {
        title: 'Immutable string',
        description: 'const prevents reassignment.',
        code: `const app_name: string = "dashc";`,
      },
      {
        title: 'Constant plus mutable',
        description: 'Use constants for stable values and let for changing state.',
        code: `const base: int = 100;
let current: int = base;
current = current + 1;`,
      },
    ],
  },
  {
    title: 'Primitive values',
    intro:
      'Dash exposes primitive types directly. Use the exact type that matches the data you want to store.',
    examples: [
      {
        title: 'Integers',
        description: 'Signed and unsigned integer bindings.',
        code: `let a: int = 10;
let b: uint = 20;`,
      },
      {
        title: 'Floating point',
        description: 'Use float or double depending on precision requirements.',
        code: `let ratio: float = 1.5;
let exact: double = 3.14159;`,
      },
      {
        title: 'Characters and booleans',
        description: 'Characters and boolean values are explicit.',
        code: `let letter: char = 'D';
let ok: bool = true;`,
      },
      {
        title: 'Strings',
        description: 'Strings are stored explicitly as string values.',
        code: `let message: string = "native speed";`,
      },
    ],
  },
  {
    title: 'Arithmetic and expressions',
    intro:
      'Expressions in Dash stay direct and readable. Arithmetic is written in a conventional low-level style.',
    examples: [
      {
        title: 'Addition',
        description: 'Simple integer addition.',
        code: `let a: int = 10;
let b: int = 20;
let sum: int = a + b;`,
      },
      {
        title: 'Subtraction',
        description: 'Subtract one value from another.',
        code: `let value: int = 100;
let result: int = value - 25;`,
      },
      {
        title: 'Multiplication',
        description: 'Multiply values explicitly.',
        code: `let width: int = 32;
let height: int = 18;
let area: int = width * height;`,
      },
      {
        title: 'Grouped expression',
        description: 'Parentheses keep intent clear.',
        code: `let a: int = 4;
let b: int = 5;
let c: int = (a + b) * 2;`,
      },
    ],
  },
  {
    title: 'Flow control',
    intro:
      'Conditional execution is explicit and direct. Branches are written with ordinary if and else blocks.',
    examples: [
      {
        title: 'Basic if',
        description: 'Run code only when the condition is true.',
        code: `@import("std/io")

fn main(): int {
    let value: int = 10;

    if (value > 5) {
        io.println("greater");
    }

    return 0;
}`,
      },
      {
        title: 'If and else',
        description: 'Choose between two branches.',
        code: `@import("std/io")

fn main(): int {
    let enabled: bool = false;

    if (enabled) {
        io.println("on");
    } else {
        io.println("off");
    }

    return 0;
}`,
      },
      {
        title: 'Range check',
        description: 'Use combined comparisons to validate values.',
        code: `@import("std/io")

fn main(): int {
    let port: int = 8080;

    if (port > 0 && port < 65536) {
        io.println("valid");
    } else {
        io.println("invalid");
    }

    return 0;
}`,
      },
      {
        title: 'Nested branch',
        description: 'Nested conditions remain explicit.',
        code: `@import("std/io")

fn main(): int {
    let x: int = 20;

    if (x > 0) {
        if (x > 10) {
            io.println("large positive");
        }
    }

    return 0;
}`,
      },
    ],
  },
  {
    title: 'Loops',
    intro:
      'Dash supports structured iteration. Counting loops stay explicit and close to the machine model.',
    examples: [
      {
        title: 'Simple counting loop',
        description: 'Count upward using a loop variable.',
        code: `@import("std/io")

fn main(): int {
    let i: int = 0;

    for (i : 4) {
        io.println(i);
        i = i + 1;
    }

    return 0;
}`,
      },
      {
        title: 'Summing values',
        description: 'Use a loop to accumulate a result.',
        code: `@import("std/io")

fn main(): int {
    let i: int = 0;
    let sum: int = 0;

    for (i : 5) {
        sum = sum + i;
        i = i + 1;
    }

    io.println(sum);
    return 0;
}`,
      },
      {
        title: 'Loop with condition work',
        description: 'Loops can combine arithmetic and branches.',
        code: `@import("std/io")

fn main(): int {
    let i: int = 0;

    for (i : 6) {
        if (i > 2) {
            io.println(i);
        }

        i = i + 1;
    }

    return 0;
}`,
      },
      {
        title: 'Array iteration by index',
        description: 'Iterate across a fixed array using indices.',
        code: `@import("std/io")

fn main(): int {
    const values: int[3] = {10, 20, 30};
    let i: int = 0;

    for (i : 3) {
        io.println(values[i]);
        i = i + 1;
    }

    return 0;
}`,
      },
    ],
  },
  {
    title: 'Functions',
    intro:
      'Functions are declared with explicit parameter and return types. They are the core unit of reusable behavior.',
    examples: [
      {
        title: 'Returning an integer',
        description: 'A function can compute and return a value.',
        code: `fn add(a: int, b: int): int {
    return a + b;
}`,
      },
      {
        title: 'Void return',
        description: 'Functions may also return no value.',
        code: `@import("std/io")

fn log_ready(): void {
    io.println("ready");
}`,
      },
      {
        title: 'Call from main',
        description: 'Functions can be called from other functions.',
        code: `@import("std/io")

fn square(x: int): int {
    return x * x;
}

fn main(): int {
    io.println(square(8));
    return 0;
}`,
      },
      {
        title: 'Multiple parameters',
        description: 'Pass more than one input to a function.',
        code: `fn mix(a: int, b: int, c: int): int {
    return a + b + c;
}`,
      },
    ],
  },
  {
    title: 'Arrays',
    intro:
      'Fixed arrays are part of the type. Their size is known and preserved directly in the declaration.',
    examples: [
      {
        title: 'Constant array',
        description: 'Create a fixed-size array with three elements.',
        code: `const values: int[3] = {1, 2, 3};`,
      },
      {
        title: 'Read one element',
        description: 'Access an array element by index.',
        code: `const values: int[4] = {10, 20, 30, 40};
let first: int = values[0];`,
      },
      {
        title: 'Mutable fixed array',
        description: 'Mutable arrays may be edited element by element.',
        code: `let values: int[3] = {1, 2, 3};
values[1] = 99;`,
      },
      {
        title: 'Print array values',
        description: 'Use indexed access to print contents.',
        code: `@import("std/io")

fn main(): int {
    const values: int[3] = {7, 8, 9};

    io.println(values[0]);
    io.println(values[1]);
    io.println(values[2]);

    return 0;
}`,
      },
    ],
  },
  {
    title: 'Pointers and memory',
    intro:
      'Pointers expose raw addresses and make memory access explicit. They are central to low-level work in Dash.',
    examples: [
      {
        title: 'Take an address',
        description: 'The & operator returns the address of a value.',
        code: `let x: int = 10;
let ptr: int* = &x;`,
      },
      {
        title: 'Read through a pointer',
        description: 'Dereference a pointer with *.',
        code: `let x: int = 10;
let ptr: int* = &x;
let value: int = *ptr;`,
      },
      {
        title: 'Write through a pointer',
        description: 'Modify the original value by dereferencing its pointer.',
        code: `let x: int = 10;
let ptr: int* = &x;

*ptr = 20;`,
      },
      {
        title: 'Array element address',
        description: 'Pointers may also refer to array elements.',
        code: `const values: int[3] = {10, 20, 30};
let ptr: int* = &values[0];
let first: int = *ptr;`,
      },
    ],
  },
  {
    title: 'Strings and interpolation',
    intro:
      'Strings are explicit values, and interpolation allows formatted text without introducing unnecessary noise.',
    examples: [
      {
        title: 'Basic string',
        description: 'Store text in a string binding.',
        code: `let name: string = "Dash";`,
      },
      {
        title: 'Interpolated string',
        description: 'Insert values directly into a string.',
        code: `let name: string = "Dash";
let text: string = $"Hello, {name}";`,
      },
      {
        title: 'Number interpolation',
        description: 'Combine text and numeric values.',
        code: `let value: int = 42;
let text: string = $"value = {value}";`,
      },
      {
        title: 'Print interpolated output',
        description: 'Interpolation is useful for readable debug output.',
        code: `@import("std/io")

fn main(): int {
    let user: string = "joe";
    let id: int = 7;

    io.println($"user={user}, id={id}");
    return 0;
}`,
      },
    ],
  },
  {
    title: 'Modules and imports',
    intro:
      'Dash keeps module loading explicit. Import only what the program actually uses.',
    examples: [
      {
        title: 'Standard IO',
        description: 'Load the IO module directly.',
        code: `@import("std/io")`,
      },
      {
        title: 'Multiple imports',
        description: 'Programs may import more than one module.',
        code: `@import("std/io")
@import("std/vector")`,
      },
      {
        title: 'Aliased from import',
        description: 'Use @from when you want a local binding name.',
        code: `@from("std/io") {io}
@from("std/mem") {mem}`,
      },
      {
        title: 'Module plus use',
        description: 'Imports are usually placed at the top of the file.',
        code: `@import("std/io")

fn main(): int {
    io.println("module loaded");
    return 0;
}`,
      },
    ],
  },
  {
    title: 'Annotations and directives',
    intro:
      'Dash supports directives and annotations for structure, warnings, and tool-facing information.',
    examples: [
      {
        title: 'Safe function',
        description: 'Mark a function with a safety-oriented annotation.',
        code: `@Safe
fn checked(): void {
}`,
      },
      {
        title: 'Deprecated API',
        description: 'Communicate that an API should no longer be used.',
        code: `@Deprecated
fn old_api(): void {
}`,
      },
      {
        title: 'Warning annotation',
        description: 'Attach an explicit warning message.',
        code: `@Warning("old http interface")
fn old_http(): void {
}`,
      },
      {
        title: 'Risky annotation',
        description: 'Mark code that should be treated carefully.',
        code: `@Risky
extern("c") raw_call(value: int): int;`,
      },
    ],
  },
  {
    title: 'FFI and ABI',
    intro:
      'Foreign function declarations are explicit in Dash. The ABI is part of the declaration and should be chosen intentionally.',
    examples: [
      {
        title: 'C ABI function',
        description: 'Use extern("c") for symbols that follow the C ABI.',
        code: `extern("c") puts(text: string): int;`,
      },
      {
        title: 'C ABI global',
        description: 'External globals may also use the C ABI.',
        code: `extern("c"): int errno;`,
      },
      {
        title: 'Dash ABI function',
        description: 'Bare extern uses the Dash ABI.',
        code: `extern log_value(value: int): void;`,
      },
      {
        title: 'Calling an external C function',
        description: 'Declare and call a foreign symbol from main.',
        code: `extern("c") puts(text: string): int;

fn main(): int {
    puts("ffi works");
    return 0;
}`,
      },
    ],
  },
  {
    title: 'Vector',
    intro:
      'The standard vector is a generic heap-backed growable container. It must be imported explicitly and typed explicitly.',
    examples: [
      {
        title: 'Create a vector',
        description: 'Vectors are declared with an explicit element type.',
        code: `@import("std/vector")

let names: Vec<string>::new();`,
      },
      {
        title: 'Push values',
        description: 'Append values to the end of the vector.',
        code: `@import("std/vector")

let names: Vec<string>::new();

names.push("joe");
names.push("mary");
names.push("john");`,
      },
      {
        title: 'Read values and length',
        description: 'Use get and len to inspect a vector.',
        code: `@import("std/vector")

let values: Vec<int>::new();

values.push(10);
values.push(20);

let first: int = values.get(0);
let count: int = values.len();`,
      },
      {
        title: 'Destroy the buffer',
        description: 'Vectors own heap memory and should be destroyed explicitly.',
        code: `@import("std/vector")

let values: Vec<int>::new();

values.push(1);
values.push(2);

values.destroy();`,
      },
    ],
  },
]

export function ExamplesPage() {
  return (
    <>
      <PageHero
        eyebrow="Learn"
        title="Examples"
        summary={
          <p>
            A broad collection of Dash examples covering <Keyword>variables</Keyword>,{' '}
            <Keyword>memory</Keyword>, <Keyword>FFI</Keyword>, <Keyword>vectors</Keyword>,
            and other common language patterns.
          </p>
        }
      />

      <section className="band band--paper">
        <div className="container narrow-flow">
          <SectionHeading title="Quick commands" accent="gold" />
          <p className="lead-paragraph">
            These are common entry points when trying examples locally with <Keyword>dashc</Keyword>.
          </p>

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <FastCommand command="dashc run main.ds" />
            <FastCommand command="dashc main.ds" />
            <FastCommand command="./main" />
            <FastCommand command='dashc main.ds -o app' />
          </div>
        </div>
      </section>

      {sections.map((section, index) => (
        <section key={section.title} className={bands[index % bands.length]}>
          <div className="container">
            <SectionHeading title={section.title} accent="gold" />

            <div className="narrow-flow">
              <p className="lead-paragraph">{section.intro}</p>
            </div>

            <div className="docs-grid">
              {section.examples.map((example) => (
                <article key={`${section.title}-${example.title}`} className="feature-card">
                  <h3>{example.title}</h3>
                  <p>{example.description}</p>
                  <CodeCard code={example.code} />
                </article>
              ))}
            </div>
          </div>
        </section>
      ))}
    </>
  )
}