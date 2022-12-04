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
  const num = Number(input.toString().split(" "));
  let answer = "";
  let blank = "";

  for (let i = 1; i <= num; i++) {
    answer += "*";
    for (let j = 0; j < num - i; j++) {
      blank += " ";
    }
    console.log(blank + answer);
    blank = "";
  }
});
