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
  const testCase = +input[0];
  const stack = [];

  for (let i = 1; i <= testCase; i++) {
    const value = Number(input[i]);

    if (value !== 0) {
      stack.push(value);
    } else {
      stack.pop();
    }
  }

  const result = stack.reduce((acc, cur) => acc + cur, 0);

  console.log(result);
});

/**
 * 풀이
 * 반복문을 돌면서 0이 아니면 stack에 추가해주고, 0을 만나면 그 앞의 숫자를 배열에서 빼주면 된다.
 * 그리고 결과값을 reduce를 이용해 배열안의 값들을 더해준다. 근데 if문을 2번쓰지 않고 하는 방법이 있을까..
 *
 * 2차 수정) for문안에 Number(input[i])를 매번하기 보다 변수로 빼준다.
 * 그리고 굳이 if로 두번 돌리지 않고 간단하게 if-else를 이용해서 0이 아니면 stack에 value값을 넣고
 * 0이면 그냥 뒤에서 빼주면 된다..! 너무 어렵게 생각했다.
 */

/**
 * for문 부분 1차
 *
 * for (let i = 1; i <= testCase; i++) {
    if (Number(input[i]) !== 0) {
      stack.push(Number(input[i]));
    }
    if (Number(input[i + 1]) === 0) {
      stack.pop(Number(input[i]));
    }
  }
 */
