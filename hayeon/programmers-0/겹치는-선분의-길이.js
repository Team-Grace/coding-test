function solution(lines) {
  let result = 0;
  let min = Math.min(lines[0][0], lines[1][0], lines[2][0]);
  let max = Math.max(lines[0][1], lines[1][1], lines[2][1]);

  while (min < max) {
    let count = 0;
    for (let i = 0; i < 3; i++)
      if (lines[i][0] <= min && min < lines[i][1]) count++;
    if (count > 1) result++;
    min++;
  }

  return result;
}

/**
 * 풀이
 * 혼자 생각하는게 넘 어려웠던 문제다..
 * 다른 풀이를 참고해서 풀었다.. 뭔가 더 좋은 방법이 있을거 같은데.. 잘 모르겠다.
 * 다른분들의 풀이를 같이 참고해서 다시 풀어야할 것 같다!
 */
