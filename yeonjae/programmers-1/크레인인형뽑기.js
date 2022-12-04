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

//크레인을 작동시킨 위치가 담긴 배열 moves를 먼저 forEach문을 사용하여 순회하도록 하고 그 안에 격자형 2차원 배열이 담긴 board 배열을 순회하도록 하여 이중 for문을 사용

//인형을 뽑을(작동시킬 열) 위치에 있는 값을 doll 변수에 할당
//꺼낸 아이템의 값이 stack(바구니)의 마지막 아이템과 같다면 하나는 사라져야해서 pop()읉 통해 제거
//값이 다른경우에는 push를 해준다
