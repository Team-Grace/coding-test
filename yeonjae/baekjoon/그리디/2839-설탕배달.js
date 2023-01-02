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
  let packs = +input[0];
  let count = 0;

  while (true) {
    if (packs % 5 === 0) {
      count += packs / 5;
      break;
    }

    if (packs < 0) {
      count = -1;
      break;
    }

    packs -= 3;
    count++;
  }

  console.log(count);
});

// 처음에는 당연히 최선의방법이라고 생각하고 5의배수를 빼고 3의배수에서 나누어떨어지는지 안떨어지는지 체크를했는데 5번째 예제에서 막혔다. 반대로 3을 빼고 5의 배수인지 체크하니까 금방 해결이되었다. 탐욕스럽게 생각하는방법을 길러야겠다....
