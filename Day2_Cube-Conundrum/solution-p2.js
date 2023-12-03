import { parseLines } from "../utils/index.js";
const lines = parseLines("./Day2_Cube-Conundrum/input.txt", true);

const gameArray = Object.values(lines);

let solutionCount = 0

gameArray.forEach((game, index) => {
  const sets = game.split(":")[1].split(";")
  const setCubes = {
    red: 0,
    green: 0,
    blue: 0
  }

  sets.forEach((set) => {
    const cubes = set.split(",").map(cube => cube.trimStart().split(" "))
    
    cubes.forEach(([cubeCount, color]) => {
      if (parseInt(cubeCount) > setCubes[color]) {
        setCubes[color] = parseInt(cubeCount)
      }
    });
  });
  const gameMultipledCubes = Object.values(setCubes).reduce((acc, cube) => {
    acc = acc * cube
    return acc
    
  }, 1)

  solutionCount += gameMultipledCubes
});

console.log(solutionCount)