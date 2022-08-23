function solution(strings, n) {
  return strings.sort(compareFunction);

  function compareFunction(a, b) {
    return a[n] === b[n] ? a.localeCompare(b) : a[n].localeCompare(b[n]);
  }
}

/**
 * (풀이)
 * localCompare 메서드는 인수로 지정된 문자열이 정렬상 string 객체의 문자열 뒤에 있으면 음수, 그 반대의 경우는 양수, 동등한 경우 0을 반환한다.
 * 이를 이용해서, sort 메서드는 인자로 들어가는 콜백함수 반환 값에 따라서 정렬이 결정되기 때문에 localCompare의 결과를 반환한다.
 * 단, a[n] === b[n]이라면 a와 b를 비교해서 정렬하고, 다르면 a[n]와 b[n]을 비교해서 정렬한다.
 */
