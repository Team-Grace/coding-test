function solution(a, b) {
  let answer = 0;
  let max = Math.max(a, b);
  let min = Math.min(a, b);

  for (let i = min; i <= max; i++) {
    answer += i;
  }
  return answer;
}
/*
(풀이)
처음에는 a부터 b까지 올라가면서 더해주려했으나
a,b가 랜덤으로 배치가되기때문에
a가 b보다 큰 경우, 문제가생긴다

따라서 처음부터 Math함수를 통해 최솟값, 최댓값을 정해준 후에 
for문을 통해서 answer에 계속 더해주었다 !
*/
