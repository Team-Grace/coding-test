function solution(x, n) {
  let result = [];

  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}

/**
 * 풀이
 * 먼저 result 값을 넣어줄 배열을 만든다.
 * 입출력 예를 봤을 때 결과값 배열 안에 있는 수는 x를 1부터 n까지 곱한 수를 넣어 논 것
 * 따라서 result 배열에 for문을 돌려서 x를 1부터 n까지 곱한 수를 넣어준다(push를 통해).
 */
