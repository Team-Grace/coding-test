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
  const N = +input[0];
  let count = 666;
  let checkCnt = 1;

  while (checkCnt !== N) {
    count++;
    if (String(count).includes("666")) checkCnt++;
  }
  console.log(count);
});

// 주어진 N만큼 666에서 더해서 666을 포함할때까지 계산을 해준다
// N이 3이면 3번 666을 포함해야하니까 checkCnt 통해 while문이 실행되고
// 666을 포함할때 checkCnt가 올라가고 N과 checkCnt가 같아지는 순간 출력된다
