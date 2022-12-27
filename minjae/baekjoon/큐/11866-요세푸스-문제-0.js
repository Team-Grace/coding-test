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

  while (queue.length) {
    count++;

    if (count % k === 0) {
      result.push(queue.shift());
    } else {
      queue.push(queue.shift());
    }
  }

  console.log(`<${result.join(", ")}>`);
});
