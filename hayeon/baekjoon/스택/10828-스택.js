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
  const result = [];

  for (let i = 1; i <= testCase; i++) {
    switch (input[i]) {
      case "pop":
        result.push(stack.pop() || -1);
        break;

      case "size":
        result.push(stack.length);
        break;

      case "empty":
        result.push(stack[0] ? 0 : 1);
        break;

      case "top":
        result.push(stack[stack.length - 1] || -1);
        break;

      default:
        stack.push(input[i].split(" ")[1]);
        break;
    }
  }
  console.log(result.join("\n"));
});

/**
 * 풀이
 * 어렵지는 않은 문제였던 것 같다..! 처음에는 반복문안에 if-else로 해볼까 했는데
 * 자스수업에서 배웠던 스위치문이 생각났다. 일단 써보고나서 구글링을 했는데 스위치문으로
 * 푼 사람들이 생각보다 많아서 다행이었다...
 * 스위치문을 언제쓸까 생각하고 공부를했었는데 이런데서 쓸 수 있다니 신기했다.
 * 그리고 push X 부분이 좀 고민이 됐는데 split(" ")[1] 을 통해서 반환해주면 됐다..!
 */
