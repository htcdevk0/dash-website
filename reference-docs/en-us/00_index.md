# Dash Documentation, Fully Synchronized (en-US)

This package is the rebuilt multi-file reference for the current Dash compiler snapshot. It is intentionally biased toward the implementation that exists in the uploaded parser, semantic analyzer, source loader, code generator, CLI, LSP, and the `Vec<T>` you provided.

## Package map

- `01_language_tour.md` — guided tour of the language
- `02_types_and_values.md` — types, literals, mutability, pointers, arrays, maps
- `03_functions_and_control_flow.md` — functions, local functions, loops, match, switch, variadics
- `04_user_defined_types.md` — class, struct, group, enum, namespaces, aliases
- `05_collections_and_vector.md` — arrays, maps, indexing, Vec<T>, performance-oriented usage
- `06_modules_ffi_and_linking.md` — modules, source loading, ABI, import resolution, smart linking
- `07_annotations_and_compiler_builtins.md` — annotations, warnings, #sizeof, #type, env, is, exdt, lowered types
- `08_build_cli_lsp.md` — CLI, build pipeline, warnings, runtime/link profiles, LSP
- `09_complete_reference.md` — dense syntax and feature reference
- `10_sync_and_migration_notes.md` — what changed from the old docs and what is implementation truth today

## High-level feature matrix

### Modules and imports
- @import("std/io")
- @from("std/io") {io}
- using math::sum;

### Variables and mutability
- let x: int = 10;
- const name: string = "Dash";
- let inferred := 42;

### Core types
- int, long, uint, float, double, bool, char, string, void
- Pointers with `*`, arrays with `[]`, maps with `@map<K, V>`

### Functions
- fn add(a: int, b: int): int { return a + b; }
- Local functions inside functions are supported.

### Control flow
- if / else if / else
- while, do-while, classic for, range for, match, switch

### User types
- class
- struct<T>
- group
- enum
- type alias

### Methods
- Class methods use `fn`
- Struct methods use logical member syntax, static methods use `static`

### Annotations
- @Deprecated, @Risky, @Warning, @Safe, @StrictReturn
- @Todo, @Review, @Audit, @Notice, @Trace, @Experimental, @Unsafe, @Index, @inline, @entry, @link

### Builtins and metaprogramming
- #sizeof(...)
- #type(...) in type positions
- env<...>
- is<...>
- exdt<...>
- @![i32] style lowered compiler types

### Linking and ABI
- extern("c")`, `extern`
- smart linking with `-sl`, runtime linking with `-d`, profile linking with `-L=gtk4`

### Editor tooling
- hover
- completion
- definition
- references
- documentSymbol
- publishDiagnostics

## Synchronization principles

- The old uploaded manual is useful as a historical baseline, but it is not fully synchronized with the current compiler tree. This new package was written by reading the uploaded `src/`, `include/`, the old `DASH_en.md`, and your `Vec<T>` implementation.
- `@import("...")` and `@from("...") { ... }` are real source-loader directives, not parser sugar only. The loader also supports `using namespace::path;`.
- `struct` is now the generic logical type system. Generic `type` aliases are rejected. `type` is only for non-generic aliases.
- `class` methods use `fn`. `struct` methods use logical member syntax without `fn`. Static struct methods are written with `static`.
- `@entry`, `@inline`, and `@link("...")` are restricted to global functions.
- `@Index[field]` is implemented on `struct` and delegates `obj[index]` and `obj[index] = value` to the chosen field when that field is an array, pointer, or map.
- `for (i : N)` and `for (i : a..b)` are real syntax and are lowered to classic for-loops.
- Declaration initializers support constructor-like forms such as `let v: Vec<int>::new();` and `let p: Point(1, 2);`.
- `@map<K, V>` is implemented, including map literals using `{[key: value], ...}` and indexed reads/writes.
- The compiler still implements array-style builtin collection operations such as `::push`, `::insert`, `::set`, `::rem`, and `::pop`. However, the user-facing standard library direction clearly favors `Vec<T>` for dynamic growth, so this documentation treats `Vec<T>` as the primary dynamic sequence API and marks builtin collection helpers as low-level/legacy-facing behavior.
- The analyzer binds both `self` and `this` to methods, so both names are currently usable inside instance methods. In practice, the style split that matches your own examples is: `self` for classes and `this` for structs.
- Variadics are implemented, including variadic parameters, variadic forwarding using `(args)` or `args...`, variadic counting through `(args)`, indexed access in semantic lowering, and `is<T, args[i]>` / `is<T, args[*]>` style checks.
- Compiler-reserved lowered types use `@![type]`. User annotations also use `@`, so the docs keep a hard separation between user annotations and compiler-only lowered type notation.
- The current CLI supports `-I`, `-W<name>`, `-Werror`, `-O` for stripping `@Safe`, `-L=<profile>`, `-cl`, `-ld`, `-l`, `-d`, and `-sl`. The help text currently advertises only `gtk4` as a built-in link profile.

## Canonical sequence direction

Dash currently has multiple collection-related mechanisms in the compiler, but this documentation treats `Vec<T>` as the canonical dynamic sequence and fixed arrays/maps as the canonical raw storage primitives.

## Canonical benchmark-style vector example

```dash
@import("std/vector")
@import("std/io")

fn main(): int {
    const N: int = 10000000;

    let arr: Vec<int>::new();
    arr.reserve(N);

    for (i : N) {
        arr.push(i);
    }

    let sum: uint = 0;
    for (i : N) {
        sum += arr[i];
    }
    
    io.print(sum,'\n');
    return 0;
}
```
