function solution(price, money, count) {
  let totalPlayFee = 0;
  let leftMoney;

  for (let i = 1; i <= count; i++) {
    totalPlayFee += price * i;
    leftMoney = money - totalPlayFee;
  }

  if (leftMoney < 0) return Math.abs(leftMoney);
  else return 0;
}

/*
(풀이)
오늘 문제는 꽤 재밌고, level1문제스러워서 금방푼것같다!

먼저 전체가지고있는 money에서 내가이용한 금액을 빼주어야하기때문에
for문을 돌면서 count만큼 price에 곱해서 그 합을 totalPlayFee에 넣어주었다

leftMoney는 내가 가진돈에서 이용요금의 합을 뺀 남은 돈이며
left가 양수면 모자란돈이 없기때문에 0을,
음수면 부호를 뺀 만큼 모자라기때문에 Math.abs함수를 통해 부호를바꿔서 return해주었다 
*/
