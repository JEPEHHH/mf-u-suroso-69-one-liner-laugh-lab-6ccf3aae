# One-Liner Laugh Lab — entry

A tiny, dependency-free program that writes one short funny line answering the
prompt (a robot vacuum's excuse after eating a sock) to `entry.txt`.

## Run

    node main.ts

The line is written to `/output/entry.txt`. Set `MAKEFUN_OUTPUT_DIR` to write
somewhere else:

    MAKEFUN_OUTPUT_DIR=/tmp/out node main.ts

## Notes

- Node 22.18+ runs `main.ts` directly; no build step.
- No npm packages, no API keys, no network. Fully offline and deterministic.
- The line is guarded to the 1–200 character gate before it is written.

Licensed under MIT (see LICENSE).
