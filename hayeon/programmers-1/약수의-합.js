function solution(n) {
  let result = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0) {
      result += i;
    }
  }
  return result;
}

/**
 * 풀이
 * 1. 결과값을 담을 result변수 생성
 * 2. for문을 통해 n까지 i로 나누었을 때 떨어지는 수를 결과값에 계속 더해줌
 * 3. 결과값 도출!
 */
