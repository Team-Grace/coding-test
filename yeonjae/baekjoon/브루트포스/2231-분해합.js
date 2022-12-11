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
  const separationSum = Number(input[0]);
  const constructorNum = [];

  for (let i = 1; i < separationSum; i++) {
    const unitNum = i.toString();
    let sum = i;

    for (let j = 0; j < unitNum.length; j++) {
      sum += Number(unitNum[j]);
    }

    if (separationSum === sum) {
      constructorNum.push(i);
    }
  }

  console.log(constructorNum.length !== 0 ? Math.min(...constructorNum) : 0);
});

//먼저 주어진 숫자만큼 for문을 돌면서 1 ~ 주어진 숫자까지 분해합을 구하기 위해 sum의 초기값은 i를 주고
//i의 자리수를 모두 더해준 값을 sum에 넣어준다
//분해합과 sum이 같다면 그건 생성자이기때문에 답이된다
//여기서 생성자는 0 이될수도, 2개이상이 나올수도있기때문에
//여러개인경우Math.min을 통해 최솟값을 구해주고,
//result가 빈배열인 경우 0을 반환한다.(이부분을 놓침)
