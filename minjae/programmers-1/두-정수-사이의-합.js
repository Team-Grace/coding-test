function solution1(a, b) {
  const minNum = Math.min(a, b);
  const maxNum = Math.max(a, b);
  let result = 0;

  for (let i = minNum; i <= maxNum; i++) {
    result += i;
  }

  return result;
}

function solution2(...args) {
  const [minNum, maxNum] = args.sort((a, b) => a - b);
  let result = 0;

  for (let i = minNum; i <= maxNum; i++) {
    result += i;
  }

  return result;
}

function solution3(...args) {
  const [minNum, maxNum] = args.sort((a, b) => a - b);
  const result = Array.from(
    Array(maxNum - minNum + 1),
    (_, idx) => minNum + idx
  ).reduce((acc, cur) => acc + cur);

  return result;
}

/**
 * (풀이)
 * 두 정수 사이에 큰 값과 작은 값을 구해서 이를 for문으로 돌려서 결과값을 도출했다.
 * Math.min/max를 사용해도 좋고 매개변수 a, b 따로 받는걸 그냥 ...args(spread)로 받아와서 이를 정렬 후,
 * 구조분해할당 이용해서 풀 수도 있을 것 같다.
 *
 * solution3처럼 풀이는 할 수 있지만 꽤나 비효율적인 코드이다. (시간 오래 걸림)
 *  굳이 배열 메서드로 다 푼다 그러면 가능은 하다. 하지만 비추!
 */
