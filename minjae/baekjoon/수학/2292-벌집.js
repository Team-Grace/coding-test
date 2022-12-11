const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = +input[0];
  let count = 1;
  let range = 1;

  while (range < n) {
    range += count++ * 6;
  }
  console.log(count);
});
