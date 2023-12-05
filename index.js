import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

console.log((await execAsync(`node "./Day3_Gear-Ratios/solution-p1.js"`)).stdout);