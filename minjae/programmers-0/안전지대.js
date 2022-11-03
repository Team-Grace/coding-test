// solution1 - 좀 더 복잡한 솔루션
// 위험 구역을 카운팅 후 board 전체 사이즈에서 뺌
function isValid(board, x, y) {
  if (
    x < 0 ||
    y < 0 ||
    x > board.length - 1 ||
    y > board.length - 1 ||
    board[x][y] === 1 ||
    board[x][y] === 2
  ) {
    return false;
  }
  return true;
}

function changeDangerArea(dangerAreaCount, board, x, y) {
  const dx = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dy = [1, 0, -1, 1, -1, 1, 0, -1];

  for (let i = 0; i < dx.length; i++) {
    const [nx, ny] = [x + dx[i], y + dy[i]];

    if (isValid(board, nx, ny)) {
      board[nx][ny] = 2;
      dangerAreaCount++;
    }
  }

  return dangerAreaCount;
}

function solution(board) {
  let boardSize = 0;
  let dangerAreaCount = 0;

  for (let i = 0; i < board.length; i++) {
    boardSize += board[i].length;

    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === 1) {
        dangerAreaCount = changeDangerArea(++dangerAreaCount, board, i, j);
      }
    }
  }

  return boardSize - dangerAreaCount;
}

// solution2 - 개선한 솔루션
// 안전 지역을 걸러내서 이를 카운팅!
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
  let nonDangerousAreaCount = 0;

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] !== 1 && !isDangerousArea(board, i, j)) {
        nonDangerousAreaCount++;
      }
    }
  }

  return nonDangerousAreaCount;
}
