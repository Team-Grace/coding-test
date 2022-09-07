function solution(price, money, count) {
  let result = 0;
  for (i = 1; i <= count; i++) {
    result += price * i;
  }
  return result < money ? 0 : result - money;
}

/*
  (풀이)
  for문을 돌려 result에 총 금액을 합하고 삼항연산자를 이용해 가지고있는 money 보다 크면 0
  작으면 result에 money 를 빼준값을 리턴해줬다.
  다른 좋은 방법이 있을까 고민했는데 순차적으로 올라가는 i 는 for문 밖에 없는거 같다.
  */
