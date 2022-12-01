import fs from "fs";

const elfMax = (current, maxElfCalories) => {};

async function solve() {
  const input = fs.readFileSync("./src/day1/input.txt", "utf8");

  const newArr = input
    .trim()
    .split("\n")
    .map((i) => parseInt(i, 10));

  let currentElfCalories = 0;

  const maxElfsCallories = [];

  for (const calory of newArr) {
    if (Number.isInteger(calory)) {
      currentElfCalories += calory;
    } else {
      maxElfsCallories.push(currentElfCalories);
      currentElfCalories = 0;
    }
  }

  const sortedmaxElfsCallories = maxElfsCallories.sort((a, b) => b - a);

  return (
    sortedmaxElfsCallories[0] +
    sortedmaxElfsCallories[1] +
    sortedmaxElfsCallories[2]
  );
}

solve().then(console.log);
