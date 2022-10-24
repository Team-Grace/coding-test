function solution(sides) {
  const longSides = Math.max(...sides);
  const shortSides = Math.min(...sides);

  return getNumberOfCases(shortSides, longSides);
}

function getNumberOfCases(short, long) {
  let result = 0;

  for (let i = 1; i < short + long; i++) {
    if (long < i + short && i < short + long) result++;
  }

  return result;
}

/*
(풀이)
배열의 최대값과 최소값을 구하고
getNumberOfCases 함수에 넣어준다.
함수는 for문을 도는데 최대 + 최소값을 합친만큼 돌고
조건은 주어진 long보다 i+short이 크고 i는 short+long 보다 작은 경우에만 result++을 해주고
반복문 종료 후 result를 리턴한다.    
*/
