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
 * 문제에 tip에 나오는 풀이대로 접근하면 되는데 주의 할 점은
 * 30! <- 이 경우 굉장히 큰 수이다. 이를 다루려면 자바스크립트에서는 BigInt 자료구조를 이용해야 한다.
 */
