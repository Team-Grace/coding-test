const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const integerSet = new Set(input[1].split(" "));
  const compareList = input[3].split(" ");
  let result = "";

  compareList.forEach((num) => {
    result += integerSet.has(num) ? "1\n" : "0\n";
  });

  console.log(result);
});
