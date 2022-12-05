function solution(a, b) {
  const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

  let denominator = b / gcd(a, b);

  while (denominator % 2 === 0) denominator /= 2;
  while (denominator % 5 === 0) denominator /= 5;

  return denominator === 1 ? 1 : 2;
}

/**
 * 풀이
 * 어려워서 이것저것 해보다가 최대공약수랑 다른분들의 코드를 참고해서 겨우 풀었다.
 * 처음엔 최대공약수를 만드는 함수를 만들고 해보려고 했는데.. 뭔가 더 어려웠더 것 같다.
 * 일단 최대공약수를 만들고, 분모를 최대공약수로 나눠준다.
 * 그값을 2와 5로 나눠서 1이 되면 유한소수로 판별한다.
 */
