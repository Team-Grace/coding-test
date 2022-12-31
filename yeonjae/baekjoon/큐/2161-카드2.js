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
  const cardNum = +input[0];
  const cardList = Array.from({ length: cardNum }, (_, i) => i + 1);

  for (let i = 1; i <= cardNum - 1; i++) {
    cardList.push(cardList[2 * i - 1]);
  }

  console.log(cardList.at(-1));
});

/**
 * 123456
 * 34562
 * 5624
 * 246
 * 64
 * 4
 */

/**
 * 123456
 * 1234562 i = 1
 * 12345624 i = 3
 * 123456246 i = 5
 * 1234562464 i = 7
 * 12345624644 i = 9
 * i = 11 11 => undefined
 * 4 <= 정답
 */
