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

  const roomNum = Number(input);
  let i = 1;
  let sum = 1;

  while (sum < roomNum) {
    sum += 6 * i;
    i++;
  }

  console.log(i);
});

//문제를 이해하고 나니까 생각보다 간단했다
//2-7(6개) -> 2, 8-19(12개) -> 3, 20-37(18개) -> 4 ,,,
//한 term씩 6의 배수만큼 가지고있고, 입력값이 몇번째 term에 있는지만 찾으면된다.
//한 term을 돌때 i++ 해주어서 sum > roomNum되는순간 i를 출력해준다.
