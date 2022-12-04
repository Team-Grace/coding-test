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
  const num = Number(input.toString().split(" "));
  let answer = "";

  for (let i = 1; i <= num; i++) {
    answer += "*".repeat(i) + "\n";
  }
  console.log(answer);
});
