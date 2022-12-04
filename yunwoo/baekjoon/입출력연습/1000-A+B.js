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
  const data = input[0].split(" ").map(Number);
  const a = data[0];
  const b = data[1];

  console.log(a + b);
});
