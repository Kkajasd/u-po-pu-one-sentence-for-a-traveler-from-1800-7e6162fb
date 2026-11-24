import { mkdirSync, writeFileSync } from "node:fs";

// One sentence (195 characters) explaining the modern internet to a time
// traveler from 1800, using only words that existed in 1800: a great hall
// of glass holding every letter, book, and song in the world, open to any
// stranger who walks in and asks a question.
const sentence =
  "Imagine one great hall of glass holding every letter, book, and song in the world, where any stranger may walk in, ask a question, and hear the whole world answer at once, in the blink of an eye.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", sentence, "utf8");
