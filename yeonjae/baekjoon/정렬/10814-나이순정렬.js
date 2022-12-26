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
  const n = input.shift();
  input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

  console.log(input.join("\n"));
});

// 주어진 문자열 -> 배열[0]에 있는 숫자를 정렬해주어야하기때문에 sort사용
// 배열로 정렬을 해주었기때문에 마지막에 문자열로 변환 후 리턴
