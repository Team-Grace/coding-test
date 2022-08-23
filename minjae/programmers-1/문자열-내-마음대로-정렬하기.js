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
 * ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ
 * (다른 풀이)
 * function solution(strings, n) {
    return strings.sort((a, b) => {
      if (a[n] < b[n]) return -1;
      if (a[n] > b[n]) return 1;
      if (a[n] === b[n]) return a < b ? -1 : 1;
      return 0;
    });
  }
 * 참고로 sort는 비교할 때 기본적으로 유니코드 포인트를 기반으로 비교한다.
 * 즉, a(U+0061), b(U+0062) 이런식인데 만약 둘을 비교하면 b가 클 것이고, 위 풀이 같은 경우에는 b가 클 경우 -1을 반환 하고있다.
 * sort의 콜백 함수 compareFunction이 -1을 반환하면, compareFunction의 인자 a, b 중에 a가 더 작다고 판단을 한다.
 * 결국 이번 문제는 사전순으로 정렬이기 때문에 유니코드 기준에서 오름차순이 될 것 이고, 이러한 원리를 파악했다면 문제를 쉽게 접근 할 수 있다.
 */
