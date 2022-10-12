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
