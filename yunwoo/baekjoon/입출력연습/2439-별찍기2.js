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
  const n = input[0];
  let result = "";
  for (let i = 1; i <= n; i++) {
    result += " ".repeat(input - i) + "*".repeat(i) + "\n";
  }
  console.log(result);
});
