# 01. Language Tour

Dash is designed as a compiled LLVM-based systems language that tries to keep code low-level, direct, explicit, and portable. The surface syntax is intentionally lighter than C++ while keeping the operational model close to the machine: explicit mutability, visible pointers, visible ABI selection, direct linking control, and user-defined containers instead of a giant hidden runtime.

The current compiler snapshot recognizes both language constructs and build-time directives. At source-loader level you import modules with `@import(...)`, select symbols with `@from(...) { ... }`, and optionally expose namespace shortcuts with `using some::namespace;`. Inside the parser you then work with declarations such as `fn`, `class`, `struct`, `group`, `enum`, `type`, `extern`, `namespace`, `let`, and `const`.

## First complete program

```dash
@import("std/io")

fn main(): int {
    io.println("Hello, Dash!");
    return 0;
}
```

## Import styles

```dash
@import("std/io")
@from("std/os") {system}

fn main(): int {
    io.println("Modules loaded");
    return 0;
}
```

## Namespace style

```dash
namespace "math" {
    namespace "sum" {
        fn add(a: int, b: int): int {
            return a + b;
        }
    }
}

fn main(): int {
    return math::sum::add(10, 20);
}
```

## Key tour notes

- The parser accepts `export fn`, `export let`, and `export const` for symbol visibility.
- `private` is accepted for top-level `extern`, `fn`, `let`, `const`, `type`, and `struct`, and also for class/struct members where applicable.
- The source loader strips directives before parsing, resolves files, detects cyclic imports, and merges declarations into one semantic program.
- Namespaces are true declaration scopes; the compiler qualifies names with `::` internally.
- This documentation uses `self` for class-oriented examples and `this` for struct-oriented examples, matching the style you have been using, even though the analyzer currently binds both in methods.

## Mental model

Write Dash as if you were writing a serious systems language with a visible compilation model. The language likes explicit intent. You choose mutability. You choose ABI. You choose when a type is a class, a struct, a map, a pointer, or a vector. You choose link profiles and runtime behavior from the CLI. The current implementation is much closer to 'predictable low-level language with quality-of-life syntax' than to 'managed language with hidden semantics'.