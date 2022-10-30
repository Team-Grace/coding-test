function solution(array) {
  const max = Math.max(...array);
  const count = Array(max + 1).fill(0);
  array.map((el) => (count[el] += 1));

  const modeCount = Math.max(...count);
  const mode = count.filter((i) => i === modeCount);
  return mode.length !== 1 ? -1 : count.findIndex((i) => i === mode[0]);

  return count;
}

/**
 * 풀이
 * 푸는데도 오래걸리고 이해하는데도 오래걸린..문제
 * 처음에도 배열에 0을 추가하고 값을 찾을때마다 1을 추가하려고 했는데..
 * 비슷한 풀이가 있어서 참고해서 풀었다....너무 어렵다...
 */
