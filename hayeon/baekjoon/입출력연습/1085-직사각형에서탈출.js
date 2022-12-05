const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const inputData = input[0].split(" ").map(Number);

  const x = inputData[0];
  const y = inputData[1];
  const w = inputData[2];
  const h = inputData[3];

  const minData = [x, w - x, y, h - y];
  const result = Math.min(...minData);

  console.log(result);
});
