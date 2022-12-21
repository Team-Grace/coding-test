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
  const title = "666";
  let num = 666;
  let arr = [];

  arr.push(num);

  while (arr.length !== n) {
    num++;

    if (String(num).includes(title)) {
      arr.push(num);
    }
  }

  console.log(arr[arr.length - 1]);
});
