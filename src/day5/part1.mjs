import fs from "fs";

async function solve() {
  const input = fs.readFileSync("./src/day5/input1.txt", "utf8");
  const input2 = fs.readFileSync("./src/day5/input2.txt", "utf8");

  const stacks = input
    .split("\n")
    .map((item) =>
      Array.from(item).reduce(
        (prev, curr, index) => {
          const newPrev = prev;
          if (index % 4 === 0) {
            newPrev.push([]);
            newPrev[newPrev.length - 1].push(curr);
          } else {
            newPrev[newPrev.length - 1].push(curr);
          }
          return newPrev;
        },
        [[]]
      )
    )
    .map((item) => item.slice(1))
    .map((item) => item.map((i) => i.slice(1, 2)).flat(1));

  const transponedStacks = stacks[0]
    .map((_, colIndex) => stacks.map((row) => row[colIndex]))
    .map((item) => item.filter((i) => i !== " "));

  const newArr = input2
    .split("\n")
    .map((item) => item.replace("move ", ""))
    .map((item) => item.replace("from ", ""))
    .map((item) => item.replace("to ", ""))
    .map((item) => item.split(" "))
    .map((item) => {
      const amount = parseInt(item[0]);
      const from = parseInt(item[1]) - 1;
      const to = parseInt(item[2]) - 1;

      for (let i = 1; i < amount + 1; i++) {
        const element = transponedStacks[from].shift();
        transponedStacks[to].unshift(element);
      }
    });

  return transponedStacks.map((item) => item[0]).join("");
}

solve().then(console.log);
