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
  const k = +input[0];
  const money = input.slice(1);
  const stack = [];

  for (let i = 0; i < k; i++) {
    money[i] !== "0" ? stack.push(money[i]) : stack.pop();
  }

  console.log(stack.reduce((acc, cur) => acc + Number(cur), 0));
});

/*
(풀이)
반복문을 돌며 요소가 0이면 stack배열에서 pop 아니면 push해주고
결과가 나온 stack 배열을 reduce를 이용해 합해준다.
*/
