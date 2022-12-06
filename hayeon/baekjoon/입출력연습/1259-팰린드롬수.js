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

  for (let i = 0; i < input.length; i++) {
    const reverseNum = input[i].split("").reverse().join("");

    if (input[i] === "0") break;

    result += input[i] === reverseNum ? "yes\n" : "no\n";
  }

  console.log(result);
});
