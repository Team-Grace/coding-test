function solution(dots) {
  const width = [];
  const height = [];
  let rectangleArea = 0;

  for (let i = 0; i < dots.length; i++) {
    width.push(dots[i][0]);
    height.push(dots[i][1]);

    rectangleArea =
      (Math.max(...width) - Math.min(...width)) *
      (Math.max(...height) - Math.min(...height));
  }
  return rectangleArea;
}
