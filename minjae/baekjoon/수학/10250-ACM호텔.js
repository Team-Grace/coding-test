const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const t = +input[0];
  let result = "";

  for (let i = 1; i <= t; i++) {
    const [h, w, n] = input[i].split(" ").map(Number);
    const floor = n % h === 0 ? h : n % h;
    const room = Math.ceil(n / h);

    result += `${floor}${room < 10 ? `0${room}` : room}\n`;
  }

  console.log(result);
});

/**
 * 6 12 10 는 402라는 값이 나온다. 이는 10 % 6 === 4, Math.ceil(10 / 6)은 2로 결과를 도출해낼 수 있다.
 * 하지만 6 12 12인 경우이다. 12 % 6은 0이므로 002는 나올 수 없기 때문에 이때는 0을 사용하는게 아닌 6을 사용한다.
 */
