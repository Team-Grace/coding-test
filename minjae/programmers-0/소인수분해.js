function solution(n) {
  const set = new Set();
  let factor = 2;

  while (n > 1) {
    if (n % factor === 0) {
      n /= factor;
      set.add(factor);
    } else {
      factor++;
    }
  }
  return Array.from(set);
}
