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
  const queue = Array.from({ length: n }, (v, i) => i + 1);
  const result = [];

  while (queue.length) {
    for (let i = 0; i < k - 1; i++) {
      const removePerson = queue.shift();
      queue.push(removePerson);
    }
    const removePerson = queue.shift();
    result.push(removePerson);
  }

  console.log(`<${result.join(", ")}>`);
});

// queue에 먼저 n만큼 숫자를 채워준다
// 반복문을 통해 queue에서 뺀 숫자를 다시 맨 뒤에 넣는다
// k번째 되는 순간 result에 넣는다
