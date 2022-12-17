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
  const [n, k] = input[0].split(" ").map(Number);
  const molecule = factorial(n);
  const denominator = factorial(k) * factorial(n - k);

  console.log(molecule / denominator);
});

function factorial(x) {
  if (x <= 1) return 1;

  return x * factorial(x - 1);
}

//n개에서 k개를 선택하는 경우의수를 구해야한다
//공식 :  n! / k!(n-k)!
