function solution(d, budget) {
  let answer = 0;

  d.sort((a, b) => a - b).reduce((acc, cur) => {
    acc += cur;
    if (acc <= budget) answer++;
    return acc;
  }, 0);

  return answer;
}

/**
 * (풀이)
 * 전형적인 그리디 알고리즘 문제이다. 가장 최선의 방법을 찾아서 풀이하는 방법이다.
 * 내 풀이는 우선 d배열을 정렬하고 이를 reduce를 순회하면서 매번 acc의 값이 budget보다 작다면 answer을 증가시키는 방법으로 풀었다.
 */
