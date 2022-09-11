function solution(n) {
  let result = 0;

  for (i = 1; i <= n; i++) {
    if (n % i === 0) {
      result += i;
    }
  }

  return result;
}
/*
(풀이)
반복문을 돌려서 나머지가 0이 되는 i를 result로 모두 +=대입연산자로 더해줬다.
*/
