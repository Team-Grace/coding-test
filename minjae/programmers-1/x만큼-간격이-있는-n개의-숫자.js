function solution(x, n) {
  return Array.from({ length: n }, (_, idx) => x * (idx + 1));
}

/**
 * (풀이)
 * Array.from을 이용해서 결과를 도출하였다.
 */
