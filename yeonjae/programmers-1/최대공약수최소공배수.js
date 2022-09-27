function solution(n, m) {
  const greatestFactor = (a, b) => (a % b === 0 ? b : greatestFactor(b, a % b));
  const leastMultiple = (a, b) => (a * b) / greatestFactor(a, b);

  return [greatestFactor(n, m), leastMultiple(n, m)];
}
