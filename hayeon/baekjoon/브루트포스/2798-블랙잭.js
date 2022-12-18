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
  const [count, max] = input[0].split(" ").map(Number);
  const cards = input[1].split(" ").map(Number);
  let result = 0;

  for (let i = 0; i < count - 2; i++) {
    for (let j = i + 1; j < count - 1; j++) {
      for (let k = j + 1; k < count; k++) {
        const sum = cards[i] + cards[j] + cards[k];

        if (sum <= max && sum > result) {
          result = sum;
        }
      }
    }
  }
  console.log(result);
});

/**
 * 풀이
 * 먼저 카드 개수와 최대값을 구하고, 카드의 수도 배열에 넣어둔다.
 * for문을 이용해 순회하며 더해준다. 이때 동일한 숫자를 더하면 안되므로 변수에 1씩 더해서 설정한다.
 * 그리고 3장 뽑은 수를 더해 sum에 값을 저장해두고,
 * 각 계산이 끝날 때마다 그 값이 이전에 저장한 카드 3장의 최대 합보다 크고 M 이하일 때
 * 기존에 저장한 최댓값을 새로 계산한 값으로 대체한다.
 * 처음엔 sum <= max 만 줘서 실패했는데 이전 값을 대체해줘야 하기때문에 sum > result 도 함께 들어가야한다.
 */
