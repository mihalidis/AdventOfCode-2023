import { parseLines } from "../utils/index.js";
const lines = parseLines("./Day1-Trebuchet/input.txt", true);

const ObjectArray = Object.values(lines);

let answer = 0

ObjectArray.forEach(input => {
  const numArray = input.split('').reduce ((acc, item) => {
    if (!!parseInt(item)) acc.push(parseInt(item))

    return acc
  }, [])
  
  answer += parseInt(`${numArray[0]}${numArray[numArray.length-1]}`)
})

console.log(answer)