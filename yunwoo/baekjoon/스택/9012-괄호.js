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
  const t = +input[0];
  const parenthesesString = input.slice(1);
  let result = "";

  for (let i = 0; i < t; i++) {
    const stack = [];

    for (const el of parenthesesString[i]) {
      if (el === "(") {
        stack.push(el);
      } else {
        stack.at(-1) === "(" ? stack.pop() : stack.push(el);
      }
    }

    result += stack.length ? "NO\n" : "YES\n";
  }

  console.log(result);
});

/*
(풀이)
저번 스택 문제보다 조금 더 쉬운 문제다.
괄호의 개수가 동일한지 여부만 판별하면 되므로 "(" 요소는 전부 stack 배열에 push해주고
")" 요소는 스택의 마지막요소에 "(" 요소가 있을 경우에는 pop 없으면 push 해준다.
*/
