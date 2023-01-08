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
  let n = +input[0];
  let count = 0;

  while (true) {
    if (n % 5 === 0) {
      count += n / 5;
      break;
    }

    if (n < 0) {
      count = -1;
      break;
    }

    n -= 3;
    count++;
  }

  console.log(count);
});

/*
(풀이)
주어진 n이 5로 나누어 떨어지면 그 몫을 count에 대입하고 즉시 종료하는 조건문을 이용했다.
값이 떨어지지 않아 0이하로 갈 경우는 -1을 반환해주고
그 외에 3으로만 떨어지는 숫자나 3과 5로 떨어지는 숫자를 고려해 기본적으로 n-= 3 을 해줬다.
*/
