const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input.shift();
  const studentList = input.map((el) => el.split(" ").map(Number));
  const result = [];

  for (let i = 0; i < n; i++) {
    let rank = 0;

    for (let j = 0; j < n; j++) {
      const [curWeight, curHeight] = studentList[i];
      const [nextWeight, nextHeight] = studentList[j];

      if (i === j) continue;
      if (curWeight < nextWeight && curHeight < nextHeight) {
        rank++;
      }
    }

    result.push(rank + 1);
  }

  console.log(result.join(" "));
});
