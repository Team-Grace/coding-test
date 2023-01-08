const { NODATA } = require("dns");
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
  const T = Number(input[0]);

  for (let i = 1; i <= T; i++) {
    const cases = input[i];
    const stack = [];
    let result = "YES";

    for (let j = 0; j < cases.length; j++) {
      if (cases[j] === "(") {
        stack.push(0);
      } else {
        if (!stack.pop()) {
          result = "NO";
          break;
        }
      }
    }

    if (stack.length !== 0) {
      result = "NO";
    }

    console.log(result);
  }
});

// (입력시 스택에넣고 )입력시빼주었다
// )입력했을때 스택에 아무것도없으면 NO, 모든연산이 끝나고도 뭔가 남아있다면NO를 출력해주었다.
// 스택에 대한 접근방법을 조금은 익힌것같다!
