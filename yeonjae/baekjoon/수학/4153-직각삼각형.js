const { defaultMaxListeners } = require("events");
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

  for (let i = 0; i < input.length - 1; i++) {
    const [len1, len2, longLen] = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    //피타고라스 정리
    const isTriangle = longLen ** 2 === len1 ** 2 + len2 ** 2;

    result += isTriangle ? `right\n` : `wrong\n`;
  }
  console.log(result);
});

// 피타고라스정리만 이용하면 금방푸는문제!
// 주어지는걸 보면 마지막은 0 0 0이 나오기때문에 input.length -1만큼 돌면서 input[i]를 a,b,c 세변의 길이로 나누어주었고, c가 제일 길어야하기때문에 정렬을 한번 해주었다.
// a^2 + b^2 === c^2 피타고라스 정리 공식에 해당하면 'right'을 틀리면 'wrong'를 result에 할당해주었다.
