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
  const num = input[1].split(" ").map(Number);
  let count = 0;

  const isPrimeNumberCheck = (x) => {
    for (let i = 2; i <= Math.sqrt(x); i++) {
      if (x % i === 0) return false;
    }
    return true;
  };

  for (let i = 0; i < n; i++) {
    if (num[i] !== 1 && isPrimeNumberCheck(num[i])) count++;
  }

  console.log(count);
});

/*
(풀이)
소수인지 체크해서 boolean값을 반환하는 isPrimeNumberCheck 함수를 만들고
주어진 n 만큼 반복을 돌며 숫자로 변환한 주어진 값 num을 순서대로 소수 인지 체크해서 소수 일 경우 count++ 을 해준다.
이때 1이 주어질수도 있으므로 조건식에 1이 아닐경우도 추가해준다.
*/
