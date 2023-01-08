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
  const numberCardValues = input[1].split(" ").map(Number);
  const integers = input[3].split(" ").map(Number);
  const myCards = new Map();
  let result = "";

  for (const el of numberCardValues) {
    myCards.has(el) ? myCards.set(el, myCards.get(el) + 1) : myCards.set(el, 1);
  }

  for (const el of integers) {
    result += myCards.has(el) ? `${myCards.get(el)} ` : "0 ";
  }

  console.log(result);
});

/*ㄴ
(풀이)
Map 자료구조를 이용해 주어진 카드넘버를 해당 카드가 있으면 +1 해주고 없으면 추가해준다.
이후 주어진 정수를 순회하며 정수가 카드에 있으면 해당 객체의 밸류값을 result에 넣어주고 없으면
0을 넣어준다.
*/
