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
  let result = "";
  strList.forEach((str) => {
    const stack = [];
    const bracketObj = {
      ")": "(",
      "]": "[",
    };
    const bracketValues = Object.values(bracketObj);
    const bracketKeys = Object.keys(bracketObj);

    for (const char of str) {
      if (bracketValues.includes(char)) {
        stack.push(char);
      }
      if (bracketKeys.includes(char)) {
        if (stack.at(-1) === bracketObj[char]) {
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
