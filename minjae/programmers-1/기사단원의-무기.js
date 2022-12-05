function solution(number, limit, power) {
  const divisors = Array.from({ length: number }, (_, i) => getDivisor(i + 1));
  return divisors.reduce((acc, cur) => (acc += cur > limit ? power : cur), 0);
}

function getDivisor(number) {
  let result = 0;

  for (let i = 1; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      result++;

      if (i * i < number) result++;
    }
  }

  return result;
}
