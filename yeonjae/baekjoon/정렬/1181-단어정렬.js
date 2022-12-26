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
  input.shift();

  input.sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
  });

  const sort = new Set(input);

  console.log(Array.from(sort).join("\n"));
});

//input의 첫번째 요소제거 한 후에 문자열들을 정렬 해준다
//중복을 제거한 후, 다시 문자열로 출력
