function solution(absolutes, signs) {
  return absolutes.reduce((acc, cur, idx) => {
    const sign = signs[idx] ? 1 : -1;
    return (acc += cur * sign);
  }, 0);
}

/**
 * (풀이)
 * reduce를 활용해서 문제를 풀었다 활용도가 정말 많은 reduce이다.
 * 풀이의 특징은 sign의 값을 signs[idx]가 true이면 어차피 부호가 바뀌지 않기에 그냥 1, false면 부호가 바뀌어야되니 -1로 할당해서 이를 현재값과 곱한 뒤에 acc에 누적해서 결과를 도출했다.
 */
