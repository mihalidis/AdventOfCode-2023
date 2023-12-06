import { parseLines } from "../utils/index.js";
const lines = parseLines("./Day4_Scratchcards/input.txt", true);

const scratchCards = Object.values(lines);
let answer = 0

scratchCards.forEach((card, cardIndex) => {
  const scratchCard = card.split(': ')[1].split(' | ').map(part => part.split(' ').filter(item => item !== ''))
  let winingNumMultipled = 0

  scratchCard[0].forEach(num => {
    if (scratchCard[1].includes(num)) {
      if (winingNumMultipled === 0) {
        winingNumMultipled++
      } else {
        winingNumMultipled+=winingNumMultipled
      }
    }
  })

  answer += winingNumMultipled
})

console.log(answer)