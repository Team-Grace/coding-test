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
  const num = input.toString().split(" ");
  const A = Number(num[0]);
  const B = Number(num[1]);

  console.log(A + B);
});
