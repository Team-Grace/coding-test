function solution(number, limit, power) {
  const numbersArr = [];

  for (let current = 1; current <= number; current++) {
    let divisor = 0;

    for (let i = 1; i <= current / 2; i++) {
      if (current % i === 0) {
        divisor += 1;
      }
    }

    numbersArr.push(divisor + 1);
  }

  return numbersArr
    .map((n) => {
      return n > limit ? power : n;
    })
    .reduce((acc, cur) => acc + cur, 0);
}
