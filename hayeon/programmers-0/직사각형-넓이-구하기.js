function solution(dots) {
  //const width = Math.abs(dots[0][0] - dots[1][0]);
  //const height = Math.abs(dots[2][1] - dots[1][1]);

  const width = [];
  const height = [];

  for (let el of dots) {
    width.push(el[0]);
    height.push(el[1]);
  }
  return (
    (Math.max(...width) - Math.min(...width)) *
    (Math.max(...height) - Math.min(...height))
  );
}

/**
 * 풀이
 * 처음엔 쉽게 생각해서 주석처리한대로 풀었는데
 * 코드는 통과하지만 실행해보면 모두 실패가뜬다!!!!
 * 그래서 가로 세로 값을 배열에 다시 따로 담아서 풀었더니 됐다.
 * 결국에 값의 가장 큰 값과 작은 값을 빼면 한 면의 값이 나온다.
 */
