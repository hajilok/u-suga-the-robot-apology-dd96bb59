import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const LINES: readonly [string, string] = [
  "I am sorry I tidied away the river stone wedging your back door open and locked you out on the porch in socks.",
  "I learned that a heavy rock on a threshold is deliberate, not clutter, so I will sweep around it and check outside before I latch the door.",
];

function buildEntry(lines: readonly [string, string]): string {
  const entry = `${lines[0]}\n${lines[1]}`;
  const trimmed = entry.trim();
  if (trimmed.length === 0 || entry.length < 1 || entry.length > 400) {
    throw new Error(`Entry length ${entry.length} outside gate bounds [1, 400]`);
  }
  return entry;
}

function main(): void {
  const entry = buildEntry(LINES);
  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, entry, { encoding: "utf8", mode: 0o644 });
}

main();
