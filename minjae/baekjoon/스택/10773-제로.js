const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const numList = input.slice(1).map(Number);
  const stack = [];

  numList.forEach((num) => {
    if (!num) stack.pop();
    else stack.push(num);
  });

  console.log(stack.reduce((acc, cur) => acc + cur, 0));
});
