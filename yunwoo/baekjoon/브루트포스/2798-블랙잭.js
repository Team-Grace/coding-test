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
  const [n, m] = input[0].split(" ").map(Number);
  const positiveInteger = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => b - a);
  let result = 0;

  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        let sum = positiveInteger[i] + positiveInteger[j] + positiveInteger[k];
        if (sum > result && sum <= m) {
          result = sum;
        }
      }
    }
  }

  console.log(result);
});

/**
 * (풀이)
 * 주어진 카드들을 오름차순으로 나열해두고 작은카드 3개를 더한 값을 result 에 할당한다
 * 조건식을 활용해 3개의 합이 주어진 m보다 작거나 같은경우에만 result에 할당하여 m보다 작지만 가장
 * 높은 3가지 수의 합을 result 에 할당한다.
 */
