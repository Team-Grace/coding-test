function solution(dots) {
  const radiansObj = {};
  let result = 0;

  for (let i = 0; i < dots.length - 1; i++) {
    const [x, y] = dots[i];

    for (let j = i + 1; j < dots.length; j++) {
      const [dx, dy] = dots[j];
      const radian = Math.floor(
        calcAngleDegrees(Math.abs(x - dx), Math.abs(y - dy))
      );

      radiansObj[radian] = (radiansObj[radian] || 0) + 1;

      if (radiansObj[radian] >= 2) {
        result++;
      }
    }
  }

  return result >= 2 ? 1 : 0;
}

function calcAngleDegrees(x, y) {
  return (Math.atan2(y, x) * 180) / Math.PI;
}
