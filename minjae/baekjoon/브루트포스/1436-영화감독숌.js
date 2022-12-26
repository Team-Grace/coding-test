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
  let n = +input[0];
  let count = 665;

  while (n > 0) {
    const isMatched = String(++count).includes("666");

    if (isMatched) n--;
  }

  console.log(count);
});
