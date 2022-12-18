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
    const [c, a, b] = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a);

    if (c === 0) return;

    if (c * c === a * a + b * b) {
      result = "right";
    } else {
      result = "wrong";
    }

    console.log(result);
  }
});

/*
(풀이)
피타고라스 정리를 이용해 가장큰 값을 이용해 a제곱 + b제곱 = c제곱
으로 조건문을 통해 직각 삼각형을 구별해 result에 할당해 반환.
*/
