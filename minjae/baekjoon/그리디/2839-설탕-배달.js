const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let n = parseInt(input[0]);
  let count = 0;

  while (true) {
    if (n < 0) break;
    if (n % 5 === 0) {
      count += n / 5;
      break;
    }

    n -= 3;
    count++;
  }

  console.log(n < 0 ? -1 : count);
});
