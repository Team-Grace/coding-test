const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const words = input
    .slice(1)
    .sort((a, b) => a.length - b.length || a.localeCompare(b));
  const setWords = new Set(words);

  console.log(Array.from(setWords).join("\n"));
});
