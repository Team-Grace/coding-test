function getSlope(x1, y1, x2, y2) {
  if (x2 - x1 === 0) return 0;
  return (y2 - y1) / (x2 - x1);
}

function solution(dots) {
  const slopes = [];

  for (let i = 0; i < dots.length; i++) {
    for (let j = i + 1; j < dots.length; j++) {
      const slope = getSlope(dots[i][0], dots[i][1], dots[j][0], dots[j][1]);

      if (slopes.includes(slope)) return 1;
      slopes.push(slope);
    }
  }
  return 0;
}
