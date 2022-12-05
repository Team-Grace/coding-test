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
  const result = Math.min(x, y, h - y, w - x);

  console.log(result);
});
