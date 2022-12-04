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
  const inputData = input[0].split(" ");

  const [a, b] = inputData.map(Number);

  console.log(a + b);
});
