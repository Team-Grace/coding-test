function solution(denum1, num1, denum2, num2) {
  let numerator = num1 * denum2 + num2 * denum1;
  let denominator = num1 * num2;

  let maximum = 1;
  for (let i = 1; i <= numerator; i++) {
    if (numerator % i === 0 && denominator % i === 0) {
      maximum = i;
    }
  }
  return [numerator / maximum, denominator / maximum];
}
