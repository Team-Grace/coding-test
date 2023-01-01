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
  const [n, k] = input[0].split(" ").map(Number);
  const queue = Array.from({ length: n }, (_, i) => i + 1);
  const result = [];
  let count = 0;

  while (queue.length !== 0) {
    const people = queue.shift();

    if (count !== k - 1) {
      queue.push(people);
    } else {
      result.push(people);
      count = 0;

      continue;
    }
    count++;
  }

  console.log(`<${result.join(", ")}>`);
});

/*
(풀이)
queue 배열을 만들고 count 변수를 이용해 주어진 k-1과 count 가 일치하지 않을 경우 queue의 첫번째 요소를 다시 뒤로 넣어주고
일치 할 경우 result 배열에 push 해주고 count를 다시 0으로 할당해준 후 해당 반복구문을 continue로 넘겨준다.
*/
