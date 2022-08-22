function solution(n) {
  let result = "";

  for (let i = 0; i < n; i++) {
    i % 2 === 0 ? (result += "수") : (result += "박");
  }

  return result;
}

/*
  (풀이)
  n이 4면 수박수박, n이 3이면 수박수이기 때문에,
  n만큼 for문으로 순회하면서 i가 짝수라면 "수"를 result 추가하고,
  i가 홀수라면 result에 "박"을 추가한다.
*/
