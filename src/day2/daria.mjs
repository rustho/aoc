const config = {
  A: { win: "C", loose: "B", score: 1, draw: "A" },
  B: { win: "A", loose: "C", score: 2, draw: "B" },
  C: { win: "B", loose: "A", score: 3, draw: "C" },
};
const strategies = {
  X: { target: "win", score: 0 },
  Y: { target: "draw", score: 3 },
  Z: { target: "loose", score: 6 },
};
data.reduce(
  (acc, items) =>
    config[config[items[0]][strategies[items[1]].target]].score +
    strategies[items[1]].score +
    acc,
  0
);
