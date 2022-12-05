function solution(balls, share) {
  const numerator = factorial(balls);
  const denominator = factorial(balls - share) * factorial(share);

  return Number(numerator / denominator);
}

function factorial(num) {
  let result = BigInt(1);

  for (let i = BigInt(num); i > 1; i--) {
    result *= i;
  }

  return result;
}

/**
 * 풀이
 * 조합 으로 풀어도 안되서.. 민재님 코드를 참고했다.
 * BigInt 라는 것을 사용해야 되는 건 처음 알았다.. > 무조건 정리해 둘 것!
 * BigInt를 사용하니 풀이가 더 쉬워지고 이해가 된다.
 * num 이라는 공간에 balls와 share를 넣으면 순서대로 곱해주게 된다!
 * 만약 balls = 3이면 result에 3, 2 를 차례대로 곱해준다. (i-- 이유)
 */
