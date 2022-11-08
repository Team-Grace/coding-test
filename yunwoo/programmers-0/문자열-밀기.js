function solution(A, B) {
  let result = 0;

  for (let i = 0; i < A.length; i++) {
    const lastString = A.substring(A.length - 1);
    const string = A.substring(0, A.length - 1);

    if (A === B) return result;

    A = lastString + string;
    result++;
  }
  return -1;
}

/*
(풀이)
substring을 이용해 맨 마지막 요소와 그 이전 요소들을 나눠주고
A에 재할당해주면서 B와 동일한지 체크하고 아닐경우에 result++
맞을 경우엔 현재까지 ++된 result를 반환하고 요소를 순회 돌때까지 동일하지 않다면
-1을 리턴한다.
*/
