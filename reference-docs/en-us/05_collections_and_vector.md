# 05. Collections and Vec<T>

This chapter treats `Vec<T>` as the primary dynamic sequence abstraction for modern Dash code because that is the direction you explicitly set and because the uploaded implementation is a concrete, high-signal artifact that deserves canonical status in the docs.

## Canonical std/vector implementation

```dash
@from("std/io") {io}
@from("std/mem") {mem}

@Index[buffer]
struct Vec<T> {
    // Raw heap buffer
    let buffer: T*->null;

    // Number of valid elements
    let size: int->0;

    // Allocated slots
    let capacity: int->0;

    // Explicit constructor
    static new(): void {
        this.buffer = null;
        this.size = 0;
        this.capacity = 0;
    }

    static new_reserved(size: uint): void {
        this.buffer = null;
        this.size = 0;
        this.capacity = 0;
        this.reserve(size);
    }

    @Safe
    private __check_index(idx: int): void {
        if (idx < 0 || idx >= this.size) {
            io.error(
                "\x1b[1;31merror\x1b[0m: vector index out of bounds.\n",
                "\x1b[1;36m  index:\x1b[0m ",
                idx,
                "\n\x1b[1;36m  valid:\x1b[0m [0, ",
                this.size,
                ")\n"
            );
        }
    }

    @Safe
    private __check_pop(): void {
        if (this.size <= 0) {
            io.error(
                "\x1b[1;31merror\x1b[0m: cannot pop from an empty vector.\n"
            );
        }
    }

    @Safe
    private __check_alloc(ptr: T*, requested_capacity: int): void {
        if (ptr == null) {
            io.error(
                "\x1b[1;31merror\x1b[0m: vector allocation failed.\n",
                "\x1b[1;36m  requested capacity:\x1b[0m ",
                requested_capacity,
                "\n\x1b[1;36m  element size:\x1b[0m ",
                int<#sizeof(T)>,
                " byte(s)\n"
            );
        }
    }

    private __copy_into(dst: T*): void {
        let i: int = 0;
        for (i : this.size) {
            dst[i] = this.buffer[i];
            i = i + 1;
        }
    }

    private __grow(): void {
        let cap: int = this.capacity;

        if (cap == 0) {
            this.reserve(4);
        } else {
            this.reserve(cap * 2);
        }
    }

    push(item: T): void {
        let s: int = this.size;

        if (s >= this.capacity) {
            let cap: int = this.capacity;

            if (cap == 0) {
                this.reserve(4);
            } else {
                this.reserve(cap * 2);
            }
        }

        this.buffer[s] = item;
        this.size = s + 1;
    }

    reserve(n: int): void {
        let cap: int = this.capacity;
        if (n <= cap) {
            return;
        }

        let count: int = this.size;
        let old_buffer: T* = this.buffer;

        let new_buffer: T* = mem.alloc(uint<#sizeof(T) * n>);
        this.__check_alloc(new_buffer, n);

        if (count > 0) {
            let i: int = 0;
            for (i : count) {
                new_buffer[i] = old_buffer[i];
                i = i + 1;
            }
        }

        this.buffer = new_buffer;
        this.capacity = n;

        if (old_buffer != null) {
            mem.release(old_buffer);
        }
    }

    get(idx: int): T {
        this.__check_index(idx);
        return this.buffer[idx];
    }

    pop(): T {
        this.__check_pop();

        let last_idx: int = this.size - 1;
        let value: T = this.buffer[last_idx];

        this.size = last_idx;
        return value;
    }

    set(item: T, idx: int): void {
        this.__check_index(idx);
        this.buffer[idx] = item;
    }

    remove(idx: int): void {
        this.__check_index(idx);

        let i: int = idx;
        let last_idx: int = this.size - 1;

        for (i : last_idx) {
            this.buffer[i] = this.buffer[i + 1];
            i = i + 1;
        }

        this.size = last_idx;
    }

    remove_unordered(idx: int): void {
        this.__check_index(idx);

        let last_idx: int = this.size - 1;
        this.buffer[idx] = this.buffer[last_idx];
        this.size = last_idx;
    }

    len(): int {
        return this.size;
    }

    clear(): void {
        this.size = 0;
    }

    data(): T* {
        return this.buffer;
    }

    destroy(): void {
        if (this.buffer != null) {
            mem.release(this.buffer);
        }

        this.buffer = null;
        this.size = 0;
        this.capacity = 0;
    }
};
```

## Canonical usage example

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

The `Vec<T>` you provided is a generic struct annotated with `@Index[buffer]`. That annotation is not decorative. It is how `arr[i]` is semantically delegated to the `buffer` field. In other words, `@Index[buffer]` turns the struct into an indexed view over its storage, and the analyzer/codegen path knows how to honor that delegation for read and write operations when the indexed field is an array, pointer, or map.

## Why this Vec<T> fits Dash well

- Heap storage is explicit through `mem.alloc` and `mem.release`.
- Growth policy is visible and cheap to reason about.
- Safety checks are separated into `@Safe` helpers instead of being mixed with the hot path.
- The API is small: `new`, `new_reserved`, `push`, `reserve`, `get`, `set`, `remove`, `remove_unordered`, `len`, `clear`, `data`, `destroy`.
- The design stays close to C-level control while still reading like a language-first container.

## Two practical vector examples

```dash
@import("std/vector")
@import("std/io")

fn main(): int {
    let names: Vec<string>::new();
    names.push("Joe");
    names.push("Mary");
    io.println(names[0]);
    names.destroy();
    return 0;
}
```

```dash
@import("std/vector")

fn main(): int {
    let values: Vec<int>::new_reserved(128);
    for (i : 128) {
        values.push(i);
    }

    values.remove_unordered(10);
    return 0;
}
```

Even though the compiler still implements array builtin operations, `Vec<T>` gives you a cleaner contract for dynamically-sized data because the ownership, capacity policy, indexing behavior, and destruction story are all in one explicit place. That makes it easier to optimize, easier to reason about, and easier to document at a language level.

## Raw arrays versus Vec<T>

- Raw arrays are best for fixed-size storage, ABI-oriented layouts, and simple indexed memory.
- Maps are best when keys matter more than contiguous layout.
- `Vec<T>` is best when you need owned, growable, contiguous storage with predictable semantics.
- `@Index[...]` lets you create custom indexed containers beyond `Vec<T>`.

## Low-level collection helpers still present in the compiler

```dash
let arr: int[] = {1, 2, 3};
arr::push(4);
arr::set(0, 10);
arr::rem(1);
let last: int = arr::pop();
```

These helpers are still implemented in the current compiler pipeline. They are documented here because the goal of this package is synchronization, not ideology. At the same time, for serious modern Dash code, prefer `Vec<T>` for dynamic sequences and keep raw collection helpers as advanced/legacy-facing knowledge.