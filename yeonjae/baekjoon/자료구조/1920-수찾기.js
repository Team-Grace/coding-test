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
  const integerSet = new Set(input[1].split(" "));
  const integerList = input[3].split(" ");
  let result = "";

  integerList.forEach((e) => {
    integerSet.has(e) ? (result += "1\n") : (result += "0\n");
  });

  console.log(result);
});
