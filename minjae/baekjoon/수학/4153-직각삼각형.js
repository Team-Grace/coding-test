const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let result = "";

  for (let i = 0; i < input.length - 1; i++) {
    const [side1, side2, side3] = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    const isTriangle = side3 ** 2 === side1 ** 2 + side2 ** 2;

    result += isTriangle ? `right\n` : `wrong\n`;
  }
  console.log(result);
});
