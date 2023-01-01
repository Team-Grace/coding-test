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
  const cardList = Array.from({ length: n }, (_, i) => i + 1);
  let currentIndex = 0;
  let lastIndex = cardList.length;

  for (let i = 0; i < n - 2; i++) {
    currentIndex++;

    cardList[lastIndex++] = cardList[currentIndex++];
  }

  console.log(cardList.at(-1));
});

/**
 * 처음 풀이 - 시간초과..
 * 쉽게 생각해서 1 ~ n 까지 배열을 만들고 그 배열을 shift, push로 떼주고 넣어주는 것밖에 생각을 못했다.
 * 역시나 시간초과가 떴고.. 고민을 해봤는데 접근을 잘 못하겠어서 구글링을했다.
 * 처음 윤우님 말대로 클래스? 를 사용해서 푸는 법 밖에 없어서..
 * 클래스로 푸는 방식은 너무 어려워서 민재님이 푼 방식을 참고해서 풀었다!
 * 먼저 Array.from()을 이용해 배열을 1~n 까지 채워주고 반복문을 통해 값을 구해주면 된다.
 * cardList[lastIndex++] 이 부분에서 증감연산자를 쓰는 법은..생각도 못했다!
 * 요즘 JS 공부하면서 세세한 개념들을 다시 정리하고 시간을 들여서 정확히 이해하고 있는데
 * 민재님의 여러 코드들을 통해서 증감연산자도 적재적소에 쓸 수 있다는걸 오늘 다시 깨달았다.
 * 클래스로 푸는 방식은 개념을 좀 알고 다시 도전해봐야겠다.
 *
 *const n = +input[0];
  const cards = [];

  for (let i = 1; i <= n; i++) {
    cards.push(i);
  }

  while (true) {
    if (cards.length === 1) {
      break;
    } else {
      cards.shift();
      cards.push(cards.shift());
    }
  }

  console.log(cards[0]);
 */
