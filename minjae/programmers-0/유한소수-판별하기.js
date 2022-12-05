function solution(a, b) {
  const gcd = getGreatestCommonDivisor(a, b);
  const denominator = gcd > 1 ? b / gcd : b;

  if (isFiniteDecimal(denominator)) {
    return 1;
  }
  return 2;
}

function getGreatestCommonDivisor(num1, num2) {
  const remainder = num1 % num2;
  return num2 === 0 ? num1 : getGreatestCommonDivisor(num2, remainder);
}

const isFiniteDecimal = (n) => {
  while (n % 2 === 0) {
    n /= 2;
  }

  while (n % 5 === 0) {
    n /= 5;
  }

  if (n === 1) return true;
  return false;
};
