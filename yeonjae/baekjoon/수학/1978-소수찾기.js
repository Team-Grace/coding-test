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
  const isPrime = (n) => {
    if (n == 1) {
      return false;
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  const numbers = input[1].split(" ").map(Number);
  let count = 0;

  for (let i = 0; i < numbers.length; i++) {
    if (isPrime(numbers[i])) count++;
  }
  console.log(count);
});

// 소수를 판별해주는 함수 isPrime을 통해 주어진 숫자들이 true인 경우 count++
