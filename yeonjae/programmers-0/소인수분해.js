function solution(n) {
  let result = new Set([]);

  for (let i = 2; i < n + 1; i++) {
    while (n % i === 0) {
      n /= i;
      result.add(i);
    }
  }
  return [...result];
}
