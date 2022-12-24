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
  const n = +input[0];
  const numArr = input[1].split(" ").map(Number);
  let result = 0;

  const isPrimeNumber = (num) => {
    if (num < 2) return false;

    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < n; i++) {
    if (isPrimeNumber(numArr[i])) result++;
  }

  console.log(result);
});

/**
 * 풀이
 * 소수찾는 법을 알면 쉽게 풀 수 있다. 소수는 2이상의 수 중 약수가 자신과 1밖에 없는 수이다.
 * 해당 수를 num이라고 두고, num이 소수인지 찾기위해서 반복문 내에서 하나씩 비교해보면 된다.
 * 또한 여러가지 경우의 수를 생각했을 때 1이 주어질 때를 생각해서 num이 2보다 작을때의 경우도 넣어줘야 한다.
 */
