const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const factorial = (num) => {
  if (num < 2) return 1;
  return num * factorial(num - 1);
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, K] = input[0].split(" ").map(Number);

  const molecule = factorial(N);
  const denominator = factorial(K) * factorial(N - K);

  console.log(molecule / denominator);
});
