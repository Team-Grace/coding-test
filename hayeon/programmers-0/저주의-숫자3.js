function solution(n) {
  let result = 0;

  for (let i = 0; i < n; i++) {
    result += 1;

    while (result.toString().split("").includes("3") || result % 3 === 0) {
      result += 1;
    }
  }
  return result;
}

/**
 * 풀이
 * 혼자 푸는데 좀 어려워서 계속 고민을 해보다가 다른 풀이를 참고해서 풀었다.
 * 여러 방식의 풀이를 보고 다양하게 풀어봤지만 이 방법이 제일 이해가 잘 됐던 것 같다..
 * 계속 숫자를 어떻게 해야하는지만 고민했는데 문자열로 바꾸고 "3"이 들어갔는지 비교하는 방법도
 * 된다는 것을 깨달았다!
 */
