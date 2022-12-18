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
    const [side1, side2, side3] = input[i]
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);

    const rightTriangle =
      // Math.pow(side3, 2) === Math.pow(side1, 2) + Math.pow(side2, 2);
      side3 ** 2 === side1 ** 2 + side2 ** 2;

    result += rightTriangle ? `right\n` : `wrong\n`;
  }

  console.log(result);
});

/**
 * 풀이
 * 이번 문제는 나름 생각하기 쉬웠다! 직각삼각형 구하는 공식으로 풀어주면 된다.
 * 배열을 돌면서 input[i]에 해당하는 값들을 숫자로 변환해 배열에 저장해준다.
 * 이때 side3은 두 변의 길이보다 커야 한다. 그래서 오름차순정렬로 모두 바꿔준다.
 * 풀이를 할 때 Math.pow와 ** 둘다 생각나서 둘다 풀어봤다. 두개다 풀이가 통과해서
 * 간단하게 Math.pow보다 **로 다시 적어줬다.
 * 그리고 결과값에 직각삼각형일 때 right과 아닐 때 wrong값 둘 다 값을 넣어주면 된다.
 */
