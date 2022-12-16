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
  const [naturalNum, integer] = input[0].split(" ").map(Number);
  let numerator = 1;
  let denominator = 1;
  let subtraction = 1;
  let result = 0;

  for (let i = 1; i <= naturalNum; i++) {
    numerator *= i;
  }
  for (let j = 1; j <= integer; j++) {
    denominator *= j;
  }
  for (let k = 1; k <= naturalNum - integer; k++) {
    subtraction *= k;
  }

  result = Math.floor(numerator / (denominator * subtraction));

  console.log(result);
});

/**
 * 풀이
 * 간단하게 모두 반복문을 돌려서 하나씩 넣어줬다..
 * 뭔가 좀 무식하게 푼거같아서 더 효율적인 방법이 있을 것 같은데 잘 모르겠다...
 * 그래도 공식을 알고 푸니까 생각하기 쉬웠던 것 같다.
 */
