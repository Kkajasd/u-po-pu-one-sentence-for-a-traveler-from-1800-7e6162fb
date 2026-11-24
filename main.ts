import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (195 characters) explaining the modern internet to a time
// traveler from 1800, using only words that existed in 1800: a great hall
// of glass holding every letter, book, and song in the world, open to any
// stranger who walks in and asks a question.
const sentence =
  "Imagine one great hall of glass holding every letter, book, and song in the world, where any stranger may walk in, ask a question, and hear the whole world answer at once, in the blink of an eye.";

// The sentence is a fixed literal — no network, no randomness, no input —
// so the sealed scorer always sees the same 195 characters on every run.
// The gate rejects a blank-only sentence and a trailing newline, which
// would count as an extra character in the scorer's byte read.
if (sentence.length < 1 || sentence.length > 200) {
  throw new Error(`entry must be 1–200 characters, got ${sentence.length}`);
}
if (!sentence.trim()) {
  throw new Error("entry must not be only whitespace");
}
if (sentence.endsWith("\n") || sentence.endsWith("\r")) {
  throw new Error("entry must not end with a newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
