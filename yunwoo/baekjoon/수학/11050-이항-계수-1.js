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
  const getFactorial = (num) => {
    let factorial = 1;

    for (let i = 2; i <= num; i++) {
      factorial *= i;
    }

    return factorial;
  };

  const [n, k] = input[0].split(" ").map(Number);
  const nFactorial = getFactorial(n);
  const kFactorial = getFactorial(k);
  const denominatorFactorial = getFactorial(n - k);

  console.log(nFactorial / (denominatorFactorial * kFactorial));
});

/*
(풀이)
팩토리얼을 해주는 함수를 만들어 이항계수 공식에 필요한 n!, k!, (n-k)! 를 구한 뒤
계산해 준다.

변수명이 도저히 적당한게 생각나지 않았습니다...🥲
*/
