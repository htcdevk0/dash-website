# 08. Build, CLI, and LSP

The current Dash toolchain is small but serious: parse CLI options, load and merge sources, analyze semantics, emit LLVM/object/shared/executable output, optionally link Dash support libraries, and optionally run the executable.

## Primary command forms

```dash
dash main.ds
dash build main.ds
dash run main.ds
```

## Core options

- `--emit-llvm` — emit LLVM IR
- `-obj` / `-c` — emit object file only
- `--shared` — build a shared library
- `-o <path>` — choose output path
- `-I<path>` — add import search path
- `-W<name>` — enable a named warning gate
- `-Werror` — turn warnings into hard diagnostics
- `-O` — strip removable `@Safe` paths
- `-L=<profile>` — request a built-in link profile
- `-cl`, `-ld`, `-l` — pass explicit linker inputs/paths/libs
- `-d` — use Dash runtime shared libs from `~/.dash/lib`
- `-sl` — enable smart static/dynamic Dash support linking

The help text in the uploaded compiler advertises `gtk4` as the currently supported built-in link profile. The link step itself uses an ld-based ELF pipeline in the current implementation. That matters because it explains why the docs should talk about object files, search paths, and runtime objects directly instead of pretending the language is managed by an opaque build system.

## Example build recipes

```dash
dash build app.ds -o app
dash build app.ds --emit-llvm -o app.ll
dash build lib.ds --shared -o libdemo.so
dash build tool.ds -Wapi-warning -Werror
dash run benchmark.ds
```


## LSP snapshot

- `initialize`
- `shutdown`
- `exit`
- `textDocument/didOpen`
- `textDocument/didChange`
- `textDocument/didClose`
- `textDocument/documentSymbol`
- `textDocument/hover`
- `textDocument/definition`
- `textDocument/references`
- `textDocument/completion`
- `textDocument/publishDiagnostics`

```dash
{
  "importPaths": [
    "/home/user/.dash/imports",
    "/path/to/workspace/stdlib"
  ]
}
```

The LSP reuses the same lexer, parser, source loader, and semantic analyzer in read-only mode. That is a strong architectural choice because it means editor behavior is closer to compiler truth. When you change language rules in the compiler/LSP codebase, your editor can reflect them immediately without a completely separate parser drifting out of sync.