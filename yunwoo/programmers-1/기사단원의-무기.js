function solution(number, limit, power) {
  const numberArray = [];

  for (let i = 1; i <= number; i++) {
    let divisorAmount = 0;

    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        divisorAmount++;
      }
    }

    numberArray.push(divisorAmount + 1);
  }

  return numberArray.reduce((acc, cur) => {
    if (cur > limit) cur = power;

    return acc + cur;
  });
}

/*
(풀이)
처음엔 2중 for문을 주어진 number만큼 돌렸는데 시간초과에 걸렸다.
방법이 없을까 찾아보던 중 내부 for문을 절반 만큼만 돌리고 i 가 1일 경우와
자신과 같은 수로 나눴을 때의 경우를 생각해 +1 을 넣어주니 해결.
*/
