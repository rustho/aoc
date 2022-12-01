import fs from "fs";

async function solve() {
  const input = fs.readFileSync("./src/day1/input.txt", "utf8");

  const newArr = input
    .trim()
    .split("\n")
    .map((i) => parseInt(i, 10));

  let currentElfCalories = 0;
  let maxElfCalories = 0;

  for (const calory of newArr) {
    if (Number.isInteger(calory)) {
      currentElfCalories += calory;
    } else {
      maxElfCalories = Math.max(currentElfCalories, maxElfCalories);
      currentElfCalories = 0;
    }
  }

  return maxElfCalories;
}

solve().then(console.log);
