function solution(n) {
  return String(n).split("").map(Number).reverse();
}

/**
 * (풀이)
 * 숫자 각 자리의 수를 배열로 만든 후 뒤집은 값을 리턴해야되기 때문에
 * split, map, reverse를 활용하였다.
 */
