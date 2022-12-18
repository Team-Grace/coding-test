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
  const cards = input[1].split(" ").map(Number);
  let max = Number.MIN_SAFE_INTEGER;

  // 완전 탐색
  for (let i = 0; i < n - 2; i++) {
    for (let j = i + 1; j < n - 1; j++) {
      for (let k = j + 1; k < n; k++) {
        const sum = cards[i] + cards[j] + cards[k];

        if (sum <= m) {
          max = Math.max(max, sum);
        }
      }
    }
  }
  console.log(max);
});
