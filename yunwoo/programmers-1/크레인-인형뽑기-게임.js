function solution(board, moves) {
  const basket = [];
  let result = 0;

  moves.forEach((el) => {
    for (let i = 0; i < board.length; i++) {
      const stack = board[i][el - 1];

      if (!stack) continue;

      if (basket[basket.length - 1] !== stack) {
        basket.push(stack);
      } else {
        basket.pop();
        result += 2;
      }

      board[i][el - 1] = 0;
      break;
    }
  });

  return result;
}

/*
(풀이)
문제의 행,열을 잘못이해하는 바람에 계속 헤매다 구글링 하고 알았습니다..
기계손의 이동 위치로 이동한 moves마다 주어진 borad만큼 순회하며
해당 요소를 뽑아내서 basket배열에 넣어준다. 이때 요소가 0일때는 continue로 넘어가고
basket의 마지막요소가 현재 요소와 같지 않을 경우에만 push 같을경우에는 마지막 요소를 제거해
주고 result를 제거한 2 만큼 증가 시켜준다. 요소가 0 이 아니라 아래의 조건문이 실행됐을 경우
해당 값을 0 처리해주고 break으로 반복문을 탈출한다.
*/
