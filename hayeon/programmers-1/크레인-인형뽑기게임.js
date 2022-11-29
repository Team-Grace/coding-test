function solution(board, moves) {
  const basket = [];
  let result = 0;

  moves.forEach((position) => {
    const doll = pickupDoll(board, position - 1);

    if (doll) {
      if (basket[basket.length - 1] === doll) {
        basket.pop();
        result += 2;
      } else {
        basket.push(doll);
      }
    }
  });
  return result;
}

function pickupDoll(board, order) {
  for (let i = 0; i < board.length; i++) {
    if (board[i][order] !== 0) {
      const doll = board[i][order];

      board[i][order] = 0;

      return doll;
    }
  }
}

/**
 * 풀이
 * 문제 이해하는데도 좀 걸렸던 문제...
 * 처음에는 그냥 board 배열을 다 써놓고 풀어야되나 고민을 많이 했다.
 * 쌓는다라는 말에 stack을 사용해야겠다고 생각을 했고,
 * 먼저 인형을 뽑고 담을 바구니인 배열을 만든다.
 * moves배열의 0번 째 값을 가지고 board 배열을 순회하면서 0이 아닌 값을 찾고
 * 바구니에 담는다. 바구니안의 값이 연속으로 같으면 두 값을 삭제하고 결과값에 2를 더한다.
 * 마지막으로 moves 배열을 모두 순회했으면 터트려진 인형 개수를 반환하면 된다.
 * 아예 인형이 없는 위치에선 어떻게 해야할지 많은 고민을 했다..
 * 처음에 잘못 이해해서 푸는데 시간이 좀 걸렸고 예외를 생각해야 되는 부분이 있었다..
 */
