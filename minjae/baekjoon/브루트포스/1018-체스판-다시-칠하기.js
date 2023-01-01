const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const input = [];

const WHITE_START_BOARD = [
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
];

const BLACK_START_BOARD = [
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
  "BWBWBWBW",
  "WBWBWBWB",
];

const checkImproperlyColoredChessboard = (chessboard, checkType, x, y) => {
  const checkBoard =
    checkType === "black" ? BLACK_START_BOARD : WHITE_START_BOARD;
  let count = 0;

  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      const isImproperlyColored = chessboard[i][j] !== checkBoard[i - x][j - y];

      if (isImproperlyColored) count++;
    }
  }

  return count;
};

rl.on("line", function (line) {
  input.push(line);
}).on("close", function () {
  const [n, m] = input[0].split(" ").map(Number);
  const chessBoard = input.slice(1);
  let result = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < n - 7; i++) {
    for (let j = 0; j < m - 7; j++) {
      result = Math.min(
        result,
        checkImproperlyColoredChessboard(chessBoard, "black", i, j),
        checkImproperlyColoredChessboard(chessBoard, "white", i, j)
      );
    }
  }

  console.log(result); // 출력
});
