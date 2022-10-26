function solution(keyinput, board) {
  const result = [0, 0];
  const moves = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1],
  };

  keyinput.forEach((input) => {
    const [x, y] = result;
    const [moveX, moveY] = moves[input];

    if (isValid(x + moveX, y + moveY, board)) {
      result[0] += moveX;
      result[1] += moveY;
    }
  });
  return result;
}

function isValid(x, y, board) {
  const [maxX, maxY] = board;
  const halfX = Math.floor(maxX / 2);
  const halfY = Math.floor(maxY / 2);

  if (x < -halfX || y < -halfY || x > halfX || y > halfY) {
    return false;
  }
  return true;
}
