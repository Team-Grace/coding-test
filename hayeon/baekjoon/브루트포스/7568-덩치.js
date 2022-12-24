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
  const test = input.shift();
  const sizeTable = input.map((size) =>
    size.split(" ").map((num) => parseInt(num))
  );
  const rank = [];

  for (let i = 0; i < test; i++) {
    let count = 0;

    for (let j = 0; j < test; j++) {
      if (i !== j) {
        if (
          sizeTable[i][0] < sizeTable[j][0] &&
          sizeTable[i][1] < sizeTable[j][1]
        ) {
          count++;
        }
      }
    }
    rank.push(count + 1);
  }
  console.log(rank.join(" "));
});

/**
 * 풀이
 * 2차원 배열로 키와 몸무게를 정렬하고 2중 for문을 이용해 풀었다.
 * 첫번째 사람부터 마지막사람까지 본인보다 큰 사람이 있다면 count를 올려주고
 * 마지막 rank 배열에 저장할 때 +1을 더해주면 그것이 본인 순위가 된다!
 */
