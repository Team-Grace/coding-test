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
  const [a, b, v] = input[0].split(" ").map(Number);
  const day = (v - b) / (a - b);
  const result = Number.isInteger(day) ? day : Math.ceil(day);

  console.log(result);
});

/**
 * (풀이)
 * 정상에 도착하면 미끄러지지 않는 조건이 있으므로 (높이 - 내려가는 값) / (올라가는값 - 내려가는값) 을 해서
 * 정수로 떨어진다면 잔여 거리가 없으므로 그대로 반환하고 소수점으로 나온다면 잔여거리가 남아있으므로 Math.ceil을 이용해
 * 올림하여 반환한다.
 * 
 * (실패 풀이)
 * 시간 초과로 실패.
 * 
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
  const [a, b, v] = input[0].split(" ").map(Number);
  let woodenStick = 0;
  let result = 0;

  while (woodenStick < v) {
    woodenStick += a;

    if (woodenStick < v) {
      woodenStick -= b;
    }

    result++;
  }
  console.log(result);
});
 */
