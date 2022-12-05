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
  const [x, y, w, h] = input[0].split(" ").map(Number);

  console.log(Math.min(x, y, w - x, h - y));
});
