function solution(inputNum) {
  return String(inputNum)
    .split("")
    .reduce((acc, cur) => {
      acc += Number(cur);
      return acc;
    }, 0);
}

/**
 * (풀이)
 * 배열메서드를 문자열로 변환 후에 split 메서드를 이용해 배열로 변환하고,
 * reduce 메서드를 활용해 모든 자릿수의 합을 도출했다.
 */
