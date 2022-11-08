function solution(A, B) {
  if (A === B) return 0;

  for (let i = 0; i < A.length; i++) {
    A = A.slice(-1) + A.slice(0, -1);
    if (A === B) return i + 1;
  }
  return -1;
}

/**
 * 풀이
 * slice를 이용해 문자열을 자른 후 더해서 비교해준다.
 * 문제를 잘 이해하지 못해서 참고해 풀었는데 slice를 음수 방향으로 쓰는 법도 익혀야겠다..
 */
