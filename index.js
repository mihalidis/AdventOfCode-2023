import { exec } from "child_process";
import { promisify } from "util";

const execAsync = promisify(exec);

console.log((await execAsync(`node "./Day1-Trebuchet/solution-p2.js"`)).stdout);