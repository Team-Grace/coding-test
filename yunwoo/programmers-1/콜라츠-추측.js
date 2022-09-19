function solution(num) {
  let result = 0;

  while (result <= 500) {
    if (num === 1) break;
    else if (num % 2 === 0) {
      result++;
      num = num / 2;
    } else if (num % 2 === 1) {
      result++;
      num = num * 3 + 1;
    }

    if (result === 500) {
      result = -1;
      break;
    }
  }

  return result;
}

/*
(풀이)
while문으로 result가 501 이 될때까지 루프를 돌리고 
짝수일때는 나누기 2 홀수일때는 곱하기 3 + 1 을 해주고
result 값이 500이 될때까지 num이 1이 되지않는다면 result에 -1을 할당하고 while문 종료
else if 로 달아줬어야하는데 따로따로 if문을 쓰니 적용이 안되서 엄청 고생했다..
*/
