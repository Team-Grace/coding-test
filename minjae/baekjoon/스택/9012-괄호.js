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
  const bracketStrList = input.slice(1);
  let result = "";

  for (const bracketStr of bracketStrList) {
    let count = 0;

    for (const bracket of bracketStr) {
      count += bracket === "(" ? 1 : -1;

      if (count < 0) break;
    }

    result += !count ? "YES\n" : "NO\n";
  }

  console.log(result);
});
