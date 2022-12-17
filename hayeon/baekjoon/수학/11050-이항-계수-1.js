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
  const setFactorial = (num) => {
    let factorial = 1;

    for (let i = 1; i <= num; i++) {
      factorial *= i;
    }
    return factorial;
  };

  const [naturalNum, integer] = input[0].split(" ").map(Number);
  let result = 0;

  const numerator = setFactorial(naturalNum);
  const denominator =
    setFactorial(integer) * setFactorial(naturalNum - integer);

  result = Math.floor(numerator / denominator);

  console.log(result);
});

/**
 * 풀이
 * 민재님이 반복적인 코드라고 한 말에 저번에 함수로 빼는 방법이 생각이 났다.
 * 왜 풀때는 생각을 못했을까.... 반복문을 함수로 빼주고
 * 변수를 넣어서 결과값에 넣어 반환해주면 됐다!
 * 백준에 제출하니까 시간도 훨씬 줄어드는걸 확인할 수 있었다.
 */
