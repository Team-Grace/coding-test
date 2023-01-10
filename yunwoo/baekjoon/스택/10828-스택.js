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
  const commandArr = input.slice(1);
  const stack = [];
  let result = "";
  const setStack = (command) => {
    const commandLength = command.split(" ").length;

    if (commandLength === 1) {
      if (command === "pop") {
        result += stack.length !== 0 ? `${stack.pop()}\n` : `-1\n`;
      } else if (command === "size") {
        result += `${stack.length}\n`;
      } else if (command === "empty") {
        result += stack.length === 0 ? `1\n` : `0\n`;
      } else if (command === "top") {
        result += stack.length !== 0 ? `${stack.at(-1)}\n` : `-1\n`;
      }
    } else {
      stack.push(command.split(" ")[1]);
    }
  };

  commandArr.forEach((el) => setStack(el));

  console.log(result);
});

/*
(풀이)
setStack 함수를 만들어 stack 배열을 변경하는 함수를 만들고
각 조건마다 주어진 명령 및 출력이 필요한 명령은 result에 추가해준다.
push의 경우에만 split으로 나눌경우 length가 2 이므로 이도 마찬가지로 조건식으로
분류해 준다.
이후에 주어진 명령을 forEach로 순회하며 setStack에 인자로 넣어준다.
*/
