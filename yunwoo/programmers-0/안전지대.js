function isValid(board, x, y) {
  if (x < 0 || y < 0 || x > board.length - 1 || y > board.length - 1) {
    return false;
  }

  return true;
}

function isDangerousArea(board, x, y) {
  const moves = [
    [-1, 1],
    [-1, 0],
    [-1, -1],
    [0, 1],
    [0, -1],
    [1, 1],
    [1, 0],
    [1, -1],
  ];

  return moves.some(([dx, dy]) => {
    const [nx, ny] = [x + dx, y + dy];

    return isValid(board, nx, ny) && board[nx][ny] === 1;
  });
}

function solution(board) {
  const boardSize = board.length;
  let aSafeAreaCount = 0;

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] !== 1 && !isDangerousArea(board, i, j)) {
        aSafeAreaCount++;
      }
    }
  }

  return aSafeAreaCount;
}
