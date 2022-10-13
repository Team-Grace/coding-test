function solution(n) {
  const set = new Set();
  let factor = 2;

  while (n > 1 || factor <= Math.sqrt(n)) {
    if (n % factor === 0) {
      n /= factor;
      set.add(factor);
    } else {
      factor++;
    }
  }
  return [...set];
}

// 연산 최적화 풀이
const solution2 = (n) => {
  const set = new Set();

  while (n % 2 === 0) {
    set.add(2);
    n /= 2;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    while (n % i === 0) {
      set.add(i);
      n /= i;
    }
  }

  if (n > 2) set.add(n);
  return [...set];
};
