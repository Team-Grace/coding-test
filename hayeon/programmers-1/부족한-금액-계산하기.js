function solution(price, money, count) {
  let fee = 0;
  let result = 0;

  for (let i = 0; i <= count; i++) {
    fee += price * i;
  }
  result = fee - money;
  return result > 0 ? result : 0;
}

/*
풀이

function solution(price, money, count) {
  let fee = 0;

  for (let count = 1; count <= 2500; count++) {
    fee += price * count;
  }
  return (fee - money);

  if (money > fee) return 0;
}

처음에는 for문 안에 count를 넣어서 1씩 커지게했는데..
생각해보니 당연히 될리가 없다.... count가 몇일 줄 알고.. 저렇게 했지?
count <= 4 로 하면 테스트가 통과되지만 나머지는 절대 안된다!
그래서 다시 생각했는데 그냥 i 로 변수를 넣고 i<=count 로 지정해주면 count 까지만
for문이 반복된다는 것을 깨달았다.
노트에 순차적으로 적으면서 풀어가면 나름 풀기 괜찮았던 문제인 것 같다!

*/
