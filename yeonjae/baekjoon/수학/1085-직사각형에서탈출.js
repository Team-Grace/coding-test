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
  const num = input.toString().split(" ");

  const [currentWidth, currentHeight, width, Height] = [
    Number(num[0]),
    Number(num[1]),
    Number(num[2]),
    Number(num[3]),
  ];

  const distanceArr = [
    Height - currentHeight,
    width - currentWidth,
    currentHeight,
    currentWidth,
  ];

  const minVal = Math.min(...distanceArr);

  console.log(minVal);
});
