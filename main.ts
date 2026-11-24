// The Dog Ate My Homework: Funniest Excuse
// One line, in the dog's own voice, caught in the act, believing it did nothing wrong.
// Deterministic: no network, no randomness, no time dependence.

const entry =
  "I graded it first — every answer was wrong, so I ate the evidence before the teacher saw it. You're welcome.";

await Deno.mkdir("/output", { recursive: true });
await Deno.writeTextFile("/output/entry.txt", entry);
