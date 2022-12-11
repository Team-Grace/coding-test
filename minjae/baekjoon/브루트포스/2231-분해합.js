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
  const constructors = [];

  for (let i = 1; i < n; i++) {
    const strValue = String(i);
    let decompositionSum = i;

    for (let j = 0; j < strValue.length; j++) {
      decompositionSum += +strValue[j];
    }

    if (decompositionSum === n) constructors.push(i);
  }

  constructors.length > 0
    ? console.log(Math.min(...constructors))
    : console.log(0);
});
