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

  for (let i = 1; i < input.length - 1; i += 2) {
    const [floor, room] = input.slice(i, i + 2).map(Number);
    const floors = [Array.from({ length: room }, (_, idx) => idx + 1)];

    for (let j = 1; j <= floor; j++) {
      const tempFloor = [];
      let sum = 0;

      for (let k = 0; k < room; k++) {
        sum += floors[j - 1][k];
        tempFloor.push(sum);
      }

      floors.push(tempFloor);
    }

    result += `${floors[floor].at(-1)}\n`;
  }

  console.log(result);
});
