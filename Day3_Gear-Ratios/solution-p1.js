import { parseLines } from "../utils/index.js";
const lines = parseLines("./Day3_Gear-Ratios/input.txt", true);

const engineSchematic = Object.values(lines);
const specialChars = ['@', '%', '/', '-','&', '$', '*', '=', '#', '+']
const engineOrderedSchema = []
let solution = 0

engineSchematic.forEach((schema, schemaIndex) => {
  const lineCharArray = schema.split('');
  const lineSchema = {
    charIndexes: [],
    numbers: [],
    lineOrder: schemaIndex
  }

  let lineNums = {
    lineNum: '',
    numIndexes: []
  }

  for (let i = 0; i<=lineCharArray.length; i++) {
    if(specialChars.includes(lineCharArray[i])) {
      lineSchema.charIndexes.push(i)

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

  engineOrderedSchema.push(lineSchema)
})

engineOrderedSchema.forEach((schema, schemaIndex) => {
  schema.numbers.forEach(num => {
    let isNumValid = false
    num.numIndexes.forEach(numIndex => {
      if(engineOrderedSchema[schemaIndex+1]) {
        engineOrderedSchema[schemaIndex+1].charIndexes.forEach(charDex => {
          if(numIndex === charDex || numIndex === charDex+1 || numIndex === charDex-1) {
            isNumValid = true
          }
        })
      }

      if(engineOrderedSchema[schemaIndex-1]) {
        engineOrderedSchema[schemaIndex-1].charIndexes.forEach(charDex => {
          if(numIndex === charDex || numIndex === charDex+1 || numIndex === charDex-1) {
            isNumValid = true
          }
        })
      }

      if (schema.charIndexes.length) {
        schema.charIndexes.forEach(charIndex => {
          if(charIndex === numIndex+1 || charIndex === numIndex-1) {
            isNumValid = true
          }
        })
      }
    })

    if (isNumValid) {
      solution += parseInt(num.lineNum)
    }
  })
})


console.log(solution)


