import { parseLines } from "../utils/index.js";
const lines = parseLines("./Day2_Cube-Conundrum/input.txt", true);

const gameArray = Object.values(lines);
let solutionCount = 0;

const desiredCubeCounts = {
  red: 12,
  blue: 14,
  green: 13
};

gameArray.forEach((game, index) => {
  const sets = game.split(":")[1].split(";");
  let isValidGame = true;

  sets.forEach((set) => {
    const cubes = set.split(",").map(cube => cube.trimStart().split(" "));
    console.log(cubes)
    cubes.forEach(([cubeCount, color]) => {
      if (parseInt(cubeCount) > desiredCubeCounts[color]) {
        isValidGame = false;
      }
    });
  });

  if (isValidGame) {
    solutionCount += (index + 1);
  }
});

console.log(solutionCount);