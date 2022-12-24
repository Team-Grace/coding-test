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
  const sizeArr = input
    .slice(1, input.length)
    .map((item) => item.split(" ").map(Number));
  const result = [];

  for (let i = 0; i < sizeArr.length; i++) {
    let rank = 1;

    for (let j = 0; j < sizeArr.length; j++) {
      if (i === j) continue;

      const weight = sizeArr[i][0] < sizeArr[j][0];
      const tall = sizeArr[i][1] < sizeArr[j][1];

      if (weight && tall) rank++;
    }

    result.push(rank);
  }

  console.log(result.join(" "));
});

/*
(풀이)
몸무게와 키가 숫자로 담긴 2차원 배열을 만들고
2중 for문으로 각 index마다 전체를 순회하며 자신보다 큰 사람이 있을경우 rank를 ++ 하여
rank를 높여준다. 이때 전체를 순회해야하는데 자신의 index가 나올경우 cotinue를 이용해 넘겨준다.
2중반복이 끝나면 해당 rank를 result 배열에 모아 순위를 모은 배열을 띄어쓰기해 반환한다.
*/
