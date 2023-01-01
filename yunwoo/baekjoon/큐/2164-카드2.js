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
  const n = +input[0];
  const cardArray = Array.from({ length: n }, (_, i) => i + 1);
  let count = 0;
  for (let i = 1; i < n; i++) {
    count++;
    cardArray.push(cardArray[count]);
    count++;
  }

  console.log(cardArray[cardArray.length - 1]);
});

/*
(풀이)
한개의 count를 더 사용해서 0번째부터 ++해줘서 홀수번째인 카드를 push해주는 방법
두번의 count++이 반복 되는게 조금 아쉽다.

(시간초과)
  const n = +input[0];
  const cardArray = Array.from({ length: n }, (_, i) => i + 1);
  let count = 0;

  while (cardArray.length > 1) {
    const firstCard = cardArray.shift();

    if (count % 2 === 0) {
      count++;
      continue;
    } else {
      cardArray.push(firstCard);
    }
    count++;
  }
  console.log(cardArray[0]);

(메모리 초과)
  const n = +input[0];
  let multipleCards = Array.from({ length: n }, (_, i) => i + 1).join("");
  let count = 0;

  while (multipleCards.length > 1) {
    const firstCard = multipleCards[0];

    if (count % 2 === 0) {
      multipleCards = multipleCards.replace(firstCard, "");
    } else {
      multipleCards += firstCard;
      multipleCards = multipleCards.replace(firstCard, "");
    }

    count++;
  }
  console.log(+multipleCards);

*/
