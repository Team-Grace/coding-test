function solution(n) {
  const arr = n.toString().split("").sort();
  const result = parseInt(arr.reverse().join(""));
  return result;
}

/**
 * 풀이
 * 전에 풀었던 문제처럼, 정수를 문자열 변환하고 쪼개서 오름차순 정렬한다.
 * 그리고 그 배열을 뒤집고 하나의 문자열로 붙여준 것을 다시 숫자로 변환!
 */
