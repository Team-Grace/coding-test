function solution(denum1, num1, denum2, num2) {
  const numerator = num1 * denum2 + num2 * denum1;
  const denominator = num1 * num2;
  const gcdValue = gcd(numerator, denominator);

  return [numerator / gcdValue, denominator / gcdValue];
}

function gcd(a, b) {
  return a % b === 0 ? b : gcd(b, a % b);
}

/*
(풀이)
구글링을 통해 수학적문제로 접근했다.
분자와 분모에게 분모의 곱을 해주고 분자와 분모의 최대공약수를 구해준 후
최대공약수로 나누어 기약분수를 반환해 주었다.
*/
