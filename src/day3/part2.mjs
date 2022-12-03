import fs from "fs";

const smallPriorities = new Array(26).fill("").map((item, index) => index + 97);
const bigPriorities = new Array(26).fill("").map((item, index) => index + 65);

const voc = Array.from(
  String.fromCharCode(...smallPriorities, ...bigPriorities)
);

async function solve() {
  const input = fs.readFileSync("./src/day3/input.txt", "utf8");

  const newArr = input
    .trim()
    .split("\n")
    .reduce(
      (prev, curr, index) => {
        const newPrev = prev;
        if (index % 3 === 0) {
          newPrev.push([]);
          newPrev[newPrev.length - 1].push(curr);
        } else {
          newPrev[newPrev.length - 1].push(curr);
        }
        return newPrev;
      },
      [[]]
    )
    .slice(1)
    .map((strings) => {
      const first = Array.from(strings[0]);
      const second = Array.from(strings[1]);
      const third = Array.from(strings[2]);
      return first.find(
        (item) =>
          second.some((symbol) => symbol === item) &&
          third.some((symbol) => symbol === item)
      );
    })
    .map((item) => voc.findIndex((char) => item === char) + 1);

  return newArr.reduce((a, b) => a + b);
}

solve().then(console.log);
