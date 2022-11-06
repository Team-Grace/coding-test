function solution(denum1, num1, denum2, num2) {
  const numerator = num1 * denum2 + num2 * denum1;
  const denominator = num1 * num2;
  let divisor = 0;

  for (let i = 1; i <= numerator; i++) {
    if (numerator % i === 0 && denominator % i === 0) divisor = i;
  }

  return [numerator / divisor, denominator / divisor];
}

/**
 * 풀이
 * 처음엔 최대공약수와 최소공배수를 구해서 구해보려고 했는데 뭔가 더 복잡해지는 기분이 들었다.
 * 분모는 두 값의 최소공배수인데 분자에 다시 분모의 수만큼 곱해줘야하는데 그과정이 쉽지않았다.
 * 어쨌든 기약분수는 분모와 분자가 1이외에 공약수가 없는 분수이고..
 * 분모 분자를 더이상 나눌 수 없을때까지 같은수로 나눠줘야 하므로
 * 공통되는 i를 찾고 그것을 분모 분자에 나눠주면 값이 나온다.
 */
