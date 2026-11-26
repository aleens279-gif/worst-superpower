// Worst Superpower — the most useless superpower, and why, in one line (rev 2)
// 73 of 140 chars max; one line, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

// A power that covers the whole world and still misses the point.
const PARTS = [
  "The power",
  "to know the exact",
  "time in every timezone",
  "except the one",
  "I’m in.",
];

const LINE = PARTS.join(" ");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
