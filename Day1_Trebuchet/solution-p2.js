import { parseLines } from "../utils/index.js";
const lines = parseLines("./Day1-Trebuchet/input.txt", true);

const ObjectArray = [...Object.values(lines)];

const numbers = {one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9}
const stringNums = Object.keys(numbers)
let answer = 0

ObjectArray.forEach(input => {
  const orderedInput = []
  stringNums.forEach(item => {
    let index = -1;
    while ((index = input.indexOf(item, index + 1)) !== -1) {
      orderedInput[index] = numbers[item];
    }
  })

  input.split('').forEach((item, index) => {
        if (!!parseInt(item)) orderedInput[index] = parseInt(item)
  })

  const filteredInput = orderedInput.filter(item => item !== undefined && item !== null)

  answer += parseInt(`${filteredInput[0]}${filteredInput[filteredInput.length-1]}`)
})

console.log(answer)
