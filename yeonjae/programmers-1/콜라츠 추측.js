function solution(num) {
  let answer = 0;

  for (let i = 0; i < 500; i++) {
    if (num === 1) return (answer = i);
    num = num % 2 == 0 ? num / 2 : num * 3 + 1;
  }

  return (answer = -1);
}

/*
(풀이)
먼저 짝수일 때는 2로 나누어주고, 홀수일때는 3을 곱하고 1을 더해준다. 
for문을 통해 500번반복 해주고,1이될때 i을리턴
1이 나오지않는다면 -1을 리턴! 
*/
