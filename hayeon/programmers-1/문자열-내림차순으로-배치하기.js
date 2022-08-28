function solution(s) {
  const result = s.split("").sort().reverse().join("");
  return result;
}

/*
풀이

내림차순을 하기 위해 arr.sort((a, b) => b - a); 로 어떻게 해야하나 많은 고민을 했다
그리고 대문자가 소문자보다 작게 해야하기 때문에 정규표현식을 이용해야 하나,, 어떻게 해야할지 많은 고민을 하다가
아예 방향이 다르게 가는 것 같아서 구글링을 해 정확한 답이 아닌 글로만 풀이를 보았다
저번 문제들에서도 많이 사용했던 split()이랑 revers(), join()을 이용하면
쉽게 풀리는 문제였다!!..

*/
