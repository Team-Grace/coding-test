function solution(s) {
  return s.split("").sort().reverse().join("");
}

/**
 * (풀이)
 * 정렬을 위해 s.split() 함수를 통해서 문자열을 배열로 변환한다.
 * 그리고 첫 번째 요구사항인 문자를 큰것부터 작은 순으로 정렬하기 위해 sort를 한다.
 * 기본적으로 sort는 오름차순이기 때문에 내림차순 요구사항을 위해 reverse()를 이용한다.
 * 그리고 배열인 상태를 다시 문자열로 만들기 위해 join()을 이용했다.
 */
