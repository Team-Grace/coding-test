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
  const [n, m] = input[0].split(" ").map(Number);
  const chessBoard = input.slice(1);
  const whiteFirstChessBoard = [
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
  ];
  const blackFirstChessBoard = [
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
    "BWBWBWBW",
    "WBWBWBWB",
  ];
  const result = [];

  const checkWhiteFirstBoardRepaintQuantity = (y, x) => {
    let quantity = 0;

    for (let i = y; i < y + 8; i++) {
      for (let j = x; j < x + 8; j++) {
        if (chessBoard[i][j] !== whiteFirstChessBoard[i - y][j - x]) quantity++;
      }
    }

    return quantity;
  };

  const checkBlackFirstBoardRepaintQuantity = (y, x) => {
    let quantity = 0;

    for (let i = y; i < y + 8; i++) {
      for (let j = x; j < x + 8; j++) {
        if (chessBoard[i][j] !== blackFirstChessBoard[i - y][j - x]) quantity++;
      }
    }

    return quantity;
  };

  for (let i = 0; i + 7 < n; i++) {
    for (let j = 0; j + 7 < m; j++) {
      result.push(checkWhiteFirstBoardRepaintQuantity(i, j));
      result.push(checkBlackFirstBoardRepaintQuantity(i, j));
    }
  }

  console.log(Math.min(...result));
});

/*
(풀이)
정답판인 화이트가먼저오는 체스판 블랙이 먼저오는 체스판을 만들어 두고
두 개의 경우의 수의 체스판을 주어진 nm만큼 탐색하며 8*8 을 돌때 다시 페인트를
칠해야하는 개수를 반환하는 함수 두개를 만들어 준 후 주어진 체스판을 순회하며 개수를 result 배열에 모아
가장 작은 수를 반환한다.
*/
