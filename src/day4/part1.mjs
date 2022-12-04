import fs from "fs";

async function solve() {
  const input = fs.readFileSync("./src/day4/input.txt", "utf8");

  const newArr = input
    .trim()
    .split("\n")
    .map((item) => item.split(","))
    .map((item) => item.map((i) => i.split("-").map((i) => parseInt(i))))
    .map(
      (item) =>
        (item[0][0] <= item[1][0] && item[0][1] >= item[1][1]) ||
        (item[1][0] <= item[0][0] && item[1][1] >= item[0][1])
    )
    .filter(Boolean);

  return newArr.length;
}

solve().then(console.log);
