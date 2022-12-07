const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const inputNum = +input[0];
  const constructors = [];

  for (let i = 1; i < inputNum; i++) {
    const strValue = String(i);
    let decompositionSum = i;

    for (let j = 0; j < strValue.length; j++) {
      decompositionSum += parseInt(strValue[j]);
    }

    if (decompositionSum === inputNum) constructors.push(i);
  }

  constructors.length > 0
    ? console.log(Math.min(...constructors))
    : console.log(0);
});
