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
  let startNum = n - String(n).length * 9;

  let answer = 0;

  while (true) {
    startNum++;
    let sum = startNum;
    const startStr = String(startNum);

    for (let i = 0; i < startStr.length; i++) {
      sum = sum + Number(startStr[i]);
    }
    if (sum === n) {
      answer = startNum;
      break;
    }
    if (startNum >= n) {
      answer = 0;
      break;
    }
  }
  console.log(answer);

  /**
   * 풀이
   * 처음에 쉬울거라고 생각하고 풀었다가 생각보다 쉽지 않았다.
   * 먼저 자연수가 1~9 까지 있으므로 굳이 n 까지 다 돌지 않고
   * 시작값을 먼저 정해주는것으로도 반복문 횟수를 줄일 수 있었다.
   * n은 m+(m의 각 자릿수 합)이므로 m+(9*3)이 최댓값이라고 생각할 수 있다.
   * 따라서 시작값을 n에서 n의 자리수 * 9로 정하고 그만큼을 반복해줬다.
   * 시작값을 정하고 m을 1씩 증가하며 조건에 부합할때 반복문을 탈출하면 된다.
   */
});
