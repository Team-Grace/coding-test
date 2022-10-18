function solution(keyinput, board) {
  const result = [0, 0];
  const moves = {
    left: [-1, 0],
    right: [1, 0],
    up: [0, 1],
    down: [0, -1],
  };

  keyinput.forEach((input) => {
    const [y, x] = result;
    const [moveY, moveX] = moves[input];

    if (isValid(y + moveY, x + moveX, board)) {
      result[0] += moveY;
      result[1] += moveX;
    }
  });
  return result;
}

function isValid(y, x, board) {
  const [maxY, maxX] = board;
  const halfY = Math.floor(maxY / 2);
  const halfX = Math.floor(maxX / 2);

  if (x < -halfX || y < -halfY || x > halfX || y > halfY) {
    return false;
  }
  return true;
}
