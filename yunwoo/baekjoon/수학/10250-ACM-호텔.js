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
  const t = +input[0];
  let result = "";
  for (let i = 1; i <= t; i++) {
    const [h, w, n] = input[i].split(" ").map(Number);
    const floor = n % h === 0 ? h : n % h;
    const roomNumber = Number.isInteger(n / h) ? n / h : Math.ceil(n / h);

    result +=
      roomNumber < 10 ? `${floor}0${roomNumber}\n` : `${floor}${roomNumber}\n`;
  }
  console.log(result);
});

/*
(풀이)
층이 딱 떨어져서 0일 경우 최상층인 h와 아닌 경우를 삼항연산자로 구분해 층을 구해주고
호수를 구할 땐 정수로 떨어질 경우 그 호수 정수를 넘어설 경우 그 다음 호수라는 걸 이용해 호수도 구해준다.
호수가 0 이하일 경우 앞에 0 을 붙여주고 아닌 경우 까지 나눠주면 끝.

*/
