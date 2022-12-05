function solution(x, n) {
  const answer = [];

  for (let i = 1; i <= n; i++) {
    answer.push(x * i);
  }

  return answer;
}

/*
(풀이)
주어진 x의 배수를 n개 리턴해주면되기때문에
빈배열에 for문을돌며 x의 배수를 넣어서 리턴!
*/
