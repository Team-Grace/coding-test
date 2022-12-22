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
  let moviesNameNumber = 666;
  let count = 1;

  while (count < n) {
    moviesNameNumber++;

    const movieName = moviesNameNumber.toString();

    if (movieName.includes("666")) {
      count++;
    }
  }

  console.log(moviesNameNumber);
});

/*
(풀이)
moviesNumber를 666 부터 시작해서 주어진 n 번째 666을 포함하는 넘버를
찾을때까지 숫자를 증가시켜 주고 해당 666이 포함된 숫자가 나오면 count를 증가시켜 n과 동일해질 때 까지
반복한다.
*/
