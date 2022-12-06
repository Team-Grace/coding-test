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
    const reverseNumber = input[i].split("").reverse().join("");
    if (input[i] === "0") break;

    result += input[i] === reverseNumber ? "yes \n" : "no \n";
  }

  console.log(result);
});
