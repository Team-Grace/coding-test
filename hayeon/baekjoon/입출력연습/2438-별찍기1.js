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
  const num = Number(input[0]);
  let result = "";

  for (let i = 1; i <= num; i++) {
    result += "*".repeat(i) + "\n";
  }

  console.log(result);
});
