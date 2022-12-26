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
  const userArr = input
    .slice(1, input.length)
    .map((item) => item.split(" "))
    .sort((a, b) => +a[0] - +b[0]);
  let result = "";

  for (let i = 0; i < +input[0]; i++) {
    for (let j = 0; j < userArr[i].length; j++) {
      result += !j ? `${userArr[i][j]} ` : `${userArr[i][j]}`;
    }
    result += "\n";
  }

  console.log(result);
});

/*
(풀이)
주어진 회원목록을 2중배열로 만들어서 정렬해준 후
2중 for문을 통해 문자열로 변환해서 반환해준다.
*/
