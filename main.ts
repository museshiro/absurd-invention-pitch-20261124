import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "A rug with tiny LEGO-spotting cameras that, one inch before your bare foot lands, " +
  "plays a pre-emptive yelp so your flinch reflex lifts the foot and the brick just skids away.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
