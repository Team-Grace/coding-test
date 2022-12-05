function solution(board) {
  //유효범위 체크하기
  function isValid(board, x, y) {
    if (x < 0 || y < 0 || x > board.length - 1 || y > board.length - 1) {
      return false;
    }
    return true;
  }

  //위험지역 구하기
  function isDangerousArea(board, x, y) {
    const moves = [
      [-1, 1],
      [-1, 0],
      [-1, -1],
      [0, -1],
      [1, -1],
      [1, 0],
      [1, 1],
      [0, 1],
    ];

    return moves.some(([dx, dy]) => {
      //다음 좌표(이동 하고)
      const [nx, ny] = [x + dx, y + dy];

      return isValid(board, nx, ny) && board[nx][ny] === 1;
    });
  }

  //안전지역 카운팅 하기
  const boardSize = board.length;
  let nonDangerousArea = 0;

  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] !== 1 && !isDangerousArea(board, i, j))
        nonDangerousArea++;
    }
  }
  return nonDangerousArea;
}
