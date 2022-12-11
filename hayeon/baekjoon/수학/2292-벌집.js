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
  const inputData = Number(input[0]);
  let count = 1;
  let range = 2;

  while (range <= inputData) {
    range += 6 * count++;
  }
  console.log(count);
});

/**
 * 풀이
 * 먼저 방 1번도 세는데 포함해야 하므로 count변수에 1을 넣어준다.
 * range 변수에는 그 숫자들을 감싸고 있는 범위이다.
 * 즉 2 ~ 7까지 벌집이 총 2겹이다.
 * 이 문제는 직접 그려보고 3겹까지 세보면 규칙을 알 수 있다.
 * 벌집의 개수가 1 - 6 - 12 - 18 -... 처럼 6개씩 늘어난다.
 * 그래서 2겹에서 3겹으로 넘어갈때 최소값을 구하기 위해 range + (6 * count)를 해주면 된다.
 */
