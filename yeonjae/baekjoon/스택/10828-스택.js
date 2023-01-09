const readline = require("readline");
const { serialize } = require("v8");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  // 풀이
  const arr = input.shift();
  const stack = [];
  const answer = [];

  for (let i = 0; i < arr; i++) {
    // push
    if (input[i].includes("push")) {
      let pushVal = input[i].split(" ");
      stack.push(Number(pushVal[1]));

      //pop
    } else if (input[i].includes("pop")) {
      if (stack.length > 0) {
        let popNum = stack.pop();
        answer.push(popNum);
      } else {
        answer.push(-1);
      }

      //size
    } else if (input[i].includes("size")) {
      answer.push(stack.length);

      //empty
    } else if (input[i].includes("empty")) {
      if (stack.length === 0) {
        answer.push(1);
      } else {
        answer.push(0);
      }

      //top
    } else if (input[i].includes("top")) {
      if (stack.length === 0) {
        answer.push(-1);
      } else {
        answer.push(stack[stack.length - 1]);
      }
    }
  }

  console.log(answer.join("\n"));
});

// 한번에 출력해주기위해 answer라는 배열을 만들어주었고 (시간초과 방지)
// 문제에 주어진대로 push, pop, size, empty, top의 조건대로 arr을 순회하면서
// 값을 answer에 넣어주고 마지막에 문자열을 통해 출력해주었다
