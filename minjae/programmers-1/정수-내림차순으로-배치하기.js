function solution(n) {
  return +String(n)
    .split("")
    .sort((a, b) => b - a)
    .map(Number)
    .join("");
}

/**
 * 하샤드 수, 자연수 뒤집어 배열로 만들기 등 모두 비슷한 유형의 문제이다.
 */
