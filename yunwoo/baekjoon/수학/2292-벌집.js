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
  let result = 1;
  let roomLength = 1;
  let i = 1;

  while (n > roomLength) {
    result++;
    roomLength += i * 6;
    i++;
  }

  console.log(result);
});

/**
 * (풀이)
 * 1번을 둘러싸고 있는 방 6개 만큼 배수로 증가시키고
 * 1바퀴를 돌 때 result를 증가시켜서 최단거리를 구해준다.
 */
