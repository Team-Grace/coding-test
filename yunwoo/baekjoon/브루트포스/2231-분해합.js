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
  const constructors = [];

  for (let i = n; i > i / 2; i--) {
    const convertedNumber = String(i);
    let currentValue = i;

    for (let j = 0; j < convertedNumber.length; j++) {
      currentValue += +convertedNumber[j];
    }
    if (currentValue === n) constructors.push(i);
  }
  console.log(constructors.length ? Math.min(...constructors) : 0);
});

/**
 * (풀이)
 * 입력값을 for문을 입력값의 절반만큼 돌면서 분해합의 생성자를 찾아서 생성자 배열에 푸시한다.
 * 모아놓은 생성자들 중 가장 낮은 값을 출력한다. 만약 배열이 비어있다면 0을 출력한다.
 */
