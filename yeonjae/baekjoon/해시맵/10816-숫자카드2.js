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
  const N = input[1].split(" ").map(Number);
  const M = input[3].split(" ").map(Number);
  const obj = {};

  N.forEach((el) => {
    obj[el] = (obj[el] | 0) + 1;
  });

  let answer = "";

  M.forEach((el) => {
    answer += obj[el] ? `${obj[el]}` : `0`;
  });

  console.log(answer);
});

//이런 카운트세는 문제의 경우 object를 만들어서 카운팅을 해주면 쉽게해결된다
//N을 돌면서 obj에 카운팅해준 개수를 적어주고,
//M의 요소에서 N의 key가 존재하면 value를 출력해주고,없으면 0을 출력해준다.
