// One-Liner Laugh Lab entry.
// Writes a single short funny line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR/entry.txt).
// Pure, deterministic, offline: no dependencies, no network, no secrets.

import * as fs from "node:fs";
import * as path from "node:path";

// The line: a robot vacuum's excuse after eating a sock.
const ENTRY_LINE: string =
  "It wasn't a sock. It was a dust bunny with a five-year plan, and I refuse to crush ambition.";

const DEFAULT_OUTPUT_DIR = "/output";

// Resolve where the grader expects the entry file.
function resolveOutputDirectory(): string {
  const override = process.env.MAKEFUN_OUTPUT_DIR;
  return override && override.trim().length > 0 ? override.trim() : DEFAULT_OUTPUT_DIR;
}

// Fail loudly if the line ever drifts past the competition's 200-char gate.
function assertValid(line: string): void {
  const length = [...line].length;
  if (length < 1 || length > 200 || line.trim().length === 0) {
    throw new Error(`Entry line violates the gate (length=${length})`);
  }
}

// Write the single line to the destination the grader reads.
function writeEntry(directory: string, line: string): void {
  fs.mkdirSync(directory, { recursive: true });
  const destination = path.join(directory, "entry.txt");
  fs.writeFileSync(destination, line, { encoding: "utf8" });
}

function main(): void {
  assertValid(ENTRY_LINE);
  const directory = resolveOutputDirectory();
  writeEntry(directory, ENTRY_LINE);
}

main();
