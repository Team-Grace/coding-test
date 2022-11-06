// 유효
function isValid(board, x, y) {
  if (
    x < 0 ||
    x >= board.length ||
    y < 0 ||
    y >= board.length ||
    board[x][y] === 1
  ) {
    return false;
  }
  return true;
}

// 지뢰를 기준으로 board의 위험지역 체크해라
function changeDangerousArea(board, x, y) {
  const moves = [
    [-1, -1],
    [0, -1],
    [1, -1],
    [1, 0],
    [1, 1],
    [0, 1],
    [-1, 1],
    [-1, 0],
  ];

  moves.forEach(([dx, dy]) => {
    const [nx, ny] = [x + dx, y + dy];

    if (isValid(board, nx, ny)) {
      board[nx][ny] = 2;
    }
  });
}

function solution(board) {
  let result = 0;

  // board에서 1을찾아!!
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        changeDangerousArea(board, i, j);
      }
    }
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 0) {
        result++;
      }
    }
  }
  return result;
}
