import fs from "fs";

async function solve() {
  const string = fs.readFileSync("./src/day6/input.txt", "utf8");

  const arr = Array.from(string);

  const index = arr.findIndex((value, index, arr) => {
    if (arr.length - index < 3) {
      return false;
    }
    const a = new Set(arr[index])
      .add(arr[index + 1])
      .add(arr[index + 2])
      .add(arr[index + 3]);

    return a.size === 4;
  });

  return index + 4;
}

solve().then(console.log);
