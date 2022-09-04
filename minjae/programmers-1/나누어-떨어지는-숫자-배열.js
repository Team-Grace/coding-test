function solution1(arr, divisor) {
  const answer = [];

  for (const num of arr) {
    if (num % divisor === 0) {
      answer.push(num);
    }
  }

  if (!answer.length) return [-1];
  return answer.sort((a, b) => a - b);
}

function solution2(arr, divisor) {
  const answer = arr
    .reduce((acc, cur) => {
      if (cur % divisor === 0) acc.push(cur);
      return acc;
    }, [])
    .sort((a, b) => a - b);

  if (!answer.length) return [-1];
  return answer;
}

/**
 * (풀이)
 * 다른거 없이 arr순회하면서 divisor와 나누어 떨어지는 숫자를 answer로 push한다.
 * 순회했음에도 불구하고 answer가 비어있다면 나누어 떨어지는 수가 없음을 의미하니 [-1]을 리턴
 * 그렇지 않으면 오름차순 정렬 후에 반환한다.
 *
 * 두 번째 풀이는 배열 메서드 중에 reduce를 활용한 문제이다
 * 단순히 배열 내에 숫자를 더하는 용도로만 reduce를 썼겠지만 이런식으로도 활용할 수 있다.
 */
