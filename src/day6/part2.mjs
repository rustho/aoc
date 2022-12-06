import fs from "fs";

const indexes = new Array(14).fill("");

async function solve() {
  const string = fs.readFileSync("./src/day6/input.txt", "utf8");

  const arr = Array.from(string);

  const index = arr.findIndex((value, index, arr) => {
    if (arr.length - index < 14) {
      return false;
    }
    const a = new Set();

    indexes.forEach((value, i) => {
      a.add(arr[i + index]);
    });

    return a.size === 14;
  });

  return index + 14;
}

solve().then(console.log);
