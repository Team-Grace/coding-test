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
  const num = Number(input);
  const result = new Array(num).fill(" ");

  for (let i = num - 1; i >= 0; i--) {
    result[i] = "*";
    console.log(result.join(""));
  }
});
