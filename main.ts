import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const OUTPUT_PATH = "/output/entry.txt";

const LINES: readonly [string, string] = [
  "I am sorry I scoured the seasoning off your cast-iron skillet with steel wool because I read the dark coat as burnt grease.",
  "I learned that smooth black iron is years of care, not grime, so I will scrub it with salt and hot water, dry it on the burner, and rub in a drop of oil.",
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
