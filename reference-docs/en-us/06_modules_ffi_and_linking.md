# 06. Modules, FFI, and Linking

Dash module loading begins before parsing proper. The source loader scans the file, strips directives, resolves imports, prevents cycles, tracks namespace shortcuts, and then hands the normalized source to the lexer/parser.

## @import and @from

```dash
@import("std/io")
@from("std/os") {system}

fn main(): int {
    io.println("Modules loaded");
    return 0;
}
```

```dash
@from("std/io") { * }
@from("./local/math") { add, sub }
```

`@import("...")` loads the module. `@from("...") { ... }` imports selected public declarations or `*`. The loader rejects nested namespace selectors inside `@from` and asks you to import the top-level namespace instead. This is an important implementation detail because it keeps symbol import rules simpler and more deterministic.

## Search paths and file resolution

- ~/.dash/imports is the global fallback import root.
- `-I<path>` extends import resolution from the CLI.
- The LSP also accepts `importPaths` during initialization.
- Local imports can start with `./`, `../`, or an absolute path.

## extern and ABI choice

```dash
extern("c") puts(text: string): int;
extern("c"): int errno;

fn main(): int {
    puts("ffi works");
    return 0;
}
```

```dash
class GtkWindow {
    extern("c") show(): void;
    extern("c"): int id;
}
```

`extern("c")` uses C ABI. Bare `extern` uses Dash ABI. The parser supports external functions and external globals, including class extern members. This keeps ABI selection explicit and keeps the language usable for serious C FFI and dynamic/static library boundaries.

## Linking model

- `-cl <file>` or `-cl<file>` adds a static object/archive input.
- `-ld<path>` adds a linker search directory.
- `-l<name>` passes native library flags through to the link step.
- `-L=<profile>` currently supports `gtk4` as a built-in profile.
- `@link("gtk4")` is the source-level compact form for requesting the same link profile from a global function declaration.

## Smart linking and Dash runtime linking

The current code generator builds a link plan from used symbols and from the Dash support libraries that exist on disk. When smart linking is requested, the linker path prefers shared Dash support libraries where possible and falls back to filtered static inputs for missing pieces. This is consistent with your own description that the system compares module names and symbols, prefers matching dynamic libraries, and only keeps necessary static material when dynamic coverage is incomplete.

```dash
dash build main.ds -sl
dash build main.ds -d
dash build main.ds -L=gtk4
dash build main.ds support.o -cl libextra.a -ld/usr/lib -lm
```
