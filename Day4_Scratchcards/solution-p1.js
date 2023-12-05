import { parseLines } from "../utils/index.js";
const lines = parseLines("./Day4_Scratchcards/input.txt", true);

const scratchCards = Object.values(lines);

console.log(scratchCards)