function solution(a, b) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  let denominator = b / gcd(a, b);

  while (denominator % 2 === 0) denominator /= 2;
  while (denominator % 5 === 0) denominator /= 5;

  return denominator === 1 ? 1 : 2;
}
