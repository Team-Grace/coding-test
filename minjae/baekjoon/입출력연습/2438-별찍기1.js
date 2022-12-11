const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const resultArr = [];

  for (let i = 1; i <= n; i++) {
    resultArr.push("*".repeat(i));
  }

  console.log(resultArr.join("\n"));
});
