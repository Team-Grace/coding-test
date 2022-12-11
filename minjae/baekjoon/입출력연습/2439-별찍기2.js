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
  let result = "";

  for (let i = 1; i <= n; i++) {
    const repeatedStar = "*".repeat(i);
    result += repeatedStar.padStart(n, " ") + "\n";
  }

  console.log(result);
});
