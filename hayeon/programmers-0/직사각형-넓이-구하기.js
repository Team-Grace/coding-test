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
