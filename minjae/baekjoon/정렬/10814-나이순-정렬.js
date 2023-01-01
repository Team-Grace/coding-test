const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  let result = "";

  input
    .slice(1)
    .map((member) => member.split(" "))
    .sort((a, b) => a[0] - b[0])
    .forEach(([age, member]) => {
      result += `${age} ${member}\n`;
    });

  console.log(result);
});
