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
  let result = "";

  for (let i = 0; i < input.length - 1; i++) {
    const curItem = input[i];
    const mid = Math.floor(curItem.length / 2);
    let isPalindrome = true;

    for (let j = 0; j < mid; j++) {
      const start = curItem[j];
      const end = curItem[curItem.length - j - 1];

      if (start !== end) {
        isPalindrome = false;
        break;
      }
    }
    isPalindrome ? (result += `yes\n`) : (result += `no\n`);
  }
  console.log(result);
});
