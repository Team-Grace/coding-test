function solution(board, moves) {
  const basket = [];
  let result = 0;

  moves.forEach((move) => {
    for (let i = 0; i < board.length; i++) {
      const doll = board[i][move - 1];

      if (doll) {
        board[i][move - 1] = 0;

        if (doll === basket[basket.length - 1]) {
          basket.pop();
          result += 2;
        } else {
          basket.push(doll);
        }
        break;
      }
    }
  });

  return result;
}
