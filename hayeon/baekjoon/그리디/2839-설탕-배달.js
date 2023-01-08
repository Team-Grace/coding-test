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
  let kg = +input[0];
  let count = 0;

  while (true) {
    if (kg % 5 === 0) {
      count += Math.floor(kg / 5);

      break;
    } else if (kg < 0) {
      count = -1;

      break;
    }

    kg -= 3;
    count++;
  }

  console.log(count);
});

/**
 * 풀이
 * 예전에 싸피 준비할 때 코드는 짜보지 않고 손으로 풀어봤던 문제다.
 * 5kg과 3kg이 있을때 5kg으로 먼저 베달해야 할 설탕 kg을 나눠준다.
 * 그리고 남은 수를 3kg씩 빼줄때마다 카운트를 1개씩 올리면 된다.
 */
