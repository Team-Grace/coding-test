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

/*
(풀이)
2개의 요소를 가진 배열을 하나 만들고
주어진 키입력 배열을 순회를 돌며 각각의 입력에 따라 x,y 축을 기준으로 증감을 해주는데
이 때 주어진 board의 칸을 절반으로 나눴을 때 그 칸을 넘으면 안되므로 left,down은 -
right, up은 + 로 result배열의 값을 +1 또는 -1 했을때와 비교하여 값을 초과하거나 더 작을 경우는
값이 추가되지 않도록 한다.
*/
