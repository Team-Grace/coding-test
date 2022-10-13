function solution(n) {
  const result = [];

  primeFactorization(n, result);

  const set = new Set(result);

  return [...set];
}

const primeFactorization = (num, arr) => {
  while (num % 2 === 0) {
    num = num / 2;
    arr.push(2);
  }

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    while (num % i === 0) {
      arr.push(i);
      num = num / i;
    }
  }

  if (num > 2) arr.push(num);
};
