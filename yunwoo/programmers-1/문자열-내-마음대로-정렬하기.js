function solution(strings, n) {
  strings.sort((secondArg, firstArg) => {
    if (secondArg[n] < firstArg[n]) return -1;
    if (secondArg[n] === firstArg[n]) {
      if (secondArg < firstArg) return -1;
    }
  });

  return strings;
}

/*
(풀이)
문자열이 들은 strings배열을 sort메소드를 이용해 인자로 익명함수를 넣은 뒤 
if문을 이용해 오름차순(작은수 -> 큰수)이므로 firstArg[n] 이 secondArg[n] 보다 클 경우 배열의 위치를 변경하도록 -1을 반환하고
둘의 값이 동일할 경우 if문을 한번 더 사용하여 문자열 자체를 비교해 firstArg가 크면 -1을 리턴하도록 만들었다.
전체적으로 어려웠고 제한 조건에 값이 같을경우 사전순으로 앞선 문자열이 앞쪽으로 위치한다는 말이 n의 다음인덱스의 사전순인줄 알고 고생했다..
문제도 확실하게 이해해야 풀 수 있는 문제였다.
*/
