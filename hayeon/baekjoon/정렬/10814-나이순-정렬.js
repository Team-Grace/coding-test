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
  // const test = +input[0];
  const members = input
    .slice(1, input.length)
    .map((member) => ({
      age: +member.split(" ")[0],
      name: member.split(" ")[1],
    }))
    .sort((a, b) => a.age - b.age)
    .map((member) => String(member.age) + " " + member.name);

  console.log(members.join("\n"));
});

/**
 * 풀이
 * 처음에는 sort로만 이용해서 풀어보려고 했는데 시간이 너무 오래걸린다.
 * 그래서 케이스들만 가지고 풀 수 있는 방법을 생각해보다 회원들의 나이와 이름을 갖는 객체 배열을 만들었다.
 * 배열을 나이로 비교해 정렬하고 다시 문자열로 만들어서 붙여 출력한다.
 */

/*
input.shift();

const result = input.sort((a, b) => a.split(" ")[0] - b.split(" ")[0]);

console.log(result.join("\n"));
*/
