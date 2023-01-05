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
  const stack = [];

  for (let i = 1; i <= T; i += 1) {
    const num = Number(input[i]);

    if (num === 0) {
      stack.pop();
    } else {
      stack.push(num);
    }
  }

  const result = stack.reduce((acc, cur) => acc + Number(cur), 0);

  console.log(result);
});

//하나씩 스택에 넣어주면서 0을 만나면 pop()으로 빼준다
//스택에 있는합을 result에 넣고 출력!
