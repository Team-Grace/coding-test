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

  console.log(result);
});

//흰색부터시작하는 WHITE_START_BOARD, 검정색부터시작하는 BLACK_START_BOARD를 만들어주고 체스판을 (0,0) 좌표부터 (M - 8, N - 8)좌표 까지 탐색하면서 8*8크기로 때어내어 정상인 체스판과 비교해주는 함수 checkImproperlyColoredChessboard, 그중 최소값을 출력
// 어려워서 민재님코드보고 이해하려 노력함 ㅠ
