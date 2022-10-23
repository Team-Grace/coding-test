function solution(keyinput, board) {
  const result = [0, 0];
  const maxWidth = Math.floor(board[0] / 2);
  const maxHeight = Math.floor(board[1] / 2);

  const moveMap = (keyinput) => {
    if (keyinput === "left") {
      const moveNum = result[0] > -maxWidth ? 1 : 0;
      result[0] += -moveNum;
    }

    if (keyinput === "right") {
      const moveNum = result[0] < maxWidth ? 1 : 0;
      result[0] += moveNum;
    }

    if (keyinput === "up") {
      const moveNum = result[1] < maxHeight ? 1 : 0;
      result[1] += moveNum;
    }

    if (keyinput === "down") {
      const moveNum = result[1] > -maxHeight ? 1 : 0;
      result[1] += -moveNum;
    }
  };

  keyinput.map((el) => moveMap(el));

  return result;
}

/**
 * 풀이
 * 문제를 풀 때 [0,0]을 설정하고 풀어야겠다고 생각을 했는데 막막했다..
 * 좌표를 그려보니 0을 기준으로 반반 나뉘기때문에 절반으로 나눴고
 * 왼쪽, 아래는 -값 이고 오른쪽 위는 +값 이므로
 * 각각 나눠서 최대값을 기준으로 값을 배분했다..
 * 어렵긴 하지만 문제를 풀고나니 이해는 빨리 됐던 문제다!!!!
 */
