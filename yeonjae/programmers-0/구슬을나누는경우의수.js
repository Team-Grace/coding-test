function solution(balls, share) {
  const numerator = factorial(balls);
  const denominator = factorial(balls - share) * factorial(share);

  function factorial(n) {
    let i,
      result = BigInt(1);

    for (i = BigInt(2); i <= n; i++) {
      result *= i;
    }
    return result;
  }

  return Number(numerator / denominator);
}
