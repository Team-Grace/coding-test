const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const n = +input[0];
  const cardList = Array.from({ length: n }, (_, idx) => idx + 1);

  for (let i = 1; i <= n - 2; i++) {
    cardList.push(cardList[2 * i - 1]);
  }

  console.log(cardList.at(-1));
});
