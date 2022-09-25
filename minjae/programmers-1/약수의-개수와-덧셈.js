function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    result += getDivisorCount(i) % 2 === 0 ? i : -i;
  }

  return result;
}

function getDivisorCount(num) {
  let divisorCount = 0;

  for (let i = 1; i <= num; i++) {
    if (num % i === 0) divisorCount++;
  }

  return divisorCount;
}

/**
 * (풀이)
 * getDivisorCount는 약수의 개수를 구하는 함수이다
 * solution에서 for문을 이용해 left에서 right만큼 순회 할텐데,
 * 이때 순회하는 i들의 약수 개수를 구해서 이를 짝수인지 홀수인지 판별하고 이를 result에 더할지 뺄지를 구별해서
 * 결과를 도출했다
 */
