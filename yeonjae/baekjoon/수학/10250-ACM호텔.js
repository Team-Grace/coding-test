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
  let result = "";

  for (i = 1; i <= +input[0]; i++) {
    let [H, W, N] = input[i].split(" ").map(Number);

    let num = 0;
    num = Number(Math.ceil(N / H));

    if (N % H === 0) {
      num += H * 100;
    } else {
      num += (N % H) * 100;
    }
    result += num + "\n";
  }

  console.log(result);
});

// n번째 손님 / 층수 => 호수, 각 층마다 빠른 호수가 먼저 채워진다.
// n번째 손님 % 호텔층수 * 100 => 배정된 방 층수
// 마지막층은 따로 처리해주었다.
