function solution(n) {
  let result = 0;

  for (let i = 2; i <= n; i++) {
    if (checkDecimals(i)) {
      result++;
    }
  }
  return result;
}

function checkDecimals(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

/**
 * (풀이 설명)
 * 1부터 입력받은 숫자 n사이에 소수의 개수를 반환하는 문제이다.
 * 따라서 첫번째 for문에서 2부터 n까지 순회하면서 소수인지 검증한다. 이때, 1은 소수가 아니므로 제외한다.
 * for문을 돌리면서 checkDecimals를 호출하는데, 여기서도 for문을 통해 나누어 떨어지는지 검증한다.
 * 이때 제곱근까지 나누어 떨어지지 않으면 해당 숫자는 소수이기 때문에 Math.sqrt()를 통해 제곱근까지만 나눠서 반복하는 횟수를 줄여줘야 한다.
 * 예1) 5 같은 경우 5의 제곱근은 2.xx인데 3과 4는 어차피 안나눠짐 의미없기 때문에 생략
 * 예2) 9 같은 경우 9의 제곱곱은 3인데 3 이후로 4 ~ 8은 안나눠짐 의미없음
 */
