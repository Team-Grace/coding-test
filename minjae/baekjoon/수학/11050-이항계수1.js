const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

// 함수 선언문(화살표 함수)
const getFactorial = (num) => {
  if (num < 2) return 1;
  return num * getFactorial(num - 1);
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [N, K] = input[0].split(" ").map(Number);

  const getFactorial = () => {
    if (num < 2) return 1;
    return num * getFactorial(num - 1);
  };

  const molecule = getFactorial(N);
  const denominator = getFactorial(K) * getFactorial(N - K);

  console.log(molecule / denominator);
});
