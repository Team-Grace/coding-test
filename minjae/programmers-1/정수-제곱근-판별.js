function solution(n) {
  const squareRoot = Math.sqrt(n);

  if (Number.isInteger(squareRoot)) {
    return (squareRoot + 1) ** 2;
  }
  return -1;
}

/**
 * (풀이)
 * n을 Math.sqrt를 통해 제곱근을 구했는데, 정수라면 이를 + 1의 제곱을 리턴한다.
 * 이때 정수 판별을 Number.isInteger를 활용한다.
 * 그리고 양의 정수가 아니라면 그냥 -1을 리턴한다.
 */
