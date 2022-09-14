function solution(x) {
  const digitSum = String(x)
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);

  return x % digitSum === 0 ? true : false;
}

/**
 * (풀이)
 * 자릿 수의 합을 구해야하기 때문에 숫자를 문자열로 변환 후에 이를 배열로 변환하고 reduce를 통해 모든 자릿 수의 합을 구했다.
 * x와 digitSum을 나눠서 0이되면 true를 아니면 false를 반환한다.
 */
