function solution(price, money, count) {
  let sum = 0;

  for (let i = 1; i <= count; i++) {
    sum += price * i;
  }

  return sum - money > 0 ? sum - money : 0;
}

function solution(price, money, count) {
  const sum = Array.from(
    { length: count },
    (_, idx) => price * (idx + 1)
  ).reduce((acc, cur) => acc + cur);

  return sum - money > 0 ? sum - money : 0;
}

/**
 * (풀이)
 * 단순히 count만큼 반복하면서 sum의 변수에 price * i를 더해준다.
 * 그리고 money - sum이 0보다 작다면 돈이 부족한 것이기 때문에 sum - money 리턴하고,
 * 그렇지 않으면 돈이 부족하지 않기때문에 0을 리턴한다.
 *
 * 두 번째 풀이는 Array.from을 이용해서 메서드 체이닝을 통해 풀었다.
 */
