function solution(number, limit, power) {
  const nums = [];

  for (let i = 1; i <= number; i++) {
    let divisor = 0;

    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) divisor++;
    }

    nums.push(divisor + 1);
  }

  return nums.reduce((acc, cur) => {
    if (cur > limit) cur = power;

    return acc + cur;
  });
}

/**
 * 1부터 number까지 약수 개수를 확인하고, 절반까지만 반복문을 돌려야한다.
 * 이때 절반까지만 돌리는 이유는 약수가 본래의 값 제외하고 n/2보다 클 수 없기 때문..
 * j로 나누고 나머지가 0일 때 약수라면 1증가
 * 추가적으로 참고했던 풀이에서 마지막 return부분을 map과 reduce를 이용했는데 복잡해보여서
 * 다른 풀이를 참고하다가 윤우님 풀이의 마지막을 참고해서 다시 풀었다..!
 * 훨씬 이해가 쉬운 것 같다.
 */
