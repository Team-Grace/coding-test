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
  let currentIdx = 0;
  let lastIdx = cardList.length;

  for (let i = 0; i < n - 2; i++) {
    currentIdx++;

    cardList[lastIdx++] = cardList[currentIdx++];
  }

  console.log(cardList.at(-1));
});
