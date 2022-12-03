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
    .map((item) => [
      item.slice(0, item.length / 2),
      item.slice(item.length / 2),
    ])
    .map((strings) => {
      const first = Array.from(strings[0]);
      const second = Array.from(strings[1]);

      return first.find((item) => second.some((symbol) => symbol === item));
    })
    .map((item) => voc.findIndex((char) => item === char) + 1);

  return newArr.reduce((a, b) => a + b);
}

solve().then(console.log);
