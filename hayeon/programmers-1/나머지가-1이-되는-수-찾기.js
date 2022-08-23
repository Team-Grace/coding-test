function solution(n) {
  for (i = 3; i <= n; i++) {
    if (n % i === 1) return i;
  }
}
