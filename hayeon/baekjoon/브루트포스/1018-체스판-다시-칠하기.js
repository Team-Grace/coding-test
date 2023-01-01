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
  const [n, m] = input.shift().split(" ").map(Number);
  const result = [];

  const whiteFirstBoard = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];

  const blackFirstBoard = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];

  function paintWhiteFirst(x, y) {
    let count = 0;

    for (let i = y; i < y + 8; i++) {
      for (let j = x; j < x + 8; j++) {
        if (input[i][j] !== whiteFirstBoard[i - y][j - x]) {
          count++;
        }
      }
    }

    return count;
  }

  function paintBlackFirst(x, y) {
    let count = 0;

    for (let i = y; i < y + 8; i++) {
      for (let j = x; j < x + 8; j++) {
        if (input[i][j] !== blackFirstBoard[i - y][j - x]) {
          count++;
        }
      }
    }

    return count;
  }

  for (let i = 0; i + 7 < n; i++) {
    for (let j = 0; j + 7 < m; j++) {
      result.push(paintWhiteFirst(j, i));
      result.push(paintBlackFirst(j, i));
    }
  }

  console.log(Math.min(...result));
});

/**
 * 풀이
 * 정상적으로 칠해진 8*8 크기의 체스판 2개를 미리 만든다. (검정,흰색)
 * 체스판을 (0,0)좌표부터 (i+7, j+7)좌표까지 탐색하면서 8*8크기로 떼어내서
 * 정상적인 체스판과 비교해서 값을 출력하면 된다.
 * 이 문제는 스스로 생각하기 너무 어려웠다.. 문제 이해하는데 좀 오래걸렸다.
 * 구글링해서 푸는데도 이해하는데 좀 걸렸던 문제... 리팩토링해봐야 할 문제인 것 같다.
 */
