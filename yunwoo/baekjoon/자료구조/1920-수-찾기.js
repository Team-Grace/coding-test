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
  const integersN = new Set(input[1].split(" "));
  const integersM = input[3].split(" ");
  let result = "";

  integersM.forEach((integer) => {
    result += integersN.has(integer) ? "1\n" : "0\n";
  });

  console.log(result);
});

/*
일반 반복문은 시간초과 뜨는걸 확인했다.
A수들을 Set 객체로 만들고 주어진 M정수들을 반복문을 돌며 중복인지 아닌지 확인해서
result 에 1 || 0 을 넣어준다.

(시간초과)
const integersN = input[1].split(" ").map(Number);
  const integersM = input[3].split(" ").map(Number);
  let result = "";

  for (let i = 0; i < integersM.length; i++) {
    const isNumber = integersN.includes(integersM[i]);

    result += isNumber ? "1\n" : "0\n";
  }

  console.log(result);
*/
