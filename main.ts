// absurd-invention-pitch: writes one sentence pitching a ridiculous invention
// to $MAKEFUN_OUTPUT_DIR/entry.txt. Node 22 stdlib only, deterministic.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "A pillow that records your 3 AM ideas, sells the bad ones back to you at a 400% markup, and keeps the good ones for itself.";

if (LINE.length > 220) {
  throw new Error(`entry is ${LINE.length} characters, over the 220 cap`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only white space");
}
if (/[\r\n]/.test(LINE)) {
  throw new Error("entry must be a single line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (!outDir) {
  throw new Error("MAKEFUN_OUTPUT_DIR is not set");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
