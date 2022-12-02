import fs from "fs";

//A for Rock, B for Paper, and C for Scissors.
//X for Rock, Y for Paper, and Z for Scissors

const pointsForShape = {
  Rock: 1,
  Paper: 2,
  Scissors: 3,
};

const pointsForWin = {
  lose: 0,
  draw: 3,
  win: 6,
};

const getShape = (symbol) => {
  if (symbol === "A") return "Rock";
  if (symbol === "B") return "Paper";
  if (symbol === "C") return "Scissors";
  if (symbol === "X") return "Rock";
  if (symbol === "Y") return "Paper";
  if (symbol === "Z") return "Scissors";
};

//X means you need to lose, Y means you need to end the round in a draw, and Z means you need to win
const getShapeForWin = (symbol, shape) => {
  if (symbol === "X") return rules[shape].lose;
  if (symbol === "Y") return rules[shape].draw;
  if (symbol === "Z") return rules[shape].win;
};

const rules = {
  Rock: {
    win: "Paper",
    draw: "Rock",
    lose: "Scissors",
  },
  Paper: {
    win: "Scissors",
    draw: "Paper",
    lose: "Rock",
  },
  Scissors: {
    win: "Rock",
    draw: "Scissors",
    lose: "Paper",
  },
};

const gamePointer = (string) => {
  const arr = string.split(" ");

  const opponent = getShape(arr[0]);
  const you = getShapeForWin(arr[1], opponent);

  let result = 0;

  if (opponent === "Rock") {
    switch (you) {
      case "Rock":
        result = pointsForWin["draw"];
        break;
      case "Paper":
        result = pointsForWin["win"];
        break;
      case "Scissors":
        result = pointsForWin["lose"];
        break;
    }
  }
  if (opponent === "Paper") {
    switch (you) {
      case "Rock":
        result = pointsForWin["lose"];
        break;
      case "Paper":
        result = pointsForWin["draw"];
        break;
      case "Scissors":
        result = pointsForWin["win"];
        break;
    }
  }
  if (opponent === "Scissors") {
    switch (you) {
      case "Rock":
        result = pointsForWin["win"];
        break;
      case "Paper":
        result = pointsForWin["lose"];
        break;
      case "Scissors":
        result = pointsForWin["draw"];
        break;
    }
  }
  return result + pointsForShape[you];
};

async function solve() {
  const input = fs.readFileSync("./src/day2/input.txt", "utf8");

  const newArr = input
    .trim()
    .split("\n")
    .map((value) => gamePointer(value));

  return newArr.reduce((a, b) => a + b);
}

solve().then(console.log);
// console.log(gamePointer("B Z"));
