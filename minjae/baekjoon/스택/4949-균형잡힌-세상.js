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
  const strList = input.slice(0, input.length - 1);
  const bracketCompareObj = {
    ")": "(",
    "]": "[",
  };
  let result = "";

  strList.forEach((str) => {
    const stack = [];

    for (const char of str) {
      // '(', '[' 케이스
      if (char === "(" || char === "[") {
        stack.push(char);
      }

      // ')', ']' 케이스
      if (char === ")" || char === "]") {
        if (stack.at(-1) === bracketCompareObj[char]) {
          stack.pop();
        } else {
          stack.push(char);
        }
      }
    }

    result += stack.length > 0 ? "no\n" : "yes\n";
  });

  console.log(result);
});

/**
 * 풀이
 * 무조건, '(', '[' 케이스는 stack에 push한다.
 * ')', ']' 케이스가 오면 stack에 마지막 요소와 비교한다.
 *   - 예를 들어 ')'가 왔으면 bracketObj를 통해 stack에 마지막 요소가 '('인지 체크한다. 맞다면 pop
 *   - 허나 ')'가 왔는데 마지막 요소가 '[' 라면, stack에 ')'를 push한다.
 * 이런식으로 반복하다가 최종 stack에 요소가 남아있으면 no, 남아있지 않으면 yes를 result에 누적한다.
 */
