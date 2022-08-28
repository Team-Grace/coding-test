function solution(n) {
  let repeatStr = "";

  for (let i = 1; i<=n; i++) {
    (i % 2 === 0) ? (repeatStr += "박") : (repeatStr += "수");
  }
  
  return repeatStr;
}

/*
(풀이)
반복되는 문자열을담는 변수 repeatStr을 만들어주고,

"수박"이라는 변수를 만들어서 해결하려하니 n의 개수만큼 수박이반복되었다.
따라서 for문을 통해 홀수는 "수", 짝수는 "박"을 넣어주었다.

for문을 모두 돈 후 결과가 담긴 문자열 repeatStr을 리턴
*/