const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [a, b, v] = input[0].split(" ").map(Number);

  console.log(Math.ceil((v - b) / (a - b)));
});

/**
 * 해당 풀이는 반복문을 통해서 누적하는 방법으로 접근하면 시간초과가 뜬다.
 * (v - b) / (a - b) 공식을 이용해서 접근해야된다.
 */
