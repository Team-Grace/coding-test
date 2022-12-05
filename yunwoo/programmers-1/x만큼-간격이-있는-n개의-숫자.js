function solution(x, n) {
  var result = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }
  return result;
}

/*
(풀이)
빈 배열을 만들고 for문을 n만큼 돌려서 x * i를 배열에 push 해주면 해결!
*/
