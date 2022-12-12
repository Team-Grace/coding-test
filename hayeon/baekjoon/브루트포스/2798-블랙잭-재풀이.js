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
  const convertNumArr = (str) => str.split(" ").map(Number); //숫자배열로 만들어주는 함수
  const [count, max] = convertNumArr(input[0]);
  const cards = convertNumArr(input[1]);

  let result = 0;

  for (let i = 0; i < count - 2; i++) {
    for (let j = i + 1; j < count - 1; j++) {
      for (let k = j + 1; k < count; k++) {
        const sum = cards[i] + cards[j] + cards[k];

        if (sum <= max) {
          result = Math.max(result, sum);
        }
      }
    }
  }
  console.log(result);
});

/**
 * 풀이
 * input값을 배열로 만들때 숫자로 변환해주는 함수를 만들어 사용해도 좋을 것 같다.
 * 그리고 첫 풀이에 계속 0으로 나왔던 이유는 input값이 "5 21"인데 내가 선택한 input[0][1]은 공백문자이다..
 * 이 부분을 계속 놓치고 있었는데 앞으로 주의해야겠다.
 * 그리고 result에 다시 값을 지정할 때 헷갈리는 부분이 있었는데 Math.max를 이용해주면
 * 더 직관적으로 이해가 잘 되는 것 같다.
 */
