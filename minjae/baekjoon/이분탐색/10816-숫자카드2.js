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
  const numbers = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  const targets = input[3].split(" ").map(Number);
  let result = "";

  const binarySearch = (type, card) => {
    let [start, end] = [0, n];

    // upper는 찾고자 하는 값보다 큰 값이 처음으로 나타나는 위치
    // lower는 찾고자 하는 값 이상의 값이 처음으로 나타나는 위치
    while (start < end) {
      const mid = Math.floor((start + end) / 2);

      if (type === "upper") {
        if (card < numbers[mid]) end = mid;
        else start = mid + 1;
      } else {
        if (card <= numbers[mid]) end = mid;
        else start = mid + 1;
      }
    }

    return end;
  };

  targets.forEach((card) => {
    const count = binarySearch("upper", card) - binarySearch("lower", card);

    result += `${count} `;
  });

  console.log(result);
});
