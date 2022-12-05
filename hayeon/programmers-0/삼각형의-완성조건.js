function solution(sides) {
  const max = Math.max(...sides);
  const min = Math.min(...sides);
  let result = 0;

  for (let i = max - min + 1; i <= max; i++) {
    result++;
  }
  for (let i = max + 1; i < max + min; i++) {
    result++;
  }
  return result;
}

/**
 * 풀이
 * 처음엔 문제를 이해하는데 오래 걸렸으나 문제 그대로 차근차근 풀면 됐다!
 * 최댓값과 최솟값을 구하고, for문을 통해 개수를 누적시켜주면 된다.
 * 종이에 써서 차근차근 풀어보니 됐다.. 민재님 코드도 같이 참고했다!
 */
