import { parseLines } from "../utils/index.js";
const lines = parseLines("./Day3_Gear-Ratios/input.txt", true);

const engineSchematic = Object.values(lines);
const SchemaArray = []
const FinalMultpleArray = []

engineSchematic.forEach((schema, schemaIndex) => {
  const lineCharArray = schema.split('');
  const lineSchema = {
    starIndexes: [],
    numbers: [],
    lineOrder: schemaIndex
  }

  let lineNums = {
    lineNum: '',
    numIndexes: []
  }

  for (let i = 0; i<=lineCharArray.length; i++) {
    if(lineCharArray[i] === "*") {
      lineSchema.starIndexes.push(i)

      if (lineNums.lineNum !== '') {
        lineSchema.numbers.push({...lineNums})
        lineNums.lineNum = ''
        lineNums.numIndexes = []
      }
    } else if(parseInt(lineCharArray[i]) || lineCharArray[i] === "0") {
      lineNums.lineNum += lineCharArray[i]
      lineNums.numIndexes.push(i)
    } else {
      if (lineNums.lineNum !== '') {
        lineSchema.numbers.push({...lineNums})
        lineNums.lineNum = ''
        lineNums.numIndexes = []
      }
    }
  }

  SchemaArray.push(lineSchema)
})

SchemaArray.forEach((schema, schemaIndex) => {
  if (schema.starIndexes.length) {
    const starRelatedNums = []
    schema.starIndexes.forEach(star => {
      const starItems = []

      if(SchemaArray[schemaIndex-1]?.numbers.length) {
        SchemaArray[schemaIndex-1].numbers.forEach(num => {
          if(num.numIndexes.includes(star) || (num.numIndexes[0]-1) === star || (num.numIndexes[num.numIndexes.length-1]+1) === star) {
            starItems.push(num.lineNum)
          }
        })
      }
      if(SchemaArray[schemaIndex+1]?.numbers.length) {
        SchemaArray[schemaIndex+1].numbers.forEach(num => {
          if(num.numIndexes.includes(star) || (num.numIndexes[0]-1) === star || (num.numIndexes[num.numIndexes.length-1]+1) === star) {
            starItems.push(num.lineNum)
          }
        })
      }
      if (schema.numbers.length) {
        schema.numbers.forEach(num => {
          if (num.numIndexes[0]-1 === star || num.numIndexes[num.numIndexes.length-1]+1 === star) {
            starItems.push(num.lineNum)
          }
        })
      }

      if (starItems.length === 2) starRelatedNums.push([...starItems])
    })
    
    FinalMultpleArray.push(...starRelatedNums)
  }
})

console.log(FinalMultpleArray.reduce((acc,item) => {
  acc += (item[0]*item[1])
  return acc
}, 0))



