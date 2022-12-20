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
  const wordsSet = new Set(words);

  console.log([...wordsSet].join("\n"));
});
