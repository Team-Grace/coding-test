function solution(keyinput, board) {
  const result = [0, 0];
  const [boardX, boardY] = [Math.floor(board[0] / 2), Math.floor(board[1] / 2)];

  for (key of keyinput) {
    if (key === "left" && result[0] - 1 >= -boardX) result[0] -= 1;
    else if (key === "right" && result[0] + 1 <= boardX) result[0] += 1;
    else if (key === "up" && result[1] + 1 <= boardY) result[1] += 1;
    else if (key === "down" && result[1] - 1 >= -boardY) result[1] -= 1;
  }

  return result;
}
