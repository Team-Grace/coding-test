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
  const testCase = +input.shift();

  for (let i = 0; i < testCase; i++) {
    const floor = +input.shift();
    const room = +input.shift();
    const house = [];

    for (let j = 0; j <= floor; j++) {
      house.push([1]);

      for (let k = 1; k <= room; k++) {
        if (j === 0) {
          house[j].push(k + 1);
        } else {
          house[j].push(house[j][k - 1] + house[j - 1][k]);
        }
      }
    }
    console.log(house[floor][room - 1]);
  }
});

/**
 * 풀이
 * input에 들어가는 요소들을 앞에서부터 차례차례 떼어낸다.
 * 이 문제도 규칙을 찾아야 했던 문제인데,
 * 0층에는 1, 2, 3, 4, ... 명
 * 1층에는 1, 3, 6, 10, ... 명
 * 2층에는 1, 4, 10, 20, ... 명  이렇게 증가한다.
 * 이 규칙에서 찾아볼 수 있는 것은 둘째줄부터 대각선끼리 더하면 그 값이 나오게 된다.
 * 처음에는 방의 인원을 다 찾아서 더해 구하려고 했는데 이 규칙을 따라서
 * [floor, room-1] + [floor-1, room] 을 더하면 그 층의 호수에 몇명이 사는지 알 수 있다.
 * 즉, 테스트케이스에서 [1, 3] 은 [1, 2]+[0, 3] 를 더했을 때의 값이어서 3 + 3 = 6이 된다.
 * 배열을 항상 1부터 시작하도록 설정하고, 0층일땐 1씩 증가하도록 설정했다.
 * 그리고 1층부터는 원하는 층과 호수를 배열에 넣고 찾아주면 된다.
 */
