function solution(n, m) {
  return [greatestCommonDivisor(n, m), leastCommonMultiple(n, m)];
}
//최대 공약수
function greatestCommonDivisor(num1, num2) {
  const remainder = num1 % num2;
  return num2 === 0 ? num1 : greatestCommonDivisor(num2, remainder);
}
//최소 공배수
function leastCommonMultiple(num1, num2) {
  return (num1 * num2) / greatestCommonDivisor(num1, num2);
}

/**
 * 풀이 유클리드 호제법을 이용해서 풀었다. 유클리드 호제법을 이용해서 최대 공약수를 구하는 원리는 다음과 같다.
 * 2개의 자연수(또는 정식) a, b에 대해서 a를 b로 나눈 나머지를 r이라 하면(단, a>b), a와 b의 최대공약수는 b와 r의 최대공약수와 같다.
 * 이 성질에 따라, b를 r로 나눈 나머지 r'를 구하고, 다시 r을 r'로 나눈 나머지를 구하는 과정을 반복하여 나머지가 0이 되었을 때 나누는 수가 a와 b의 최대공약수이다.
 */

/**
 * (최대 공약수 에제) gcd(77, 14) = gcd(14, 7) = gcd(7, 0) -> 최대 공약수 7
 */
