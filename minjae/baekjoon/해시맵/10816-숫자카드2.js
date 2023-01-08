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
  const numbers = input[1].split(" ").map(Number);
  const targets = input[3].split(" ").map(Number);
  const countObj = {};
  let result = "";

  numbers.forEach((el) => {
    countObj[el] = (countObj[el] || 0) + 1;
  });

  targets.forEach((el) => {
    result += countObj[el] ? `${countObj[el]} ` : `0 `;
  });

  console.log(result);
});
