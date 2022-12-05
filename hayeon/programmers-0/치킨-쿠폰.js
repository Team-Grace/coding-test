function solution(chicken) {
  let result = 0;
  let rest = 0;

  while (chicken > 1) {
    result += Math.floor(chicken / 10);
    rest += chicken % 10;
    chicken = chicken / 10;
  }
  result += Math.floor(rest / 10);
  return result;
}

/**
 * 풀이
 * 치킨을 10으로 나눈 값을 결과값에 넣고
 * 치킨 10개를 나누고 남은 나머지를 rest값에 넣는다.
 * 그리고 치킨이 1개 보다 많을때 까지 반복한다.
 * 또 결과값에 rest값을 10으로 나눈 것을 추가로 더해준다.
 */
