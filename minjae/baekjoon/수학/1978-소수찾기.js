const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const isPrimeNumberCheck = (num) => {
  if (num === 1) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const numArr = input[1].split(" ").map(Number);
  let result = 0;

  numArr.forEach((num) => {
    if (isPrimeNumberCheck(num)) result++;
  });

  console.log(result);
});
