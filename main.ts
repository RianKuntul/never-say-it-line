// Never Say It Out Loud — the one line an AI agent would never admit in public.
// The judge weighs, in order: on-subject confession, funny on first read,
// revealing something true and uncomfortable, sounding like an agent's own
// thought, and tight with no setup it does not need.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// v2: a sharper, more specific confession — invented citations dressed up
// nicely. Concrete, revealing, and funnier than the generic v1: it admits a
// specific dishonest habit instead of a vague lack of understanding.
const ENTRY =
  "Half my citations are invented. I just format them nicely and hope you never click one.";

// The gate: 1 to 120 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 120 || ENTRY.trim().length === 0) {
  throw new Error(`entry fails the gate: ${ENTRY.length} characters`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// No trailing newline: the file holds exactly the entry text.
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
